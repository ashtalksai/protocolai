"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Activity, Brain, Target, TrendingUp, Zap, DollarSign, Swords, Rocket, HandCoins, Clock, Eye, LucideIcon } from "lucide-react"

// Type definitions
interface BaseSlide {
  id: number
  type: string
  icon: LucideIcon
  title: string
}

interface TitleSlideData extends BaseSlide {
  type: "title"
  subtitle: string
  tagline: string
  footer: string
}

interface ProblemSlideData extends BaseSlide {
  type: "problem"
  headline: string
  points: { stat: string; label: string }[]
  dataPoints: string[]
}

interface SolutionSlideData extends BaseSlide {
  type: "solution"
  headline: string
  steps: { num: string; title: string; desc: string }[]
}

interface MarketSlideData extends BaseSlide {
  type: "market"
  headline: string
  metrics: { label: string; value: string; desc: string }[]
  drivers: string[]
}

interface TractionSlideData extends BaseSlide {
  type: "traction"
  headline: string
  signals: { platform: string; members: string; score: string }[]
  status: string[]
}

interface ProductSlideData extends BaseSlide {
  type: "product"
  headline: string
  tech: { title: string; items: string[] }[]
  differentiator: string
}

interface PricingSlideData extends BaseSlide {
  type: "pricing"
  headline: string
  tiers: { name: string; price: string; features: string[]; popular?: boolean }[]
  economics: { label: string; value: string }[]
}

interface CompetitionSlideData extends BaseSlide {
  type: "competition"
  headline: string
  comparison: { name: string; ai: boolean; fm: boolean; protocols: boolean; outcomes: boolean; price: string }[]
  moat: string[]
}

interface GTMSlideData extends BaseSlide {
  type: "gtm"
  headline: string
  channels: { name: string; pct: number; signups: string }[]
  timeline: string[]
}

interface AskSlideData extends BaseSlide {
  type: "ask"
  headline: string
  team: { name: string; role: string; skills: string }
  funds: { amount: string; purpose: string; items: string }[]
  milestones: { month: string; mrr: string }[]
}

interface WhyNowSlideData extends BaseSlide {
  type: "why-now"
  headline: string
  reasons: { title: string; desc: string }[]
  contrast: string[]
}

interface VisionSlideData extends BaseSlide {
  type: "vision"
  headline: string
  roadmap: { year: string; milestone: string; metrics: string }[]
  closing: string
}

type SlideData = TitleSlideData | ProblemSlideData | SolutionSlideData | MarketSlideData | TractionSlideData | ProductSlideData | PricingSlideData | CompetitionSlideData | GTMSlideData | AskSlideData | WhyNowSlideData | VisionSlideData

