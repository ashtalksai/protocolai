"use client"

import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is my client data secure?",
    answer: "Absolutely. We take data security seriously. All data is encrypted in transit and at rest using AES-256 encryption. We're working towards HIPAA compliance and SOC 2 Type II certification. Your client data is never used to train our AI models."
  },
  {
    question: "Can I edit the generated protocols?",
    answer: "Yes! You have full editorial control over every protocol. The AI generates a comprehensive starting point, but you can edit, add, or remove any element. Think of it as a smart first draft that you can customize to your clinical judgment."
  },
  {
    question: "Does this replace my clinical judgment?",
    answer: "No, and it shouldn&apos;t. ProtocolAI is a tool designed to assist you, not prescribe for you. It accelerates the research and formatting process, but the clinical decisions remain in your hands. You&apos;re always in control."
  },
  {
    question: "What frameworks does the AI use?",
    answer: "Our AI is trained on functional medicine literature, IFM (Institute for Functional Medicine) guidelines, and the latest peer-reviewed research. We regularly update our models to incorporate new evidence and best practices."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. There are no long-term contracts or commitments. You can cancel your subscription at any time, and you'll retain access until the end of your billing period. We believe in earning your business every month."
  },
  {
    question: "Do you integrate with my EMR?",
    answer: "Not yet, but it's on our roadmap. We're working on integrations with popular EMR systems. In the meantime, you can easily export protocols as PDF documents and upload them to your existing system."
  }
]

export function FAQSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.h2 
          className="text-h2 text-primary text-center mb-4"
          {...fadeInUp}
        >
          Frequently Asked Questions
        </motion.h2>
        
        <motion.p 
          className="text-body-lg text-text-secondary text-center max-w-2xl mx-auto mb-12"
          {...fadeInUp}
          transition={{ delay: 0.1 }}
        >
          Got questions? We&apos;ve got answers.
        </motion.p>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-surface rounded-xl border border-border px-6"
              >
                <AccordionTrigger className="text-left text-text-primary font-semibold hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
