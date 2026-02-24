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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { Plus, Search, Eye, FileText, UserPlus } from "lucide-react"

const mockClients = [
  { id: "1", name: "John Smith", email: "john@email.com", age: 45, gender: "Male", protocols: 3, lastUpdated: "Feb 23, 2026" },
  { id: "2", name: "Sarah Johnson", email: "sarah@email.com", age: 38, gender: "Female", protocols: 2, lastUpdated: "Feb 22, 2026" },
  { id: "3", name: "Mike Williams", email: "mike@email.com", age: 52, gender: "Male", protocols: 1, lastUpdated: "Feb 21, 2026" },
  { id: "4", name: "Emily Brown", email: "emily@email.com", age: 29, gender: "Female", protocols: 4, lastUpdated: "Feb 20, 2026" },
  { id: "5", name: "David Lee", email: "david@email.com", age: 61, gender: "Male", protocols: 2, lastUpdated: "Feb 19, 2026" },
]

export default function ClientsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [dialogOpen, setDialogOpen] = useState(false)
  const [newClient, setNewClient] = useState({ name: "", email: "", age: "", gender: "Male" })
  const { toast } = useToast()

  const filteredClients = mockClients.filter(client =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleAddClient = () => {
    toast({
      title: "Client Added",
      description: `${newClient.name} has been added to your clients`,
    })
    setDialogOpen(false)
    setNewClient({ name: "", email: "", age: "", gender: "Male" })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-h2 text-primary">Clients</h1>
          <p className="text-text-muted">Manage your client list and their protocols</p>
        </div>
        
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <Input
              placeholder="Search clients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-accent hover:bg-accent-hover text-white">
                <Plus className="w-4 h-4 mr-2" /> Add Client
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Client</DialogTitle>
                <DialogDescription>
                  Enter the client&apos;s information to add them to your practice.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div>
                  <label className="text-label text-text-primary block mb-2">Full Name</label>
                  <Input
                    value={newClient.name}
                    onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-label text-text-primary block mb-2">Email</label>
                  <Input
                    type="email"
                    value={newClient.email}
                    onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
                    placeholder="john@email.com"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-label text-text-primary block mb-2">Age</label>
                    <Input
                      type="number"
                      value={newClient.age}
                      onChange={(e) => setNewClient({ ...newClient, age: e.target.value })}
                      placeholder="45"
                    />
                  </div>
                  <div>
                    <label className="text-label text-text-primary block mb-2">Gender</label>
                    <select
                      value={newClient.gender}
                      onChange={(e) => setNewClient({ ...newClient, gender: e.target.value })}
                      className="w-full h-10 px-3 rounded-md border border-input bg-background"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setDialogOpen(false)}>
                  Cancel
                </Button>
                <Button 
                  onClick={handleAddClient}
                  className="bg-accent hover:bg-accent-hover text-white"
                >
                  Add Client
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Clients Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card>
          <CardContent className="p-0">
            {filteredClients.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Age / Gender</TableHead>
                    <TableHead>Protocols</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredClients.map((client) => (
                    <TableRow key={client.id} className="cursor-pointer hover:bg-surface-hover">
                      <TableCell className="font-medium">{client.name}</TableCell>
                      <TableCell className="text-text-muted">{client.email}</TableCell>
                      <TableCell>{client.age} / {client.gender}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{client.protocols} protocols</Badge>
                      </TableCell>
                      <TableCell className="text-text-muted">{client.lastUpdated}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Link href={`/dashboard/clients/${client.id}`}>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </Link>
                          <Link href={`/dashboard/create?client=${client.id}`}>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <FileText className="w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="py-16 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-surface flex items-center justify-center">
                  <UserPlus className="w-8 h-8 text-text-muted" />
                </div>
                <h3 className="text-h4 text-text-muted mb-2">No clients found</h3>
                <p className="text-text-muted mb-4">
                  {searchQuery 
                    ? "Try adjusting your search query" 
                    : "Add your first client to get started"
                  }
                </p>
                {!searchQuery && (
                  <Button 
                    onClick={() => setDialogOpen(true)}
                    className="bg-accent hover:bg-accent-hover text-white"
                  >
                    <Plus className="w-4 h-4 mr-2" /> Add Client
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
