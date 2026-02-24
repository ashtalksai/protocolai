import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "ProtocolAI - AI-Powered Protocols for Functional Medicine",
  description: "Generate personalized functional medicine protocols in minutes, not hours. AI-powered protocol builder with supplements, diet, and lifestyle recommendations.",
  keywords: ["functional medicine", "protocol generator", "AI", "supplements", "health", "practitioner tools"],
  authors: [{ name: "ProtocolAI" }],
  openGraph: {
    title: "ProtocolAI - AI-Powered Protocols for Functional Medicine",
    description: "Generate personalized functional medicine protocols in minutes, not hours.",
    type: "website",
    url: "https://protocolai.ashketing.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
