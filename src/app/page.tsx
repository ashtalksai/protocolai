import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/landing/hero"
import { ProblemSection } from "@/components/landing/problem"
import { SolutionSection } from "@/components/landing/solution"
import { FeaturesSection } from "@/components/landing/features"
import { SocialProofSection } from "@/components/landing/social-proof"
import { PricingSection } from "@/components/landing/pricing"
import { FAQSection } from "@/components/landing/faq"
import { CTASection } from "@/components/landing/cta"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <SocialProofSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
