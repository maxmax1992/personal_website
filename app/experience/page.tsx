import React from 'react';

export const metadata = {
  title: 'Experience | Max Afteniy',
  description: 'Professional experience and work history of Max Afteniy',
}

export default function ExperiencePage() {
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Professional Experience</h1>
      <p className="text-lg mb-8">My professional journey and work experience.</p>
      
      <div className="space-y-10">
        <div className="border-l-4 pl-6 py-2 border-primary relative">
          <div className="absolute w-4 h-4 bg-primary rounded-full -left-[10px] top-6"></div>
          <h2 className="text-2xl font-semibold">Senior Developer</h2>
          <p className="text-muted-foreground">Example Company • 2022 - Present</p>
          <p className="mt-3">
            Led development of key features and mentored junior developers.
            Implemented modern web technologies and improved application performance.
          </p>
        </div>
        
        <div className="border-l-4 pl-6 py-2 border-primary relative">
          <div className="absolute w-4 h-4 bg-primary rounded-full -left-[10px] top-6"></div>
          <h2 className="text-2xl font-semibold">Software Engineer</h2>
          <p className="text-muted-foreground">Previous Company • 2019 - 2022</p>
          <p className="mt-3">
            Developed and maintained web applications using React, Next.js, and Node.js.
            Collaborated with design and product teams to implement new features.
          </p>
        </div>
      </div>
    </main>
  );
} 