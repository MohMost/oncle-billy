'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Phone, Edit2, X } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/constants';

export default function DashboardAppointments() {
  const appointments = [
    {
      id: 1,
      vehicle: 'Peugeot 308',
      type: 'Standard',
      date: '25 Janvier 2024',
      time: '14:00',
      location: '123 Avenue de la République, Paris (75011)',
      confirmation: 'OB-ABC123',
      status: 'confirmed',
      inspector: 'Monsieur Martin',
      inspectorPhone: '+33 1 23 45 67 89',
    },
    {
      id: 2,
      vehicle: 'Renault Clio',
      type: 'Complet',
      date: '15 Décembre 2023',
      time: '10:00',
      location: 'Centre d\'Inspection, Paris',
      confirmation: 'OB-XYZ789',
      status: 'completed',
      inspector: 'Mademoiselle Sophie',
      inspectorPhone: '+33 2 34 56 78 90',
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-primary/20 text-primary">Confirmé</Badge>;
      case 'completed':
        return <Badge className="bg-green-100 text-green-700">Réalisé</Badge>;
      default:
        return <Badge className="bg-muted text-muted-foreground">En attente</Badge>;
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Mes rendez-vous</h1>
            <p className="text-muted-foreground mt-2">Gérez tous vos rendez-vous d&apos;inspection</p>
          </div>
          <Link 
            href={ROUTES.BOOK}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Nouvelle réservation
          </Link>
        </div>

        {/* Upcoming Section */}
        {appointments.filter(apt => apt.status === 'confirmed').length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">À Venir</h2>
            <div className="space-y-4">
              {appointments
                .filter(apt => apt.status === 'confirmed')
                .map((apt) => (
                  <Card key={apt.id}>
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-4 gap-6">
                        <div>
                          <p className="text-xs text-muted-foreground uppercase mb-1">Véhicule</p>
                          <p className="font-semibold text-foreground">{apt.vehicle}</p>
                          <p className="text-xs text-muted-foreground mt-1">Inspection {apt.type}</p>
                        </div>
                        
                        <div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                            <Calendar className="size-4" />
                            <span>{apt.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="size-4" />
                            <span>{apt.time}</span>
                          </div>
                        </div>

                        <div>
                          <p className="text-xs text-muted-foreground uppercase mb-1">Lieu</p>
                          <div className="flex items-start gap-2">
                            <MapPin className="size-4 text-primary flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-foreground">{apt.location}</p>
                          </div>
                        </div>

                        <div className="flex flex-col justify-between">
                          <div>
                            <p className="text-xs text-muted-foreground uppercase mb-1">Confirmation</p>
                            <p className="text-sm font-mono text-foreground">{apt.confirmation}</p>
                          </div>
                          {getStatusBadge(apt.status)}
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                        <div className="text-sm">
                          <p className="text-xs text-muted-foreground mb-1">Inspecteur</p>
                          <p className="font-semibold text-foreground">{apt.inspector}</p>
                        </div>
                        <div className="flex gap-2">
                          <a href={`tel:${apt.inspectorPhone}`} className="p-2 hover:bg-muted rounded-lg transition-colors">
                            <Phone className="size-5 text-primary" />
                          </a>
                          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                            <Edit2 className="size-5 text-muted-foreground" />
                          </button>
                          <button className="p-2 hover:bg-destructive/10 rounded-lg transition-colors">
                            <X className="size-5 text-destructive" />
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        )}

        {/* Completed Section */}
        {appointments.filter(apt => apt.status === 'completed').length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Réalisés</h2>
            <div className="space-y-4">
              {appointments
                .filter(apt => apt.status === 'completed')
                .map((apt) => (
                  <Card key={apt.id} className="opacity-75">
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-4 gap-6">
                        <div>
                          <p className="text-xs text-muted-foreground uppercase mb-1">Véhicule</p>
                          <p className="font-semibold text-foreground">{apt.vehicle}</p>
                        </div>
                        
                        <div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="size-4" />
                            <span>{apt.date}</span>
                          </div>
                        </div>

                        <div>
                          <p className="text-xs text-muted-foreground uppercase mb-1">Lieu</p>
                          <p className="text-sm text-muted-foreground">{apt.location}</p>
                        </div>

                        <div className="flex flex-col justify-between items-end">
                          {getStatusBadge(apt.status)}
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                        <div className="text-sm">
                          <p className="text-xs text-muted-foreground mb-1">Inspecteur</p>
                          <p className="font-semibold text-foreground">{apt.inspector}</p>
                        </div>
                        <Link href={`/dashboard/reports/${apt.id}`} className="text-primary hover:underline font-semibold text-sm">
                          Voir le Rapport →
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
