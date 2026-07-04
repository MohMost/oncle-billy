import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { TrendingUp, Users, Calendar, DollarSign } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">
          Tableau de bord administrateur
        </h1>
        <p className="text-foreground/70">
          Gérez vos inspections, clients et rapports
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-foreground/70">
                Revenu total
              </CardTitle>
              <DollarSign className="size-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">0€</div>
            <p className="text-xs text-foreground/50 mt-1">Ce mois</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-foreground/70">
                Inspections
              </CardTitle>
              <Calendar className="size-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">0</div>
            <p className="text-xs text-foreground/50 mt-1">Ce mois</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-foreground/70">
                Clients actifs
              </CardTitle>
              <Users className="size-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">0</div>
            <p className="text-xs text-foreground/50 mt-1">Total</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-foreground/70">
                Taux de satisfaction
              </CardTitle>
              <TrendingUp className="size-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">0%</div>
            <p className="text-xs text-foreground/50 mt-1">Basé sur les avis</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Calendar className="size-6 text-primary mb-2" />
            <CardTitle>Rendez-vous</CardTitle>
            <CardDescription>
              Gérez tous les rendez-vous
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/admin/appointments" className="inline-flex w-full items-center justify-center px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-semibold">
              Voir les rendez-vous
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Users className="size-6 text-primary mb-2" />
            <CardTitle>Clients</CardTitle>
            <CardDescription>
              Gérez les profils clients
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/admin/customers" className="inline-flex w-full items-center justify-center px-4 py-2 rounded-lg border-2 border-border text-foreground hover:bg-muted transition-colors text-sm font-semibold">
              Voir les clients
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <DollarSign className="size-6 text-primary mb-2" />
            <CardTitle>Paiements</CardTitle>
            <CardDescription>
              Gérez les transactions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/admin/payments" className="inline-flex w-full items-center justify-center px-4 py-2 rounded-lg border-2 border-border text-foreground hover:bg-muted transition-colors text-sm font-semibold">
              Voir les paiements
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Activité récente</CardTitle>
          <CardDescription>
            Aucune activité pour le moment
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center py-8 text-foreground/50">
          Les données s&apos;afficheront ici à mesure que vous utiliserez le système
        </CardContent>
      </Card>
    </div>
  );
}
