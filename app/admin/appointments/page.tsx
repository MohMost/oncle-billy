'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Search, Filter, Edit, Trash2, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function AdminAppointments() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const appointments = [
    {
      id: 1,
      clientName: 'Jean Dupont',
      clientPhone: '+33 6 12 34 56 78',
      vehicle: 'Peugeot 308',
      type: 'Standard',
      date: '25 Janvier 2024',
      time: '14:00',
      inspector: 'Martin',
      status: 'confirmed',
      amount: '89€',
    },
    {
      id: 2,
      clientName: 'Marie Martin',
      clientPhone: '+33 6 98 76 54 32',
      vehicle: 'Renault Clio',
      type: 'Complet',
      date: '26 Janvier 2024',
      time: '10:00',
      inspector: 'Sophie',
      status: 'pending',
      amount: '149€',
    },
    {
      id: 3,
      clientName: 'Pierre Dubois',
      clientPhone: '+33 6 11 22 33 44',
      vehicle: 'BMW X3',
      type: 'Standard',
      date: '24 Janvier 2024',
      time: '16:00',
      inspector: 'Jean',
      status: 'completed',
      amount: '89€',
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-primary/20 text-primary">Confirmé</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-700">En Attente</Badge>;
      case 'completed':
        return <Badge className="bg-green-100 text-green-700">Réalisé</Badge>;
      default:
        return <Badge className="bg-muted text-muted-foreground">Inconnu</Badge>;
    }
  };

  const filteredAppointments = appointments.filter((apt) => {
    const matchesSearch =
      apt.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apt.vehicle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || apt.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">
          Gestion des Rendez-vous
        </h1>
        <p className="text-foreground/70">
          Gérez tous les rendez-vous d&apos;inspection
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-primary">{appointments.length}</div>
            <p className="text-sm text-muted-foreground mt-1">Rendez-vous Total</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-yellow-600">{appointments.filter(a => a.status === 'pending').length}</div>
            <p className="text-sm text-muted-foreground mt-1">En Attente</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-green-600">{appointments.filter(a => a.status === 'completed').length}</div>
            <p className="text-sm text-muted-foreground mt-1">Réalisés</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filtres</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Search className="size-4" />
              Rechercher
            </label>
            <input
              type="text"
              placeholder="Nom du client ou véhicule..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full mt-2 px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Filter className="size-4" />
              Statut
            </label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full mt-2 px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">Tous les statuts</option>
              <option value="pending">En Attente</option>
              <option value="confirmed">Confirmé</option>
              <option value="completed">Réalisé</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Appointments Table */}
      <Card>
        <CardHeader>
          <CardTitle>Rendez-vous ({filteredAppointments.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {filteredAppointments.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-border">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Client</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Véhicule</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Date & Heure</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Inspecteur</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Montant</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Statut</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAppointments.map((apt) => (
                    <tr key={apt.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-semibold text-foreground">{apt.clientName}</p>
                          <p className="text-xs text-muted-foreground">{apt.clientPhone}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-semibold text-foreground">{apt.vehicle}</p>
                          <p className="text-xs text-muted-foreground">{apt.type}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2 text-foreground">
                          <Calendar className="size-4 text-muted-foreground" />
                          <span>{apt.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-xs mt-1">
                          <Clock className="size-3" />
                          <span>{apt.time}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-foreground">{apt.inspector}</td>
                      <td className="py-3 px-4 text-foreground font-semibold">{apt.amount}</td>
                      <td className="py-3 px-4">{getStatusBadge(apt.status)}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                            <Edit className="size-4 text-primary" />
                          </button>
                          <button className="p-2 hover:bg-destructive/10 rounded-lg transition-colors">
                            <Trash2 className="size-4 text-destructive" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <Calendar className="size-12 text-foreground/20 mx-auto mb-4" />
              <p>Aucun rendez-vous ne correspond aux filtres sélectionnés</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
