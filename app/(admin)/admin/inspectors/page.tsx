'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Edit2, Trash2, Search, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function AdminInspectorsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const inspectors = [
    {
      id: 1,
      name: 'Monsieur Martin',
      email: 'martin@example.com',
      phone: '+33 1 23 45 67 89',
      specialization: 'Standard & Complet',
      completedInspections: 45,
      rating: 4.8,
      status: 'active',
      availability: 'Disponible',
    },
    {
      id: 2,
      name: 'Mademoiselle Sophie',
      email: 'sophie@example.com',
      phone: '+33 2 34 56 78 90',
      specialization: 'Complet',
      completedInspections: 38,
      rating: 4.9,
      status: 'active',
      availability: 'Disponible',
    },
    {
      id: 3,
      name: 'Monsieur Jean',
      email: 'jean@example.com',
      phone: '+33 3 45 67 89 01',
      specialization: 'Standard',
      completedInspections: 52,
      rating: 4.7,
      status: 'active',
      availability: 'Indisponible (27-29 Jan)',
    },
    {
      id: 4,
      name: 'Thomas Moreau',
      email: 'thomas@example.com',
      phone: '+33 4 56 78 90 12',
      specialization: 'Standard & Complet',
      completedInspections: 31,
      rating: 4.6,
      status: 'inactive',
      availability: 'Indisponible',
    },
  ];

  const filteredInspectors = inspectors.filter(inspector =>
    inspector.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    inspector.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    inspector.phone.includes(searchQuery)
  );

  const getStatusBadge = (status: string) => {
    return status === 'active' 
      ? <Badge className="bg-green-100 text-green-700">Actif</Badge>
      : <Badge className="bg-gray-100 text-gray-700">Inactif</Badge>;
  };

  const getAvailabilityBadge = (availability: string) => {
    return availability === 'Disponible'
      ? <Badge className="bg-blue-100 text-blue-700">Disponible</Badge>
      : <Badge className="bg-yellow-100 text-yellow-700">Indisponible</Badge>;
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Gestion des Inspecteurs</h1>
        <p className="text-muted-foreground">Gérez votre équipe d&apos;inspecteurs</p>
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
            {filteredInspectors.length} Inspecteurs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Nom</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Email</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Spécialisation</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Inspections</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Note</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Disponibilité</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Statut</th>
                  <th className="text-right py-3 px-4 font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInspectors.map((inspector) => (
                  <tr key={inspector.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-4">
                      <p className="font-semibold text-foreground">{inspector.name}</p>
                    </td>
                    <td className="py-3 px-4 text-foreground text-sm">{inspector.email}</td>
                    <td className="py-3 px-4 text-foreground text-sm">{inspector.specialization}</td>
                    <td className="py-3 px-4">
                      <span className="text-foreground font-semibold">{inspector.completedInspections}</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1">
                        <Star className="size-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-semibold text-foreground">{inspector.rating}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      {getAvailabilityBadge(inspector.availability)}
                    </td>
                    <td className="py-3 px-4">
                      {getStatusBadge(inspector.status)}
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
