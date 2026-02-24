"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Plus, Search, Eye, Edit, Archive, FileText, Download } from "lucide-react"

const mockProtocols = [
  { id: "1", client: "John Smith", title: "Gut Health Protocol", date: "Feb 23, 2026", status: "Active", category: "Digestive" },
  { id: "2", client: "Sarah Johnson", title: "Thyroid Support Plan", date: "Feb 22, 2026", status: "Active", category: "Endocrine" },
  { id: "3", client: "Mike Williams", title: "Inflammation Reduction", date: "Feb 21, 2026", status: "Draft", category: "Immune" },
  { id: "4", client: "Emily Brown", title: "Adrenal Recovery Protocol", date: "Feb 20, 2026", status: "Completed", category: "Endocrine" },
  { id: "5", client: "David Lee", title: "Detox Support Plan", date: "Feb 19, 2026", status: "Active", category: "Detox" },
  { id: "6", client: "Lisa Chen", title: "Sleep Optimization", date: "Feb 18, 2026", status: "Active", category: "Neurological" },
  { id: "7", client: "James Wilson", title: "Cardiovascular Support", date: "Feb 17, 2026", status: "Completed", category: "Cardiovascular" },
  { id: "8", client: "Amanda Garcia", title: "Hormone Balance Protocol", date: "Feb 16, 2026", status: "Draft", category: "Endocrine" },
]

const statusColors: Record<string, string> = {
  Active: "bg-success/10 text-success",
  Draft: "bg-secondary text-text-muted",
  Completed: "bg-info/10 text-info",
}

export default function ProtocolsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")

  const filteredProtocols = mockProtocols.filter(protocol => {
    const matchesSearch = 
      protocol.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      protocol.client.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || protocol.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-h2 text-primary">Protocols</h1>
          <p className="text-text-muted">View and manage all your client protocols</p>
        </div>
        
        <Button asChild className="bg-accent hover:bg-accent-hover text-white">
          <Link href="/dashboard/create">
            <Plus className="w-4 h-4 mr-2" /> Create Protocol
          </Link>
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <Input
            placeholder="Search protocols or clients..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="Active">Active</SelectItem>
            <SelectItem value="Draft">Draft</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Protocols Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card>
          <CardContent className="p-0">
            {filteredProtocols.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Protocol</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProtocols.map((protocol) => (
                    <TableRow key={protocol.id} className="cursor-pointer hover:bg-surface-hover">
                      <TableCell className="font-medium">{protocol.title}</TableCell>
                      <TableCell>{protocol.client}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{protocol.category}</Badge>
                      </TableCell>
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
                            <Download className="w-4 h-4" />
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
            ) : (
              <div className="py-16 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-surface flex items-center justify-center">
                  <FileText className="w-8 h-8 text-text-muted" />
                </div>
                <h3 className="text-h4 text-text-muted mb-2">No protocols found</h3>
                <p className="text-text-muted mb-4">
                  {searchQuery || statusFilter !== "all"
                    ? "Try adjusting your filters" 
                    : "Create your first protocol to get started"
                  }
                </p>
                {!searchQuery && statusFilter === "all" && (
                  <Button asChild className="bg-accent hover:bg-accent-hover text-white">
                    <Link href="/dashboard/create">
                      <Plus className="w-4 h-4 mr-2" /> Create Protocol
                    </Link>
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-primary font-mono">
              {mockProtocols.filter(p => p.status === "Active").length}
            </p>
            <p className="text-sm text-text-muted">Active Protocols</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-primary font-mono">
              {mockProtocols.filter(p => p.status === "Draft").length}
            </p>
            <p className="text-sm text-text-muted">Drafts</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-primary font-mono">
              {mockProtocols.filter(p => p.status === "Completed").length}
            </p>
            <p className="text-sm text-text-muted">Completed</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
