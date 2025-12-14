"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              Portfolio
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="#about"
              className="block text-sm text-foreground/70 hover:text-foreground transition-colors py-2"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="block text-sm text-foreground/70 hover:text-foreground transition-colors py-2"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="block text-sm text-foreground/70 hover:text-foreground transition-colors py-2"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
