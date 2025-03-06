'use client'

import dynamic from 'next/dynamic'

// Use dynamic import with no SSR for the Three.js component
const NetworkBackground = dynamic(
  () => import("@/components/NetworkBackground"),
  { ssr: true }
);

export default function BackgroundWrapper() {
  return <NetworkBackground />
} 