const slides: SlideData[] = [
  {
    id: 1,
    type: "title",
    icon: Activity,
    title: "ProtocolAI",
    subtitle: "AI-Powered Protocols for Functional Medicine",
    tagline: "Generate personalized treatment protocols in minutes, not hours.",
    footer: "protocolai.ashketing.com",
  },
  {
    id: 2,
    type: "problem",
    icon: Clock,
    title: "The Problem",
    headline: "Functional Medicine Practitioners Are Drowning in Protocol Work",
    points: [
      { stat: "3-4 hours", label: "spent per client on manual protocol creation" },
      { stat: "No data", label: "driven insights — every practitioner works in isolation" },
      { stat: "Copy-paste", label: "fatigue — reusing old protocols without personalization" },
    ],
    dataPoints: [
      "12.1K monthly searches (+537% growth)",
      "150K+ practitioners in Facebook groups",
      "$200-500/month already spent on EMRs that DON'T solve this",
    ],
  },
  {
    id: 3,
    type: "solution",
    icon: Brain,
    title: "The Solution",
    headline: "From Client Data to Complete Protocol in 3 Minutes",
    steps: [
      { num: "01", title: "Input", desc: "Symptoms, lab results, health history" },
      { num: "02", title: "Generate", desc: "AI creates personalized protocol with supplements, diet, lifestyle" },
      { num: "03", title: "Refine", desc: "Practitioner reviews, edits, adds clinical notes" },
      { num: "04", title: "Deliver", desc: "Export PDF, share with client" },
    ],
  },
  {
    id: 4,
    type: "market",
    icon: Target,
    title: "Market Size",
    headline: "$37.96B Digital Health Market, Growing 13% CAGR",
    metrics: [
      { label: "TAM", value: "$37.96B", desc: "Digital health coaching market (2024)" },
      { label: "SAM", value: "$90M", desc: "50K+ functional medicine practitioners" },
      { label: "SOM", value: "$15M", desc: "3-year target (10K practitioners)" },
    ],
    drivers: [
      "Rising demand for personalized healthcare",
      "Practitioner burnout epidemic",
      "AI maturity for medical frameworks",
    ],
  },
  {
    id: 5,
    type: "traction",
    icon: TrendingUp,
    title: "Traction",
    headline: "Launching Q1 2026 — Validated & Ready",
    signals: [
      { platform: "Reddit", members: "2.5M+", score: "8/10 validation" },
      { platform: "Facebook", members: "150K+", score: "7/10 engagement" },
      { platform: "YouTube", members: "14 channels", score: "7/10 demand" },
    ],
    status: [
      "Product development underway",
      "AI protocol generation engine built",
      "HIPAA compliance architecture in place",
      "Stripe integration ready for launch",
    ],
  },
  {
    id: 6,
    type: "product",
    icon: Zap,
    title: "How It Works",
    headline: "AI Trained on Functional Medicine Frameworks",
    tech: [
      { title: "AI Layer", items: ["GPT-4 + Claude", "IFM/A4M guidelines", "PubMed literature"] },
      { title: "Security", items: ["HIPAA-compliant", "E2E encryption", "No data sold"] },
      { title: "Control", items: ["Full edit access", "Clinical notes", "PDF export"] },
    ],
    differentiator: "First AI protocol generator built FOR functional medicine",
  },
  {
    id: 7,
    type: "pricing",
    icon: DollarSign,
    title: "Business Model",
    headline: "SaaS with Clear Path to $1M+ ARR",
    tiers: [
      { name: "Free", price: "$0", features: ["1 protocol/month", "Basic AI", "PDF export"] },
      { name: "Starter", price: "$49", features: ["Unlimited protocols", "Client management", "Advanced AI"], popular: true },
      { name: "Pro", price: "$149", features: ["Everything in Starter", "Outcomes tracking", "Clinical intelligence"] },
    ],
    economics: [
      { label: "LTV:CAC", value: "90:1" },
      { label: "Payback", value: "<1 month" },
      { label: "Year 1 ARR", value: "$1.8M" },
    ],
  },
  {
    id: 8,
    type: "competition",
    icon: Swords,
    title: "Competition",
    headline: "No Direct Competitors — Category Creation",
    comparison: [
      { name: "ProtocolAI", ai: true, fm: true, protocols: true, outcomes: true, price: "$49-149" },
      { name: "Practice Better", ai: false, fm: false, protocols: false, outcomes: false, price: "$50-100" },
      { name: "Power2Practice", ai: false, fm: true, protocols: false, outcomes: false, price: "$200-500" },
      { name: "Optimal DX", ai: false, fm: true, protocols: false, outcomes: false, price: "N/A" },
    ],
    moat: [
      "AI-Powered Generation (3 min vs 4 hours)",
      "Clinical Intelligence Layer (data network effect)",
      "12-18 month first-mover advantage",
    ],
  },
  {
    id: 9,
    type: "gtm",
    icon: Rocket,
    title: "Go-to-Market",
    headline: "5 Channels, 400 Signups in 90 Days",
    channels: [
      { name: "Facebook Groups", pct: 40, signups: "300/mo" },
      { name: "Webinars", pct: 30, signups: "80/mo" },
      { name: "LinkedIn Ads", pct: 15, signups: "100/mo" },
      { name: "Reddit", pct: 7, signups: "50/mo" },
      { name: "YouTube", pct: 8, signups: "100/mo" },
    ],
    timeline: [
      "Week 1: Soft launch, 10 signups",
      "Month 1: 100 signups",
      "Month 3: 400 signups",
      "Month 6: 1,000 signups",
    ],
  },
  {
    id: 10,
    type: "ask",
    icon: HandCoins,
    title: "Team & Ask",
    headline: "Pre-Seed Round: $100K",
    team: {
      name: "Ash",
      role: "Founder",
      skills: "Full-stack dev + Functional medicine background",
    },
    funds: [
      { amount: "$50K", purpose: "Marketing & Growth", items: "LinkedIn ads, conferences, content" },
      { amount: "$30K", purpose: "Product Development", items: "Outcomes tracking, client portals, integrations" },
      { amount: "$20K", purpose: "Operations", items: "HIPAA audit, SOC 2, legal" },
    ],
    milestones: [
      { month: "M3", mrr: "$23.7K" },
      { month: "M6", mrr: "$63.2K" },
      { month: "M12", mrr: "$150K" },
    ],
  },
  {
    id: 11,
    type: "why-now",
    icon: Clock,
    title: "Why Now",
    headline: "Market + Technology + Demand Converge",
    reasons: [
      { title: "AI Maturity", desc: "LLMs can now understand complex medical frameworks. Cost dropped 90%." },
      { title: "Practitioner Burnout", desc: "Need efficiency tools to survive. Willing to pay $200-500/mo." },
      { title: "No Competitors", desc: "12-18 month window before incumbents catch up with AI." },
      { title: "Data Network Effect", desc: "First to aggregate outcomes data wins. More users = smarter AI." },
    ],
    contrast: [
      "5 years ago: AI wasn't good enough",
      "5 years later: Market saturated, advantage lost",
      "NOW: Perfect timing to build the category",
    ],
  },
  {
    id: 12,
    type: "vision",
    icon: Eye,
    title: "Vision",
    headline: "The Future of Functional Medicine Is Data-Driven",
    roadmap: [
      { year: "Year 1", milestone: "Protocol Automation", metrics: "2,500 practitioners, $1.8M ARR" },
      { year: "Year 2", milestone: "Clinical Intelligence", metrics: "10,000 practitioners, $7.2M ARR" },
      { year: "Year 3", milestone: "Industry Standard", metrics: "25,000 practitioners, $18M ARR" },
    ],
    closing: "We're not replacing practitioners. We're giving them superpowers.",
  },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
}

