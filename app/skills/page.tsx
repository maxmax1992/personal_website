import React from 'react';

export const metadata = {
  title: 'Skills | Max Afteniy',
  description: 'Technical skills and expertise of Max Afteniy',
}

export default function SkillsPage() {
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold mb-6">My Skills</h1>
      <p className="text-lg mb-8">Here&apos;s an overview of my technical skills and expertise.</p>
      
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Programming Languages</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-primary/10 rounded-full text-primary">JavaScript</span>
            <span className="px-3 py-1 bg-primary/10 rounded-full text-primary">TypeScript</span>
            <span className="px-3 py-1 bg-primary/10 rounded-full text-primary">Python</span>
            {/* Add more skills as needed */}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Frameworks & Libraries</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-primary/10 rounded-full text-primary">React</span>
            <span className="px-3 py-1 bg-primary/10 rounded-full text-primary">Next.js</span>
            <span className="px-3 py-1 bg-primary/10 rounded-full text-primary">Tailwind CSS</span>
            {/* Add more frameworks as needed */}
          </div>
        </div>
      </div>
    </main>
  );
} 