import React from 'react';
import TextContainer from '@/components/TextContainer';

export const metadata = {
  title: 'Projects | Max Afteniy',
  description: 'Portfolio of projects developed by Max Afteniy',
}

export default function ProjectsPage() {
  return (
    <main className="container py-12 flex flex-col items-center">
      <TextContainer className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-6">My Projects</h1>
        <p className="text-lg max-w-3xl">Here are some of the projects I&apos;ve worked on. This page is under construction.</p>
      </TextContainer>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Project cards will go here */}
        <TextContainer>
          <h2 className="text-2xl font-semibold mb-2">Personal Website</h2>
          <p className="text-muted-foreground mb-4">A portfolio website built with Next.js and Tailwind CSS</p>
          <p>Coming soon...</p>
        </TextContainer>
      </div>
    </main>
  );
} 