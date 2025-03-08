import type { Metadata, Viewport } from "next";
import { Separator } from "@/components/ui/separator"

import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import BackgroundWrapper from "@/components/BackgroundWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Max Afteniy | Portfolio",
  description: "Personal website and portfolio of Max Afteniy",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`} suppressHydrationWarning
      >
        {/* 3D Network Background */}
        <BackgroundWrapper />
        
        <div className="w-full mx-auto min-h-screen flex flex-col m-0">
          <div className="flex-none backdrop-blur-xs bg-background/2 z-10">
            <Header />
            <Separator />
          </div>

          <main className="flex-1 flex items-center justify-center p-4 sm:p-6 m-0">
            {children}
          </main>
          
          <div className="flex-none backdrop-blur-xs bg-background/2 z-10">
            <Separator />
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
