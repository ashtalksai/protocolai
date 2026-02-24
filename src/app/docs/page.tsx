"use client"

import { useState, useEffect } from "react"
import { 
  Search, 
  FileText, 
  Target, 
  Megaphone, 
  Palette, 
  Presentation,
  ChevronRight,
  ExternalLink,
  TrendingUp,
  Users,
  Calendar,
  BarChart3,
  CheckCircle2,
  Clock,
  Eye,
  MessageSquare,
  Layers,
  Type,
  Box,
  Sparkles
} from "lucide-react"
import Link from "next/link"

// Navigation items
const navItems = [
  { id: "research", label: "Research", icon: Search, description: "Problem, market, competitors", fullPage: "/docs/research" },
  { id: "gtm", label: "GTM Plan", icon: Target, description: "Channels, timeline, budget", fullPage: "/docs/gtm" },
  { id: "marketing", label: "Marketing Plan", icon: Megaphone, description: "Positioning, content, KPIs", fullPage: "/docs/marketing" },
  { id: "brand", label: "Brand Spec", icon: Palette, description: "Colors, typography, components", fullPage: "/docs/brand" },
  { id: "pitch", label: "Pitch Deck", icon: Presentation, description: "Slides content", fullPage: "/docs/pitch" },
]

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("research")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
      setActiveSection(id)
      setIsMobileMenuOpen(false)
    }
  }

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
              <span className="text-gray-600 font-medium">Documentation</span>
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <Link href="/pitch" className="text-sm text-gray-600 hover:text-[#1E3A5F] transition-colors flex items-center gap-1">
                <Presentation className="w-4 h-4" />
                Pitch Deck
                <ExternalLink className="w-3 h-3" />
              </Link>
              <Link 
                href="/" 
                className="bg-[#F59E0B] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#D97706] transition-colors"
              >
                Back to Site
              </Link>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Layers className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar - Desktop */}
        <aside className="hidden md:block w-64 shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto border-r border-gray-200 bg-white">
          <nav className="p-4 space-y-1">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-3">
              Documentation
            </div>
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-3 py-3 rounded-lg transition-all duration-200 group ${
                    isActive 
                      ? "bg-[#1E3A5F] text-white" 
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${isActive ? "text-[#F59E0B]" : "text-gray-400 group-hover:text-[#1E3A5F]"}`} />
                    <div>
                      <div className={`font-medium ${isActive ? "text-white" : ""}`}>{item.label}</div>
                      <div className={`text-xs ${isActive ? "text-white/70" : "text-gray-500"}`}>
                        {item.description}
                      </div>
                    </div>
                  </div>
                </button>
              )
            })}
          </nav>
        </aside>

        {/* Mobile Sidebar */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
            <aside className="absolute left-0 top-16 bottom-0 w-72 bg-white overflow-y-auto">
              <nav className="p-4 space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = activeSection === item.id
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-3 py-3 rounded-lg transition-all ${
                        isActive 
                          ? "bg-[#1E3A5F] text-white" 
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-5 h-5 ${isActive ? "text-[#F59E0B]" : "text-gray-400"}`} />
                        <div>
                          <div className="font-medium">{item.label}</div>
                          <div className={`text-xs ${isActive ? "text-white/70" : "text-gray-500"}`}>
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </nav>
            </aside>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 min-w-0 px-6 py-8 md:px-12 md:py-12">
          {/* Research Section */}
          <section id="research" className="mb-20">
            <ResearchSection />
            <Link href="/docs/research" className="inline-flex items-center gap-2 mt-6 text-[#F59E0B] hover:underline font-medium">
              View full Research doc <ExternalLink className="w-4 h-4" />
            </Link>
          </section>

          {/* GTM Section */}
          <section id="gtm" className="mb-20">
            <GTMSection />
            <Link href="/docs/gtm" className="inline-flex items-center gap-2 mt-6 text-[#F59E0B] hover:underline font-medium">
              View full GTM Plan <ExternalLink className="w-4 h-4" />
            </Link>
          </section>

          {/* Marketing Section */}
          <section id="marketing" className="mb-20">
            <MarketingSection />
            <Link href="/docs/marketing" className="inline-flex items-center gap-2 mt-6 text-[#F59E0B] hover:underline font-medium">
              View full Marketing Plan <ExternalLink className="w-4 h-4" />
            </Link>
          </section>

          {/* Brand Section */}
          <section id="brand" className="mb-20">
            <BrandSection />
            <Link href="/docs/brand" className="inline-flex items-center gap-2 mt-6 text-[#F59E0B] hover:underline font-medium">
              View full Brand Spec <ExternalLink className="w-4 h-4" />
            </Link>
          </section>

          {/* Pitch Section */}
          <section id="pitch" className="mb-20">
            <PitchSection />
            <Link href="/docs/pitch" className="inline-flex items-center gap-2 mt-6 text-[#F59E0B] hover:underline font-medium">
              View full Pitch content <ExternalLink className="w-4 h-4" />
            </Link>
          </section>
        </main>
      </div>
    </div>
  )
}

