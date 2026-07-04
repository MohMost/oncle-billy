'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Edit2, Trash2, Search, MessageSquare, Phone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function AdminClientsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const clients = [
    {
      id: 1,
      name: 'Jean Dupont',
      email: 'jean@example.com',
      phone: '+33 6 12 34 56 78',
      city: 'Paris',
      inspections: 2,
      status: 'active',
      joinedDate: '15 Janvier 2024',
    },
    {
      id: 2,
      name: 'Marie Petit',
      email: 'marie@example.com',
      phone: '+33 6 98 76 54 32',
      city: 'Lyon',
      inspections: 1,
      status: 'active',
      joinedDate: '18 Janvier 2024',
    },
    {
      id: 3,
      name: 'Pierre Martin',
      email: 'pierre@example.com',
      phone: '+33 6 55 66 77 88',
      city: 'Marseille',
      inspections: 0,
      status: 'active',
      joinedDate: '20 Janvier 2024',
    },
    {
      id: 4,
      name: 'Catherine Durand',
      email: 'catherine@example.com',
      phone: '+33 6 11 22 33 44',
      city: 'Toulouse',
      inspections: 3,
      status: 'inactive',
      joinedDate: '10 Décembre 2023',
    },
  ];

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.phone.includes(searchQuery)
  );

  const getStatusBadge = (status: string) => {
    return status === 'active' 
      ? <Badge className="bg-green-100 text-green-700">Actif</Badge>
      : <Badge className="bg-gray-100 text-gray-700">Inactif</Badge>;
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Gestion des Clients</h1>
        <p className="text-muted-foreground">Gérez tous les clients inscrits</p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-muted-foreground" />
        <Input
          placeholder="Rechercher par nom, email ou téléphone..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="size-5 text-primary" />
            {filteredClients.length} Clients
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Nom</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Email</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Téléphone</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Ville</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Inspections</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Statut</th>
                  <th className="text-right py-3 px-4 font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredClients.map((client) => (
                  <tr key={client.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-semibold text-foreground">{client.name}</p>
                        <p className="text-xs text-muted-foreground">Depuis {client.joinedDate}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-foreground text-sm">{client.email}</td>
                    <td className="py-3 px-4 text-foreground text-sm">{client.phone}</td>
                    <td className="py-3 px-4 text-foreground text-sm">{client.city}</td>
                    <td className="py-3 px-4">
                      <span className="text-foreground font-semibold">{client.inspections}</span>
                    </td>
                    <td className="py-3 px-4">
                      {getStatusBadge(client.status)}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <a href={`tel:${client.phone}`} className="p-1.5 hover:bg-muted rounded-lg transition-colors">
                          <Phone className="size-4 text-primary" />
                        </a>
                        <a href={`mailto:${client.email}`} className="p-1.5 hover:bg-muted rounded-lg transition-colors">
                          <MessageSquare className="size-4 text-primary" />
                        </a>
                        <button className="p-1.5 hover:bg-muted rounded-lg transition-colors">
                          <Edit2 className="size-4 text-primary" />
                        </button>
                        <button className="p-1.5 hover:bg-destructive/10 rounded-lg transition-colors">
                          <Trash2 className="size-4 text-destructive" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
