import Link from "next/link"
import Image from "next/image"
import { FaLinkedin } from "react-icons/fa"

export default function Footer() {
    return (
        <div className="py-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <Link 
                href="https://linkedin.com/in/maxim-afteniy" 
                target="_blank"
                className="hover:text-primary transition-colors"
            >
                <FaLinkedin size={24} />
            </Link>
            
            <div className="hidden sm:block h-4 w-px bg-border" />
            
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
                Created with
                <Image
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={70}
                    height={16}
                    priority
                    className="max-w-[50px] sm:max-w-none w-auto"
                />
            </div>
        </div>
    )
}