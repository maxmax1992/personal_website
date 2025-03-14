import React from 'react';
import TextContainer from '@/components/TextContainer';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Projects | Max Afteniy',
  description: 'Portfolio of projects developed by Max Afteniy',
}

export default function ProjectsPage() {
  // This array can be used to track projects - currently only one
  const projects = [
    {
      title: "Binance websocket data saver",
      description: "A tool to save data from the Binance websocket (trade, orderbook, kline) in unified row .parquet format",
      content: "This tool uses the Binance websocket to save data to a multiple parquet files, which can be configured and merged later",
      image: "/depth_cache_managing.gif",
      github_link: "https://github.com/maxmax1992/binance_data_saver", // Example URL, replace with actual
    },
    {
      title: "Personal Website",
      description: "A portfolio website built with Next.js and Tailwind CSS, hosted on Vercel",
      content: "This website",
      // image: "/vercel.svg", // Using the Vercel logo for the personal website
      github_link: "https://github.com/maxmax1992/personal_website", // Example URL, replace with actual
    },
  ];

  return (
    <div className="w-full max-w-5xl px-4 py-20 relative z-[5] flex flex-col items-center">
      <TextContainer className="flex flex-col gap-8 items-center text-center">
        <h1 className="text-4xl font-bold mb-6">My Projects</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Here are some of the personal projects I&apos;ve worked on my free time.
        </p>
      </TextContainer>
      
      <div className="mt-12 grid gap-6 w-full place-items-center">
        {/* Render projects dynamically */}
        {projects.map((project, index) => (
          <TextContainer key={index} className="w-full relative">
            {/* Desktop Code link - positioned at top right */}
            {project.github_link && (
              <Link 
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 text-blue-500 underline font-mono hover:text-blue-700 transition-colors hidden md:inline-block text-sm"
                aria-label={`View code for ${project.title}`}
              >
                &lt;Code/&gt;
              </Link>
            )}
            
            {/* Container that's column on mobile, row on larger screens */}
            <div className={`flex flex-col md:flex-row gap-4 items-center ${project.image ? 'md:items-start' : 'md:items-center'} justify-center`}>
              {/* Image container - first in DOM for accessibility, but displayed after content on mobile */}
              {project.image && (
                <div className="w-full md:w-1/3 flex justify-center order-2 md:order-1">
                  <Image 
                    src={project.image} 
                    alt={`${project.title} preview`}
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              )}
              
              {/* Content container - second in DOM but displayed first on mobile */}
              <div className={`w-full ${project.image ? 'md:w-2/3' : 'md:max-w-2xl'} flex flex-col items-center ${project.image ? 'md:items-start md:text-left' : 'text-center'} order-1 md:order-2`}>
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <p>{project.content}</p>
              </div>
            </div>
            
            {/* Mobile Code link - as flex item */}
            {project.github_link && (
              <div className="flex justify-center mt-4 md:hidden">
                <Link 
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline font-mono hover:text-blue-700 transition-colors"
                  aria-label={`View code for ${project.title}`}
                >
                  &lt;Code/&gt;
                </Link>
              </div>
            )}
          </TextContainer>
        ))}
      </div>
    </div>
  );
} 