"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <header className="bg-white border-b border-border">
        <div className="container-custom py-4 flex items-center justify-between">
          <Link href="/" className="text-h4 text-primary font-bold">
            ProtocolAI
          </Link>
          <Link href="/login" className="text-accent hover:underline text-sm">
            Back to Login
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container-custom py-16">
        <motion.div
          className="max-w-3xl mx-auto bg-white rounded-xl border border-border p-8 md:p-12"
          {...fadeInUp}
        >
          <h1 className="text-h1 text-primary mb-4">Terms of Service</h1>
          <p className="text-text-muted mb-8">Last updated: February 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-h3 text-primary mb-4">1. Acceptance of Terms</h2>
              <p className="text-text-secondary mb-4">
                By accessing and using ProtocolAI (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-h3 text-primary mb-4">2. Description of Service</h2>
              <p className="text-text-secondary mb-4">
                ProtocolAI is an AI-powered tool designed to assist functional medicine practitioners in creating personalized health protocols. The Service provides AI-generated recommendations based on user input, but does not replace professional medical judgment.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-h3 text-primary mb-4">3. Professional Responsibility</h2>
              <p className="text-text-secondary mb-4">
                Users acknowledge that ProtocolAI is a tool to assist practitioners and not a substitute for professional medical advice, diagnosis, or treatment. All protocols generated should be reviewed and approved by qualified healthcare professionals before implementation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-h3 text-primary mb-4">4. User Accounts</h2>
              <p className="text-text-secondary mb-4">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-h3 text-primary mb-4">5. Data Privacy</h2>
              <p className="text-text-secondary mb-4">
                Your use of ProtocolAI is also governed by our{" "}
                <Link href="/privacy" className="text-accent hover:underline">
                  Privacy Policy
                </Link>
                , which describes how we collect, use, and protect your data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-h3 text-primary mb-4">6. Subscription and Payment</h2>
              <p className="text-text-secondary mb-4">
                Certain features of ProtocolAI require a paid subscription. You agree to pay all fees associated with your selected plan. Fees are non-refundable except as required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-h3 text-primary mb-4">7. Limitation of Liability</h2>
              <p className="text-text-secondary mb-4">
                ProtocolAI and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-h3 text-primary mb-4">8. Contact</h2>
              <p className="text-text-secondary mb-4">
                For questions about these Terms, please contact us at{" "}
                <a href="mailto:legal@protocolai.com" className="text-accent hover:underline">
                  legal@protocolai.com
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
