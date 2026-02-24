"use client"

import { Rocket, Clock, Brain, Target, TrendingUp, Zap, DollarSign, Swords, Megaphone, HandCoins, Eye, CheckCircle2 } from "lucide-react"

export default function PitchDocsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] to-[#2D4A6F] text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-[#F59E0B] mb-4">
            <Rocket className="w-5 h-5" />
            <span className="text-sm font-mono uppercase tracking-wider">Pitch Deck</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            ProtocolAI Investor Pitch
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            AI-powered protocol generator for functional medicine practitioners.
            Pre-seed round: $100K.
          </p>
          
          <div className="grid grid-cols-3 gap-6 max-w-xl">
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur">
              <div className="text-[#F59E0B] font-mono text-sm">Target</div>
              <div className="text-2xl font-bold">$1.8M</div>
              <div className="text-sm text-white/60">Year 1 ARR</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur">
              <div className="text-[#F59E0B] font-mono text-sm">Ask</div>
              <div className="text-2xl font-bold">$100K</div>
              <div className="text-sm text-white/60">Pre-seed</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur">
              <div className="text-[#F59E0B] font-mono text-sm">LTV:CAC</div>
              <div className="text-2xl font-bold">90:1</div>
              <div className="text-sm text-white/60">Unit economics</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 flex items-center gap-2">
            <Clock className="w-6 h-6 text-[#F59E0B]" />
            The Problem
          </h2>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-red-400 mb-8">
            <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">
              Functional Medicine Practitioners Are Drowning in Protocol Work
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { stat: "3-4 hours", label: "spent per client on manual protocol creation" },
              { stat: "No data", label: "driven insights — every practitioner works in isolation" },
              { stat: "Copy-paste", label: "fatigue — reusing old protocols without personalization" },
            ].map((point, i) => (
              <div key={i} className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="font-mono text-2xl font-bold text-red-600 mb-2">{point.stat}</div>
                <div className="text-gray-700">{point.label}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "12.1K monthly searches (+537% growth)",
              "150K+ practitioners in Facebook groups",
              "$200-500/month already spent on EMRs that DON'T solve this",
            ].map((point, i) => (
              <span key={i} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-mono text-gray-700">
                {point}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 flex items-center gap-2">
            <Brain className="w-6 h-6 text-[#F59E0B]" />
            The Solution
          </h2>
          
          <h3 className="text-xl font-semibold text-[#1E3A5F] mb-8">
            From Client Data to Complete Protocol in 3 Minutes
          </h3>
          
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { num: "01", title: "Input", desc: "Symptoms, lab results, health history" },
              { num: "02", title: "Generate", desc: "AI creates personalized protocol" },
              { num: "03", title: "Refine", desc: "Review, edit, add clinical notes" },
              { num: "04", title: "Deliver", desc: "Export PDF, share with client" },
            ].map((step, i) => (
              <div key={i} className="relative bg-[#FAFAFA] rounded-xl p-5 border border-gray-200">
                <div className="w-10 h-10 bg-[#F59E0B]/10 rounded-lg flex items-center justify-center mb-3">
                  <span className="font-mono text-[#F59E0B] font-bold text-sm">{step.num}</span>
                </div>
                <div className="font-semibold text-[#1E3A5F] mb-1">{step.title}</div>
                <div className="text-gray-600 text-sm">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Size */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 flex items-center gap-2">
            <Target className="w-6 h-6 text-[#F59E0B]" />
            Market Size
          </h2>
          
          <h3 className="text-xl font-semibold text-[#1E3A5F] mb-8">
            $37.96B Digital Health Market, Growing 13% CAGR
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#1E3A5F] text-white rounded-xl p-8">
              <div className="font-mono text-[#F59E0B] text-sm font-bold mb-2">TAM</div>
              <div className="text-4xl font-bold mb-2">$37.96B</div>
              <div className="text-white/70">Digital health coaching market (2024)</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="font-mono text-[#F59E0B] text-sm font-bold mb-2">SAM</div>
              <div className="text-4xl font-bold text-[#1E3A5F] mb-2">$90M</div>
              <div className="text-gray-600">50K+ functional medicine practitioners</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="font-mono text-[#F59E0B] text-sm font-bold mb-2">SOM</div>
              <div className="text-4xl font-bold text-[#1E3A5F] mb-2">$15M</div>
              <div className="text-gray-600">3-year target (10K practitioners)</div>
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="text-sm font-semibold text-green-700 mb-3">Growth Drivers</div>
            <div className="flex flex-wrap gap-3">
              {[
                "Rising demand for personalized healthcare",
                "Practitioner burnout epidemic",
                "AI maturity for medical frameworks",
              ].map((driver, i) => (
                <span key={i} className="px-4 py-2 bg-green-100 rounded-full text-sm text-green-800 font-medium">
                  {driver}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Traction */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-[#F59E0B]" />
            Traction
          </h2>
          
          <h3 className="text-xl font-semibold text-[#1E3A5F] mb-8">
            Launching Q1 2026 — Validated & Ready
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { platform: "Reddit", members: "2.5M+", score: "8/10 validation" },
              { platform: "Facebook", members: "150K+", score: "7/10 engagement" },
              { platform: "YouTube", members: "14 channels", score: "7/10 demand" },
            ].map((signal, i) => (
              <div key={i} className="bg-[#FAFAFA] border border-gray-200 rounded-xl p-6 text-center">
                <div className="font-semibold text-[#1E3A5F] text-lg mb-2">{signal.platform}</div>
                <div className="font-mono text-3xl font-bold text-[#F59E0B] mb-1">{signal.members}</div>
                <div className="text-gray-500 text-sm">{signal.score}</div>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Product development underway",
              "AI protocol generation engine built",
              "HIPAA compliance architecture in place",
              "Stripe integration ready for launch",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-800 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 flex items-center gap-2">
            <Zap className="w-6 h-6 text-[#F59E0B]" />
            How It Works
          </h2>
          
          <h3 className="text-xl font-semibold text-[#1E3A5F] mb-8">
            AI Trained on Functional Medicine Frameworks
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { title: "AI Layer", items: ["GPT-4 + Claude", "IFM/A4M guidelines", "PubMed literature"] },
              { title: "Security", items: ["HIPAA-compliant", "E2E encryption", "No data sold"] },
              { title: "Control", items: ["Full edit access", "Clinical notes", "PDF export"] },
            ].map((tech, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="font-semibold text-[#1E3A5F] text-lg mb-4">{tech.title}</div>
                <div className="space-y-3">
                  {tech.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-[#1E3A5F] rounded-xl p-8 text-center">
            <div className="text-xl font-semibold text-white">
              First AI protocol generator built FOR functional medicine
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-[#F59E0B]" />
            Business Model
          </h2>
          
          <h3 className="text-xl font-semibold text-[#1E3A5F] mb-8">
            SaaS with Clear Path to $1M+ ARR
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { name: "Free", price: "$0", features: ["1 protocol/month", "Basic AI", "PDF export"], popular: false },
              { name: "Starter", price: "$49", features: ["Unlimited protocols", "Client management", "Advanced AI"], popular: true },
              { name: "Pro", price: "$149", features: ["Everything in Starter", "Outcomes tracking", "Clinical intelligence"], popular: false },
            ].map((tier, i) => (
              <div key={i} className={`rounded-xl p-6 ${tier.popular ? "bg-[#1E3A5F] text-white scale-105 shadow-xl border-2 border-[#F59E0B] relative" : "bg-[#FAFAFA] border border-gray-200"}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-white text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <div className={`text-lg font-semibold mb-2 ${tier.popular ? "text-white" : "text-[#1E3A5F]"}`}>
                  {tier.name}
                </div>
                <div className={`font-mono text-4xl font-bold mb-4 ${tier.popular ? "text-white" : "text-[#1E3A5F]"}`}>
                  {tier.price}
                  <span className={`text-base font-normal ${tier.popular ? "text-white/70" : "text-gray-500"}`}>/mo</span>
                </div>
                <div className="space-y-2">
                  {tier.features.map((feature, j) => (
                    <div key={j} className={`flex items-center gap-2 text-sm ${tier.popular ? "text-white/90" : "text-gray-700"}`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${tier.popular ? "bg-[#F59E0B]" : "bg-[#F59E0B]"}`} />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-16">
            {[
              { label: "LTV:CAC", value: "90:1" },
              { label: "Payback", value: "<1 month" },
              { label: "Year 1 ARR", value: "$1.8M" },
            ].map((econ, i) => (
              <div key={i} className="text-center">
                <div className="font-mono text-3xl font-bold text-[#F59E0B]">{econ.value}</div>
                <div className="text-sm text-gray-500">{econ.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 flex items-center gap-2">
            <Swords className="w-6 h-6 text-[#F59E0B]" />
            Competition
          </h2>
          
          <h3 className="text-xl font-semibold text-[#1E3A5F] mb-8">
            No Direct Competitors — Category Creation
          </h3>
          
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-4 px-6 font-semibold text-gray-500">Product</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-500">AI</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-500">FM</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-500">Protocols</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-500">Outcomes</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-500">Price</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "ProtocolAI", ai: true, fm: true, protocols: true, outcomes: true, price: "$49-149", us: true },
                  { name: "Practice Better", ai: false, fm: false, protocols: false, outcomes: false, price: "$50-100", us: false },
                  { name: "Power2Practice", ai: false, fm: true, protocols: false, outcomes: false, price: "$200-500", us: false },
                  { name: "Optimal DX", ai: false, fm: true, protocols: false, outcomes: false, price: "N/A", us: false },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-gray-200 last:border-0 ${row.us ? "bg-green-50" : ""}`}>
                    <td className={`py-4 px-6 font-semibold ${row.us ? "text-[#1E3A5F]" : "text-gray-600"}`}>
                      {row.name}
                      {row.us && <span className="ml-2 text-xs text-[#F59E0B]">(Us)</span>}
                    </td>
                    <td className="text-center py-4 px-4 text-xl">{row.ai ? "✅" : "❌"}</td>
                    <td className="text-center py-4 px-4 text-xl">{row.fm ? "✅" : "❌"}</td>
                    <td className="text-center py-4 px-4 text-xl">{row.protocols ? "✅" : "❌"}</td>
                    <td className="text-center py-4 px-4 text-xl">{row.outcomes ? "✅" : "❌"}</td>
                    <td className="text-center py-4 px-6 font-mono text-sm">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "AI-Powered Generation (3 min vs 4 hours)",
              "Clinical Intelligence Layer (data network effect)",
              "12-18 month first-mover advantage",
            ].map((item, i) => (
              <span key={i} className="px-5 py-2 bg-[#F59E0B]/10 border border-[#F59E0B]/30 rounded-full text-sm font-medium text-[#F59E0B]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Go-to-Market */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 flex items-center gap-2">
            <Megaphone className="w-6 h-6 text-[#F59E0B]" />
            Go-to-Market
          </h2>
          
          <h3 className="text-xl font-semibold text-[#1E3A5F] mb-8">
            5 Channels, 400 Signups in 90 Days
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#FAFAFA] border border-gray-200 rounded-xl p-6">
              <div className="text-sm font-semibold text-gray-500 mb-6">CHANNEL MIX</div>
              <div className="space-y-5">
                {[
                  { name: "Facebook Groups", pct: 40, signups: "300/mo" },
                  { name: "Webinars", pct: 30, signups: "80/mo" },
                  { name: "LinkedIn Ads", pct: 15, signups: "100/mo" },
                  { name: "Reddit", pct: 7, signups: "50/mo" },
                  { name: "YouTube", pct: 8, signups: "100/mo" },
                ].map((channel, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-32 text-sm font-medium text-gray-700">{channel.name}</div>
                    <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#1E3A5F] to-[#F59E0B] rounded-full" style={{ width: `${channel.pct}%` }} />
                    </div>
                    <div className="w-20 text-right font-mono text-sm text-[#F59E0B] font-bold">{channel.signups}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="text-sm font-semibold text-gray-500 mb-2">GROWTH TIMELINE</div>
              {[
                "Week 1: Soft launch, 10 signups",
                "Month 1: 100 signups",
                "Month 3: 400 signups",
                "Month 6: 1,000 signups",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-xl">
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B] flex-shrink-0" />
                  <span className="text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Ask */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 flex items-center gap-2">
            <HandCoins className="w-6 h-6 text-[#F59E0B]" />
            Team & Ask
          </h2>
          
          <h3 className="text-2xl font-bold text-[#F59E0B] mb-8">
            Pre-Seed Round: $100K
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { amount: "$50K", purpose: "Marketing & Growth", items: "LinkedIn ads, conferences, content" },
              { amount: "$30K", purpose: "Product Development", items: "Outcomes tracking, client portals, integrations" },
              { amount: "$20K", purpose: "Operations", items: "HIPAA audit, SOC 2, legal" },
            ].map((fund, i) => (
              <div key={i} className={`rounded-xl p-6 ${i === 0 ? "bg-[#1E3A5F] text-white" : "bg-white border border-gray-200"}`}>
                <div className={`font-mono text-3xl font-bold mb-2 ${i === 0 ? "text-[#F59E0B]" : "text-[#1E3A5F]"}`}>
                  {fund.amount}
                </div>
                <div className={`font-semibold mb-2 ${i === 0 ? "text-white" : "text-[#1E3A5F]"}`}>
                  {fund.purpose}
                </div>
                <div className={`text-sm ${i === 0 ? "text-white/70" : "text-gray-500"}`}>
                  {fund.items}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="text-sm font-semibold text-gray-500 mb-4">MRR MILESTONES</div>
            <div className="flex justify-around">
              {[
                { month: "M3", mrr: "$23.7K" },
                { month: "M6", mrr: "$63.2K" },
                { month: "M12", mrr: "$150K" },
              ].map((ms, i) => (
                <div key={i} className="text-center">
                  <div className="font-mono text-sm text-gray-500 mb-1">{ms.month}</div>
                  <div className="font-mono text-3xl font-bold text-[#F59E0B]">{ms.mrr}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#1E3A5F] to-[#2D4A6F] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 justify-center">
            <Eye className="w-6 h-6 text-[#F59E0B]" />
            Vision
          </h2>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            The Future of Functional Medicine Is Data-Driven
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { year: "Year 1", milestone: "Protocol Automation", metrics: "2,500 practitioners, $1.8M ARR" },
              { year: "Year 2", milestone: "Clinical Intelligence", metrics: "10,000 practitioners, $7.2M ARR" },
              { year: "Year 3", milestone: "Industry Standard", metrics: "25,000 practitioners, $18M ARR" },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="font-mono text-[#F59E0B] text-sm font-bold mb-2">{item.year}</div>
                <div className="font-semibold text-white text-lg mb-2">{item.milestone}</div>
                <div className="text-white/60 text-sm">{item.metrics}</div>
              </div>
            ))}
          </div>
          
          <div className="text-2xl md:text-3xl font-bold text-[#F59E0B]">
            &ldquo;We&apos;re not replacing practitioners. We&apos;re giving them superpowers.&rdquo;
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#1E3A5F] text-white/60 text-center text-sm">
        <p>Protocol Pad Pitch Deck • February 2026</p>
        <p className="mt-2">
          <a href="/pitch" className="text-[#F59E0B] hover:underline mr-4">
            Interactive Deck →
          </a>
          <a href="https://protocolai.ashketing.com" className="text-[#F59E0B] hover:underline">
            protocolai.ashketing.com
          </a>
        </p>
      </footer>
    </div>
  )
}
