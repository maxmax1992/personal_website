import React from 'react';
import TextContainer from '@/components/TextContainer';

export const metadata = {
  title: 'Projects | Max Afteniy',
  description: 'Portfolio of projects developed by Max Afteniy',
}

export default function ProjectsPage() {
  // This array can be used to track projects - currently only one
  const projects = [
    {
      title: "Personal Website",
      description: "A portfolio website built with Next.js and Tailwind CSS, hosted on Vercel",
      content: "This website"
    }
  ];

  return (
    <main className="container py-12 flex flex-col items-center">
      <TextContainer className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-6">My Projects</h1>
        <p className="text-lg max-w-3xl">Here are some of the projects I&apos;ve worked on. This page is under construction.</p>
      </TextContainer>
      
      <div className={`grid gap-6 w-full max-w-4xl ${projects.length === 1 ? 'place-items-center' : 'grid-cols-1 md:grid-cols-2'}`}>
        {/* Render projects dynamically */}
        {projects.map((project, index) => (
          <TextContainer key={index} className={`${projects.length === 1 ? 'max-w-md w-full' : ''}`}>
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <p>{project.content}</p>
          </TextContainer>
        ))}
      </div>
    </main>
  );
} 