"use client"

import { motion, animate } from "framer-motion"
import { fadeInUp } from "@/lib/animations"
import { useEffect, useState } from "react"

const stats = [
  { value: 1000, suffix: "+", label: "Protocols Generated" },
  { value: 10000, suffix: "+", label: "Clients Helped" },
  { value: 15, suffix: " hrs", label: "Saved Per Week (avg)" }
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  
  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplayValue(Math.round(v))
    })
    return controls.stop
  }, [value])

  return (
    <span className="font-mono">
      {displayValue.toLocaleString()}{suffix}
    </span>
  )
}

export function SocialProofSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.h2 
          className="text-h2 text-primary text-center mb-4"
          {...fadeInUp}
        >
          Trusted by Functional Medicine Practitioners
        </motion.h2>
        
        <motion.p 
          className="text-body-lg text-text-secondary text-center max-w-2xl mx-auto mb-12"
          {...fadeInUp}
          transition={{ delay: 0.1 }}
        >
          Join practitioners who are already saving hours every week.
        </motion.p>
        
        {/* Testimonial */}
        <motion.div 
          className="max-w-3xl mx-auto mb-16"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-surface rounded-xl border-l-4 border-accent p-8">
            <p className="text-lg italic text-text-secondary mb-4">
              &quot;ProtocolAI has transformed how I create treatment plans. What used to take me 
              3-4 hours per client now takes just 15 minutes. I can finally focus on what I 
              love — helping my patients heal.&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                JD
              </div>
              <div>
                <p className="font-semibold text-primary">Dr. Jane D.</p>
                <p className="text-sm text-text-muted">Functional Medicine Practitioner</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          {...fadeInUp}
          transition={{ delay: 0.3 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-5xl font-bold text-primary mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-text-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
