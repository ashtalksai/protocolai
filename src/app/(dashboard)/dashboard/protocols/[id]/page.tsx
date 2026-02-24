"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast"
import { 
  ArrowLeft, 
  Edit, 
  Download, 
  Archive, 
  Share2, 
  Calendar,
  User,
  Clock
} from "lucide-react"

// Mock data - in real app, this would come from API/database
const mockProtocol = {
  id: "1",
  title: "Comprehensive Gut Health & Inflammation Protocol",
  client: {
    name: "John Smith",
    age: 45,
    gender: "Male"
  },
  status: "Active",
  createdAt: "February 23, 2026",
  updatedAt: "February 24, 2026",
  supplements: [
    { name: "L-Glutamine", dosage: "5g", timing: "Morning", duration: "8 weeks" },
    { name: "Probiotics (Multi-strain)", dosage: "50 billion CFU", timing: "Evening", duration: "12 weeks" },
    { name: "Zinc Carnosine", dosage: "75mg", timing: "With meals", duration: "8 weeks" },
    { name: "Omega-3 Fish Oil", dosage: "2000mg EPA/DHA", timing: "With food", duration: "Ongoing" },
    { name: "Vitamin D3 + K2", dosage: "5000 IU / 100mcg", timing: "Morning", duration: "3 months" },
  ],
  diet: `## Anti-Inflammatory Diet Protocol

**Foods to Include:**
- Wild-caught fish (salmon, sardines, mackerel) - 3-4x weekly
- Leafy greens (spinach, kale, arugula) - daily
- Colorful vegetables (bell peppers, beets, carrots)
- Healthy fats (olive oil, avocado, nuts)
- Bone broth - 1 cup daily
- Fermented foods (sauerkraut, kimchi, kefir)

**Foods to Avoid:**
- Gluten-containing grains
- Dairy (except grass-fed butter/ghee)
- Refined sugars and processed foods
- Industrial seed oils
- Alcohol (first 4 weeks)

**Meal Timing:**
- 3 main meals, no snacking
- 12-14 hour overnight fast
- Last meal 3 hours before bed`,
  lifestyle: `## Lifestyle Interventions

**Sleep Optimization:**
- Target 7-9 hours nightly
- Blue light blocking after sunset
- Room temperature 65-68°F
- Consistent wake time

**Stress Management:**
- 10 minutes morning meditation
- Box breathing during stress (4-4-4-4)
- Nature walks 20+ minutes daily
- Journaling before bed

**Movement:**
- Walking 30 minutes daily
- Gentle yoga 2-3x weekly
- Avoid high-intensity exercise during healing phase
- Prioritize restorative movement`,
  followUp: `## Follow-Up Testing Schedule

**Week 4:**
- Symptom reassessment
- Adjust supplements if needed

**Week 8:**
- Comprehensive stool analysis
- Inflammatory markers (hs-CRP, ESR)
- Zonulin (intestinal permeability)

**Week 12:**
- Full blood panel
- Vitamin D retest
- Omega-3 index
- Protocol completion assessment`,
  notes: "Patient has history of NSAIDs use. Monitor for GI sensitivity when introducing new supplements."
}

const statusColors: Record<string, string> = {
  Active: "bg-success/10 text-success",
  Draft: "bg-secondary text-text-muted",
  Completed: "bg-info/10 text-info",
}

