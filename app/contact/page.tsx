import React from 'react';
import TextContainer from '@/components/TextContainer';

export const metadata = {
  title: 'Contact | Max Afteniy',
  description: 'Get in touch with Max Afteniy',
}

export default function ContactPage() {
  return (
    <main className="container py-12 flex flex-col items-center">
      <TextContainer className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
        <p className="text-lg max-w-3xl">Feel free to reach out if you&apos;d like to connect or discuss opportunities.</p>
      </TextContainer>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
        <TextContainer className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
            <p className="text-muted-foreground">The best ways to reach me:</p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Email: maxim.afteniy ( at ) gmail.com</span>
              {/* <span>maxim.afteniy\< at \> gmail.com</span> */}
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <a href="https://www.linkedin.com/in/maxim-afteniy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn</a>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <a href="https://github.com/maxmax1992" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub</a>
            </div>
          </div>
        </TextContainer>
        
        <TextContainer>
          <h2 className="text-2xl font-semibold mb-4">Or send a message</h2>
          <p className="text-muted-foreground mb-4">Coming soon...</p>
        </TextContainer>
      </div>
    </main>
  );
} 