// ============================================
// RESEARCH SECTION
// ============================================
function ResearchSection() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#1E3A5F] flex items-center justify-center">
          <Search className="w-5 h-5 text-[#F59E0B]" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-[#1E3A5F]">Research Brief</h1>
          <p className="text-gray-500">Problem, Market & Competitors</p>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2D4A6F] text-white rounded-2xl p-8 mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#F59E0B]" />
          Executive Summary
        </h2>
        <p className="text-white/90 leading-relaxed mb-6">
          Functional medicine practitioners spend <span className="text-[#F59E0B] font-semibold">3-4 hours on administrative work</span> after each patient consultation—building supplement stacks, writing lifestyle protocols, and formatting treatment plans. The field runs on practitioner intuition in isolation when it could run on shared data and clinical intelligence.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur">
            <div className="text-[#F59E0B] font-mono text-sm">Market Size</div>
            <div className="text-2xl font-bold">$37.96B</div>
            <div className="text-xs text-white/60">by 2034</div>
          </div>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur">
            <div className="text-[#F59E0B] font-mono text-sm">Growth</div>
            <div className="text-2xl font-bold">+537%</div>
            <div className="text-xs text-white/60">5-year trend</div>
          </div>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur">
            <div className="text-[#F59E0B] font-mono text-sm">Practitioners</div>
            <div className="text-2xl font-bold">50K+</div>
            <div className="text-xs text-white/60">using Practice Better</div>
          </div>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur">
            <div className="text-[#F59E0B] font-mono text-sm">Opportunity</div>
            <div className="text-2xl font-bold">76/100</div>
            <div className="text-xs text-white/60">score</div>
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {/* Problem Card - Large */}
        <div className="md:col-span-2 bg-red-50 border border-red-200 rounded-xl p-6">
          <h3 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            The Problem
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">3-4 hrs</div>
              <div className="text-sm text-red-700">per patient on protocol creation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">0</div>
              <div className="text-sm text-red-700">shared clinical intelligence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">$200-500</div>
              <div className="text-sm text-red-700">spent on EMRs that don&apos;t solve this</div>
            </div>
          </div>
        </div>

        {/* Timing Card */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Why Now
          </h3>
          <ul className="space-y-2 text-sm text-green-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
              90% AI cost reduction since 2023
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
              HIPAA-compliant AI frameworks mature
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
              12-18 month first-mover window
            </li>
          </ul>
        </div>

        {/* Target User */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold text-[#1E3A5F] mb-3 flex items-center gap-2">
            <Users className="w-5 h-5 text-[#F59E0B]" />
            Target User
          </h3>
          <div className="space-y-3 text-sm">
            <div>
              <span className="font-medium">Role:</span>
              <span className="text-gray-600"> Functional medicine practitioner</span>
            </div>
            <div>
              <span className="font-medium">Revenue:</span>
              <span className="text-gray-600"> $100K-$500K/year</span>
            </div>
            <div>
              <span className="font-medium">Patient Load:</span>
              <span className="text-gray-600"> 10-30/week</span>
            </div>
          </div>
        </div>

        {/* Community Signals */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold text-[#1E3A5F] mb-3 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#F59E0B]" />
            Community Signals
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Reddit</span>
              <span className="font-mono text-[#F59E0B]">2.5M+ members</span>
            </div>
            <div className="flex justify-between">
              <span>Facebook</span>
              <span className="font-mono text-[#F59E0B]">150K+ members</span>
            </div>
            <div className="flex justify-between">
              <span>YouTube</span>
              <span className="font-mono text-[#F59E0B]">14 channels</span>
            </div>
          </div>
        </div>

        {/* Keywords */}
        <div className="bg-[#F59E0B]/10 border border-[#F59E0B]/30 rounded-xl p-6">
          <h3 className="font-semibold text-[#1E3A5F] mb-3 flex items-center gap-2">
            <Search className="w-5 h-5 text-[#F59E0B]" />
            Keyword Data
          </h3>
          <div className="space-y-2 text-sm">
            <div>
              <div className="font-medium">&quot;Functional medicine practitioner&quot;</div>
              <div className="text-gray-600">12.1K vol • +537% growth • LOW competition</div>
            </div>
            <div>
              <div className="font-medium">&quot;Functional doctor near me&quot;</div>
              <div className="text-gray-600">49.5K vol • MEDIUM competition</div>
            </div>
          </div>
        </div>
      </div>

      {/* Competitors */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="font-semibold text-[#1E3A5F] flex items-center gap-2">
            <Eye className="w-5 h-5 text-[#F59E0B]" />
            Competitor Analysis
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-6 font-semibold text-gray-600">Competitor</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-600">AI</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-600">FM Focus</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-600">Protocols</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-600">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50 border-b">
                <td className="py-3 px-6 font-medium text-[#1E3A5F]">Protocol Pad (Us)</td>
                <td className="text-center py-3 px-4 text-xl">✅</td>
                <td className="text-center py-3 px-4 text-xl">✅</td>
                <td className="text-center py-3 px-4 text-xl">✅</td>
                <td className="text-center py-3 px-4 font-mono">$49-149</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-6 text-gray-700">Practice Better</td>
                <td className="text-center py-3 px-4 text-xl">❌</td>
                <td className="text-center py-3 px-4 text-xl">❌</td>
                <td className="text-center py-3 px-4 text-xl">❌</td>
                <td className="text-center py-3 px-4 font-mono text-gray-600">$29-99</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-6 text-gray-700">Power2Practice</td>
                <td className="text-center py-3 px-4 text-xl">❌</td>
                <td className="text-center py-3 px-4 text-xl">✅</td>
                <td className="text-center py-3 px-4 text-xl">❌</td>
                <td className="text-center py-3 px-4 font-mono text-gray-600">$300-500</td>
              </tr>
              <tr>
                <td className="py-3 px-6 text-gray-700">Optimal DX</td>
                <td className="text-center py-3 px-4 text-xl">❌</td>
                <td className="text-center py-3 px-4 text-xl">✅</td>
                <td className="text-center py-3 px-4 text-xl">❌</td>
                <td className="text-center py-3 px-4 font-mono text-gray-600">$97</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// ============================================
// GTM SECTION
// ============================================
function GTMSection() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#1E3A5F] flex items-center justify-center">
          <Target className="w-5 h-5 text-[#F59E0B]" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-[#1E3A5F]">Go-to-Market Plan</h1>
          <p className="text-gray-500">Channels, Timeline & Budget</p>
        </div>
      </div>

      {/* Key Targets */}
      <div className="grid grid-cols-3 gap-4 mb-8">
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
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <h3 className="font-semibold text-[#1E3A5F] mb-6 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[#F59E0B]" />
          90-Day Launch Timeline
        </h3>
        <div className="grid grid-cols-4 gap-4">
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
      <div className="grid grid-cols-2 gap-6 mb-8">
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
      <div className="grid grid-cols-4 gap-4">
        {[
          { period: "Week 1", signups: "30", mrr: "$500", bg: "bg-white border border-gray-200" },
          { period: "Month 1", signups: "280", mrr: "$4,200", bg: "bg-[#1E3A5F] text-white" },
          { period: "Month 3", signups: "800", mrr: "$12,000", bg: "bg-white border border-gray-200" },
          { period: "Month 6", signups: "2,000", mrr: "$30,000", bg: "bg-[#F59E0B] text-white" },
        ].map((milestone, i) => (
          <div key={i} className={`${milestone.bg} rounded-xl p-6`}>
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

// ============================================
// MARKETING SECTION
// ============================================
function MarketingSection() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#1E3A5F] flex items-center justify-center">
          <Megaphone className="w-5 h-5 text-[#F59E0B]" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-[#1E3A5F]">Marketing Plan</h1>
          <p className="text-gray-500">Positioning, Content & KPIs</p>
        </div>
      </div>

      {/* Positioning Statement */}
      <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2D4A6F] text-white rounded-2xl p-8 mb-8">
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
      <div className="grid grid-cols-2 gap-6 mb-8">
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
      <div className="grid grid-cols-2 gap-6 mb-8">
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
        <div className="grid grid-cols-3 gap-6">
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

// ============================================
// BRAND SECTION
// ============================================
function BrandSection() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#1E3A5F] flex items-center justify-center">
          <Palette className="w-5 h-5 text-[#F59E0B]" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-[#1E3A5F]">Brand Spec</h1>
          <p className="text-gray-500">Colors, Typography & Components</p>
        </div>
      </div>

      {/* Color Palette */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <h3 className="font-semibold text-[#1E3A5F] mb-6 flex items-center gap-2">
          <Palette className="w-5 h-5 text-[#F59E0B]" />
          Color Palette
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div>
            <div className="h-24 bg-[#1E3A5F] rounded-xl mb-3" />
            <div className="font-medium">Deep Navy</div>
            <div className="text-sm text-gray-500 font-mono">#1E3A5F</div>
            <div className="text-xs text-gray-400">Primary / Headings</div>
          </div>
          <div>
            <div className="h-24 bg-[#F59E0B] rounded-xl mb-3" />
            <div className="font-medium">Warm Amber</div>
            <div className="text-sm text-gray-500 font-mono">#F59E0B</div>
            <div className="text-xs text-gray-400">Accent / CTAs</div>
          </div>
          <div>
            <div className="h-24 bg-[#FAFAFA] rounded-xl mb-3 border border-gray-200" />
            <div className="font-medium">Off-White</div>
            <div className="text-sm text-gray-500 font-mono">#FAFAFA</div>
            <div className="text-xs text-gray-400">Background</div>
          </div>
          <div>
            <div className="h-24 bg-[#2D3748] rounded-xl mb-3" />
            <div className="font-medium">Charcoal</div>
            <div className="text-sm text-gray-500 font-mono">#2D3748</div>
            <div className="text-xs text-gray-400">Body Text</div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#10B981] rounded-lg" />
            <div>
              <div className="text-sm font-medium">Success</div>
              <div className="text-xs text-gray-500 font-mono">#10B981</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#EF4444] rounded-lg" />
            <div>
              <div className="text-sm font-medium">Destructive</div>
              <div className="text-xs text-gray-500 font-mono">#EF4444</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#3B82F6] rounded-lg" />
            <div>
              <div className="text-sm font-medium">Info</div>
              <div className="text-xs text-gray-500 font-mono">#3B82F6</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#6B7280] rounded-lg" />
            <div>
              <div className="text-sm font-medium">Muted</div>
              <div className="text-xs text-gray-500 font-mono">#6B7280</div>
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
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-sm font-semibold text-gray-500 mb-4">Font Families</h4>
            <div className="space-y-4">
              <div>
                <div className="text-2xl font-bold" style={{ fontFamily: "Inter, sans-serif" }}>Inter</div>
                <div className="text-sm text-gray-500">Display & Body (400, 500, 600, 700)</div>
              </div>
              <div>
                <div className="text-2xl font-mono">JetBrains Mono</div>
                <div className="text-sm text-gray-500">Data & Code (400, 500, 600)</div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-500 mb-4">Type Scale</h4>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-[#1E3A5F]">H1 — 48px</div>
              <div className="text-4xl font-bold text-[#1E3A5F]">H2 — 36px</div>
              <div className="text-2xl font-semibold text-[#1E3A5F]">H3 — 28px</div>
              <div className="text-xl font-semibold text-[#1E3A5F]">H4 — 20px</div>
              <div className="text-lg text-[#2D3748]">Body Large — 18px</div>
              <div className="text-base text-[#2D3748]">Body — 16px</div>
              <div className="text-sm text-[#6B7280]">Small — 14px</div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacing & Radius */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold text-[#1E3A5F] mb-4">Spacing System</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span>Section Padding (Desktop)</span>
              <span className="font-mono text-[#F59E0B]">80px</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Section Padding (Mobile)</span>
              <span className="font-mono text-[#F59E0B]">48px</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Card Padding</span>
              <span className="font-mono text-[#F59E0B]">24px</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Section Gap</span>
              <span className="font-mono text-[#F59E0B]">64px</span>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold text-[#1E3A5F] mb-4">Border Radius</h3>
          <div className="flex gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1E3A5F] rounded mb-2" style={{ borderRadius: "6px" }} />
              <div className="text-xs text-gray-500">Small</div>
              <div className="text-xs font-mono">6px</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1E3A5F] rounded-xl mb-2" />
              <div className="text-xs text-gray-500">Medium</div>
              <div className="text-xs font-mono">12px</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1E3A5F] mb-2" style={{ borderRadius: "16px" }} />
              <div className="text-xs text-gray-500">Large</div>
              <div className="text-xs font-mono">16px</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1E3A5F] rounded-full mb-2" />
              <div className="text-xs text-gray-500">Full</div>
              <div className="text-xs font-mono">9999px</div>
            </div>
          </div>
        </div>
      </div>

      {/* Components Preview */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="font-semibold text-[#1E3A5F] mb-6 flex items-center gap-2">
          <Box className="w-5 h-5 text-[#F59E0B]" />
          Component Examples
        </h3>
        <div className="grid grid-cols-2 gap-8">
          {/* Buttons */}
          <div>
            <h4 className="text-sm font-semibold text-gray-500 mb-4">Buttons</h4>
            <div className="flex flex-wrap gap-3">
              <button className="bg-[#F59E0B] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#D97706] transition-colors">
                Primary
              </button>
              <button className="border-2 border-[#1E3A5F] text-[#1E3A5F] px-6 py-3 rounded-xl font-medium hover:bg-[#1E3A5F]/5 transition-colors">
                Secondary
              </button>
              <button className="text-[#1E3A5F] px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors">
                Ghost
              </button>
            </div>
          </div>
          {/* Badges */}
          <div>
            <h4 className="text-sm font-semibold text-gray-500 mb-4">Badges</h4>
            <div className="flex flex-wrap gap-3">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium">Default</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm font-medium">Success</span>
              <span className="bg-[#F59E0B]/20 text-[#D97706] px-3 py-1 rounded-md text-sm font-medium">Warning</span>
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-md text-sm font-medium">Error</span>
            </div>
          </div>
          {/* Input */}
          <div>
            <h4 className="text-sm font-semibold text-gray-500 mb-4">Input</h4>
            <input 
              type="text" 
              placeholder="Enter email..."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/20 focus:border-[#F59E0B] transition-all"
            />
          </div>
          {/* Card */}
          <div>
            <h4 className="text-sm font-semibold text-gray-500 mb-4">Card</h4>
            <div className="border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="font-medium text-[#1E3A5F]">Card Title</div>
              <div className="text-sm text-gray-500">Card description goes here</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// PITCH SECTION
// ============================================
function PitchSection() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#1E3A5F] flex items-center justify-center">
          <Presentation className="w-5 h-5 text-[#F59E0B]" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-[#1E3A5F]">Pitch Deck</h1>
          <p className="text-gray-500">Key Slides Overview</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2D4A6F] text-white rounded-2xl p-8 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold">ProtocolAI</h2>
            <p className="text-white/70 text-lg">AI-Powered Protocols for Functional Medicine</p>
          </div>
          <Link 
            href="/pitch" 
            className="bg-[#F59E0B] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#D97706] transition-colors flex items-center gap-2"
          >
            <Presentation className="w-5 h-5" />
            View Full Deck
          </Link>
        </div>
        <p className="text-xl text-[#F59E0B] font-medium">
          &quot;Generate personalized treatment protocols in minutes, not hours.&quot;
        </p>
      </div>

      {/* Slides Overview */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { num: "01", title: "Title", desc: "Company intro & tagline" },
          { num: "02", title: "Problem", desc: "3-4 hrs per patient on protocols" },
          { num: "03", title: "Solution", desc: "AI-powered protocol generation" },
          { num: "04", title: "Market", desc: "$37.96B opportunity, 13% CAGR" },
          { num: "05", title: "Traction", desc: "Community validation signals" },
          { num: "06", title: "Product", desc: "How the AI works" },
          { num: "07", title: "Pricing", desc: "Free / $49 / $149 tiers" },
          { num: "08", title: "Competition", desc: "No direct AI competitors" },
          { num: "09", title: "GTM", desc: "5 channels, 400 signups in 90 days" },
          { num: "10", title: "Team & Ask", desc: "$100K pre-seed round" },
          { num: "11", title: "Why Now", desc: "AI maturity + market timing" },
          { num: "12", title: "Vision", desc: "Data-driven functional medicine" },
        ].map((slide, i) => (
          <div 
            key={i} 
            className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#F59E0B] hover:shadow-md transition-all group"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#1E3A5F] flex items-center justify-center text-[#F59E0B] font-mono font-bold text-sm group-hover:bg-[#F59E0B] group-hover:text-white transition-colors">
                {slide.num}
              </div>
              <div>
                <div className="font-semibold text-[#1E3A5F]">{slide.title}</div>
                <div className="text-sm text-gray-500">{slide.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Key Highlights */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="bg-[#F59E0B]/10 border border-[#F59E0B]/30 rounded-xl p-6 text-center">
          <div className="text-4xl font-bold text-[#1E3A5F]">3 min</div>
          <div className="text-sm text-gray-600">Protocol generation time</div>
        </div>
        <div className="bg-[#1E3A5F] text-white rounded-xl p-6 text-center">
          <div className="text-4xl font-bold">$1.8M</div>
          <div className="text-sm text-white/70">Year 1 ARR target</div>
        </div>
        <div className="bg-[#F59E0B] text-white rounded-xl p-6 text-center">
          <div className="text-4xl font-bold">90:1</div>
          <div className="text-sm text-white/80">LTV:CAC ratio</div>
        </div>
      </div>
    </div>
  )
}