export default function ProtocolViewPage() {
  const params = useParams()
  const { toast } = useToast()

  const handleExport = () => {
    toast({
      title: "Exporting PDF",
      description: "Your protocol PDF is being generated...",
    })
  }

  const handleArchive = () => {
    toast({
      title: "Protocol Archived",
      description: "This protocol has been archived",
    })
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <Link 
          href="/dashboard" 
          className="inline-flex items-center text-text-muted hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-h2 text-primary">{mockProtocol.title}</h1>
              <Badge className={statusColors[mockProtocol.status]}>
                {mockProtocol.status}
              </Badge>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {mockProtocol.client.name} ({mockProtocol.client.age}, {mockProtocol.client.gender})
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Created: {mockProtocol.createdAt}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Updated: {mockProtocol.updatedAt}
              </span>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link href={`/dashboard/protocols/${params.id}/edit`}>
                <Edit className="w-4 h-4 mr-2" /> Edit
              </Link>
            </Button>
            <Button variant="outline" onClick={handleExport}>
              <Download className="w-4 h-4 mr-2" /> Export PDF
            </Button>
            <Button variant="outline" onClick={handleArchive}>
              <Archive className="w-4 h-4 mr-2" /> Archive
            </Button>
            <Button variant="outline" disabled title="Coming soon">
              <Share2 className="w-4 h-4 mr-2" /> Share
            </Button>
          </div>
        </div>
      </div>

      {/* Protocol Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6 print:space-y-4"
      >
        {/* Supplements */}
        <Card className="print:shadow-none print:border-none">
          <CardHeader>
            <CardTitle className="text-h3">Supplement Protocol</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Supplement</TableHead>
                  <TableHead>Dosage</TableHead>
                  <TableHead>Timing</TableHead>
                  <TableHead>Duration</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockProtocol.supplements.map((supp, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{supp.name}</TableCell>
                    <TableCell className="font-mono text-sm">{supp.dosage}</TableCell>
                    <TableCell>{supp.timing}</TableCell>
                    <TableCell>{supp.duration}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Diet */}
        <Card className="print:shadow-none print:border-none">
          <CardHeader>
            <CardTitle className="text-h3">Diet Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none text-text-secondary">
              {mockProtocol.diet.split('\n').map((line, i) => {
                if (line.startsWith('## ')) {
                  return <h3 key={i} className="text-lg font-semibold text-primary mt-4 mb-2">{line.replace('## ', '')}</h3>
                }
                if (line.startsWith('**') && line.endsWith('**')) {
                  return <p key={i} className="font-semibold mt-3 mb-1">{line.replace(/\*\*/g, '')}</p>
                }
                if (line.startsWith('- ')) {
                  return <li key={i} className="ml-4">{line.replace('- ', '')}</li>
                }
                if (line.trim()) {
                  return <p key={i}>{line}</p>
                }
                return null
              })}
            </div>
          </CardContent>
        </Card>

        {/* Lifestyle */}
        <Card className="print:shadow-none print:border-none">
          <CardHeader>
            <CardTitle className="text-h3">Lifestyle Interventions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none text-text-secondary">
              {mockProtocol.lifestyle.split('\n').map((line, i) => {
                if (line.startsWith('## ')) {
                  return <h3 key={i} className="text-lg font-semibold text-primary mt-4 mb-2">{line.replace('## ', '')}</h3>
                }
                if (line.startsWith('**') && line.endsWith('**')) {
                  return <p key={i} className="font-semibold mt-3 mb-1">{line.replace(/\*\*/g, '')}</p>
                }
                if (line.startsWith('- ')) {
                  return <li key={i} className="ml-4">{line.replace('- ', '')}</li>
                }
                if (line.trim()) {
                  return <p key={i}>{line}</p>
                }
                return null
              })}
            </div>
          </CardContent>
        </Card>

        {/* Follow-Up */}
        <Card className="print:shadow-none print:border-none">
          <CardHeader>
            <CardTitle className="text-h3">Follow-Up Testing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none text-text-secondary">
              {mockProtocol.followUp.split('\n').map((line, i) => {
                if (line.startsWith('## ')) {
                  return <h3 key={i} className="text-lg font-semibold text-primary mt-4 mb-2">{line.replace('## ', '')}</h3>
                }
                if (line.startsWith('**') && line.endsWith('**')) {
                  return <p key={i} className="font-semibold mt-3 mb-1">{line.replace(/\*\*/g, '')}</p>
                }
                if (line.startsWith('- ')) {
                  return <li key={i} className="ml-4">{line.replace('- ', '')}</li>
                }
                if (line.trim()) {
                  return <p key={i}>{line}</p>
                }
                return null
              })}
            </div>
          </CardContent>
        </Card>

        {/* Practitioner Notes */}
        {mockProtocol.notes && (
          <Card className="print:hidden">
            <CardHeader>
              <CardTitle className="text-h3">Practitioner Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary italic">{mockProtocol.notes}</p>
            </CardContent>
          </Card>
        )}
      </motion.div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:border-none {
            border: none !important;
          }
          aside, nav, footer {
            display: none !important;
          }
        }
      `}</style>
    </div>
  )
}
