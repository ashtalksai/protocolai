"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  Target, 
  FileText,
  ChevronRight, 
  Calendar, 
  CheckCircle2,
  Megaphone,
  Users,
  MessageSquare,
  BarChart3,
  Palette,
  Type,
  Layers,
  Box,
  Presentation,
  ExternalLink,
  Download,
  Image as ImageIcon,
  Sparkles
} from "lucide-react"

type Section = "gtm" | "marketing" | "brand" | "assets"

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState<Section>("gtm")

  const sections = [
    { id: "gtm" as Section, label: "GTM Plan", icon: Target, description: "Go-to-market strategy" },
    { id: "marketing" as Section, label: "Marketing Plan", icon: Megaphone, description: "Positioning & KPIs" },
    { id: "brand" as Section, label: "Brand Spec", icon: Palette, description: "Design system" },
    { id: "assets" as Section, label: "Assets", icon: Sparkles, description: "Brand assets & downloads" },
  ]

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#1E3A5F] flex items-center justify-center">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-[#1E3A5F]">Protocol Pad</span>
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-[#1E3A5F] font-medium">Documentation</span>
            </div>
            
            <Link 
              href="/" 
              className="text-[#1E3A5F] hover:text-[#F59E0B] font-medium transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto border-r border-gray-200 bg-white">
          <nav className="p-4 space-y-1">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-3">
              Documentation
            </div>
            
            {sections.map((section) => {
              const Icon = section.icon
              const isActive = activeSection === section.id
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-3 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                    isActive 
                      ? "bg-[#1E3A5F] text-white" 
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "text-[#F59E0B]" : "text-gray-400"}`} />
                  <div>
                    <span className="font-medium block">{section.label}</span>
                    <span className={`text-xs ${isActive ? "text-white/70" : "text-gray-400"}`}>
                      {section.description}
                    </span>
                  </div>
                </button>
              )
            })}
            
            {/* Pitch Deck - External Link */}
            <Link
              href="/pitch"
              className="w-full text-left px-3 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-100 text-gray-700 transition-colors"
            >
              <Presentation className="w-5 h-5 text-gray-400" />
              <div className="flex-1">
                <span className="font-medium block">Pitch Deck</span>
                <span className="text-xs text-gray-400">Investor presentation</span>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </Link>
          </nav>
        </aside>

        {/* Mobile Navigation */}
        <div className="md:hidden sticky top-16 z-40 bg-white border-b border-gray-200 w-full">
          <div className="flex overflow-x-auto p-2 gap-2">
            {sections.map((section) => {
              const isActive = activeSection === section.id
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-colors ${
                    isActive 
                      ? "bg-[#1E3A5F] text-white" 
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {section.label}
                </button>
              )
            })}
            <Link
              href="/pitch"
              className="px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium bg-gray-100 text-gray-700 flex items-center gap-1"
            >
              Pitch Deck <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 min-w-0 px-6 py-12 md:px-12">
          {activeSection === "gtm" && <GTMContent />}
          {activeSection === "marketing" && <MarketingContent />}
          {activeSection === "brand" && <BrandContent />}
          {activeSection === "assets" && <AssetsContent />}
        </main>
      </div>
    </div>
  )
}

function GTMContent() {
  return (
    <div>
      {/* Title */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-[#1E3A5F] flex items-center justify-center">
          <Target className="w-6 h-6 text-[#F59E0B]" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-[#1E3A5F]">Go-to-Market Plan</h1>
          <p className="text-gray-500">Channels, Timeline & Budget</p>
        </div>
      </div>

      {/* Key Targets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div className="bg-[#1E3A5F] text-white rounded-xl p-6 text-center">
          <div className="text-[#F59E0B] font-mono text-sm">Launch</div>
          <div className="text-3xl font-bold">Q1 2026</div>
        </div>
        <div className="bg-[#F59E0B] text-white rounded-xl p-6 text-center">
          <div className="text-white/80 font-mono text-sm">Day 1 Target</div>
          <div className="text-3xl font-bold">10 signups</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
          <div className="text-[#F59E0B] font-mono text-sm">Month 1 Goal</div>
          <div className="text-3xl font-bold text-[#1E3A5F]">280 signups</div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-12">
        <h3 className="font-semibold text-[#1E3A5F] mb-6 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[#F59E0B]" />
          90-Day Launch Timeline
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { phase: "Week 1", title: "Soft Launch", items: ["First Facebook posts", "2 webinars", "LinkedIn Campaign 1"], highlight: true },
            { phase: "Month 1", title: "Ramp Up", items: ["8 webinars total", "3 FB posts/week", "LinkedIn Campaign 2"] },
            { phase: "Month 2", title: "Optimize", items: ["Scale winning channels", "Testimonial ads", "SEO content"] },
            { phase: "Month 3", title: "Expand", items: ["Podcast tours", "Partner webinars", "Affiliate program"] },
          ].map((phase, i) => (
            <div key={i} className={`border-l-4 ${phase.highlight ? "border-[#F59E0B]" : "border-[#1E3A5F]"} pl-4`}>
              <div className="font-mono text-sm text-[#F59E0B] mb-1">{phase.phase}</div>
              <div className="font-semibold text-[#1E3A5F] mb-3">{phase.title}</div>
              <ul className="space-y-2 text-sm text-gray-600">
                {phase.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Channel Strategy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold text-[#1E3A5F] mb-4">Budget Allocation</h3>
          <div className="space-y-4">
            {[
              { channel: "LinkedIn Ads", pct: 60, label: "$1,200/mo" },
              { channel: "Webinars", pct: 25, label: "$500/mo" },
              { channel: "SEO/Content", pct: 15, label: "$300/mo" },
              { channel: "Facebook Groups", pct: 5, label: "Organic" },
            ].map((ch, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">{ch.channel}</span>
                  <span className="text-gray-500">{ch.label}</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#1E3A5F] to-[#F59E0B] rounded-full" style={{ width: `${ch.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-[#1E3A5F]">Total Monthly</span>
              <span className="text-2xl font-mono font-bold text-[#F59E0B]">$2,000</span>
            </div>
          </div>
        </div>

        <div className="bg-[#1E3A5F] text-white rounded-xl p-6">
          <h3 className="font-semibold mb-4">Expected Results (30 Days)</h3>
          <div className="space-y-4">
            {[
              { channel: "Facebook Groups", signups: "50-100", cac: "$0" },
              { channel: "LinkedIn Ads", signups: "100", cac: "$20" },
              { channel: "Webinars", signups: "80", cac: "$6" },
              { channel: "Organic/SEO", signups: "50", cac: "$0" },
            ].map((ch, i) => (
              <div key={i} className="flex justify-between items-center py-2 border-b border-white/20 last:border-0">
                <span>{ch.channel}</span>
                <div className="text-right">
                  <div className="font-mono text-[#F59E0B]">{ch.signups}</div>
                  <div className="text-xs text-white/60">CAC: {ch.cac}</div>
                </div>
              </div>
            ))}
            <div className="pt-4 border-t border-white/40">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total Signups</span>
                <span className="text-2xl font-bold text-[#F59E0B]">280-330</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Milestones */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { period: "Week 1", signups: "30", mrr: "$500", dark: false },
          { period: "Month 1", signups: "280", mrr: "$4,200", dark: true },
          { period: "Month 3", signups: "800", mrr: "$12,000", dark: false },
          { period: "Month 6", signups: "2,000", mrr: "$30,000", amber: true },
        ].map((milestone, i) => (
          <div 
            key={i} 
            className={`rounded-xl p-6 ${
              milestone.amber 
                ? "bg-[#F59E0B] text-white" 
                : milestone.dark 
                  ? "bg-[#1E3A5F] text-white" 
                  : "bg-white border border-gray-200"
            }`}
          >
            <div className="font-mono text-sm opacity-70 mb-2">{milestone.period}</div>
            <div className="text-3xl font-bold mb-1">{milestone.mrr}</div>
            <div className="text-sm opacity-70">MRR</div>
            <div className="mt-4 pt-4 border-t border-current/20">
              <div className="text-sm opacity-70">Signups</div>
              <div className="font-mono font-bold">{milestone.signups}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MarketingContent() {
  return (
    <div>
      {/* Title */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-[#1E3A5F] flex items-center justify-center">
          <Megaphone className="w-6 h-6 text-[#F59E0B]" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-[#1E3A5F]">Marketing Plan</h1>
          <p className="text-gray-500">Positioning, Content & KPIs</p>
        </div>
      </div>

      {/* Positioning Statement */}
      <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2D4A6F] text-white rounded-2xl p-8 mb-12">
        <h2 className="text-xl font-semibold mb-6">Positioning Statement</h2>
        <div className="space-y-3 text-lg max-w-3xl">
          <p><span className="text-[#F59E0B] font-semibold">For</span> functional medicine practitioners</p>
          <p><span className="text-[#F59E0B] font-semibold">Who</span> spend 3-4 hours per patient on protocol creation</p>
          <p><span className="text-[#F59E0B] font-semibold">Protocol Pad</span> is an AI-powered platform</p>
          <p><span className="text-[#F59E0B] font-semibold">That</span> generates personalized treatment protocols in minutes</p>
          <p><span className="text-[#F59E0B] font-semibold">Unlike</span> generic templates or manual research</p>
          <p><span className="text-[#F59E0B] font-semibold">We</span> combine clinical intelligence with your expertise</p>
        </div>
        <div className="mt-8 pt-6 border-t border-white/30">
          <p className="text-2xl font-medium text-[#F59E0B]">
            &quot;Generate Functional Medicine Protocols in Minutes, Not Hours&quot;
          </p>
        </div>
      </div>

      {/* Persona + Messaging */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold text-[#1E3A5F] mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-[#F59E0B]" />
            Target Persona
          </h3>
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A5F] to-[#F59E0B] rounded-full flex items-center justify-center text-white text-2xl font-bold">
              SM
            </div>
            <div>
              <h4 className="font-semibold text-lg">Dr. Sarah Mitchell</h4>
              <p className="text-gray-500">Functional Medicine Practitioner</p>
            </div>
          </div>
          <div className="space-y-4 text-sm">
            <div>
              <span className="font-semibold text-[#1E3A5F]">Demographics:</span>
              <p className="text-gray-600">35-55 years old, solo practice or small clinic, $100K-$500K revenue</p>
            </div>
            <div>
              <span className="font-semibold text-[#1E3A5F]">Pain Points:</span>
              <ul className="text-gray-600 mt-1 space-y-1">
                <li>• 3-4 hours per patient on admin work</li>
                <li>• Isolated practice, no shared intelligence</li>
                <li>• Keeping up with latest research</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-[#1E3A5F] flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#F59E0B]" />
            Messaging Pillars
          </h3>
          <div className="bg-white border-l-4 border-[#F59E0B] rounded-r-xl p-5 shadow-sm">
            <h4 className="font-bold text-[#1E3A5F] mb-2">⚡ Speed</h4>
            <p className="text-gray-600 text-sm">&quot;3 minutes, not 3 hours&quot;</p>
          </div>
          <div className="bg-[#1E3A5F] text-white rounded-xl p-5">
            <h4 className="font-bold mb-2">🧠 Intelligence</h4>
            <p className="text-white/80 text-sm">&quot;AI trained on functional medicine&quot;</p>
          </div>
          <div className="bg-white border-l-4 border-[#1E3A5F] rounded-r-xl p-5 shadow-sm">
            <h4 className="font-bold text-[#1E3A5F] mb-2">🎯 Control</h4>
            <p className="text-gray-600 text-sm">&quot;You&apos;re still the expert&quot;</p>
          </div>
        </div>
      </div>

      {/* Brand Voice */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            DO
          </h3>
          <ul className="space-y-3 text-green-900 text-sm">
            <li className="flex gap-3">
              <span className="text-green-500">✓</span>
              <div>
                <p className="font-medium">Be empathetic</p>
                <p className="text-green-700">&quot;We know protocol work takes forever...&quot;</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-green-500">✓</span>
              <div>
                <p className="font-medium">Use clinical language</p>
                <p className="text-green-700">&quot;Evidence-based protocols&quot; not &quot;AI magic&quot;</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-green-500">✓</span>
              <div>
                <p className="font-medium">Respect expertise</p>
                <p className="text-green-700">&quot;Augment your practice&quot; not &quot;replace you&quot;</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center text-xs">✕</span>
            DON&apos;T
          </h3>
          <ul className="space-y-3 text-red-900 text-sm">
            <li className="flex gap-3">
              <span className="text-red-500">✕</span>
              <div>
                <p className="font-medium">Oversell AI</p>
                <p className="text-red-700">Avoid &quot;revolutionary&quot; or &quot;groundbreaking&quot;</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-red-500">✕</span>
              <div>
                <p className="font-medium">Be dismissive</p>
                <p className="text-red-700">Never imply their current process is &quot;wrong&quot;</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-red-500">✕</span>
              <div>
                <p className="font-medium">Use hype language</p>
                <p className="text-red-700">&quot;10x&quot; or &quot;game-changer&quot; sounds scammy</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* KPIs */}
      <div className="bg-[#1E3A5F] text-white rounded-xl p-6">
        <h3 className="font-semibold mb-6 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-[#F59E0B]" />
          KPIs & Tracking
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { category: "Awareness", metrics: [{ name: "Website visitors", target: "5K/mo" }, { name: "Social followers", target: "500" }, { name: "Webinar registrations", target: "200/mo" }] },
            { category: "Acquisition", metrics: [{ name: "Free signups", target: "280/mo" }, { name: "Cost per signup", target: "<$10" }, { name: "Email subscribers", target: "1K" }] },
            { category: "Revenue", metrics: [{ name: "Conversion rate", target: "30%" }, { name: "MRR", target: "$4,200" }, { name: "LTV:CAC ratio", target: ">3:1" }] },
          ].map((group, i) => (
            <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-4">
              <h4 className="font-semibold text-[#F59E0B] mb-3 text-sm">{group.category}</h4>
              <ul className="space-y-2">
                {group.metrics.map((metric, j) => (
                  <li key={j} className="flex justify-between items-center text-sm">
                    <span className="text-white/80">{metric.name}</span>
                    <span className="font-mono font-bold">{metric.target}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function BrandContent() {
  return (
    <div>
      {/* Title */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-[#1E3A5F] flex items-center justify-center">
          <Palette className="w-6 h-6 text-[#F59E0B]" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-[#1E3A5F]">Brand Spec</h1>
          <p className="text-gray-500">Design System & Guidelines</p>
        </div>
      </div>

      {/* Color Palette Hero */}
      <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2D4A6F] text-white rounded-2xl p-8 mb-12">
        <h2 className="text-xl font-semibold mb-6">Primary Brand Colors</h2>
        <div className="flex flex-wrap gap-4">
          <div className="bg-white/10 backdrop-blur rounded-xl p-4 flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-[#1E3A5F] border-2 border-white/30" />
            <div>
              <div className="font-semibold">Deep Navy</div>
              <div className="font-mono text-sm text-white/70">#1E3A5F</div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-4 flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-[#F59E0B]" />
            <div>
              <div className="font-semibold">Warm Amber</div>
              <div className="font-mono text-sm text-white/70">#F59E0B</div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-4 flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-[#FAFAFA]" />
            <div>
              <div className="font-semibold">Off-White</div>
              <div className="font-mono text-sm text-white/70">#FAFAFA</div>
            </div>
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <h3 className="font-semibold text-[#1E3A5F] mb-6 flex items-center gap-2">
          <Type className="w-5 h-5 text-[#F59E0B]" />
          Typography
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-[#FAFAFA] rounded-xl p-4">
            <div className="text-sm font-semibold text-[#F59E0B] mb-2">DISPLAY</div>
            <div className="text-2xl font-bold text-[#1E3A5F]">Inter</div>
            <p className="text-xs text-gray-500 mt-1">Headings, bold & clean</p>
          </div>
          <div className="bg-[#FAFAFA] rounded-xl p-4">
            <div className="text-sm font-semibold text-[#F59E0B] mb-2">BODY</div>
            <div className="text-2xl font-bold text-[#1E3A5F]">Inter</div>
            <p className="text-xs text-gray-500 mt-1">Body text & UI</p>
          </div>
          <div className="bg-[#FAFAFA] rounded-xl p-4">
            <div className="text-sm font-semibold text-[#F59E0B] mb-2">MONO</div>
            <div className="text-2xl font-bold text-[#1E3A5F] font-mono">JetBrains</div>
            <p className="text-xs text-gray-500 mt-1">Data & metrics</p>
          </div>
        </div>
        <div className="space-y-3">
          {[
            { name: "H1", size: "48px", sample: "Protocol Pad" },
            { name: "H2", size: "36px", sample: "Generate Protocols" },
            { name: "H3", size: "28px", sample: "AI-Powered Generation" },
            { name: "Body", size: "16px", sample: "Personalized treatment protocols for every client." },
          ].map((type, i) => (
            <div key={i} className="flex items-center gap-4 p-3 bg-[#FAFAFA] rounded-lg">
              <div className="w-12 text-center">
                <div className="font-mono text-sm text-[#F59E0B]">{type.name}</div>
                <div className="text-xs text-gray-400">{type.size}</div>
              </div>
              <div className="flex-1 text-[#1E3A5F] font-medium truncate">
                {type.sample}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spacing & Components */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold text-[#1E3A5F] mb-4 flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#F59E0B]" />
            Spacing System
          </h3>
          <div className="space-y-3">
            {[
              { name: "Section Padding", tailwind: "py-20" },
              { name: "Card Padding", tailwind: "p-6" },
              { name: "Button Padding", tailwind: "px-6 py-3" },
              { name: "Border Radius", tailwind: "rounded-xl" },
            ].map((space, i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-[#FAFAFA] rounded-lg">
                <span className="font-medium text-[#1E3A5F]">{space.name}</span>
                <code className="text-sm bg-[#1E3A5F] text-white px-2 py-1 rounded font-mono">{space.tailwind}</code>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold text-[#1E3A5F] mb-4 flex items-center gap-2">
            <Box className="w-5 h-5 text-[#F59E0B]" />
            Components
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-500 mb-2">Primary Button</p>
              <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-6 py-3 rounded-xl font-medium transition-colors">
                Start Free Trial
              </button>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-2">Secondary Button</p>
              <button className="border-2 border-[#1E3A5F] text-[#1E3A5F] px-6 py-3 rounded-xl font-medium hover:bg-[#1E3A5F]/5 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Semantic Colors */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="font-semibold text-[#1E3A5F] mb-4">Semantic Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Success", color: "#10B981" },
            { name: "Warning", color: "#F59E0B" },
            { name: "Destructive", color: "#EF4444" },
            { name: "Info", color: "#3B82F6" },
          ].map((semantic, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-[#FAFAFA] rounded-lg">
              <div className="w-10 h-10 rounded-lg" style={{ backgroundColor: semantic.color }} />
              <div>
                <div className="font-medium text-[#1E3A5F] text-sm">{semantic.name}</div>
                <div className="font-mono text-xs text-gray-500">{semantic.color}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function AssetsContent() {
  const assets = [
    {
      name: "Logo",
      description: "Primary brand logo",
      dimensions: "1500 × 750px",
      format: "PNG",
      preview: "/images/logo.png",
      downloadUrl: "/images/logo.png",
      bgColor: "#1E3A5F",
    },
    {
      name: "Favicon",
      description: "Browser tab icon",
      dimensions: "32 × 32px",
      format: "ICO / PNG",
      preview: "/favicon.ico",
      downloadUrl: "/favicon.png",
      bgColor: "#FAFAFA",
    },
    {
      name: "App Icon",
      description: "Mobile & app stores",
      dimensions: "1080 × 1080px",
      format: "PNG",
      preview: "/images/app-icon.png",
      downloadUrl: "/images/app-icon.png",
      bgColor: "#1E3A5F",
    },
    {
      name: "OG Image",
      description: "Social sharing preview",
      dimensions: "1200 × 630px",
      format: "PNG",
      preview: "/images/og-image.png",
      downloadUrl: "/images/og-image.png",
      bgColor: "#1E3A5F",
    },
    {
      name: "LinkedIn Banner",
      description: "Company page banner",
      dimensions: "1584 × 396px",
      format: "PNG",
      preview: "/images/linkedin-banner.png",
      downloadUrl: "/images/linkedin-banner.png",
      bgColor: "#1E3A5F",
    },
    {
      name: "Twitter Header",
      description: "Profile header image",
      dimensions: "1500 × 500px",
      format: "PNG",
      preview: "/images/twitter-header.png",
      downloadUrl: "/images/twitter-header.png",
      bgColor: "#1E3A5F",
    },
  ]

  return (
    <div>
      {/* Title */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-[#1E3A5F] flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-[#F59E0B]" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-[#1E3A5F]">Brand Assets</h1>
          <p className="text-gray-500">Logo, icons & social media kit</p>
        </div>
      </div>

      {/* Download All Banner */}
      <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2D4A6F] text-white rounded-2xl p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-1">Complete Asset Package</h2>
            <p className="text-white/70">All brand assets are embedded on this page — click individual download buttons below</p>
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-xl font-medium">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            Assets Ready
          </div>
        </div>
      </div>

      {/* Asset Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assets.map((asset, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
          >
            {/* Preview Area */}
            <div
              className="h-40 flex items-center justify-center p-4 relative"
              style={{ backgroundColor: asset.bgColor }}
            >
              <ImageIcon className={`w-16 h-16 ${asset.bgColor === "#FAFAFA" ? "text-[#1E3A5F]/20" : "text-white/30"}`} />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>

            {/* Info */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-[#1E3A5F]">{asset.name}</h3>
                  <p className="text-sm text-gray-500">{asset.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
                <span className="bg-gray-100 px-2 py-1 rounded font-mono">{asset.dimensions}</span>
                <span className="bg-gray-100 px-2 py-1 rounded font-mono">{asset.format}</span>
              </div>

              <a
                href={asset.downloadUrl}
                download
                className="w-full inline-flex items-center justify-center gap-2 border-2 border-[#1E3A5F] text-[#1E3A5F] px-4 py-2 rounded-lg font-medium hover:bg-[#1E3A5F] hover:text-white transition-colors text-sm"
              >
                <Download className="w-4 h-4" />
                Download
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Usage Guidelines */}
      <div className="mt-12 bg-[#FAFAFA] border border-gray-200 rounded-xl p-6">
        <h3 className="font-semibold text-[#1E3A5F] mb-4">Usage Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-[#1E3A5F]">Maintain clear space</p>
                <p className="text-sm text-gray-500">Keep minimum padding around the logo equal to the height of the &quot;P&quot;</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-[#1E3A5F]">Use on approved backgrounds</p>
                <p className="text-sm text-gray-500">White, off-white (#FAFAFA), or Deep Navy (#1E3A5F)</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full border-2 border-red-500 flex items-center justify-center text-red-500 text-xs font-bold mt-0.5 flex-shrink-0">✕</span>
              <div>
                <p className="font-medium text-[#1E3A5F]">Don&apos;t alter colors</p>
                <p className="text-sm text-gray-500">Never change the brand colors or add effects</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full border-2 border-red-500 flex items-center justify-center text-red-500 text-xs font-bold mt-0.5 flex-shrink-0">✕</span>
              <div>
                <p className="font-medium text-[#1E3A5F]">Don&apos;t distort</p>
                <p className="text-sm text-gray-500">Always maintain aspect ratio when scaling</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
