import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calendar, Plus } from 'lucide-react';
import { ROUTES } from '@/constants';

export default function ClientAppointments() {
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
        <Button>
          <Link href={ROUTES.BOOK} className="flex items-center gap-2">
            <Plus className="size-4" />
            Nouveau rendez-vous
          </Link>
        </Button>
      </div>

      <Card className="border-2 border-dashed">
        <CardHeader className="text-center py-12">
          <Calendar className="size-12 text-foreground/20 mx-auto mb-4" />
          <CardTitle>Aucun rendez-vous</CardTitle>
          <CardDescription className="mt-2">
            Vous n&apos;avez pas encore de rendez-vous programmés. Réservez-en un maintenant!
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center pb-8">
          <Button>
            <Link href={ROUTES.BOOK}>Réserver une inspection</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
