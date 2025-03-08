"use client"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    // Handle window resize to detect mobile
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        
        checkIfMobile()
        window.addEventListener('resize', checkIfMobile)
        
        // Close menu when resizing to desktop
        if (!isMobile && isMenuOpen) {
            setIsMenuOpen(false)
        }
        
        return () => window.removeEventListener('resize', checkIfMobile)
    }, [isMobile, isMenuOpen])

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/cv", label: "CV" },
        { href: "/contact", label: "Contact" },
        // { href: "/anonymous-feedback", label: "Anonymous Feedback" },
    ]
    
    return (
        <header className="py-4 w-full relative z-[999] h-16">
            <div className="container mx-auto px-4 h-full">
                <div className="relative flex items-center justify-center h-full max-w-none">
                    {/* Mobile menu toggle */}
                    <button 
                        className="md:hidden p-2 z-[999] absolute left-0"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    
                    {/* Desktop navigation */}
                    <nav className="hidden md:flex items-center justify-center gap-4 w-full">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(buttonVariants({ variant: "ghost" }), "font-medium")}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    
                    {/* Mobile navigation overlay */}
                    {isMenuOpen && (
                        <div className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm z-[998] flex flex-col items-center md:hidden rounded-b-lg shadow-lg">
                            <nav className="flex flex-col items-center gap-4 py-4 w-full">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(buttonVariants({ variant: "ghost" }), "font-medium")}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}