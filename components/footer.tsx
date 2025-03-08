import Link from "next/link"
import { FaLinkedin, FaGithub } from "react-icons/fa"

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
            
            <Link
                href="https://github.com/maxmax1992"
                target="_blank"
                className="hover:text-primary transition-colors"
            >
                <FaGithub size={24} />
            </Link>
        </div>
    )
}