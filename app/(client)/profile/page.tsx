import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

export default function ClientProfile() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">
          Mon profil
        </h1>
        <p className="text-foreground/70">
          Gérez vos informations personnelles
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Informations personnelles</CardTitle>
            <CardDescription>
              Mettez à jour vos informations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
              <p className="text-foreground/50">Formulaire de profil à venir</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="size-5" />
              Compte
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-xs text-foreground/50 uppercase">Email</p>
              <p className="text-sm font-medium">—</p>
            </div>
            <div>
              <p className="text-xs text-foreground/50 uppercase">Membre depuis</p>
              <p className="text-sm font-medium">—</p>
            </div>
            <Button variant="outline" className="w-full">
              Changer le mot de passe
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
