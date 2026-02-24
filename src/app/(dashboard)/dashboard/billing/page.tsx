"use client"

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
import { CreditCard, Download, ExternalLink } from "lucide-react"

const billingHistory = [
  { id: "1", date: "Feb 1, 2026", description: "Starter Plan - Monthly", amount: "$49.00", status: "Paid" },
  { id: "2", date: "Jan 1, 2026", description: "Starter Plan - Monthly", amount: "$49.00", status: "Paid" },
  { id: "3", date: "Dec 1, 2025", description: "Starter Plan - Monthly", amount: "$49.00", status: "Paid" },
  { id: "4", date: "Nov 1, 2025", description: "Free Trial", amount: "$0.00", status: "Trial" },
]

export default function BillingPage() {
  const { toast } = useToast()

  const handleUpdatePayment = () => {
    toast({
      title: "Stripe Portal",
      description: "Redirecting to Stripe Customer Portal...",
    })
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-h2 text-primary">Billing</h1>
        <p className="text-text-muted">Manage your subscription and payment methods</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Current Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Current Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-2">
                    Starter Plan
                  </span>
                  <p className="text-4xl font-bold text-primary">
                    $49<span className="text-lg font-normal text-text-muted">/month</span>
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>✓ Unlimited protocols</li>
                  <li>✓ Client management</li>
                  <li>✓ PDF export</li>
                  <li>✓ Email support</li>
                </ul>
                <p className="text-sm text-text-muted">
                  Next billing date: <strong>March 1, 2026</strong>
                </p>
                <div className="flex gap-2">
                  <Button className="bg-accent hover:bg-accent-hover text-white">
                    Upgrade Plan
                  </Button>
                  <Button variant="outline" className="text-destructive border-destructive hover:bg-destructive/5">
                    Cancel
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Payment Method */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 p-4 bg-surface rounded-lg mb-4">
                <div className="w-12 h-8 bg-primary rounded flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-text-primary">•••• •••• •••• 4242</p>
                  <p className="text-sm text-text-muted">Expires 12/27</p>
                </div>
              </div>
              <Button variant="outline" onClick={handleUpdatePayment}>
                <ExternalLink className="w-4 h-4 mr-2" /> Update Payment Method
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Billing History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Billing History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Invoice</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {billingHistory.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="text-text-muted">{item.date}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell className="font-mono">{item.amount}</TableCell>
                    <TableCell>
                      <Badge 
                        className={
                          item.status === "Paid" 
                            ? "bg-success/10 text-success" 
                            : "bg-secondary text-text-muted"
                        }
                      >
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      {item.status === "Paid" && (
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
