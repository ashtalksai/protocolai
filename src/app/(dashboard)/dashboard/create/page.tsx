"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { 
  Brain, 
  Loader2, 
  Plus, 
  Trash2, 
  Download, 
  RefreshCw,
  Save,
  Sparkles
} from "lucide-react"

const mockClients = [
  { id: "1", name: "John Smith" },
  { id: "2", name: "Sarah Johnson" },
  { id: "3", name: "Mike Williams" },
  { id: "4", name: "Emily Brown" },
]

interface Supplement {
  name: string
  dosage: string
  timing: string
  duration: string
}

interface Protocol {
  title: string
  supplements: Supplement[]
  diet: string
  lifestyle: string
  followUp: string
  notes: string
}

export default function CreateProtocolPage() {
  const [selectedClient, setSelectedClient] = useState("")
  const [symptoms, setSymptoms] = useState("")
  const [labs, setLabs] = useState("")
  const [history, setHistory] = useState("")
  const [additionalNotes, setAdditionalNotes] = useState("")
  const [generating, setGenerating] = useState(false)
  const [protocol, setProtocol] = useState<Protocol | null>(null)
  const { toast } = useToast()

  const handleGenerate = async () => {
    if (!selectedClient || !symptoms) {
      toast({
        title: "Missing information",
        description: "Please select a client and enter symptoms",
        variant: "destructive"
      })
      return
    }

    setGenerating(true)

    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 3000))

    setProtocol({
      title: "Comprehensive Gut Health & Inflammation Protocol",
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
      notes: ""
    })

    setGenerating(false)
    toast({
      title: "Protocol Generated",
      description: "Review and edit the protocol before saving",
    })
  }

  const handleSave = () => {
    toast({
      title: "Protocol Saved",
      description: "Protocol has been saved successfully",
    })
  }

  const addSupplement = () => {
    if (protocol) {
      setProtocol({
        ...protocol,
        supplements: [...protocol.supplements, { name: "", dosage: "", timing: "Morning", duration: "" }]
      })
    }
  }

  const removeSupplement = (index: number) => {
    if (protocol) {
      setProtocol({
        ...protocol,
        supplements: protocol.supplements.filter((_, i) => i !== index)
      })
    }
  }

  const updateSupplement = (index: number, field: keyof Supplement, value: string) => {
    if (protocol) {
      const updated = [...protocol.supplements]
      updated[index] = { ...updated[index], [field]: value }
      setProtocol({ ...protocol, supplements: updated })
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-h2 text-primary">Create Protocol</h1>
        <p className="text-text-muted">Generate a personalized protocol with AI assistance</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column: Input Form */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-h4">Client Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-label text-text-primary block mb-2">Select Client</label>
                <Select value={selectedClient} onValueChange={setSelectedClient}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a client..." />
                  </SelectTrigger>
                  <SelectContent>
                    {mockClients.map(client => (
                      <SelectItem key={client.id} value={client.id}>
                        {client.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-text-muted mt-1">
                  Or <button className="text-accent hover:underline">create new client</button>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-h4">Clinical Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-label text-text-primary block mb-2">Symptoms</label>
                <Textarea
                  placeholder="e.g., Fatigue, brain fog, digestive issues, joint pain..."
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  rows={4}
                />
              </div>

              <div>
                <label className="text-label text-text-primary block mb-2">Lab Summary</label>
                <Textarea
                  placeholder="Paste lab results or summarize key findings..."
                  value={labs}
                  onChange={(e) => setLabs(e.target.value)}
                  rows={4}
                />
              </div>

              <div>
                <label className="text-label text-text-primary block mb-2">Health History</label>
                <Textarea
                  placeholder="Relevant medical history, medications, allergies..."
                  value={history}
                  onChange={(e) => setHistory(e.target.value)}
                  rows={4}
                />
              </div>

              <div>
                <label className="text-label text-text-primary block mb-2">Additional Notes (Optional)</label>
                <Textarea
                  placeholder="Any other relevant information..."
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Button
            onClick={handleGenerate}
            disabled={generating}
            className="w-full bg-accent hover:bg-accent-hover text-white py-6 text-lg"
          >
            {generating ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Analyzing data and generating protocol...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 mr-2" />
                Generate Protocol
              </>
            )}
          </Button>
        </div>

        {/* Right Column: Protocol Preview */}
        <div className="lg:sticky lg:top-6 lg:self-start">
          <AnimatePresence mode="wait">
            {!protocol ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Card className="border-2 border-dashed border-border bg-surface/50">
                  <CardContent className="py-16">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                        <Brain className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-h4 text-text-muted mb-2">Protocol Preview</h3>
                      <p className="text-text-muted">
                        Enter client data and click &quot;Generate Protocol&quot; to create an AI-powered treatment plan
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                key="protocol"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Protocol Title */}
                <Card>
                  <CardContent className="pt-6">
                    <Input
                      value={protocol.title}
                      onChange={(e) => setProtocol({ ...protocol, title: e.target.value })}
                      className="text-xl font-semibold border-none p-0 h-auto focus-visible:ring-0"
                    />
                  </CardContent>
                </Card>

                {/* Supplements */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-h4">Supplements</CardTitle>
                      <Button variant="outline" size="sm" onClick={addSupplement}>
                        <Plus className="w-4 h-4 mr-1" /> Add
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {protocol.supplements.map((supp, index) => (
                        <div key={index} className="grid grid-cols-12 gap-2 items-center">
                          <Input
                            value={supp.name}
                            onChange={(e) => updateSupplement(index, 'name', e.target.value)}
                            placeholder="Name"
                            className="col-span-4 text-sm"
                          />
                          <Input
                            value={supp.dosage}
                            onChange={(e) => updateSupplement(index, 'dosage', e.target.value)}
                            placeholder="Dosage"
                            className="col-span-2 text-sm font-mono"
                          />
                          <Select
                            value={supp.timing}
                            onValueChange={(v) => updateSupplement(index, 'timing', v)}
                          >
                            <SelectTrigger className="col-span-3 text-sm">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Morning">Morning</SelectItem>
                              <SelectItem value="Afternoon">Afternoon</SelectItem>
                              <SelectItem value="Evening">Evening</SelectItem>
                              <SelectItem value="With meals">With meals</SelectItem>
                              <SelectItem value="Bedtime">Bedtime</SelectItem>
                            </SelectContent>
                          </Select>
                          <Input
                            value={supp.duration}
                            onChange={(e) => updateSupplement(index, 'duration', e.target.value)}
                            placeholder="Duration"
                            className="col-span-2 text-sm"
                          />
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeSupplement(index)}
                            className="col-span-1 h-8 w-8 p-0 text-destructive"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Diet */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-h4">Diet Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={protocol.diet}
                      onChange={(e) => setProtocol({ ...protocol, diet: e.target.value })}
                      rows={10}
                      className="font-mono text-sm"
                    />
                  </CardContent>
                </Card>

                {/* Lifestyle */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-h4">Lifestyle Interventions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={protocol.lifestyle}
                      onChange={(e) => setProtocol({ ...protocol, lifestyle: e.target.value })}
                      rows={10}
                      className="font-mono text-sm"
                    />
                  </CardContent>
                </Card>

                {/* Follow-Up */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-h4">Follow-Up Testing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={protocol.followUp}
                      onChange={(e) => setProtocol({ ...protocol, followUp: e.target.value })}
                      rows={8}
                      className="font-mono text-sm"
                    />
                  </CardContent>
                </Card>

                {/* Practitioner Notes */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-h4">Practitioner Notes (Private)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={protocol.notes}
                      onChange={(e) => setProtocol({ ...protocol, notes: e.target.value })}
                      placeholder="Internal notes, not shared with client..."
                      rows={4}
                    />
                  </CardContent>
                </Card>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    onClick={handleSave}
                    className="flex-1 bg-accent hover:bg-accent-hover text-white"
                  >
                    <Save className="w-4 h-4 mr-2" /> Save Protocol
                  </Button>
                  <Button variant="outline" onClick={handleGenerate}>
                    <RefreshCw className="w-4 h-4 mr-2" /> Regenerate
                  </Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" /> Export PDF
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
