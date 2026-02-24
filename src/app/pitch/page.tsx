"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Activity, Brain, Target, TrendingUp, Zap, DollarSign, Swords, Rocket, HandCoins, Clock, Eye, LucideIcon } from "lucide-react"
import Image from "next/image"

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
      { num: "02", title: "Generate", desc: "AI creates personalized protocol" },
      { num: "03", title: "Refine", desc: "Review, edit, add clinical notes" },
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
    <div className="h-screen w-screen bg-background overflow-hidden relative">
      {/* Navigation Arrows */}
      <button
        onClick={() => paginate(-1)}
        disabled={currentSlide === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-card/80 backdrop-blur border border-border shadow-lg hover:bg-card disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <ChevronLeft className="w-6 h-6 text-primary" />
      </button>
      <button
        onClick={() => paginate(1)}
        disabled={currentSlide === slides.length - 1}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-card/80 backdrop-blur border border-border shadow-lg hover:bg-card disabled:opacity-30 disabled:cursor-not-allowed transition-all"
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
            className={`h-2 rounded-full transition-all ${
              idx === currentSlide ? "w-8 bg-accent" : "w-2 bg-muted hover:bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-8 z-50 font-mono text-sm text-muted-foreground">
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

// ============================================
// TITLE SLIDE - Hero + Support Pattern
// ============================================
function TitleSlide({ slide }: { slide: TitleSlideData }) {
  return (
    <div className="h-full w-full relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/pitch/hero-title.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/80" />
      </div>
      
      {/* Bento layout - Hero left, accent card right */}
      <div className="relative h-full flex items-center justify-center p-8 md:p-16">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Hero content - 2/3 */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
                <Activity className="w-10 h-10 text-accent" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white mb-4"
            >
              {slide.title}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white/70 mb-6"
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
          </div>
          
          {/* Accent card - 1/3 */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="hidden lg:flex flex-col justify-center"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-accent font-mono text-sm mb-4">KEY METRICS</div>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-white">3 min</div>
                  <div className="text-white/60 text-sm">Protocol generation time</div>
                </div>
                <div className="h-px bg-white/20" />
                <div>
                  <div className="text-4xl font-bold text-accent">90%</div>
                  <div className="text-white/60 text-sm">Time saved per client</div>
                </div>
                <div className="h-px bg-white/20" />
                <div>
                  <div className="text-4xl font-bold text-white">$1.8M</div>
                  <div className="text-white/60 text-sm">Year 1 ARR target</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Footer */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 font-mono text-white/40"
        >
          {slide.footer}
        </motion.p>
      </div>
    </div>
  )
}

// ============================================
// PROBLEM SLIDE - Big Left + Stack Pattern
// ============================================
function ProblemSlide({ slide }: { slide: ProblemSlideData }) {
  return (
    <div className="h-full w-full bg-muted/30 flex items-center justify-center p-8 md:p-16">
      <div className="max-w-6xl w-full">
        <SlideHeader title={slide.title} icon={slide.icon} />
        
        {/* Bento: Visual left (60%) + Pain points stacked right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Visual + headline - 3/5 */}
          <div className="lg:col-span-3 relative">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden mb-6">
              <Image
                src="/pitch/problem-visual.png"
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-6 left-6 right-6 text-2xl md:text-3xl font-bold text-foreground"
              >
                {slide.headline}
              </motion.h2>
            </div>
            
            {/* Data points as pills */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {slide.dataPoints.map((point, idx) => (
                <span key={idx} className="px-4 py-2 bg-card rounded-full text-sm font-mono text-muted-foreground border border-border">
                  {point}
                </span>
              ))}
            </motion.div>
          </div>
          
          {/* Pain points stacked - 2/5 */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {slide.points.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="bg-destructive/10 border border-destructive/20 rounded-xl p-6"
              >
                <div className="font-mono text-3xl font-bold text-destructive mb-2">{point.stat}</div>
                <div className="text-foreground/70">{point.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// SOLUTION SLIDE - Big Left + Stack Pattern
// ============================================
function SolutionSlide({ slide }: { slide: SolutionSlideData }) {
  return (
    <div className="h-full w-full bg-background flex items-center justify-center p-8 md:p-16">
      <div className="max-w-6xl w-full">
        <SlideHeader title={slide.title} icon={slide.icon} />
        
        {/* Bento: Visual left (60%) + Steps stacked right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Visual + headline - 3/5 */}
          <div className="lg:col-span-3">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-primary mb-6"
            >
              {slide.headline}
            </motion.h2>
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
              <Image
                src="/pitch/solution-visual.png"
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
          </div>
          
          {/* Steps stacked - 2/5 */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {slide.steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="relative bg-card border border-border rounded-xl p-5 hover:border-accent/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-mono text-accent font-bold text-sm">{step.num}</span>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-foreground mb-1">{step.title}</div>
                    <div className="text-muted-foreground text-sm">{step.desc}</div>
                  </div>
                </div>
                {idx < slide.steps.length - 1 && (
                  <div className="absolute -bottom-2 left-9 w-0.5 h-4 bg-accent/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// MARKET SLIDE - Data Grid Pattern
// ============================================
function MarketSlide({ slide }: { slide: MarketSlideData }) {
  return (
    <div className="h-full w-full bg-primary/5 flex items-center justify-center p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <SlideHeader title={slide.title} icon={slide.icon} />
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-primary mb-10"
        >
          {slide.headline}
        </motion.h2>
        
        {/* Bento data grid - asymmetric */}
        <div className="grid grid-cols-6 gap-4 mb-8">
          {/* TAM - large, spans 3 */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="col-span-6 md:col-span-3 bg-primary text-primary-foreground rounded-2xl p-8"
          >
            <div className="font-mono text-accent text-sm font-bold mb-2">{slide.metrics[0].label}</div>
            <div className="text-5xl md:text-6xl font-bold mb-3">{slide.metrics[0].value}</div>
            <div className="text-primary-foreground/70">{slide.metrics[0].desc}</div>
          </motion.div>
          
          {/* SAM + SOM - stacked, spans 3 */}
          <div className="col-span-6 md:col-span-3 flex flex-col gap-4">
            {slide.metrics.slice(1).map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 flex-1"
              >
                <div className="font-mono text-accent text-sm font-bold mb-1">{metric.label}</div>
                <div className="text-3xl font-bold text-foreground mb-1">{metric.value}</div>
                <div className="text-muted-foreground text-sm">{metric.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Drivers - horizontal strip */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-success/10 border border-success/20 rounded-xl p-6"
        >
          <div className="text-sm font-semibold text-success mb-4">Growth Drivers</div>
          <div className="flex flex-wrap gap-3">
            {slide.drivers.map((driver, idx) => (
              <span key={idx} className="px-4 py-2 bg-success/20 rounded-full text-sm text-success font-medium">
                {driver}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// ============================================
// TRACTION SLIDE - Triptych Pattern
// ============================================
function TractionSlide({ slide }: { slide: TractionSlideData }) {
  return (
    <div className="h-full w-full bg-background flex items-center justify-center p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <SlideHeader title={slide.title} icon={slide.icon} />
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-primary mb-10"
        >
          {slide.headline}
        </motion.h2>
        
        {/* Bento: Signals triptych top, Status grid bottom */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {slide.signals.map((signal, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <div className="font-semibold text-primary text-lg mb-2">{signal.platform}</div>
              <div className="font-mono text-3xl font-bold text-accent mb-1">{signal.members}</div>
              <div className="text-muted-foreground text-sm">{signal.score}</div>
            </motion.div>
          ))}
        </div>
        
        {/* Status - 2x2 grid */}
        <div className="grid grid-cols-2 gap-4">
          {slide.status.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              className="flex items-center gap-3 p-4 bg-success/10 border border-success/20 rounded-xl"
            >
              <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-success-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-foreground font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ============================================
// PRODUCT SLIDE - Triptych + Statement Pattern
// ============================================
function ProductSlide({ slide }: { slide: ProductSlideData }) {
  return (
    <div className="h-full w-full bg-muted/30 flex items-center justify-center p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <SlideHeader title={slide.title} icon={slide.icon} />
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-primary mb-10"
        >
          {slide.headline}
        </motion.h2>
        
        {/* Triptych - 3 equal cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {slide.tech.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="font-semibold text-primary text-lg mb-4">{tech.title}</div>
              <div className="space-y-3">
                {tech.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Statement banner */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-primary rounded-xl p-8 text-center"
        >
          <div className="text-xl md:text-2xl font-semibold text-primary-foreground">{slide.differentiator}</div>
        </motion.div>
      </div>
    </div>
  )
}

// ============================================
// PRICING SLIDE - Bento Triptych with Highlight
// ============================================
function PricingSlide({ slide }: { slide: PricingSlideData }) {
  return (
    <div className="h-full w-full bg-background flex items-center justify-center p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <SlideHeader title={slide.title} icon={slide.icon} />
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-primary mb-10"
        >
          {slide.headline}
        </motion.h2>
        
        {/* Pricing tiers - middle one highlighted + scaled */}
        <div className="grid grid-cols-3 gap-6 mb-10 items-center">
          {slide.tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className={`rounded-xl p-6 ${
                tier.popular 
                  ? "bg-primary text-primary-foreground scale-105 shadow-2xl relative z-10 border-2 border-accent" 
                  : "bg-card border border-border"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <div className={`text-lg font-semibold mb-2 ${tier.popular ? "text-primary-foreground" : "text-foreground"}`}>
                {tier.name}
              </div>
              <div className={`font-mono text-4xl font-bold mb-4 ${tier.popular ? "text-primary-foreground" : "text-primary"}`}>
                {tier.price}
                <span className={`text-base font-normal ${tier.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>/mo</span>
              </div>
              <div className="space-y-2">
                {tier.features.map((feature, i) => (
                  <div key={i} className={`flex items-center gap-2 text-sm ${tier.popular ? "text-primary-foreground/90" : "text-foreground/80"}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${tier.popular ? "bg-accent" : "bg-accent"}`} />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Unit economics - horizontal */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-16"
        >
          {slide.economics.map((econ, idx) => (
            <div key={idx} className="text-center">
              <div className="font-mono text-3xl font-bold text-accent">{econ.value}</div>
              <div className="text-sm text-muted-foreground">{econ.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

// ============================================
// COMPETITION SLIDE - Comparison Pattern
// ============================================
function CompetitionSlide({ slide }: { slide: CompetitionSlideData }) {
  return (
    <div className="h-full w-full bg-primary/5 flex items-center justify-center p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <SlideHeader title={slide.title} icon={slide.icon} />
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-primary mb-8"
        >
          {slide.headline}
        </motion.h2>
        
        {/* Comparison table */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-card rounded-xl border border-border overflow-hidden mb-8"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground">Product</th>
                <th className="text-center py-4 px-4 font-semibold text-muted-foreground">AI</th>
                <th className="text-center py-4 px-4 font-semibold text-muted-foreground">FM</th>
                <th className="text-center py-4 px-4 font-semibold text-muted-foreground">Protocols</th>
                <th className="text-center py-4 px-4 font-semibold text-muted-foreground">Outcomes</th>
                <th className="text-center py-4 px-6 font-semibold text-muted-foreground">Price</th>
              </tr>
            </thead>
            <tbody>
              {slide.comparison.map((row, idx) => (
                <tr key={idx} className={`border-b border-border last:border-0 ${idx === 0 ? "bg-success/10" : ""}`}>
                  <td className={`py-4 px-6 font-semibold ${idx === 0 ? "text-primary" : "text-foreground/70"}`}>
                    {row.name}
                    {idx === 0 && <span className="ml-2 text-xs text-accent">(Us)</span>}
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
        </motion.div>
        
        {/* Moat pills */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {slide.moat.map((item, idx) => (
            <span key={idx} className="px-5 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm font-medium text-accent">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

// ============================================
// GTM SLIDE - Big Left + Stack Pattern
// ============================================
function GTMSlide({ slide }: { slide: GTMSlideData }) {
  return (
    <div className="h-full w-full bg-background flex items-center justify-center p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <SlideHeader title={slide.title} icon={slide.icon} />
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-primary mb-10"
        >
          {slide.headline}
        </motion.h2>
        
        {/* Bento: Channels chart left (60%), Timeline stacked right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Channels - 3/5 */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3 bg-card border border-border rounded-xl p-6"
          >
            <div className="text-sm font-semibold text-muted-foreground mb-6">CHANNEL MIX</div>
            <div className="space-y-5">
              {slide.channels.map((channel, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-32 text-sm font-medium text-foreground">{channel.name}</div>
                  <div className="flex-1 h-4 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${channel.pct}%` }}
                      transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  </div>
                  <div className="w-20 text-right font-mono text-sm text-accent font-bold">{channel.signups}</div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Timeline - 2/5 */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <div className="text-sm font-semibold text-muted-foreground mb-2">GROWTH TIMELINE</div>
            {slide.timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="flex items-center gap-4 p-4 bg-accent/10 border border-accent/20 rounded-xl"
              >
                <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// ASK SLIDE - Data Grid + Statement Pattern
// ============================================
function AskSlide({ slide }: { slide: AskSlideData }) {
  return (
    <div className="h-full w-full bg-muted/30 flex items-center justify-center p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <SlideHeader title={slide.title} icon={slide.icon} />
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-accent mb-10"
        >
          {slide.headline}
        </motion.h2>
        
        {/* Bento: Use of funds grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {slide.funds.map((fund, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className={`rounded-xl p-6 ${idx === 0 ? "bg-primary text-primary-foreground" : "bg-card border border-border"}`}
            >
              <div className={`font-mono text-3xl font-bold mb-2 ${idx === 0 ? "text-accent" : "text-primary"}`}>
                {fund.amount}
              </div>
              <div className={`font-semibold mb-2 ${idx === 0 ? "text-primary-foreground" : "text-foreground"}`}>
                {fund.purpose}
              </div>
              <div className={`text-sm ${idx === 0 ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {fund.items}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Milestones - horizontal strip */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <div className="text-sm font-semibold text-muted-foreground mb-4">MRR MILESTONES</div>
          <div className="flex justify-around">
            {slide.milestones.map((ms, idx) => (
              <div key={idx} className="text-center">
                <div className="font-mono text-sm text-muted-foreground mb-1">{ms.month}</div>
                <div className="font-mono text-3xl font-bold text-accent">{ms.mrr}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// ============================================
// WHY NOW SLIDE - Statement + Proof Pattern
// ============================================
function WhyNowSlide({ slide }: { slide: WhyNowSlideData }) {
  return (
    <div className="h-full w-full bg-background flex items-center justify-center p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <SlideHeader title={slide.title} icon={slide.icon} />
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center"
        >
          {slide.headline}
        </motion.h2>
        
        {/* Reasons - 2x2 bento grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {slide.reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors"
            >
              <div className="font-semibold text-primary text-lg mb-2">{reason.title}</div>
              <div className="text-foreground/70">{reason.desc}</div>
            </motion.div>
          ))}
        </div>
        
        {/* Timing contrast - NOW highlighted */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex gap-4 justify-center"
        >
          {slide.contrast.map((item, idx) => (
            <span
              key={idx}
              className={`px-5 py-3 rounded-full text-sm font-medium ${
                idx === 2 
                  ? "bg-accent text-accent-foreground shadow-lg scale-110" 
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

// ============================================
// VISION SLIDE - Statement + Roadmap Pattern
// ============================================
function VisionSlide({ slide }: { slide: VisionSlideData }) {
  return (
    <div className="h-full w-full relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/pitch/vision-visual.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/80" />
      </div>
      
      <div className="relative h-full flex items-center justify-center p-8 md:p-16">
        <div className="max-w-5xl w-full text-center">
          <SlideHeader title={slide.title} icon={slide.icon} light centered />
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-white mb-12"
          >
            {slide.headline}
          </motion.h2>
          
          {/* Roadmap - horizontal timeline */}
          <div className="flex flex-col md:flex-row gap-6 mb-12 justify-center">
            {slide.roadmap.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 flex-1 max-w-xs"
              >
                <div className="font-mono text-accent text-sm font-bold mb-2">{item.year}</div>
                <div className="font-semibold text-white text-lg mb-2">{item.milestone}</div>
                <div className="text-white/60 text-sm">{item.metrics}</div>
              </motion.div>
            ))}
          </div>
          
          {/* Closing statement */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-2xl md:text-3xl font-bold text-accent"
          >
            &ldquo;{slide.closing}&rdquo;
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// SLIDE HEADER COMPONENT
// ============================================
function SlideHeader({ title, icon: Icon, light = false, centered = false }: { 
  title: string
  icon: LucideIcon
  light?: boolean
  centered?: boolean
}) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`flex items-center gap-3 mb-6 ${centered ? "justify-center" : ""}`}
    >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${light ? "bg-white/10" : "bg-primary/10"}`}>
        <Icon className={`w-5 h-5 ${light ? "text-accent" : "text-primary"}`} />
      </div>
      <span className={`font-mono text-sm uppercase tracking-widest ${light ? "text-white/60" : "text-muted-foreground"}`}>
        {title}
      </span>
    </motion.div>
  )
}
