'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Mail, Phone, MapPin, Calendar, LogOut } from 'lucide-react';
import { useState } from 'react';

export default function ClientProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'Jean',
    lastName: 'Dupont',
    email: 'jean@example.com',
    phone: '+33 6 12 34 56 78',
    street: '123 Rue de la Paix',
    city: 'Paris',
    postalCode: '75011',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">
          Mon profil
        </h1>
        <p className="text-foreground/70">
          Gérez vos informations personnelles et paramètres de compte
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Personal Info */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Informations personnelles</CardTitle>
            <CardDescription>
              Mettez à jour vos informations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Prénom</Label>
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label>Nom</Label>
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div>
              <Label className="flex items-center gap-2">
                <Mail className="size-4" />
                Email
              </Label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
            <div>
              <Label className="flex items-center gap-2">
                <Phone className="size-4" />
                Téléphone
              </Label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
            <div>
              <Label className="flex items-center gap-2">
                <MapPin className="size-4" />
                Adresse
              </Label>
              <Input
                name="street"
                value={formData.street}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Ville</Label>
                <Input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label>Code Postal</Label>
                <Input
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div className="flex gap-2">
              {isEditing ? (
                <>
                  <button 
                    onClick={() => setIsEditing(false)}
                    className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                  >
                    Enregistrer
                  </button>
                  <button 
                    onClick={() => setIsEditing(false)}
                    className="px-6 py-2 border-2 border-border text-foreground rounded-lg hover:bg-muted transition-colors font-semibold"
                  >
                    Annuler
                  </button>
                </>
              ) : (
                <button 
                  onClick={() => setIsEditing(true)}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  Modifier
                </button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Account Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="size-5" />
                Compte
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground uppercase mb-1">Email</p>
                <p className="text-sm font-medium">{formData.email}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase mb-1">Membre depuis</p>
                <p className="text-sm font-medium">15 Janvier 2024</p>
              </div>
              <button className="w-full px-4 py-2 border-2 border-border text-foreground rounded-lg hover:bg-muted transition-colors font-semibold text-sm">
                Changer le mot de passe
              </button>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="border-destructive/50">
            <CardHeader>
              <CardTitle className="text-base text-destructive">Zone de Danger</CardTitle>
            </CardHeader>
            <CardContent>
              <button className="w-full px-4 py-2 flex items-center justify-center gap-2 border-2 border-destructive text-destructive rounded-lg hover:bg-destructive/10 transition-colors font-semibold text-sm">
                <LogOut className="size-4" />
                Déconnexion
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
