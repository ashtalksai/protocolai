"use client"

import { 
  Megaphone, 
  FileText,
  ChevronRight,
  Users,
  MessageSquare,
  BarChart3,
  CheckCircle2,
  Target,
  ArrowLeft
} from "lucide-react"
import Link from "next/link"

export default function MarketingPage() {
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
              <span className="text-gray-600 font-medium">Marketing Plan</span>
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
              className="w-full text-left px-3 py-3 rounded-lg hover:bg-gray-100 text-gray-700 flex items-center gap-3"
            >
              <Target className="w-5 h-5 text-gray-400" />
              <span className="font-medium">GTM Plan</span>
            </Link>
            <Link
              href="/docs/marketing"
              className="w-full text-left px-3 py-3 rounded-lg bg-[#1E3A5F] text-white flex items-center gap-3"
            >
              <Megaphone className="w-5 h-5 text-[#F59E0B]" />
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
        </main>
      </div>
    </div>
  )
}
