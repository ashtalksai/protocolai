"use client"

import { Sidebar } from "@/components/dashboard/sidebar"
import { useState } from "react"
import { Menu } from "lucide-react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
      
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 transform transition-transform md:hidden ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <Sidebar />
      </div>
      
      {/* Main Content */}
      <main className="md:ml-60 min-h-screen">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 bg-white border-b border-border">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-surface-hover rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>
          <span className="font-semibold text-primary">ProtocolAI</span>
          <div className="w-10" /> {/* Spacer */}
        </header>
        
        <div className="p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
