'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Points } from '@react-three/drei'
import * as THREE from 'three'

function NetworkPoints() {
  const pointsRef = useRef<THREE.Points>(null)
  const lineSegmentsRef = useRef<THREE.LineSegments>(null)
  const particlesCount = 300
  const maxDistance = 2.0 // Maximum distance for connections

  // Generate random points
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < particlesCount; i++) {
      const x = (Math.random() - 0.5) * 10
      const y = (Math.random() - 0.5) * 10
      const z = (Math.random() - 0.5) * 10
      temp.push({ x, y, z, vx: Math.random() * 0.005 - 0.0025, vy: Math.random() * 0.005 - 0.0025, vz: Math.random() * 0.005 - 0.0025 })
    }
    return temp
  }, [])

  // Create the Float32Array for particles
  const positions = useMemo(() => new Float32Array(particlesCount * 3), [])
  const colors = useMemo(() => new Float32Array(particlesCount * 3), [])

  // Line segments for connections
  const linePositions = useMemo(() => new Float32Array(particlesCount * particlesCount * 6), [])
  const lineColors = useMemo(() => new Float32Array(particlesCount * particlesCount * 6), [])

  // Animation loop
  useFrame(() => {
    if (!pointsRef.current || !lineSegmentsRef.current) return

    // Update particles positions
    let index = 0
    let lineIndex = 0
    let connectionCount = 0

    for (let i = 0; i < particlesCount; i++) {
      // Update position with velocity
      particles[i].x += particles[i].vx
      particles[i].y += particles[i].vy
      particles[i].z += particles[i].vz

      // Boundary check and bounce
      if (Math.abs(particles[i].x) > 5) particles[i].vx *= -1
      if (Math.abs(particles[i].y) > 5) particles[i].vy *= -1
      if (Math.abs(particles[i].z) > 5) particles[i].vz *= -1

      // Update position
      positions[index] = particles[i].x
      positions[index + 1] = particles[i].y
      positions[index + 2] = particles[i].z

      // Create a gradient color based on position
      colors[index] = 0.5 + particles[i].x / 10     // R
      colors[index + 1] = 0.5 + particles[i].y / 10 // G
      colors[index + 2] = 0.8                      // B

      index += 3
    }

    // Create connections between close points
    connectionCount = 0
    for (let i = 0; i < particlesCount; i++) {
      for (let j = i + 1; j < particlesCount; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dz = particles[i].z - particles[j].z
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

        if (distance < maxDistance) {
          // First point
          linePositions[lineIndex] = particles[i].x
          linePositions[lineIndex + 1] = particles[i].y
          linePositions[lineIndex + 2] = particles[i].z

          // Second point
          linePositions[lineIndex + 3] = particles[j].x
          linePositions[lineIndex + 4] = particles[j].y
          linePositions[lineIndex + 5] = particles[j].z
          
          // Colors for both vertices of the line
          lineColors[lineIndex] = 0.2      // R
          lineColors[lineIndex + 1] = 0.5  // G
          lineColors[lineIndex + 2] = 0.8  // B
          
          lineColors[lineIndex + 3] = 0.2  // R
          lineColors[lineIndex + 4] = 0.5  // G
          lineColors[lineIndex + 5] = 0.8  // B

          lineIndex += 6
          connectionCount += 1
        }
      }
    }

    // Update geometry
    if (pointsRef.current.geometry.attributes.position) {
      pointsRef.current.geometry.attributes.position.needsUpdate = true
      pointsRef.current.geometry.attributes.color.needsUpdate = true
    }

    // Update line segments
    if (lineSegmentsRef.current.geometry.attributes.position) {
      lineSegmentsRef.current.geometry.setDrawRange(0, connectionCount * 2)
      lineSegmentsRef.current.geometry.attributes.position.needsUpdate = true
      lineSegmentsRef.current.geometry.attributes.color.needsUpdate = true
    }
  })

  return (
    <>
      <Points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.07}
          vertexColors
          alphaTest={0.5}
          transparent
        />
      </Points>
      
      <lineSegments ref={lineSegmentsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[lineColors, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial attach="material" vertexColors transparent opacity={0.5} />
      </lineSegments>
    </>
  )
}

export default function NetworkBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-background to-background/90">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <NetworkPoints />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate rotateSpeed={0.3} autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
} 