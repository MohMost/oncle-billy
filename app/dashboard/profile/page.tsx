'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Mail, Phone, MapPin, Calendar, LogOut } from 'lucide-react';
import { useState } from 'react';

export default function DashboardProfile() {
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
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-foreground mb-8">Mon Profil</h1>

        <div className="grid gap-6">
          {/* Personal Info */}
          <Card>
            <CardHeader>
              <CardTitle>Informations personnelles</CardTitle>
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

          {/* Account Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="size-5" />
                Paramètres du Compte
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Membre depuis</Label>
                <Input defaultValue="15 Janvier 2024" disabled />
              </div>
              <div>
                <Label>Statut</Label>
                <Input defaultValue="Actif" disabled />
              </div>
              <button className="px-6 py-2 border-2 border-border text-foreground rounded-lg hover:bg-muted transition-colors font-semibold">
                Changer le Mot de Passe
              </button>
            </CardContent>
          </Card>

          {/* Logout Card */}
          <Card className="border-destructive/50">
            <CardHeader>
              <CardTitle className="text-base text-destructive">Zone de Danger</CardTitle>
            </CardHeader>
            <CardContent>
              <button className="px-6 py-2 flex items-center gap-2 border-2 border-destructive text-destructive rounded-lg hover:bg-destructive/10 transition-colors font-semibold">
                <LogOut className="size-4" />
                Déconnexion
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
