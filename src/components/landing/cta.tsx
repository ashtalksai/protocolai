"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'url(/images/bg-grid-pattern.png)',
          backgroundSize: '200px'
        }}
      />
      
      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-h2 text-white mb-4"
            {...fadeInUp}
          >
            Ready to Save 15 Hours Per Week?
          </motion.h2>
          
          <motion.p 
            className="text-lg text-white/80 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.1 }}
          >
            Join functional medicine practitioners who are already spending less time 
            on admin and more time with clients.
          </motion.p>
          
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <Button 
              asChild 
              size="lg"
              className="bg-accent hover:bg-accent-hover text-white px-8 py-6 text-lg"
            >
              <Link href="/signup">
                Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.p 
            className="mt-4 text-white/60 text-sm"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            No credit card required. 7-day free trial.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
