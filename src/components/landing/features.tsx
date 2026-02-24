"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { Brain, Pill, Salad, Dumbbell, FlaskConical, Users } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Generation",
    description: "Trained on functional medicine frameworks and latest research to generate evidence-based protocols."
  },
  {
    icon: Pill,
    title: "Supplement Stacks",
    description: "Complete supplement recommendations with dosages, timing, and duration for each protocol."
  },
  {
    icon: Salad,
    title: "Diet Recommendations",
    description: "Personalized nutrition plans tailored to each client's needs, conditions, and goals."
  },
  {
    icon: Dumbbell,
    title: "Lifestyle Interventions",
    description: "Evidence-based lifestyle changes including sleep, stress management, and movement."
  },
  {
    icon: FlaskConical,
    title: "Follow-Up Testing",
    description: "Recommended follow-up labs and testing schedules to track progress and outcomes."
  },
  {
    icon: Users,
    title: "Client Management",
    description: "All your clients and protocols organized in one place with easy search and filtering."
  }
]

export function FeaturesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.h2 
          className="text-h2 text-primary text-center mb-4"
          {...fadeInUp}
        >
          Everything You Need to Build Better Protocols
        </motion.h2>
        
        <motion.p 
          className="text-body-lg text-text-secondary text-center max-w-2xl mx-auto mb-16"
          {...fadeInUp}
          transition={{ delay: 0.1 }}
        >
          A comprehensive toolkit designed specifically for functional medicine practitioners.
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          {...staggerContainer}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-xl border border-border p-8 hover:border-accent hover:shadow-card-hover transition-all group"
              {...fadeInUp}
              transition={{ delay: index * 0.08 }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                <feature.icon className="w-6 h-6 text-accent group-hover:text-white" />
              </div>
              <h3 className="text-h4 text-primary mb-2">{feature.title}</h3>
              <p className="text-text-secondary text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
