import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { PricingSection } from "@/components/landing/pricing"
import { FAQSection } from "@/components/landing/faq"
import { CTASection } from "@/components/landing/cta"

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
