"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"

export default function PrivacyPage() {
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
          <h1 className="text-h1 text-primary mb-4">Privacy Policy</h1>
          <p className="text-text-muted mb-8">Last updated: February 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-h3 text-primary mb-4">1. Information We Collect</h2>
              <p className="text-text-secondary mb-4">
                We collect information you provide directly, including account information (name, email, password), client health data you input for protocol generation, and usage data about how you interact with our Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-h3 text-primary mb-4">2. How We Use Your Information</h2>
              <p className="text-text-secondary mb-4">
                We use collected information to provide and improve our Service, generate AI-powered protocols, process payments, send service-related communications, and ensure platform security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-h3 text-primary mb-4">3. Data Security</h2>
              <p className="text-text-secondary mb-4">
                We implement industry-standard security measures to protect your data, including encryption in transit and at rest, regular security audits, and access controls. Client health data is handled with extra care to maintain HIPAA-compliant practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-h3 text-primary mb-4">4. Data Sharing</h2>
              <p className="text-text-secondary mb-4">
                We do not sell your personal information. We may share data with service providers who assist in operating our platform, and as required by law. All third-party providers are bound by confidentiality agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-h3 text-primary mb-4">5. Your Rights</h2>
              <p className="text-text-secondary mb-4">
                You have the right to access, correct, or delete your personal data. You may export your data at any time through your account settings. To exercise these rights, contact us at privacy@protocolai.com.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-h3 text-primary mb-4">6. Cookies</h2>
              <p className="text-text-secondary mb-4">
                We use essential cookies to maintain your session and preferences. Analytics cookies help us understand how the Service is used. You can manage cookie preferences through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-h3 text-primary mb-4">7. Data Retention</h2>
              <p className="text-text-secondary mb-4">
                We retain your data for as long as your account is active. Upon account deletion, we remove personal data within 30 days, except where retention is required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-h3 text-primary mb-4">8. Contact</h2>
              <p className="text-text-secondary mb-4">
                For privacy-related inquiries, contact our Data Protection Officer at{" "}
                <a href="mailto:privacy@protocolai.com" className="text-accent hover:underline">
                  privacy@protocolai.com
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
