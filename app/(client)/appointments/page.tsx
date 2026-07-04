'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Phone, Edit2, X } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/constants';

export default function ClientAppointments() {
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
    {
      id: 3,
      vehicle: 'BMW X3',
      type: 'Standard',
      date: '5 Décembre 2023',
      time: '15:30',
      location: 'Centre d\'Inspection, Paris',
      confirmation: 'OB-DEF456',
      status: 'completed',
      inspector: 'Monsieur Jean',
      inspectorPhone: '+33 3 45 67 89 01',
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-primary/20 text-primary">Confirmé</Badge>;
      case 'completed':
        return <Badge className="bg-green-100 text-green-700">Réalisé</Badge>;
      case 'cancelled':
        return <Badge className="bg-destructive/20 text-destructive">Annulé</Badge>;
      default:
        return <Badge className="bg-muted text-muted-foreground">En attente</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-4xl font-bold text-foreground mb-2">
            Mes rendez-vous
          </h1>
          <p className="text-foreground/70">
            Gérez tous vos rendez-vous d&apos;inspection
          </p>
        </div>
        <Link 
          href={ROUTES.BOOK}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
        >
          Nouvelle réservation
        </Link>
      </div>

      {appointments.length > 0 ? (
        <>
          {/* Upcoming Section */}
          {appointments.filter(apt => apt.status === 'confirmed').length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">À Venir</h2>
              <div className="space-y-4">
                {appointments
                  .filter(apt => apt.status === 'confirmed')
                  .map((apt) => (
                    <Card key={apt.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <div className="grid md:grid-cols-4 gap-6">
                          <div>
                            <p className="text-xs text-muted-foreground uppercase mb-1">Véhicule</p>
                            <p className="font-semibold text-foreground">{apt.vehicle}</p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Inspection {apt.type}
                            </p>
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
                    <Card key={apt.id} className="opacity-75 hover:opacity-100 transition-opacity">
                      <CardContent className="pt-6">
                        <div className="grid md:grid-cols-4 gap-6">
                          <div>
                            <p className="text-xs text-muted-foreground uppercase mb-1">Véhicule</p>
                            <p className="font-semibold text-foreground">{apt.vehicle}</p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Inspection {apt.type}
                            </p>
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
                              <MapPin className="size-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                              <p className="text-sm text-muted-foreground">{apt.location}</p>
                            </div>
                          </div>

                          <div className="flex flex-col justify-between items-end">
                            <div className="text-right">
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
                          <Link href={`/reports/${apt.id}`} className="text-primary hover:underline font-semibold text-sm">
                            Voir le Rapport →
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <Card className="border-2 border-dashed">
          <CardHeader className="text-center py-12">
            <Calendar className="size-12 text-foreground/20 mx-auto mb-4" />
            <CardTitle>Aucun rendez-vous</CardTitle>
            <CardDescription className="mt-2">
              Vous n&apos;avez pas encore de rendez-vous programmés. Réservez-en un maintenant!
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center pb-8">
            <Link 
              href={ROUTES.BOOK}
              className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Réserver une inspection
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
