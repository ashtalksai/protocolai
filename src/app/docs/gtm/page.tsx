"use client"

import { Calendar, Target, TrendingUp, DollarSign, Users, Zap, CheckCircle2, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function GTMPlanPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] to-[#2D4A6F] text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-[#F59E0B] mb-4">
            <Target className="w-5 h-5" />
            <span className="text-sm font-mono uppercase tracking-wider">Go-to-Market Plan</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Protocol Pad Launch Strategy
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            AI protocol generator for functional medicine practitioners. 
            Target: 280 signups in 30 days.
          </p>
          
          <div className="grid grid-cols-3 gap-6 max-w-xl">
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur">
              <div className="text-[#F59E0B] font-mono text-sm">Launch</div>
              <div className="text-2xl font-bold">Q1 2026</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur">
              <div className="text-[#F59E0B] font-mono text-sm">Day 1 Target</div>
              <div className="text-2xl font-bold">10 signups</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur">
              <div className="text-[#F59E0B] font-mono text-sm">Month 1 Goal</div>
              <div className="text-2xl font-bold">280 signups</div>
            </div>
          </div>
        </div>
      </section>

      {/* 90-Day Timeline */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-[#F59E0B]" />
            90-Day Launch Timeline
          </h2>
          
          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                phase: "Week 1",
                title: "Soft Launch",
                items: ["First Facebook posts", "2 webinars", "LinkedIn Campaign 1"],
                color: "border-[#F59E0B]"
              },
              {
                phase: "Month 1",
                title: "Ramp Up",
                items: ["8 webinars total", "3 FB posts/week", "LinkedIn Campaign 2"],
                color: "border-[#1E3A5F]"
              },
              {
                phase: "Month 2",
                title: "Optimize",
                items: ["Scale winning channels", "Testimonial ads", "SEO content"],
                color: "border-[#1E3A5F]"
              },
              {
                phase: "Month 3",
                title: "Expand",
                items: ["Podcast tours", "Partner webinars", "Affiliate program"],
                color: "border-[#1E3A5F]"
              }
            ].map((phase, i) => (
              <div key={i} className={`border-l-4 ${phase.color} bg-white rounded-r-xl p-5 shadow-sm`}>
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
      </section>

      {/* Channel Mix */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-[#F59E0B]" />
            Channel Strategy
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Channel Mix Chart */}
            <div className="bg-[#FAFAFA] rounded-xl p-6">
              <h3 className="font-semibold text-[#1E3A5F] mb-4">Budget Allocation</h3>
              <div className="space-y-4">
                {[
                  { channel: "Facebook Groups", pct: 0, label: "Organic", color: "bg-blue-500" },
                  { channel: "LinkedIn Ads", pct: 60, label: "$1,200/mo", color: "bg-[#F59E0B]" },
                  { channel: "Webinars", pct: 25, label: "$500/mo", color: "bg-[#1E3A5F]" },
                  { channel: "SEO/Content", pct: 15, label: "$300/mo", color: "bg-green-500" }
                ].map((ch, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{ch.channel}</span>
                      <span className="text-gray-500">{ch.label}</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${ch.color} rounded-full`}
                        style={{ width: `${ch.pct || 5}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expected Results */}
            <div className="bg-[#1E3A5F] text-white rounded-xl p-6">
              <h3 className="font-semibold mb-4">Expected Results (30 Days)</h3>
              <div className="space-y-4">
                {[
                  { channel: "Facebook Groups", signups: "50-100", cac: "$0" },
                  { channel: "LinkedIn Ads", signups: "100", cac: "$20" },
                  { channel: "Webinars", signups: "80", cac: "$6" },
                  { channel: "Organic/SEO", signups: "50", cac: "$0" }
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
        </div>
      </section>

      {/* Budget Breakdown */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-[#F59E0B]" />
            Budget Allocation
          </h2>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="space-y-6">
              {[
                { item: "LinkedIn Ads (Lead Gen + Direct)", amount: "$1,200", pct: 60 },
                { item: "Webinar Platform (Zoom)", amount: "$150", pct: 8 },
                { item: "Content Creation (Graphics)", amount: "$350", pct: 18 },
                { item: "SEO Tools & Content", amount: "$300", pct: 15 }
              ].map((budget, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-[#1E3A5F]">{budget.item}</span>
                    <span className="font-mono text-[#F59E0B] font-bold">{budget.amount}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#1E3A5F] to-[#F59E0B] rounded-full"
                      style={{ width: `${budget.pct}%` }}
                    />
                  </div>
                </div>
              ))}
              
              <div className="pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-[#1E3A5F]">Total Monthly Budget</span>
                  <span className="text-2xl font-mono font-bold text-[#F59E0B]">$2,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 flex items-center gap-2">
            <Zap className="w-6 h-6 text-[#F59E0B]" />
            Revenue Milestones
          </h2>
          
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { period: "Week 1", signups: "30", mrr: "$500", color: "bg-white" },
              { period: "Month 1", signups: "280", mrr: "$4,200", color: "bg-[#1E3A5F] text-white" },
              { period: "Month 3", signups: "800", mrr: "$12,000", color: "bg-white" },
              { period: "Month 6", signups: "2,000", mrr: "$30,000", color: "bg-[#F59E0B] text-white" }
            ].map((milestone, i) => (
              <div key={i} className={`${milestone.color} rounded-xl p-6 shadow-sm border border-gray-100`}>
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
      </section>

      {/* Success Criteria */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#F59E0B] to-[#D97706] text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6" />
            Success Criteria
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                metric: "Signups",
                target: "280+",
                criteria: "In first 30 days"
              },
              {
                metric: "Conversion",
                target: "30%",
                criteria: "Free to paid"
              },
              {
                metric: "MRR",
                target: "$4,000+",
                criteria: "End of month 1"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/20 backdrop-blur rounded-xl p-6">
                <div className="text-sm opacity-80 mb-1">{item.metric}</div>
                <div className="text-4xl font-bold mb-2">{item.target}</div>
                <div className="text-sm opacity-80">{item.criteria}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/30">
            <p className="text-lg">
              <strong>Go/No-Go Decision:</strong> If we hit 100+ signups with 25%+ conversion in Week 2, 
              double down on winning channels. If below 50 signups, pivot messaging and test new audiences.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#1E3A5F] text-white/60 text-center text-sm">
        <p>Protocol Pad GTM Plan • February 2026</p>
        <p className="mt-2">
          <a href="https://protocolai.ashketing.com" className="text-[#F59E0B] hover:underline">
            protocolai.ashketing.com
          </a>
        </p>
      </footer>
    </div>
  )
}
