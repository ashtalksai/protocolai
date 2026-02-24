"use client"

import { Search, AlertTriangle, TrendingUp, Users, Target, DollarSign, BarChart3, CheckCircle2, MessageSquare, Lightbulb } from "lucide-react"

export default function ResearchDocsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] to-[#2D4A6F] text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-[#F59E0B] mb-4">
            <Search className="w-5 h-5" />
            <span className="text-sm font-mono uppercase tracking-wider">Research Brief</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Protocol Pad Research
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            AI Protocol Generator for Functional Medicine Practitioners. 
            Comprehensive market validation via IdeaBrowser Idea of the Day.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur">
              <div className="text-[#F59E0B] font-mono text-sm">Opportunity</div>
              <div className="text-2xl font-bold">9/10</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur">
              <div className="text-[#F59E0B] font-mono text-sm">Problem</div>
              <div className="text-2xl font-bold">8/10</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur">
              <div className="text-[#F59E0B] font-mono text-sm">Why Now</div>
              <div className="text-2xl font-bold">9/10</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur">
              <div className="text-[#F59E0B] font-mono text-sm">Score</div>
              <div className="text-2xl font-bold">76/100</div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-[#F59E0B]" />
            Executive Summary
          </h2>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-[#F59E0B] mb-8">
            <h3 className="font-bold text-[#1E3A5F] text-lg mb-4">The Problem</h3>
            <p className="text-gray-700 leading-relaxed">
              Functional medicine practitioners spend <span className="font-bold text-[#F59E0B]">3-4 hours on administrative work</span> after each patient consultation—building supplement stacks, writing lifestyle protocols, and formatting treatment plans. The field runs on practitioner intuition in isolation when it could run on shared data and clinical intelligence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-[#1E3A5F] mb-4">Who Has This Problem</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
                  Functional medicine practitioners
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
                  Naturopathic doctors
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
                  Integrative health coaches
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
                  Nurse practitioners (FM specialization)
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-[#1E3A5F] mb-4">Market Evidence</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#F59E0B] font-bold">$37.96B</span>
                  <span>Digital health coaching market by 2034</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F59E0B] font-bold">12.1K</span>
                  <span>Monthly searches, +537% growth (5-year)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F59E0B] font-bold">50,000+</span>
                  <span>Practitioners using Practice Better</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F59E0B] font-bold">Gap:</span>
                  <span>No AI-specific tools for FM protocols</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Scores */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-[#F59E0B]" />
            IdeaBrowser Analysis
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-[#1E3A5F] mb-4">Core Scores</h3>
              <div className="space-y-4">
                {[
                  { metric: "Opportunity", score: "9/10", rating: "Exceptional" },
                  { metric: "Problem Severity", score: "8/10", rating: "High Pain" },
                  { metric: "Feasibility", score: "6/10", rating: "Challenging" },
                  { metric: "Why Now", score: "9/10", rating: "Perfect Timing" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-[#FAFAFA] rounded-xl">
                    <div>
                      <div className="font-medium text-[#1E3A5F]">{item.metric}</div>
                      <div className="text-sm text-gray-500">{item.rating}</div>
                    </div>
                    <div className="font-mono text-2xl font-bold text-[#F59E0B]">{item.score}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-[#1E3A5F] mb-4">Business Fit</h3>
              <div className="space-y-4">
                {[
                  { factor: "Revenue Potential", value: "$$$", detail: "$1M-$10M ARR potential" },
                  { factor: "Execution Difficulty", value: "4/10", detail: "Solo-friendly, 1-2 week MVP with AI tools" },
                  { factor: "Go-to-Market", value: "8/10", detail: "Clear community traction potential" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-[#FAFAFA] rounded-xl">
                    <div>
                      <div className="font-medium text-[#1E3A5F]">{item.factor}</div>
                      <div className="text-sm text-gray-500">{item.detail}</div>
                    </div>
                    <div className="font-mono text-xl font-bold text-[#1E3A5F]">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-[#1E3A5F] rounded-xl p-6 text-white">
            <h4 className="font-semibold text-[#F59E0B] mb-3">Keyword & Growth Data</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-white/70 text-sm">Primary Keyword</p>
                <p className="font-medium">&quot;Functional medicine practitioner&quot;</p>
                <p className="text-sm text-white/60">12,100 monthly searches • +537% growth • LOW-MEDIUM competition</p>
              </div>
              <div>
                <p className="text-white/70 text-sm mb-2">Related High-Volume</p>
                <div className="space-y-1 text-sm">
                  <p>&quot;functional doctor near me&quot; — 49.5K</p>
                  <p>&quot;functional medicine near me&quot; — 22.2K</p>
                  <p>&quot;personalized health plans&quot; — 1.6K (fastest growing)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-[#F59E0B]" />
            Why Now? Market Timing
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { 
                title: "Market Timing", 
                score: "9/10",
                items: [
                  "Health & wellness market $37.96B by 2034",
                  "Digital coaching growing 13% CAGR",
                  "No specialized AI tools for FM niche"
                ]
              },
              { 
                title: "Tech Enablers", 
                score: "8/10",
                items: [
                  "90% cost reduction in AI deployment",
                  "HIPAA-compliant AI tools now feasible",
                  "Supplement databases have open APIs"
                ]
              },
              { 
                title: "Competitive Window", 
                score: "9/10",
                items: [
                  "First-mover advantage available",
                  "Active communities requesting tools",
                  "IFM reaches 1000s of practitioners"
                ]
              },
              { 
                title: "Timing Risk", 
                score: "6/10",
                items: [
                  "Tech giant entry risk (Epic, Cerner)",
                  "FDA oversight still evolving",
                  "Regulatory uncertainty"
                ]
              },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-[#F59E0B]">
                <div className="flex justify-between items-start mb-3">
                  <div className="font-semibold text-[#1E3A5F]">{card.title}</div>
                  <div className="font-mono text-sm text-[#F59E0B] font-bold">{card.score}</div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Signals */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-[#F59E0B]" />
            Community Signals
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { platform: "Reddit", score: "8/10", members: "2.5M+", communities: "5 relevant subreddits" },
              { platform: "Facebook", score: "7/10", members: "150K+", communities: "4 relevant groups" },
              { platform: "YouTube", score: "7/10", members: "14 channels", communities: "Educational content" },
              { platform: "Professional", score: "8/10", members: "IFM, A4M", communities: "LinkedIn groups" },
            ].map((signal, i) => (
              <div key={i} className="bg-[#FAFAFA] rounded-xl p-5 text-center">
                <div className="font-semibold text-[#1E3A5F] text-lg mb-1">{signal.platform}</div>
                <div className="font-mono text-2xl font-bold text-[#F59E0B] mb-2">{signal.members}</div>
                <div className="text-sm text-gray-500">{signal.communities}</div>
                <div className="text-xs text-gray-400 mt-2">Score: {signal.score}</div>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h4 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Pain Points Identified
              </h4>
              <ul className="space-y-3 text-red-900 text-sm">
                <li>&quot;Spending 4+ hours formatting protocols after client sessions&quot;</li>
                <li>&quot;No way to track what supplement combinations actually work&quot;</li>
                <li>&quot;Need affordable alternatives to traditional EHRs&quot;</li>
                <li>&quot;Insurance companies don&apos;t understand FM billing&quot;</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Common Requests
              </h4>
              <ul className="space-y-3 text-green-900 text-sm">
                <li>Tools to streamline protocol creation</li>
                <li>Shared clinical outcome databases</li>
                <li>Client education resources</li>
                <li>HIPAA-compliant telehealth + charting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Analysis */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 flex items-center gap-2">
            <Target className="w-6 h-6 text-[#F59E0B]" />
            Competitor Analysis
          </h2>
          
          <div className="grid gap-6">
            {[
              {
                name: "Practice Better",
                url: "practicebetter.io",
                pricing: "$29-99/month",
                position: "50,000+ practitioners. NOT functional medicine-specific. No AI layer.",
                strengths: ["Patient charting", "Client portal", "Telehealth", "Meal planning integration"],
                weaknesses: ["No AI assistance", "Lack of clinical intelligence", "Generic templates"]
              },
              {
                name: "Power2Practice",
                url: "power2practice.com",
                pricing: "$300-500/month (estimated)",
                position: "First integrative/FM EMR. A4M endorsed. Targets established clinics.",
                strengths: ["FM-specific charting", "30+ IV therapy templates", "20K+ supplements", "E-prescribing"],
                weaknesses: ["Expensive for small practices", "Steep learning curve", "No AI protocol generation"]
              },
              {
                name: "Optimal DX",
                url: "optimaldx.com",
                pricing: "$97/month",
                position: "Niche tool for lab interpretation. Complements EMRs.",
                strengths: ["Blood chemistry analysis", "FM reference ranges", "Visual progress tracking"],
                weaknesses: ["Only covers labs", "No full protocol creation", "Doesn't integrate with other tools"]
              },
              {
                name: "OptiMantra",
                url: "optimantra.com",
                pricing: "$79-149/month",
                position: "Strong in acupuncture/TCM. FM is secondary focus.",
                strengths: ["Customizable intake", "Supplement inventory", "Multi-modality support"],
                weaknesses: ["Still manual templates", "Dated interface", "Limited integrations"]
              },
            ].map((comp, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-[#1E3A5F] text-lg">{comp.name}</h3>
                    <p className="text-sm text-gray-500">{comp.url}</p>
                  </div>
                  <div className="font-mono text-[#F59E0B] font-bold mt-2 md:mt-0">{comp.pricing}</div>
                </div>
                <p className="text-gray-600 text-sm mb-4 italic">{comp.position}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-green-600 uppercase mb-2">Strengths</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {comp.strengths.map((s, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <span className="text-green-500">+</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-red-600 uppercase mb-2">Weaknesses</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {comp.weaknesses.map((w, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <span className="text-red-500">-</span>
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target User */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 flex items-center gap-2">
            <Users className="w-6 h-6 text-[#F59E0B]" />
            Target User Deep Dive
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#FAFAFA] rounded-xl p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A5F] to-[#F59E0B] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  SM
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#1E3A5F]">Dr. Sarah Mitchell</h3>
                  <p className="text-gray-500">Functional Medicine Practitioner</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-[#F59E0B] uppercase mb-1">Demographics</p>
                  <p className="text-sm text-gray-700">35-55 years old, solo practice or small clinic, $100K-$500K revenue</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#F59E0B] uppercase mb-1">Tech Comfort</p>
                  <p className="text-sm text-gray-700">Comfortable with cloud tools (Zoom, Google Workspace, Canva). Not developers.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-green-50 rounded-xl p-4">
                <p className="text-xs font-semibold text-green-600 uppercase mb-2">Loves</p>
                <p className="text-sm text-green-900">Detective work—connecting symptoms, analyzing labs, finding root causes</p>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <p className="text-xs font-semibold text-red-600 uppercase mb-2">Hates</p>
                <p className="text-sm text-red-900">Administrative work, formatting protocols, copy-pasting supplement stacks</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="text-xs font-semibold text-blue-600 uppercase mb-2">Values</p>
                <p className="text-sm text-blue-900">Patient outcomes, evidence-based medicine, personalized care, efficiency</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-[#1E3A5F] rounded-xl p-6 text-white">
            <h4 className="font-semibold text-[#F59E0B] mb-4">Current Workflow (Pain Journey)</h4>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: "1", action: "Patient consultation", time: "60-90 min" },
                { step: "2", action: "Review labs, symptoms", time: "30 min" },
                { step: "3", action: "Research supplements", time: "60 min" },
                { step: "4", action: "Draft protocol", time: "90 min" },
                { step: "5", action: "Format & send", time: "30 min" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-8 h-8 bg-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold text-[#1E3A5F]">
                    {item.step}
                  </div>
                  <p className="text-sm text-white/90">{item.action}</p>
                  <p className="text-xs text-[#F59E0B] font-mono">{item.time}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-white/20 text-center">
              <p className="text-white/70">Total post-consultation time:</p>
              <p className="text-2xl font-bold text-[#F59E0B]">4-5 hours per patient</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Model */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-[#F59E0B]" />
            Pricing Model Analysis
          </h2>
          
          <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
            <h3 className="font-semibold text-[#1E3A5F] mb-4">Competitor Pricing Benchmarks</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-gray-500">Tool</th>
                    <th className="text-center py-3 px-4 text-gray-500">Entry</th>
                    <th className="text-center py-3 px-4 text-gray-500">Mid</th>
                    <th className="text-center py-3 px-4 text-gray-500">High</th>
                    <th className="text-left py-3 px-4 text-gray-500">Target</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tool: "Practice Better", entry: "$29/mo", mid: "$59/mo", high: "$99/mo", target: "Solo → teams" },
                    { tool: "OptiMantra", entry: "$79/mo", mid: "$149/mo", high: "Custom", target: "Solo → clinics" },
                    { tool: "Optimal DX", entry: "$97/mo", mid: "N/A", high: "N/A", target: "Solo practitioners" },
                    { tool: "Power2Practice", entry: "~$300-500/mo", mid: "Enterprise", high: "Enterprise", target: "Established clinics" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-[#1E3A5F]">{row.tool}</td>
                      <td className="py-3 px-4 text-center font-mono text-sm">{row.entry}</td>
                      <td className="py-3 px-4 text-center font-mono text-sm">{row.mid}</td>
                      <td className="py-3 px-4 text-center font-mono text-sm">{row.high}</td>
                      <td className="py-3 px-4 text-gray-600">{row.target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { tier: "Starter", price: "$49/month", target: "Solo practitioners, early adopters, health coaches", features: ["50 protocols/month", "Evidence-based templates", "Supplement database integration", "PDF export", "HIPAA-compliant storage"] },
              { tier: "Pro", price: "$149/month", target: "Established practitioners, small clinics", features: ["Unlimited protocols", "Outcomes tracking", "Client portal (white-label)", "Clinical intelligence layer", "Team collaboration"] },
              { tier: "Enterprise", price: "Custom", target: "FM clinics (6+ practitioners)", features: ["Everything in Pro", "Custom templates", "API access", "Dedicated account manager", "Advanced analytics"] },
            ].map((plan, i) => (
              <div key={i} className={`rounded-xl p-6 ${i === 1 ? "bg-[#1E3A5F] text-white" : "bg-white border border-gray-200"}`}>
                <div className={`text-sm ${i === 1 ? "text-[#F59E0B]" : "text-[#F59E0B]"} font-semibold mb-1`}>{plan.tier}</div>
                <div className={`text-3xl font-bold mb-2 ${i === 1 ? "text-white" : "text-[#1E3A5F]"}`}>{plan.price}</div>
                <div className={`text-sm mb-4 ${i === 1 ? "text-white/70" : "text-gray-500"}`}>{plan.target}</div>
                <ul className="space-y-2 text-sm">
                  {plan.features.map((f, j) => (
                    <li key={j} className={`flex items-center gap-2 ${i === 1 ? "text-white/90" : "text-gray-700"}`}>
                      <CheckCircle2 className={`w-3 h-3 ${i === 1 ? "text-[#F59E0B]" : "text-green-500"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Score Breakdown */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#1E3A5F] to-[#2D4A6F] text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-[#F59E0B]" />
            Idea Score Breakdown
          </h2>
          
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8">
            <div className="text-center mb-6">
              <div className="text-6xl font-bold text-[#F59E0B]">76/100</div>
              <div className="text-white/70">Overall Score</div>
              <div className="text-sm text-green-400 mt-2">Threshold: ≥60 to proceed ✅ PASS</div>
            </div>
            
            <div className="space-y-4">
              {[
                { factor: "Problem Severity", weight: 25, score: 22, desc: "High pain—practitioners spending 3-4 hrs/patient on admin" },
                { factor: "Buildable in 48h", weight: 25, score: 15, desc: "Challenging—AI protocol gen requires prompt engineering, HIPAA" },
                { factor: "Clear Monetization", weight: 20, score: 18, desc: "Strong—validated SaaS model, clear pricing tiers" },
                { factor: "Low Competition", weight: 15, score: 12, desc: "No AI-specific FM protocol tools. Unique angle." },
                { factor: "Distribution Path", weight: 15, score: 9, desc: "FB groups, IFM, Reddit. No owned list yet." },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-40 text-sm text-white/80">{item.factor}</div>
                  <div className="flex-1 h-3 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-[#F59E0B] rounded-full" style={{ width: `${(item.score / item.weight) * 100}%` }} />
                  </div>
                  <div className="w-16 text-right font-mono text-sm">{item.score}/{item.weight}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-xl font-semibold mb-2">Recommendation: Proceed to Stage 2 (Plan)</p>
            <p className="text-white/70">Strong market validation, clear pain point, validated pricing model.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#1E3A5F] text-white/60 text-center text-sm">
        <p>Protocol Pad Research Brief • February 2026</p>
        <p className="mt-1 text-xs text-white/40">Source: IdeaBrowser Idea of the Day</p>
        <p className="mt-2">
          <a href="https://protocolai.ashketing.com" className="text-[#F59E0B] hover:underline">
            protocolai.ashketing.com
          </a>
        </p>
      </footer>
    </div>
  )
}
