"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { User, CreditCard, Bell, Save } from "lucide-react"

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    name: "Dr. Jane Doe",
    email: "jane@practice.com",
    practice: "Functional Wellness Center",
  })
  const { toast } = useToast()

  const handleSaveProfile = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile has been saved successfully",
    })
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-h2 text-primary">Settings</h1>
        <p className="text-text-muted">Manage your account and preferences</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="w-4 h-4" /> Profile
            </TabsTrigger>
            <TabsTrigger value="subscription" className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" /> Subscription
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="w-4 h-4" /> Notifications
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal and practice details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-label text-text-primary block mb-2">Full Name</label>
                  <Input
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-label text-text-primary block mb-2">Email Address</label>
                  <Input
                    type="email"
                    value={profile.email}
                    disabled
                    className="bg-surface"
                  />
                  <p className="text-xs text-text-muted mt-1">Contact support to change your email</p>
                </div>
                <div>
                  <label className="text-label text-text-primary block mb-2">Practice Name</label>
                  <Input
                    value={profile.practice}
                    onChange={(e) => setProfile({ ...profile, practice: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-label text-text-primary block mb-2">Password</label>
                  <Button variant="outline">Change Password</Button>
                </div>
                <div className="pt-4">
                  <Button onClick={handleSaveProfile} className="bg-accent hover:bg-accent-hover text-white">
                    <Save className="w-4 h-4 mr-2" /> Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="subscription">
            <Card>
              <CardHeader>
                <CardTitle>Current Plan</CardTitle>
                <CardDescription>Manage your subscription and billing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-surface rounded-lg p-6 mb-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-2">
                        Starter Plan
                      </span>
                      <p className="text-3xl font-bold text-primary">$49<span className="text-lg font-normal text-text-muted">/month</span></p>
                      <p className="text-text-muted mt-1">Next billing date: March 1, 2026</p>
                    </div>
                    <Button variant="outline">Upgrade Plan</Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-text-primary">Usage This Month</h4>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-text-muted">Protocols Created</span>
                      <span className="font-medium">12 / Unlimited</span>
                    </div>
                    <div className="h-2 bg-surface rounded-full overflow-hidden">
                      <div className="h-full bg-accent w-1/3 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-text-muted">Clients</span>
                      <span className="font-medium">24</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border mt-6">
                  <Button variant="outline" className="text-destructive border-destructive hover:bg-destructive/5">
                    Cancel Subscription
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Choose how you want to be notified</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <div>
                    <p className="font-medium text-text-primary">Protocol Reminders</p>
                    <p className="text-sm text-text-muted">Get notified about follow-up appointments</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-accent" />
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <div>
                    <p className="font-medium text-text-primary">Weekly Summary</p>
                    <p className="text-sm text-text-muted">Receive a weekly digest of your activity</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-accent" />
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <div>
                    <p className="font-medium text-text-primary">Product Updates</p>
                    <p className="text-sm text-text-muted">Learn about new features and improvements</p>
                  </div>
                  <input type="checkbox" className="w-5 h-5 accent-accent" />
                </div>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium text-text-primary">Marketing Emails</p>
                    <p className="text-sm text-text-muted">Receive tips and educational content</p>
                  </div>
                  <input type="checkbox" className="w-5 h-5 accent-accent" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
