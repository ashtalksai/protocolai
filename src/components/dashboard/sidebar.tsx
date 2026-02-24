"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/ui/logo"
import { cn } from "@/lib/utils"
import { 
  LayoutDashboard, 
  Users, 
  FilePlus, 
  Settings, 
  CreditCard,
  LogOut,
  ChevronDown
} from "lucide-react"
import { useState } from "react"

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/dashboard/clients", icon: Users, label: "Clients" },
  { href: "/dashboard/create", icon: FilePlus, label: "Create Protocol" },
  { href: "/dashboard/settings", icon: Settings, label: "Settings" },
  { href: "/dashboard/billing", icon: CreditCard, label: "Billing" },
]

export function Sidebar() {
  const pathname = usePathname()
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  return (
    <aside className="fixed left-0 top-0 h-screen w-60 bg-white border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <Logo />
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== "/dashboard" && pathname.startsWith(item.href))
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                    isActive 
                      ? "bg-accent/10 text-accent border-l-4 border-accent -ml-1 pl-5" 
                      : "text-text-secondary hover:bg-surface-hover"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      
      {/* User Profile */}
      <div className="p-4 border-t border-border">
        <div className="relative">
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-surface-hover transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
              DR
            </div>
            <div className="flex-1 text-left">
              <p className="font-medium text-text-primary text-sm">Dr. Jane Doe</p>
              <span className="inline-block px-2 py-0.5 bg-accent/10 text-accent text-xs rounded-full">
                Starter
              </span>
            </div>
            <ChevronDown className={cn(
              "w-4 h-4 text-text-muted transition-transform",
              userMenuOpen && "rotate-180"
            )} />
          </button>
          
          {userMenuOpen && (
            <div className="absolute bottom-full left-0 right-0 mb-2 bg-white border border-border rounded-lg shadow-dropdown py-2">
              <Link
                href="/dashboard/settings"
                className="flex items-center gap-2 px-4 py-2 text-sm text-text-secondary hover:bg-surface-hover"
              >
                <Settings className="w-4 h-4" />
                Settings
              </Link>
              <button
                onClick={() => window.location.href = "/"}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-destructive hover:bg-surface-hover"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
