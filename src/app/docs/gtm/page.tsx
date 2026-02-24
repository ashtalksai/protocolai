"use client"

import { 
  Target, 
  FileText,
  ChevronRight, 
  Calendar, 
  CheckCircle2,
  ArrowLeft
} from "lucide-react"
import Link from "next/link"

export default function GTMPage() {
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
              <Link href="/docs" className="text-gray-600 hover:text-[#1E3A5F] transition-colors">
                Docs
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-gray-600 font-medium">GTM Plan</span>
            </div>
            
            <Link 
              href="/docs" 
              className="text-[#1E3A5F] hover:text-[#F59E0B] font-medium transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Docs
            </Link>
          </div>
        </div>
      </header>

      {/* Sidebar + Content */}
      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto border-r border-gray-200 bg-white">
          <nav className="p-4 space-y-1">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-3">
              Documentation
            </div>
            <Link
              href="/docs/gtm"
              className="w-full text-left px-3 py-3 rounded-lg bg-[#1E3A5F] text-white flex items-center gap-3"
            >
              <Target className="w-5 h-5 text-[#F59E0B]" />
              <span className="font-medium">GTM Plan</span>
            </Link>
            <Link
              href="/docs/marketing"
              className="w-full text-left px-3 py-3 rounded-lg hover:bg-gray-100 text-gray-700 flex items-center gap-3"
            >
              <span className="font-medium">Marketing Plan</span>
            </Link>
            <Link
              href="/pitch"
              className="w-full text-left px-3 py-3 rounded-lg hover:bg-gray-100 text-gray-700 flex items-center gap-3"
            >
              <span className="font-medium">Pitch Deck</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 px-6 py-12 md:px-12">
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
        </main>
      </div>
    </div>
  )
}
