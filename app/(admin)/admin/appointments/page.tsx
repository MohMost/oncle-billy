'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Edit2, Trash2, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function AdminAppointmentsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const appointments = [
    {
      id: 1,
      clientName: 'Jean Dupont',
      email: 'jean@example.com',
      vehicle: 'Peugeot 308',
      type: 'Standard',
      date: '25 Janvier 2024',
      time: '14:00',
      status: 'confirmed',
      inspector: 'Monsieur Martin',
    },
    {
      id: 2,
      clientName: 'Marie Petit',
      email: 'marie@example.com',
      vehicle: 'Renault Clio',
      type: 'Complet',
      date: '25 Janvier 2024',
      time: '15:30',
      status: 'confirmed',
      inspector: 'Mademoiselle Sophie',
    },
    {
      id: 3,
      clientName: 'Pierre Martin',
      email: 'pierre@example.com',
      vehicle: 'BMW X3',
      type: 'Standard',
      date: '26 Janvier 2024',
      time: '10:00',
      status: 'pending',
      inspector: 'Monsieur Jean',
    },
    {
      id: 4,
      clientName: 'Luc Bernard',
      email: 'luc@example.com',
      vehicle: 'Toyota Yaris',
      type: 'Standard',
      date: '26 Janvier 2024',
      time: '14:00',
      status: 'confirmed',
      inspector: 'Monsieur Martin',
    },
  ];

  const filteredAppointments = appointments.filter(apt =>
    apt.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    apt.vehicle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    apt.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-green-100 text-green-700">Confirmé</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-700">En attente</Badge>;
      case 'completed':
        return <Badge className="bg-blue-100 text-blue-700">Réalisé</Badge>;
      default:
        return <Badge className="bg-muted text-muted-foreground">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Gestion des Rendez-vous</h1>
        <p className="text-muted-foreground">Gérez tous les rendez-vous d&apos;inspection</p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-muted-foreground" />
        <Input
          placeholder="Rechercher par client, véhicule ou email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="size-5 text-primary" />
            {filteredAppointments.length} Rendez-vous
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Client</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Véhicule</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Date & Heure</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Inspecteur</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Statut</th>
                  <th className="text-right py-3 px-4 font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAppointments.map((apt) => (
                  <tr key={apt.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-semibold text-foreground">{apt.clientName}</p>
                        <p className="text-xs text-muted-foreground">{apt.email}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-foreground">{apt.vehicle}</td>
                    <td className="py-3 px-4 text-foreground text-sm">{apt.type}</td>
                    <td className="py-3 px-4 text-foreground text-sm">{apt.date} {apt.time}</td>
                    <td className="py-3 px-4 text-foreground text-sm">{apt.inspector}</td>
                    <td className="py-3 px-4">
                      {getStatusBadge(apt.status)}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
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
