'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Calendar, FileText, AlertCircle, ChevronRight, Bell, Settings, Clock } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/constants';

export default function ClientDashboardPage() {
  const stats = [
    { label: 'Inspections Réalisées', value: '2', icon: '✓' },
    { label: 'Réservations en Attente', value: '1', icon: '⏰' },
    { label: 'Rapports Disponibles', value: '2', icon: '📄' },
    { label: 'Total Dépensé', value: '358€', icon: '€' },
  ];

  const upcomingAppointments = [
    {
      id: 1,
      type: 'Standard',
      vehicle: 'Peugeot 308',
      date: '25 Janvier 2024',
      time: '14:00',
      status: 'confirmed',
      confirmation: 'OB-ABC123',
    },
  ];

  const recentReports = [
    {
      id: 1,
      vehicle: 'Renault Clio',
      date: '15 Décembre 2023',
      status: 'completed',
      rating: 'Bon',
    },
    {
      id: 2,
      vehicle: 'BMW X3',
      date: '5 Décembre 2023',
      status: 'completed',
      rating: 'Excellent',
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Tableau de Bord</h1>
            <p className="text-muted-foreground mt-2">Bienvenue, Jean Dupont</p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <Bell className="size-6 text-foreground" />
            </button>
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <Settings className="size-6 text-foreground" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Next Appointment */}
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-bold text-foreground flex items-center gap-2 mb-4">
                  <Calendar className="size-5 text-primary" />
                  Prochains Rendez-vous
                </h2>
                {upcomingAppointments.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingAppointments.map((apt) => (
                      <div key={apt.id} className="border-l-4 border-primary pl-4 py-2 hover:bg-muted/30 rounded-r-lg transition-colors">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="font-semibold text-foreground">
                              Inspection {apt.type} - {apt.vehicle}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                              <Clock className="size-4" />
                              {apt.date} à {apt.time}
                            </div>
                            <div className="text-xs text-muted-foreground mt-2">
                              Confirmation #{apt.confirmation}
                            </div>
                          </div>
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-semibold">
                            Confirmé
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">Aucun rendez-vous prévu</p>
                )}
              </div>
            </Card>

            {/* Recent Reports */}
            <Card>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <FileText className="size-5 text-primary" />
                    Rapports Récents
                  </h2>
                  <Link href="/dashboard/reports" className="text-sm text-primary hover:underline">
                    Voir tout
                  </Link>
                </div>
                <div className="space-y-3">
                  {recentReports.map((report) => (
                    <Link key={report.id} href={`/dashboard/reports/${report.id}`}>
                      <div className="flex items-center justify-between p-3 bg-muted/30 hover:bg-muted/50 rounded-lg transition-colors cursor-pointer">
                        <div>
                          <div className="font-semibold text-foreground">
                            Rapport d&apos;Inspection - {report.vehicle}
                          </div>
                          <div className="text-xs text-muted-foreground">{report.date}</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-semibold">
                            {report.rating}
                          </span>
                          <ChevronRight className="size-5 text-muted-foreground" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Actions Rapides</h3>
                <div className="space-y-3">
                  <Link href="/book-inspection" className="w-full block px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-center font-semibold text-sm">
                    Nouvelle Inspection
                  </Link>
                  <Link href="/dashboard/appointments" className="w-full block px-4 py-3 border-2 border-border text-foreground rounded-lg hover:bg-muted transition-colors text-center font-semibold text-sm">
                    Mes Rendez-vous
                  </Link>
                  <Link href="/dashboard/reports" className="w-full block px-4 py-3 border-2 border-border text-foreground rounded-lg hover:bg-muted transition-colors text-center font-semibold text-sm">
                    Mes Rapports
                  </Link>
                  <Link href="/dashboard/profile" className="w-full block px-4 py-3 border-2 border-border text-foreground rounded-lg hover:bg-muted transition-colors text-center font-semibold text-sm">
                    Mon Profil
                  </Link>
                </div>
              </div>
            </Card>

            {/* Help Card */}
            <Card className="bg-primary/10 border-primary">
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Besoin d&apos;Aide?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Notre équipe de support est disponible pour répondre à vos questions
                </p>
                <div className="flex flex-col gap-2 text-sm">
                  <a href="tel:+33123456789" className="text-primary hover:underline font-semibold">
                    +33 1 23 45 67 89
                  </a>
                  <a href="mailto:support@onclebilly.fr" className="text-primary hover:underline font-semibold">
                    support@onclebilly.fr
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