export default function PitchDeckPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  const paginate = useCallback((newDirection: number) => {
    const newSlide = currentSlide + newDirection
    if (newSlide >= 0 && newSlide < slides.length) {
      setDirection(newDirection)
      setCurrentSlide(newSlide)
    }
  }, [currentSlide])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault()
        paginate(1)
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        paginate(-1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [paginate])

  const slide = slides[currentSlide]

  return (
    <div className="h-screen w-screen bg-white overflow-hidden relative">
      {/* Navigation Arrows */}
      <button
        onClick={() => paginate(-1)}
        disabled={currentSlide === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/80 backdrop-blur border border-gray-200 shadow-lg hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <ChevronLeft className="w-6 h-6 text-primary" />
      </button>
      <button
        onClick={() => paginate(1)}
        disabled={currentSlide === slides.length - 1}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/80 backdrop-blur border border-gray-200 shadow-lg hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <ChevronRight className="w-6 h-6 text-primary" />
      </button>

      {/* Progress Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentSlide ? 1 : -1)
              setCurrentSlide(idx)
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentSlide ? "w-8 bg-accent" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-8 z-50 font-mono text-sm text-text-muted">
        {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>

      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="h-full w-full"
        >
          <SlideContent slide={slide} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function SlideContent({ slide }: { slide: SlideData }) {
  switch (slide.type) {
    case "title":
      return <TitleSlide slide={slide} />
    case "problem":
      return <ProblemSlide slide={slide} />
    case "solution":
      return <SolutionSlide slide={slide} />
    case "market":
      return <MarketSlide slide={slide} />
    case "traction":
      return <TractionSlide slide={slide} />
    case "product":
      return <ProductSlide slide={slide} />
    case "pricing":
      return <PricingSlide slide={slide} />
    case "competition":
      return <CompetitionSlide slide={slide} />
    case "gtm":
      return <GTMSlide slide={slide} />
    case "ask":
      return <AskSlide slide={slide} />
    case "why-now":
      return <WhyNowSlide slide={slide} />
    case "vision":
      return <VisionSlide slide={slide} />
    default:
      return null
  }
}

function TitleSlide({ slide }: { slide: TitleSlideData }) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-primary via-primary to-[#2C5282] text-white p-8">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center">
          <Activity className="w-12 h-12 text-accent" />
        </div>
      </motion.div>
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-6xl md:text-7xl font-bold mb-4"
      >
        {slide.title}
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-xl md:text-2xl text-white/80 mb-8"
      >
        {slide.subtitle}
      </motion.p>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg md:text-xl text-accent font-medium"
      >
        {slide.tagline}
      </motion.p>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 font-mono text-white/60"
      >
        {slide.footer}
      </motion.p>
    </div>
  )
}

function ProblemSlide({ slide }: { slide: ProblemSlideData }) {
  return (
    <div className="h-full w-full flex flex-col justify-center p-8 md:p-16 bg-white">
      <SlideHeader title={slide.title} icon={slide.icon} />
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-4xl font-bold text-primary mb-12 max-w-4xl"
      >
        {slide.headline}
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {slide.points.map((point, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            className="bg-red-50 border border-red-100 rounded-xl p-6"
          >
            <div className="font-mono text-3xl font-bold text-red-500 mb-2">{point.stat}</div>
            <div className="text-text-secondary">{point.label}</div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex flex-wrap gap-4"
      >
        {slide.dataPoints.map((point, idx) => (
          <span key={idx} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-mono text-text-muted">
            {point}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

function SolutionSlide({ slide }: { slide: SolutionSlideData }) {
  return (
    <div className="h-full w-full flex flex-col justify-center p-8 md:p-16 bg-white">
      <SlideHeader title={slide.title} icon={slide.icon} />
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-4xl font-bold text-primary mb-12 max-w-4xl"
      >
        {slide.headline}
      </motion.h2>
      <div className="grid md:grid-cols-4 gap-6">
        {slide.steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-gray-100 rounded-xl p-6 h-full">
              <div className="font-mono text-accent text-sm font-bold mb-3">{step.num}</div>
              <div className="text-xl font-semibold text-primary mb-2">{step.title}</div>
              <div className="text-text-muted text-sm">{step.desc}</div>
            </div>
            {idx < slide.steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent/30" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function MarketSlide({ slide }: { slide: MarketSlideData }) {
  return (
    <div className="h-full w-full flex flex-col justify-center p-8 md:p-16 bg-white">
      <SlideHeader title={slide.title} icon={slide.icon} />
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-4xl font-bold text-primary mb-12 max-w-4xl"
      >
        {slide.headline}
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {slide.metrics.map((metric, idx) => (
          <motion.div
            key={idx}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            className="text-center"
          >
            <div className="font-mono text-sm text-accent font-bold mb-2">{metric.label}</div>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{metric.value}</div>
            <div className="text-text-muted text-sm">{metric.desc}</div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-green-50 border border-green-100 rounded-xl p-6"
      >
        <div className="text-sm font-semibold text-green-700 mb-3">Growth Drivers</div>
        <div className="flex flex-wrap gap-3">
          {slide.drivers.map((driver, idx) => (
            <span key={idx} className="px-3 py-1 bg-green-100 rounded-full text-sm text-green-800">
              {driver}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

function TractionSlide({ slide }: { slide: TractionSlideData }) {
  return (
    <div className="h-full w-full flex flex-col justify-center p-8 md:p-16 bg-white">
      <SlideHeader title={slide.title} icon={slide.icon} />
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-4xl font-bold text-primary mb-12 max-w-4xl"
      >
        {slide.headline}
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-sm font-semibold text-text-muted mb-4">COMMUNITY SIGNALS</div>
          <div className="space-y-4">
            {slide.signals.map((signal, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="font-semibold text-primary w-24">{signal.platform}</div>
                <div className="font-mono text-accent">{signal.members}</div>
                <div className="text-text-muted text-sm">{signal.score}</div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="text-sm font-semibold text-text-muted mb-4">PRODUCT STATUS</div>
          <div className="space-y-3">
            {slide.status.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-green-800">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function ProductSlide({ slide }: { slide: ProductSlideData }) {
  return (
    <div className="h-full w-full flex flex-col justify-center p-8 md:p-16 bg-white">
      <SlideHeader title={slide.title} icon={slide.icon} />
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-4xl font-bold text-primary mb-8 max-w-4xl"
      >
        {slide.headline}
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {slide.tech.map((tech, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            className="bg-gray-50 rounded-xl p-6"
          >
            <div className="font-semibold text-primary mb-4">{tech.title}</div>
            <div className="space-y-2">
              {tech.items.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-sm text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-r from-primary to-[#2C5282] rounded-xl p-6 text-white"
      >
        <div className="text-xl font-semibold">{slide.differentiator}</div>
      </motion.div>
    </div>
  )
}

function PricingSlide({ slide }: { slide: PricingSlideData }) {
  return (
    <div className="h-full w-full flex flex-col justify-center p-8 md:p-16 bg-white">
      <SlideHeader title={slide.title} icon={slide.icon} />
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-4xl font-bold text-primary mb-8 max-w-4xl"
      >
        {slide.headline}
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {slide.tiers.map((tier, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            className={`rounded-xl p-6 ${tier.popular ? "bg-primary text-white ring-4 ring-accent" : "bg-gray-50"}`}
          >
            {tier.popular && (
              <div className="text-xs font-bold text-accent mb-2">MOST POPULAR</div>
            )}
            <div className={`text-lg font-semibold mb-1 ${tier.popular ? "text-white" : "text-primary"}`}>{tier.name}</div>
            <div className={`font-mono text-3xl font-bold mb-4 ${tier.popular ? "text-white" : "text-primary"}`}>{tier.price}<span className="text-sm font-normal">/mo</span></div>
            <div className="space-y-2">
              {tier.features.map((feature, i) => (
                <div key={i} className={`flex items-center gap-2 text-sm ${tier.popular ? "text-white/80" : "text-text-secondary"}`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${tier.popular ? "bg-accent" : "bg-accent"}`} />
                  {feature}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex gap-8 justify-center"
      >
        {slide.economics.map((econ, idx) => (
          <div key={idx} className="text-center">
            <div className="font-mono text-2xl font-bold text-accent">{econ.value}</div>
            <div className="text-sm text-text-muted">{econ.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

function CompetitionSlide({ slide }: { slide: CompetitionSlideData }) {
  return (
    <div className="h-full w-full flex flex-col justify-center p-8 md:p-16 bg-white">
      <SlideHeader title={slide.title} icon={slide.icon} />
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-4xl font-bold text-primary mb-8 max-w-4xl"
      >
        {slide.headline}
      </motion.h2>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="overflow-x-auto mb-8"
      >
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-semibold text-text-muted">Product</th>
              <th className="text-center py-3 px-4 font-semibold text-text-muted">AI-Powered</th>
              <th className="text-center py-3 px-4 font-semibold text-text-muted">FM-Specific</th>
              <th className="text-center py-3 px-4 font-semibold text-text-muted">Protocols</th>
              <th className="text-center py-3 px-4 font-semibold text-text-muted">Outcomes</th>
              <th className="text-center py-3 px-4 font-semibold text-text-muted">Price</th>
            </tr>
          </thead>
          <tbody>
            {slide.comparison.map((row, idx) => (
              <tr key={idx} className={`border-b ${idx === 0 ? "bg-green-50" : ""}`}>
                <td className={`py-3 px-4 font-semibold ${idx === 0 ? "text-primary" : "text-text-secondary"}`}>{row.name}</td>
                <td className="text-center py-3 px-4">{row.ai ? "✅" : "❌"}</td>
                <td className="text-center py-3 px-4">{row.fm ? "✅" : "❌"}</td>
                <td className="text-center py-3 px-4">{row.protocols ? "✅" : "❌"}</td>
                <td className="text-center py-3 px-4">{row.outcomes ? "✅" : "❌"}</td>
                <td className="text-center py-3 px-4 font-mono">{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap gap-3"
      >
        {slide.moat.map((item, idx) => (
          <span key={idx} className="px-4 py-2 bg-accent/10 rounded-full text-sm font-medium text-accent">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

function GTMSlide({ slide }: { slide: GTMSlideData }) {
  return (
    <div className="h-full w-full flex flex-col justify-center p-8 md:p-16 bg-white">
      <SlideHeader title={slide.title} icon={slide.icon} />
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-4xl font-bold text-primary mb-8 max-w-4xl"
      >
        {slide.headline}
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-sm font-semibold text-text-muted mb-4">CHANNELS</div>
          <div className="space-y-3">
            {slide.channels.map((channel, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-32 text-sm font-medium text-primary">{channel.name}</div>
                <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    style={{ width: `${channel.pct}%` }}
                  />
                </div>
                <div className="w-20 text-right font-mono text-sm text-accent">{channel.signups}</div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="text-sm font-semibold text-text-muted mb-4">TIMELINE</div>
          <div className="space-y-4">
            {slide.timeline.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="text-text-secondary">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function AskSlide({ slide }: { slide: AskSlideData }) {
  return (
    <div className="h-full w-full flex flex-col justify-center p-8 md:p-16 bg-white">
      <SlideHeader title={slide.title} icon={slide.icon} />
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-4xl font-bold text-accent mb-8 max-w-4xl"
      >
        {slide.headline}
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {slide.funds.map((fund, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            className="bg-gray-50 rounded-xl p-6"
          >
            <div className="font-mono text-2xl font-bold text-primary mb-2">{fund.amount}</div>
            <div className="font-semibold text-text-secondary mb-2">{fund.purpose}</div>
            <div className="text-sm text-text-muted">{fund.items}</div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex gap-8 justify-center"
      >
        {slide.milestones.map((ms, idx) => (
          <div key={idx} className="text-center">
            <div className="font-mono text-sm text-text-muted mb-1">{ms.month}</div>
            <div className="font-mono text-2xl font-bold text-accent">{ms.mrr}</div>
            <div className="text-xs text-text-muted">MRR</div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

function WhyNowSlide({ slide }: { slide: WhyNowSlideData }) {
  return (
    <div className="h-full w-full flex flex-col justify-center p-8 md:p-16 bg-white">
      <SlideHeader title={slide.title} icon={slide.icon} />
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-4xl font-bold text-primary mb-8 max-w-4xl"
      >
        {slide.headline}
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {slide.reasons.map((reason, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            className="bg-gradient-to-br from-primary/5 to-accent/5 border border-gray-100 rounded-xl p-6"
          >
            <div className="font-semibold text-primary mb-2">{reason.title}</div>
            <div className="text-sm text-text-secondary">{reason.desc}</div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex gap-4 justify-center flex-wrap"
      >
        {slide.contrast.map((item, idx) => (
          <span
            key={idx}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              idx === 2 ? "bg-accent text-white" : "bg-gray-100 text-text-muted"
            }`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

function VisionSlide({ slide }: { slide: VisionSlideData }) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-8 md:p-16 bg-gradient-to-br from-primary via-primary to-[#2C5282] text-white">
      <SlideHeader title={slide.title} icon={slide.icon} light />
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center max-w-3xl"
      >
        {slide.headline}
      </motion.h2>
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        {slide.roadmap.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            className="bg-white/10 backdrop-blur rounded-xl p-6 text-center"
          >
            <div className="font-mono text-accent text-sm font-bold mb-2">{item.year}</div>
            <div className="font-semibold text-lg mb-2">{item.milestone}</div>
            <div className="text-sm text-white/70">{item.metrics}</div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-2xl md:text-3xl font-bold text-accent text-center max-w-2xl"
      >
        &ldquo;{slide.closing}&rdquo;
      </motion.div>
    </div>
  )
}

function SlideHeader({ title, icon: Icon, light = false }: { title: string; icon: LucideIcon; light?: boolean }) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center gap-3 mb-6"
    >
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${light ? "bg-white/10" : "bg-primary/10"}`}>
        <Icon className={`w-5 h-5 ${light ? "text-accent" : "text-primary"}`} />
      </div>
      <span className={`font-mono text-sm uppercase tracking-wider ${light ? "text-white/60" : "text-text-muted"}`}>
        {title}
      </span>
    </motion.div>
  )
}
