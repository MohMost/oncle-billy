'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  Users, 
  Calendar, 
  FileText, 
  TrendingUp, 
  AlertCircle,
  ChevronRight,
  Settings,
  Bell,
} from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  const stats = [
    { label: 'Inspections ce mois', value: '24', icon: '📊', trend: '+15%' },
    { label: 'Clients actifs', value: '156', icon: '👥', trend: '+8%' },
    { label: 'Rendez-vous prévus', value: '12', icon: '📅', trend: '-2%' },
    { label: 'Revenus ce mois', value: '4,280€', icon: '€', trend: '+22%' },
  ];

  const recentAppointments = [
    {
      id: 1,
      clientName: 'Jean Dupont',
      vehicle: 'Peugeot 308',
      date: '25 Janvier 2024',
      time: '14:00',
      status: 'confirmed',
      inspector: 'Martin',
    },
    {
      id: 2,
      clientName: 'Marie Petit',
      vehicle: 'Renault Clio',
      date: '25 Janvier 2024',
      time: '15:30',
      status: 'confirmed',
      inspector: 'Sophie',
    },
    {
      id: 3,
      clientName: 'Pierre Martin',
      vehicle: 'BMW X3',
      date: '26 Janvier 2024',
      time: '10:00',
      status: 'pending',
      inspector: 'Jean',
    },
  ];

  const recentReports = [
    {
      id: 1,
      clientName: 'Luc Bernard',
      vehicle: 'Toyota Yaris',
      date: '24 Janvier 2024',
      rating: 'Excellent',
      score: 88,
    },
    {
      id: 2,
      clientName: 'Catherine Durand',
      vehicle: 'Citroën C3',
      date: '23 Janvier 2024',
      rating: 'Bon',
      score: 75,
    },
  ];

  const alerts = [
    {
      id: 1,
      title: 'Rendez-vous non confirmé',
      message: 'David Laurent n\'a pas confirmé son inspection du 26 janvier',
      type: 'warning',
    },
    {
      id: 2,
      title: 'Inspecteur indisponible',
      message: 'Thomas Moreau ne sera pas disponible du 27 au 29 janvier',
      type: 'info',
    },
  ];

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
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Tableau de Bord Admin</h1>
            <p className="text-muted-foreground mt-2">Bienvenue, Administrateur</p>
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
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                  <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-1 rounded">
                    {stat.trend}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Appointments */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="size-5 text-primary" />
                    Rendez-vous Récents
                  </CardTitle>
                  <Link href="/admin/appointments" className="text-sm text-primary hover:underline">
                    Voir tout
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentAppointments.map((apt) => (
                    <div key={apt.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{apt.clientName}</p>
                        <p className="text-sm text-muted-foreground">{apt.vehicle} • {apt.date} à {apt.time}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-muted-foreground">{apt.inspector}</span>
                        {getStatusBadge(apt.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Reports */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="size-5 text-primary" />
                    Rapports Récents
                  </CardTitle>
                  <Link href="/admin/reports" className="text-sm text-primary hover:underline">
                    Voir tout
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentReports.map((report) => (
                    <div key={report.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{report.clientName}</p>
                        <p className="text-sm text-muted-foreground">{report.vehicle} • {report.date}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">Score</p>
                          <p className="font-bold text-foreground">{report.score}%</p>
                        </div>
                        <Badge className="bg-blue-100 text-blue-700">
                          {report.rating}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Actions Rapides</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link 
                  href="/admin/appointments"
                  className="block w-full px-4 py-3 text-left hover:bg-muted rounded-lg transition-colors font-semibold text-sm"
                >
                  <div className="flex items-center justify-between">
                    <span>Gérer les Rendez-vous</span>
                    <ChevronRight className="size-4" />
                  </div>
                </Link>
                <Link 
                  href="/admin/clients"
                  className="block w-full px-4 py-3 text-left hover:bg-muted rounded-lg transition-colors font-semibold text-sm"
                >
                  <div className="flex items-center justify-between">
                    <span>Gérer les Clients</span>
                    <ChevronRight className="size-4" />
                  </div>
                </Link>
                <Link 
                  href="/admin/inspectors"
                  className="block w-full px-4 py-3 text-left hover:bg-muted rounded-lg transition-colors font-semibold text-sm"
                >
                  <div className="flex items-center justify-between">
                    <span>Gérer les Inspecteurs</span>
                    <ChevronRight className="size-4" />
                  </div>
                </Link>
                <Link 
                  href="/admin/reports"
                  className="block w-full px-4 py-3 text-left hover:bg-muted rounded-lg transition-colors font-semibold text-sm"
                >
                  <div className="flex items-center justify-between">
                    <span>Voir les Rapports</span>
                    <ChevronRight className="size-4" />
                  </div>
                </Link>
              </CardContent>
            </Card>

            {/* Alerts */}
            <Card className="border-destructive/30">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <AlertCircle className="size-5 text-destructive" />
                  Alertes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {alerts.map((alert) => (
                  <div key={alert.id} className={`p-3 rounded-lg border-l-4 ${
                    alert.type === 'warning' 
                      ? 'border-yellow-500 bg-yellow-50' 
                      : 'border-blue-500 bg-blue-50'
                  }`}>
                    <p className={`font-semibold text-sm ${
                      alert.type === 'warning' ? 'text-yellow-900' : 'text-blue-900'
                    }`}>
                      {alert.title}
                    </p>
                    <p className={`text-xs mt-1 ${
                      alert.type === 'warning' ? 'text-yellow-800' : 'text-blue-800'
                    }`}>
                      {alert.message}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
