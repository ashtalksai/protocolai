"use client"

import { Palette, Type, Layers, Layout, Box, Zap, Image, FileCode } from "lucide-react"

export default function BrandDocsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] to-[#2D4A6F] text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-[#F59E0B] mb-4">
            <Palette className="w-5 h-5" />
            <span className="text-sm font-mono uppercase tracking-wider">Brand & Design Spec</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            ProtocolAI Design System
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            Complete brand tokens, typography, components, and page specifications 
            for building the AI protocol generator for functional medicine practitioners.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur font-mono text-sm">Deep Navy #1E3A5F</span>
            <span className="px-4 py-2 bg-[#F59E0B] rounded-lg font-mono text-sm text-white">Warm Amber #F59E0B</span>
            <span className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur font-mono text-sm">Inter + JetBrains Mono</span>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 flex items-center gap-2">
            <Palette className="w-6 h-6 text-[#F59E0B]" />
            Color Palette
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Primary Colors */}
            <div>
              <h3 className="font-semibold text-[#1E3A5F] mb-4">Primary Colors</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4 bg-white rounded-xl p-4">
                  <div className="w-16 h-16 rounded-xl bg-[#1E3A5F]" />
                  <div>
                    <div className="font-semibold text-[#1E3A5F]">Deep Navy</div>
                    <div className="font-mono text-sm text-gray-500">#1E3A5F</div>
                    <div className="text-xs text-gray-400">--primary, headings, brand primary</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white rounded-xl p-4">
                  <div className="w-16 h-16 rounded-xl bg-[#F59E0B]" />
                  <div>
                    <div className="font-semibold text-[#1E3A5F]">Warm Amber</div>
                    <div className="font-mono text-sm text-gray-500">#F59E0B</div>
                    <div className="text-xs text-gray-400">--accent, CTAs, highlights</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background & Surface */}
            <div>
              <h3 className="font-semibold text-[#1E3A5F] mb-4">Background & Surface</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-200">
                  <div className="w-16 h-16 rounded-xl bg-[#FAFAFA] border border-gray-200" />
                  <div>
                    <div className="font-semibold text-[#1E3A5F]">Off-White</div>
                    <div className="font-mono text-sm text-gray-500">#FAFAFA</div>
                    <div className="text-xs text-gray-400">--background</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-200">
                  <div className="w-16 h-16 rounded-xl bg-white border border-gray-200" />
                  <div>
                    <div className="font-semibold text-[#1E3A5F]">White</div>
                    <div className="font-mono text-sm text-gray-500">#FFFFFF</div>
                    <div className="text-xs text-gray-400">--surface, cards, panels</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Text & Semantic Colors */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-[#1E3A5F] mb-4">Text Hierarchy</h3>
              <div className="bg-white rounded-xl p-6 space-y-3">
                {[
                  { name: "Primary", color: "#1A2838", desc: "Headings" },
                  { name: "Secondary", color: "#2D3748", desc: "Body text" },
                  { name: "Muted", color: "#6B7280", desc: "Labels, captions" },
                  { name: "Disabled", color: "#9CA3AF", desc: "Disabled states" },
                ].map((text, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded" style={{ backgroundColor: text.color }} />
                      <div>
                        <div className="font-medium text-[#1E3A5F]">{text.name}</div>
                        <div className="text-xs text-gray-400">{text.desc}</div>
                      </div>
                    </div>
                    <div className="font-mono text-sm text-gray-500">{text.color}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-[#1E3A5F] mb-4">Semantic Colors</h3>
              <div className="bg-white rounded-xl p-6 space-y-3">
                {[
                  { name: "Success", color: "#10B981", desc: "Positive actions" },
                  { name: "Warning", color: "#F59E0B", desc: "Caution states" },
                  { name: "Destructive", color: "#EF4444", desc: "Errors, danger" },
                  { name: "Info", color: "#3B82F6", desc: "Informational" },
                ].map((semantic, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded" style={{ backgroundColor: semantic.color }} />
                      <div>
                        <div className="font-medium text-[#1E3A5F]">{semantic.name}</div>
                        <div className="text-xs text-gray-400">{semantic.desc}</div>
                      </div>
                    </div>
                    <div className="font-mono text-sm text-gray-500">{semantic.color}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 flex items-center gap-2">
            <Type className="w-6 h-6 text-[#F59E0B]" />
            Typography
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#FAFAFA] rounded-xl p-6">
              <div className="text-sm font-semibold text-[#F59E0B] mb-2">DISPLAY</div>
              <div className="text-4xl font-bold text-[#1E3A5F] mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Inter</div>
              <p className="text-sm text-gray-500">Headings and display text. Bold, clean, professional.</p>
            </div>
            <div className="bg-[#FAFAFA] rounded-xl p-6">
              <div className="text-sm font-semibold text-[#F59E0B] mb-2">BODY</div>
              <div className="text-4xl font-bold text-[#1E3A5F] mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Inter</div>
              <p className="text-sm text-gray-500">Body text and UI elements. Readable at all sizes.</p>
            </div>
            <div className="bg-[#FAFAFA] rounded-xl p-6">
              <div className="text-sm font-semibold text-[#F59E0B] mb-2">MONO</div>
              <div className="text-4xl font-bold text-[#1E3A5F] mb-2 font-mono">JetBrains</div>
              <p className="text-sm text-gray-500">Data, metrics, code. Technical precision.</p>
            </div>
          </div>
          
          <div className="bg-[#FAFAFA] rounded-xl p-6">
            <h3 className="font-semibold text-[#1E3A5F] mb-4">Type Scale</h3>
            <div className="space-y-4">
              {[
                { name: "H1", size: "48px", weight: "Bold", sample: "Protocol Pad" },
                { name: "H2", size: "36px", weight: "Bold", sample: "Generate Protocols" },
                { name: "H3", size: "28px", weight: "Semibold", sample: "AI-Powered Generation" },
                { name: "H4", size: "20px", weight: "Semibold", sample: "Supplement Stacks" },
                { name: "Body", size: "16px", weight: "Regular", sample: "Personalized treatment protocols for every client." },
                { name: "Small", size: "14px", weight: "Regular", sample: "Created on February 24, 2026" },
              ].map((type, i) => (
                <div key={i} className="flex items-center gap-6 p-4 bg-white rounded-lg">
                  <div className="w-16 text-center">
                    <div className="font-mono text-sm text-[#F59E0B]">{type.name}</div>
                    <div className="text-xs text-gray-400">{type.size}</div>
                  </div>
                  <div className="flex-1">
                    <p 
                      className="text-[#1E3A5F]"
                      style={{ 
                        fontSize: type.size, 
                        fontWeight: type.weight === 'Bold' ? 700 : type.weight === 'Semibold' ? 600 : 400,
                        lineHeight: 1.3
                      }}
                    >
                      {type.sample}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spacing & Radius */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 flex items-center gap-2">
            <Layers className="w-6 h-6 text-[#F59E0B]" />
            Spacing & Border Radius
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-[#1E3A5F] mb-4">Spacing System</h3>
              <div className="space-y-3">
                {[
                  { name: "Section Padding", value: "80px (desktop) / 48px (mobile)", tailwind: "py-20 / py-12" },
                  { name: "Section Gap", value: "64px", tailwind: "gap-16" },
                  { name: "Card Padding", value: "24px", tailwind: "p-6" },
                  { name: "Input Padding", value: "12px 16px", tailwind: "px-4 py-3" },
                  { name: "Button Padding", value: "12px 24px", tailwind: "px-6 py-3" },
                ].map((space, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-[#FAFAFA] rounded-lg">
                    <div>
                      <div className="font-medium text-[#1E3A5F]">{space.name}</div>
                      <div className="text-xs text-gray-500">{space.value}</div>
                    </div>
                    <code className="text-sm bg-[#1E3A5F] text-white px-2 py-1 rounded font-mono">{space.tailwind}</code>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-[#1E3A5F] mb-4">Border Radius</h3>
              <div className="space-y-4">
                {[
                  { name: "Small", value: "6px", example: "rounded-md" },
                  { name: "Medium", value: "12px", example: "rounded-xl" },
                  { name: "Large", value: "16px", example: "rounded-2xl" },
                  { name: "Full", value: "9999px", example: "rounded-full" },
                ].map((radius, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div 
                      className="w-16 h-16 bg-[#1E3A5F]" 
                      style={{ borderRadius: radius.value }}
                    />
                    <div>
                      <div className="font-medium text-[#1E3A5F]">{radius.name}</div>
                      <div className="font-mono text-sm text-gray-500">{radius.value}</div>
                      <code className="text-xs bg-gray-100 px-2 py-0.5 rounded">{radius.example}</code>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 flex items-center gap-2">
            <Box className="w-6 h-6 text-[#F59E0B]" />
            Component Library
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Buttons */}
            <div className="bg-[#FAFAFA] rounded-xl p-6">
              <h3 className="font-semibold text-[#1E3A5F] mb-4">Buttons</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 mb-2">Primary (Amber)</p>
                  <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-6 py-3 rounded-xl font-medium transition-colors">
                    Start Free Trial
                  </button>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-2">Secondary (Outline)</p>
                  <button className="border-2 border-[#1E3A5F] text-[#1E3A5F] px-6 py-3 rounded-xl font-medium hover:bg-[#1E3A5F]/5 transition-colors">
                    Watch Demo
                  </button>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-2">Ghost (Text)</p>
                  <button className="text-[#1E3A5F] px-6 py-3 rounded-xl font-medium hover:bg-[#1E3A5F]/5 transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
            
            {/* Inputs */}
            <div className="bg-[#FAFAFA] rounded-xl p-6">
              <h3 className="font-semibold text-[#1E3A5F] mb-4">Inputs</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 mb-2">Default</p>
                  <input 
                    type="text" 
                    placeholder="Email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-2">With Label</p>
                  <label className="block text-sm font-medium text-[#1E3A5F] mb-1">Symptoms</label>
                  <textarea 
                    placeholder="Enter symptoms..."
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 outline-none transition-all resize-none"
                  />
                </div>
              </div>
            </div>
            
            {/* Cards */}
            <div className="bg-[#FAFAFA] rounded-xl p-6">
              <h3 className="font-semibold text-[#1E3A5F] mb-4">Cards</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-[#1E3A5F] mb-2">Card Title</h4>
                  <p className="text-gray-600 text-sm">Card content with subtle border and shadow.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border-l-4 border-[#F59E0B] shadow-sm">
                  <h4 className="font-semibold text-[#1E3A5F] mb-2">Accent Card</h4>
                  <p className="text-gray-600 text-sm">Left border accent for emphasis.</p>
                </div>
              </div>
            </div>
            
            {/* Badges */}
            <div className="bg-[#FAFAFA] rounded-xl p-6">
              <h3 className="font-semibold text-[#1E3A5F] mb-4">Badges</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md text-sm font-medium">Default</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-md text-sm font-medium">Success</span>
                <span className="px-3 py-1 bg-[#F59E0B]/10 text-[#F59E0B] rounded-md text-sm font-medium">Warning</span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-md text-sm font-medium">Destructive</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-sm font-medium">Info</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Site Map */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 flex items-center gap-2">
            <Layout className="w-6 h-6 text-[#F59E0B]" />
            Site Architecture
          </h2>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Public Pages */}
              <div>
                <h3 className="font-semibold text-[#1E3A5F] mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full" />
                  Public Pages
                </h3>
                <ul className="space-y-2 text-sm">
                  {[
                    { path: "/", name: "Landing", sections: "8+ sections" },
                    { path: "/about", name: "About", sections: "Story, Mission, Team" },
                    { path: "/pricing", name: "Pricing", sections: "Tiers, FAQ" },
                    { path: "/signup", name: "Signup", sections: "Form, OAuth" },
                    { path: "/login", name: "Login", sections: "Form, OAuth" },
                    { path: "/deck", name: "Pitch Deck", sections: "12 slides" },
                  ].map((page, i) => (
                    <li key={i} className="flex justify-between items-center p-2 bg-[#FAFAFA] rounded-lg">
                      <code className="text-[#F59E0B] font-mono">{page.path}</code>
                      <span className="text-gray-500">{page.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Dashboard */}
              <div>
                <h3 className="font-semibold text-[#1E3A5F] mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full" />
                  Dashboard (Protected)
                </h3>
                <ul className="space-y-2 text-sm">
                  {[
                    { path: "/dashboard", name: "Dashboard", sections: "Stats, Recent" },
                    { path: "/dashboard/clients", name: "Clients", sections: "List, Add" },
                    { path: "/dashboard/clients/[id]", name: "Client Detail", sections: "Info, Protocols" },
                    { path: "/dashboard/create", name: "Create Protocol", sections: "Form, Preview" },
                    { path: "/dashboard/protocols/[id]", name: "Protocol View", sections: "View, Export" },
                    { path: "/dashboard/settings", name: "Settings", sections: "Profile, Sub" },
                    { path: "/dashboard/billing", name: "Billing", sections: "Plan, History" },
                  ].map((page, i) => (
                    <li key={i} className="flex justify-between items-center p-2 bg-[#FAFAFA] rounded-lg">
                      <code className="text-[#1E3A5F] font-mono text-xs">{page.path}</code>
                      <span className="text-gray-500">{page.sections}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Docs */}
              <div>
                <h3 className="font-semibold text-[#1E3A5F] mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#F59E0B] rounded-full" />
                  Documentation
                </h3>
                <ul className="space-y-2 text-sm">
                  {[
                    { path: "/docs", name: "Docs Index", sections: "All docs" },
                    { path: "/docs/gtm", name: "GTM Plan", sections: "Launch strategy" },
                    { path: "/docs/marketing", name: "Marketing", sections: "Positioning" },
                    { path: "/docs/pitch", name: "Pitch", sections: "Investor deck" },
                    { path: "/docs/research", name: "Research", sections: "Validation" },
                    { path: "/docs/brand", name: "Brand", sections: "Design spec" },
                  ].map((page, i) => (
                    <li key={i} className="flex justify-between items-center p-2 bg-[#FAFAFA] rounded-lg">
                      <code className="text-[#F59E0B] font-mono">{page.path}</code>
                      <span className="text-gray-500">{page.sections}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animation */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 flex items-center gap-2">
            <Zap className="w-6 h-6 text-[#F59E0B]" />
            Animation & Motion
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#FAFAFA] rounded-xl p-6">
              <h3 className="font-semibold text-[#1E3A5F] mb-4">Timing Functions</h3>
              <div className="space-y-3">
                {[
                  { name: "Fast", value: "150ms", use: "Hover states, micro-interactions" },
                  { name: "Base", value: "200ms", use: "Default transitions" },
                  { name: "Slow", value: "300ms", use: "Page transitions, complex animations" },
                ].map((timing, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <div>
                      <div className="font-medium text-[#1E3A5F]">{timing.name}</div>
                      <div className="text-xs text-gray-500">{timing.use}</div>
                    </div>
                    <code className="font-mono text-sm text-[#F59E0B]">{timing.value}</code>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[#FAFAFA] rounded-xl p-6">
              <h3 className="font-semibold text-[#1E3A5F] mb-4">Framer Motion Presets</h3>
              <div className="space-y-3 font-mono text-sm">
                <div className="bg-[#1E3A5F] text-white p-4 rounded-lg overflow-x-auto">
                  <pre>{`fadeIn: {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 }
}`}</pre>
                </div>
                <div className="bg-[#1E3A5F] text-white p-4 rounded-lg overflow-x-auto">
                  <pre>{`stagger: {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assets */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 flex items-center gap-2">
            <Image className="w-6 h-6 text-[#F59E0B]" />
            Generated Assets
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "hero-ai-analysis.png", desc: "Abstract AI analyzing medical data illustration", use: "Landing hero" },
              { name: "icon-features-set.png", desc: "6 minimalist line icons for features", use: "Features section" },
              { name: "how-it-works-flow.png", desc: "3-step process flow diagram", use: "How It Works" },
              { name: "bg-grid-pattern.png", desc: "Subtle geometric grid background", use: "Hero/CTA overlays" },
            ].map((asset, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[#1E3A5F]/10 rounded-xl flex items-center justify-center">
                    <FileCode className="w-8 h-8 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <code className="font-mono text-[#F59E0B]">{asset.name}</code>
                    <p className="text-sm text-gray-600 mt-1">{asset.desc}</p>
                    <p className="text-xs text-gray-400 mt-2">Usage: {asset.use}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSS Variables */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#1E3A5F] to-[#2D4A6F] text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <FileCode className="w-6 h-6 text-[#F59E0B]" />
            CSS Variables Reference
          </h2>
          
          <div className="bg-black/30 rounded-xl p-6 overflow-x-auto">
            <pre className="font-mono text-sm text-white/90">
{`:root {
  /* Primary Palette */
  --background: #FAFAFA;
  --surface: #FFFFFF;
  --border: #E5E7EB;
  
  /* Text Hierarchy */
  --text-primary: #1A2838;
  --text-secondary: #2D3748;
  --text-muted: #6B7280;
  
  /* Brand Colors */
  --accent: #F59E0B;
  --accent-hover: #D97706;
  --primary: #1E3A5F;
  --primary-hover: #2C5282;
  
  /* Semantic */
  --success: #10B981;
  --warning: #F59E0B;
  --destructive: #EF4444;
  --info: #3B82F6;
  
  /* Shadows */
  --shadow-card: 0 1px 3px rgba(0,0,0,0.1);
  --shadow-focus: 0 0 0 3px rgba(245,158,11,0.2);
  
  /* Radius */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 16px;
  
  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-base: 200ms ease-in-out;
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#1E3A5F] text-white/60 text-center text-sm">
        <p>Protocol Pad Brand & Design Spec • February 2026</p>
        <p className="mt-2">
          <a href="https://protocolai.ashketing.com" className="text-[#F59E0B] hover:underline">
            protocolai.ashketing.com
          </a>
        </p>
      </footer>
    </div>
  )
}
