"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { fadeInUp, slideIn } from "@/lib/animations"

const steps = [
  {
    number: "1",
    title: "Input Data",
    description: "Enter symptoms, lab results, and health history"
  },
  {
    number: "2",
    title: "Generate",
    description: "AI creates a complete personalized protocol"
  },
  {
    number: "3",
    title: "Refine & Share",
    description: "Review, edit, and share with your client"
  }
]

export function SolutionSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.h2 
          className="text-h2 text-primary text-center mb-4"
          {...fadeInUp}
        >
          From Client Data to Complete Protocol in{" "}
          <span className="text-accent">3 Minutes</span>
        </motion.h2>
        
        <motion.p 
          className="text-body-lg text-text-secondary text-center max-w-2xl mx-auto mb-12"
          {...fadeInUp}
          transition={{ delay: 0.1 }}
        >
          Let AI handle the research and formatting while you focus on clinical decisions.
        </motion.p>
        
        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <Image
            src="/images/how-it-works-flow.png"
            alt="How ProtocolAI Works"
            width={1000}
            height={400}
            className="w-full rounded-xl"
          />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative bg-surface rounded-xl border border-border p-8 text-center"
              {...slideIn}
              transition={{ delay: index * 0.15 }}
            >
              {/* Arrow between steps on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-accent text-2xl z-10">
                  →
                </div>
              )}
              
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent text-white font-mono font-bold text-xl flex items-center justify-center">
                {step.number}
              </div>
              <h3 className="text-h4 text-primary mb-2">{step.title}</h3>
              <p className="text-text-secondary">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
