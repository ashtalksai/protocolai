"use client"

import Link from "next/link"

interface LogoProps {
  className?: string
  variant?: "default" | "white"
}

export function Logo({ className = "", variant = "default" }: LogoProps) {
  const textColor = variant === "white" ? "text-white" : "text-primary"
  const accentColor = variant === "white" ? "text-accent" : "text-accent"
  
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center`}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
          <rect x="9" y="3" width="6" height="4" rx="1" />
          <path d="M9 14l2 2 4-4" />
        </svg>
      </div>
      <span className={`text-xl font-bold ${textColor}`}>
        Protocol<span className={accentColor}>AI</span>
      </span>
    </Link>
  )
}
