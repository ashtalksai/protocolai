"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { XCircle } from "lucide-react"

const painPoints = [
  {
    title: "Manual Supplement Research",
    description: "Hours spent researching supplement stacks, dosages, and interactions for each client."
  },
  {
    title: "Copy-Paste from Old Protocols",
    description: "Reusing templates that don't account for individual client needs and latest research."
  },
  {
    title: "Formatting for Clients",
    description: "More time formatting documents than actually analyzing patient data."
  }
]

export function ProblemSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.h2 
          className="text-h2 text-primary text-center mb-4"
          {...fadeInUp}
        >
          Spending 3-4 Hours Per Client on Protocol Work?
        </motion.h2>
        
        <motion.p 
          className="text-body-lg text-text-secondary text-center max-w-2xl mx-auto mb-16"
          {...fadeInUp}
          transition={{ delay: 0.1 }}
        >
          You became a practitioner to help people heal, not to spend your days on admin work.
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          {...staggerContainer}
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              className="bg-white rounded-xl border border-border p-8 hover:shadow-card-hover transition-shadow"
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="text-h4 text-primary">{point.title}</h3>
              </div>
              <p className="text-text-secondary">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
