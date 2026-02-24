import Link from "next/link"

export default function DocsPage() {
  const links = [
    { href: "/docs/gtm", label: "GTM Strategy", description: "Go-to-market plan and channels" },
    { href: "/docs/marketing", label: "Marketing Plan", description: "Positioning, content, and KPIs" },
    { href: "/pitch", label: "Pitch Deck", description: "Investor presentation" },
  ]

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#1E3A5F" }}>
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 
          className="text-4xl font-bold mb-12 text-center"
          style={{ color: "#F59E0B" }}
        >
          Protocol Pad Documentation
        </h1>
        
        <div className="space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block p-6 rounded-lg border transition-all hover:scale-[1.02]"
              style={{ 
                backgroundColor: "rgba(255,255,255,0.05)",
                borderColor: "rgba(245,158,11,0.3)"
              }}
            >
              <h2 
                className="text-xl font-semibold mb-2"
                style={{ color: "#F59E0B" }}
              >
                {link.label}
              </h2>
              <p className="text-gray-300">{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
