import Link from "next/link"
import { Logo } from "@/components/ui/logo"

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-text-muted text-sm">
              AI-powered protocol generator for functional medicine practitioners.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-text-muted hover:text-accent transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-text-muted hover:text-accent transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-text-muted hover:text-accent transition-colors text-sm">
                  Login
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-text-muted hover:text-accent transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <span className="text-text-muted text-sm">Careers</span>
              </li>
              <li>
                <span className="text-text-muted text-sm">Press</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-text-muted hover:text-accent transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-text-muted hover:text-accent transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-text-muted text-sm text-center">
            © {new Date().getFullYear()} ProtocolAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
