import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calendar, Plus } from 'lucide-react';
import { ROUTES } from '@/constants';

export default function AdminAppointments() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-4xl font-bold text-foreground mb-2">
            Rendez-vous
          </h1>
          <p className="text-foreground/70">
            Gérez tous les rendez-vous d&apos;inspection
          </p>
        </div>
        <Button>
          <Plus className="mr-2 size-4" />
          Nouveau rendez-vous
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Filtres</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4">
          <Button variant="outline" size="sm">
            Tous
          </Button>
          <Button variant="outline" size="sm">
            Confirmés
          </Button>
          <Button variant="outline" size="sm">
            En attente
          </Button>
          <Button variant="outline" size="sm">
            Complétés
          </Button>
        </CardContent>
      </Card>

      {/* Empty State */}
      <Card className="border-2 border-dashed">
        <CardHeader className="text-center py-12">
          <Calendar className="size-12 text-foreground/20 mx-auto mb-4" />
          <CardTitle>Aucun rendez-vous</CardTitle>
          <CardDescription className="mt-2">
            Aucun rendez-vous n&apos;a été créé pour le moment.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
