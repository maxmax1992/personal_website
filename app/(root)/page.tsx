// import Image from "next/image";

// import Footer from "@/components/footer";
// import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TextContainer from "@/components/TextContainer";

export default function Home() {
  return (
    <div className="w-full max-w-5xl px-4 py-20 relative z-10">
      <TextContainer className="flex flex-col gap-8 items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          <span className="text-primary">Max Afteniy</span>
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-medium">
          Software Developer & Engineer
        </h2>
        
        <p className="text-xl text-muted-foreground max-w-2xl">
          I create elegant solutions to complex problems. With expertise in web development, 
          I build applications that deliver exceptional user experiences.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          <Button asChild size="lg">
            <Link href="/cv">View My CV</Link>
          </Button>
          
          <Button variant="outline" asChild size="lg">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </TextContainer>
    </div>
  );
}
