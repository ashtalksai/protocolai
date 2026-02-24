"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out ProtocolAI",
    features: [
      { text: "1 protocol per month", included: true },
      { text: "Basic AI generation", included: true },
      { text: "PDF export", included: true },
      { text: "Client management", included: false },
      { text: "Client portals", included: false },
      { text: "Priority support", included: false }
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "For practitioners ready to scale",
    features: [
      { text: "Unlimited protocols", included: true },
      { text: "Advanced AI generation", included: true },
      { text: "PDF export", included: true },
      { text: "Client management", included: true },
      { text: "Client portals", included: false },
      { text: "Email support", included: true }
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Pro",
    price: "$149",
    period: "/month",
    description: "For busy practices with multiple practitioners",
    features: [
      { text: "Unlimited protocols", included: true },
      { text: "Advanced AI generation", included: true },
      { text: "PDF export", included: true },
      { text: "Client management", included: true },
      { text: "Client portals", included: true },
      { text: "Outcomes tracking", included: true },
      { text: "Priority support", included: true }
    ],
    cta: "Start Free Trial",
    popular: false
  }
]

export function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container-custom">
        <motion.h2 
          className="text-h2 text-primary text-center mb-4"
          {...fadeInUp}
        >
          Simple, Transparent Pricing
        </motion.h2>
        
        <motion.p 
          className="text-body-lg text-text-secondary text-center max-w-2xl mx-auto mb-16"
          {...fadeInUp}
          transition={{ delay: 0.1 }}
        >
          Start free, upgrade when you&apos;re ready. No hidden fees.
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          {...staggerContainer}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-white rounded-xl border-2 p-8 ${
                plan.popular 
                  ? "border-accent shadow-lg scale-105" 
                  : "border-border"
              }`}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-sm font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-h3 text-primary mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className={`text-4xl font-bold ${plan.popular ? "text-accent" : "text-primary"}`}>
                  {plan.price}
                </span>
                <span className="text-text-muted">{plan.period}</span>
              </div>
              <p className="text-text-secondary text-sm mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-2">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-success" />
                    ) : (
                      <X className="w-5 h-5 text-text-disabled" />
                    )}
                    <span className={feature.included ? "text-text-secondary" : "text-text-disabled"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button 
                asChild 
                className={`w-full ${
                  plan.popular 
                    ? "bg-accent hover:bg-accent-hover text-white" 
                    : "bg-white border-2 border-primary text-primary hover:bg-primary/5"
                }`}
              >
                <Link href="/signup">{plan.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
