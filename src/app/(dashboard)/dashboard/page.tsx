"use client"

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
import { Users, FileText, Activity, Plus, Eye, Edit, Archive } from "lucide-react"

const stats = [
  { label: "Total Clients", value: "24", icon: Users, trend: "+3 this month" },
  { label: "Protocols Created", value: "47", icon: FileText, trend: "+8 this month" },
  { label: "Active Protocols", value: "18", icon: Activity, trend: "2 expiring soon" },
]

const recentProtocols = [
  { id: "1", client: "John Smith", title: "Gut Health Protocol", date: "Feb 23, 2026", status: "Active" },
  { id: "2", client: "Sarah Johnson", title: "Thyroid Support Plan", date: "Feb 22, 2026", status: "Active" },
  { id: "3", client: "Mike Williams", title: "Inflammation Reduction", date: "Feb 21, 2026", status: "Draft" },
  { id: "4", client: "Emily Brown", title: "Adrenal Recovery Protocol", date: "Feb 20, 2026", status: "Completed" },
  { id: "5", client: "David Lee", title: "Detox Support Plan", date: "Feb 19, 2026", status: "Active" },
]

const statusColors: Record<string, string> = {
  Active: "bg-success/10 text-success",
  Draft: "bg-secondary text-text-muted",
  Completed: "bg-info/10 text-info",
}

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-h2 text-primary">Dashboard</h1>
          <p className="text-text-muted">Welcome back, Dr. Jane</p>
        </div>
        <Button asChild className="bg-accent hover:bg-accent-hover text-white">
          <Link href="/dashboard/create">
            <Plus className="w-4 h-4 mr-2" /> Create Protocol
          </Link>
        </Button>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-text-muted text-sm">{stat.label}</p>
                    <p className="text-4xl font-bold text-primary font-mono mt-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-text-muted mt-2">{stat.trend}</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {/* Recent Protocols */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-h4 text-primary">Recent Protocols</CardTitle>
              <Link href="/dashboard/protocols" className="text-sm text-accent hover:underline">
                View all
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client</TableHead>
                  <TableHead>Protocol</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentProtocols.map((protocol) => (
                  <TableRow key={protocol.id}>
                    <TableCell className="font-medium">{protocol.client}</TableCell>
                    <TableCell>{protocol.title}</TableCell>
                    <TableCell className="text-text-muted">{protocol.date}</TableCell>
                    <TableCell>
                      <Badge className={statusColors[protocol.status]}>
                        {protocol.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/dashboard/protocols/${protocol.id}`}>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </Link>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Archive className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
      
      {/* Quick Actions FAB */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 flex flex-col gap-3">
        <Button
          asChild
          className="bg-primary hover:bg-primary-hover text-white shadow-lg rounded-full w-14 h-14 p-0"
        >
          <Link href="/dashboard/clients/new">
            <Users className="w-5 h-5" />
          </Link>
        </Button>
        <Button
          asChild
          className="bg-accent hover:bg-accent-hover text-white shadow-lg rounded-full w-14 h-14 p-0"
        >
          <Link href="/dashboard/create">
            <Plus className="w-6 h-6" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
