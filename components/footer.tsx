import Link from "next/link"
import Image from "next/image"
import { FaLinkedin } from "react-icons/fa"

export default function Footer() {
    return (
        <div className="py-6 flex flex-row items-center justify-center gap-8">
            <Link 
                href="https://linkedin.com/in/maxim-afteniy" 
                target="_blank"
                className="hover:text-primary transition-colors"
            >
                <FaLinkedin size={24} />
            </Link>
            
            <div className="h-4 w-px bg-border" />
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                Created with
                <Image
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={70}
                    height={16}
                    priority
                />
            </div>
        </div>
    )
}