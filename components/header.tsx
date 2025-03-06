"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
    // const pathname = usePathname()
    
    return (
        <header className="py-4 w-full">
            <div className="container flex justify-center items-center gap-6">
                <nav className="flex items-center gap-4">
                    <Link
                        href="/"
                        className={cn(buttonVariants({ variant: "ghost" }), "font-medium")}
                    >
                        Home
                    </Link>
                    <Link
                        href="/projects"
                        className={cn(buttonVariants({ variant: "ghost" }), "font-medium")}
                    >
                        Projects
                    </Link>
                    <Link
                        href="/cv"
                        className={cn(buttonVariants({ variant: "ghost" }), "font-medium")}
                    >
                        CV
                    </Link>
                    <Link
                        href="/contact"
                        className={cn(buttonVariants({ variant: "ghost" }), "font-medium")}
                    >
                        Contact
                    </Link>
                    <Link
                        href="/anonymous-feedback"
                        className={cn(buttonVariants({ variant: "ghost" }), "font-medium")}
                    >
                        Anonymous Feedback
                    </Link>
                </nav>
            </div>
        </header>
    )
}