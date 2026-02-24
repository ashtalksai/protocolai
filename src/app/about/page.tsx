import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Target, Zap, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-b from-white to-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-h1 text-primary mb-6">
                Built by Practitioners, for Practitioners
              </h1>
              <p className="text-body-lg text-text-secondary">
                We believe functional medicine should run on data, not just intuition. 
                ProtocolAI was born from the frustration of spending hours on protocol 
                creation instead of patient care.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-h2 text-primary mb-8">Our Story</h2>
              <div className="prose prose-lg text-text-secondary">
                <p>
                  After years of watching functional medicine practitioners spend 3-4 hours 
                  per client on protocol creation, we knew there had to be a better way.
                </p>
                <p>
                  The process was always the same: reviewing labs, cross-referencing research, 
                  building supplement stacks, writing diet recommendations, formatting everything 
                  into a client-friendly document. Hours of work that could be spent with patients.
                </p>
                <p>
                  ProtocolAI changes this. By combining the latest in AI technology with deep 
                  functional medicine expertise, we&apos;ve created a tool that generates comprehensive, 
                  personalized protocols in minutes — not hours.
                </p>
                <p>
                  This isn&apos;t about replacing practitioners. It&apos;s about amplifying them. The AI 
                  handles the research and formatting, while you maintain full clinical judgment 
                  and control over every recommendation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-h2 text-primary text-center mb-12">
                Our Mission
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-h4 text-primary mb-2">Efficiency</h3>
                  <p className="text-text-secondary">
                    Reduce protocol creation time from hours to minutes, giving practitioners 
                    more time with patients.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <Target className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-h4 text-primary mb-2">Evidence-Based</h3>
                  <p className="text-text-secondary">
                    Ground every recommendation in the latest functional medicine research 
                    and clinical frameworks.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-h4 text-primary mb-2">Practitioner-First</h3>
                  <p className="text-text-secondary">
                    Built with practitioners, for practitioners. Your clinical expertise 
                    always comes first.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-h2 text-white mb-4">
                Ready to Transform Your Practice?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Join practitioners who are already saving 15+ hours per week.
              </p>
              <Button 
                asChild 
                size="lg"
                className="bg-accent hover:bg-accent-hover text-white px-8 py-6 text-lg"
              >
                <Link href="/signup">
                  Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
