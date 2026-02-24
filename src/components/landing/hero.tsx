"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { fadeInUp, scaleIn } from "@/lib/animations"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-white to-background">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'url(/images/bg-grid-pattern.png)',
          backgroundSize: '200px'
        }}
      />
      
      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-h1 text-primary mb-6"
            {...fadeInUp}
          >
            Generate Functional Medicine{" "}
            <span className="text-accent">Protocols in Minutes</span>, Not Hours
          </motion.h1>
          
          <motion.p 
            className="text-body-lg text-text-secondary max-w-2xl mx-auto mb-8"
            {...fadeInUp}
            transition={{ delay: 0.1 }}
          >
            AI-powered protocol builder for functional medicine practitioners. 
            Labs → Symptoms → Personalized protocols with supplements, diet, 
            lifestyle, and testing schedules.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
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
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg"
            >
              <Play className="mr-2 w-5 h-5" /> Watch Demo
            </Button>
          </motion.div>
          
          <motion.p 
            className="mt-4 text-text-muted text-sm"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            No credit card required. 7-day free trial.
          </motion.p>
        </div>
        
        <motion.div 
          className="mt-16 max-w-5xl mx-auto"
          {...scaleIn}
          transition={{ delay: 0.4 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
            <Image
              src="/images/hero-ai-analysis.png"
              alt="ProtocolAI Dashboard"
              width={1200}
              height={675}
              className="w-full"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
