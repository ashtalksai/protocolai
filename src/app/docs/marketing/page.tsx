"use client"

import { Megaphone, Users, MessageSquare, Calendar, BarChart3, CheckCircle2, Heart } from "lucide-react"

export default function MarketingPlanPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero / Positioning */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] to-[#2D4A6F] text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-[#F59E0B] mb-4">
            <Megaphone className="w-5 h-5" />
            <span className="text-sm font-mono uppercase tracking-wider">Marketing Plan</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Positioning & Messaging Strategy
          </h1>
          
          {/* Positioning Statement */}
          <div className="bg-white/10 backdrop-blur rounded-xl p-8 max-w-3xl">
            <div className="space-y-3 text-lg">
              <p><span className="text-[#F59E0B] font-semibold">For</span> functional medicine practitioners</p>
              <p><span className="text-[#F59E0B] font-semibold">Who</span> spend 3-4 hours per patient on protocol creation</p>
              <p><span className="text-[#F59E0B] font-semibold">Protocol Pad</span> is an AI-powered platform</p>
              <p><span className="text-[#F59E0B] font-semibold">That</span> generates personalized treatment protocols in minutes</p>
              <p><span className="text-[#F59E0B] font-semibold">Unlike</span> generic templates or manual research</p>
              <p><span className="text-[#F59E0B] font-semibold">We</span> combine clinical intelligence with your expertise</p>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-2xl font-medium text-[#F59E0B]">
              "Generate Functional Medicine Protocols in Minutes, Not Hours"
            </p>
          </div>
        </div>
      </section>

      {/* Target Persona + Messaging */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Persona */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#F59E0B]" />
                Target Persona
              </h2>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A5F] to-[#F59E0B] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  SM
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Dr. Sarah Mitchell</h3>
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
                    <li>• Scaling without burning out</li>
                  </ul>
                </div>
                <div>
                  <span className="font-semibold text-[#1E3A5F]">Goals:</span>
                  <ul className="text-gray-600 mt-1 space-y-1">
                    <li>• See more patients without sacrificing quality</li>
                    <li>• Provide evidence-based protocols</li>
                    <li>• Reduce administrative burden</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Messaging Pillars */}
            <div>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#F59E0B]" />
                Messaging Pillars
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-[#F59E0B]">
                  <h3 className="font-bold text-[#1E3A5F] mb-2">⚡ Speed</h3>
                  <p className="text-gray-600 text-sm">&quot;3 minutes, not 3 hours&quot;</p>
                  <p className="text-xs text-gray-400 mt-2">Key proof: Live demo showing real protocol generation</p>
                </div>
                
                <div className="bg-[#1E3A5F] text-white rounded-xl p-5">
                  <h3 className="font-bold mb-2">🧠 Intelligence</h3>
                  <p className="text-white/80 text-sm">&quot;AI trained on functional medicine&quot;</p>
                  <p className="text-xs text-white/60 mt-2">Key proof: Condition-specific protocols, evidence citations</p>
                </div>
                
                <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-[#1E3A5F]">
                  <h3 className="font-bold text-[#1E3A5F] mb-2">🎯 Control</h3>
                  <p className="text-gray-600 text-sm">&quot;You&apos;re still the expert&quot;</p>
                  <p className="text-xs text-gray-400 mt-2">Key proof: Edit, customize, and approve every protocol</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Calendar */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-[#F59E0B]" />
            Content Calendar (Month 1)
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#1E3A5F]">
                  <th className="text-left py-3 px-4 font-semibold text-[#1E3A5F]">Week</th>
                  <th className="text-left py-3 px-4 font-semibold text-[#1E3A5F]">Blog</th>
                  <th className="text-left py-3 px-4 font-semibold text-[#1E3A5F]">Social</th>
                  <th className="text-left py-3 px-4 font-semibold text-[#1E3A5F]">Email</th>
                  <th className="text-left py-3 px-4 font-semibold text-[#1E3A5F]">Webinar</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { week: "1", blog: "Launch announcement", social: "5 posts + 3 FB group", email: "Welcome sequence (3)", webinar: "Tue + Thu" },
                  { week: "2", blog: "SIBO protocol case study", social: "5 posts + 3 FB group", email: "Feature highlight", webinar: "Tue + Thu" },
                  { week: "3", blog: "Top 5 time-saving tips", social: "5 posts + 3 FB group", email: "Testimonial spotlight", webinar: "Tue + Thu" },
                  { week: "4", blog: "Practitioner success story", social: "5 posts + 3 FB group", email: "Monthly roundup", webinar: "Tue + Thu" }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-mono text-[#F59E0B] font-bold">Week {row.week}</td>
                    <td className="py-3 px-4">{row.blog}</td>
                    <td className="py-3 px-4">{row.social}</td>
                    <td className="py-3 px-4">{row.email}</td>
                    <td className="py-3 px-4">{row.webinar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Channel Plans */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8">Channel Strategies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: "📝",
                title: "Blog/SEO",
                items: ["Case study posts", "How-to guides", "Practitioner interviews", "Research roundups"],
                metric: "Target: 2K visitors/mo"
              },
              {
                icon: "📱",
                title: "Social Media",
                items: ["LinkedIn (primary)", "Facebook groups", "Twitter/X", "Instagram (secondary)"],
                metric: "Target: 500 followers"
              },
              {
                icon: "✉️",
                title: "Email",
                items: ["Welcome sequence", "Weekly tips", "Feature updates", "Success stories"],
                metric: "Target: 1K subscribers"
              },
              {
                icon: "🎥",
                title: "Webinars",
                items: ["2x per week", "Live demos", "Q&A sessions", "Guest experts"],
                metric: "Target: 25 attendees/ea"
              }
            ].map((channel, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm">
                <div className="text-3xl mb-3">{channel.icon}</div>
                <h3 className="font-bold text-[#1E3A5F] mb-3">{channel.title}</h3>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  {channel.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-gray-100">
                  <span className="text-xs font-mono text-[#F59E0B]">{channel.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Voice */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 flex items-center gap-2">
            <Heart className="w-6 h-6 text-[#F59E0B]" />
            Brand Voice Guidelines
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Do */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                DO
              </h3>
              <ul className="space-y-3 text-green-900">
                <li className="flex gap-3">
                  <span className="text-green-500">✓</span>
                  <div>
                    <p className="font-medium">Be empathetic</p>
                    <p className="text-sm text-green-700">&quot;We know protocol work takes forever...&quot;</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500">✓</span>
                  <div>
                    <p className="font-medium">Use clinical language</p>
                    <p className="text-sm text-green-700">&quot;Evidence-based protocols&quot; not &quot;AI magic&quot;</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500">✓</span>
                  <div>
                    <p className="font-medium">Respect expertise</p>
                    <p className="text-sm text-green-700">&quot;Augment your practice&quot; not &quot;replace you&quot;</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500">✓</span>
                  <div>
                    <p className="font-medium">Show real results</p>
                    <p className="text-sm text-green-700">&quot;15 minutes vs 4 hours&quot; with proof</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Don't */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center text-xs">✕</span>
                DON'T
              </h3>
              <ul className="space-y-3 text-red-900">
                <li className="flex gap-3">
                  <span className="text-red-500">✕</span>
                  <div>
                    <p className="font-medium">Oversell AI</p>
                    <p className="text-sm text-red-700">Avoid &quot;revolutionary&quot; or &quot;groundbreaking&quot;</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500">✕</span>
                  <div>
                    <p className="font-medium">Be dismissive</p>
                    <p className="text-sm text-red-700">Never imply their current process is &quot;wrong&quot;</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500">✕</span>
                  <div>
                    <p className="font-medium">Use hype language</p>
                    <p className="text-sm text-red-700">&quot;10x&quot; or &quot;game-changer&quot; sounds scammy</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500">✕</span>
                  <div>
                    <p className="font-medium">Be clinical-cold</p>
                    <p className="text-sm text-red-700">Keep it professional but warm</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#1E3A5F] to-[#2D4A6F] text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-[#F59E0B]" />
            KPIs & Tracking
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                category: "Awareness",
                metrics: [
                  { name: "Website visitors", target: "5K/mo" },
                  { name: "Social followers", target: "500" },
                  { name: "Webinar registrations", target: "200/mo" }
                ]
              },
              {
                category: "Acquisition",
                metrics: [
                  { name: "Free signups", target: "280/mo" },
                  { name: "Cost per signup", target: "<$10" },
                  { name: "Email subscribers", target: "1K" }
                ]
              },
              {
                category: "Revenue",
                metrics: [
                  { name: "Conversion rate", target: "30%" },
                  { name: "MRR", target: "$4,200" },
                  { name: "LTV:CAC ratio", target: ">3:1" }
                ]
              }
            ].map((group, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="font-semibold text-[#F59E0B] mb-4">{group.category}</h3>
                <ul className="space-y-3">
                  {group.metrics.map((metric, j) => (
                    <li key={j} className="flex justify-between items-center">
                      <span className="text-white/80">{metric.name}</span>
                      <span className="font-mono font-bold">{metric.target}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/30">
            <p className="text-sm text-white/70">
              <strong className="text-white">Tracking Tools:</strong> Plausible Analytics (website), 
              Stripe Dashboard (revenue), LinkedIn Campaign Manager (ads), Google Search Console (SEO)
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#1E3A5F] text-white/60 text-center text-sm">
        <p>Protocol Pad Marketing Plan • February 2026</p>
        <p className="mt-2">
          <a href="https://protocolai.ashketing.com" className="text-[#F59E0B] hover:underline">
            protocolai.ashketing.com
          </a>
        </p>
      </footer>
    </div>
  )
}
