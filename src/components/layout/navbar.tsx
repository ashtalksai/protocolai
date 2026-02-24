"use client"

import Link from "next/link"
import { Logo } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-text-secondary hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/pricing" className="text-text-secondary hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="/login" className="text-text-secondary hover:text-primary transition-colors">
              Login
            </Link>
            <Button asChild className="bg-accent hover:bg-accent-hover text-white">
              <Link href="/signup">Start Free Trial</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link href="/about" className="text-text-secondary hover:text-primary transition-colors px-4 py-2">
                About
              </Link>
              <Link href="/pricing" className="text-text-secondary hover:text-primary transition-colors px-4 py-2">
                Pricing
              </Link>
              <Link href="/login" className="text-text-secondary hover:text-primary transition-colors px-4 py-2">
                Login
              </Link>
              <div className="px-4">
                <Button asChild className="w-full bg-accent hover:bg-accent-hover text-white">
                  <Link href="/signup">Start Free Trial</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
