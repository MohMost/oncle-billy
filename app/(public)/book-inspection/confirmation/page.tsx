'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Download, Mail, Phone, MapPin, Calendar, Clock } from 'lucide-react';
import { ROUTES } from '@/constants';

export default function ConfirmationPage() {
  const confirmationNumber = 'OB-' + Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="space-y-8">
      {/* Success Message */}
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <CheckCircle2 className="size-24 text-primary" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-ping absolute w-24 h-24 rounded-full bg-primary opacity-20"></div>
            </div>
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-2">Réservation Confirmée!</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Votre inspection a été réservée avec succès
        </p>
        <div className="inline-block px-6 py-2 bg-primary/10 border-2 border-primary rounded-lg">
          <p className="text-sm text-muted-foreground">Numéro de Confirmation</p>
          <p className="text-2xl font-bold text-primary">{confirmationNumber}</p>
        </div>
      </div>

      {/* Booking Details */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Inspection Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="size-5 text-primary" />
              Détails de l&apos;Inspection
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground">Type d&apos;Inspection</p>
              <p className="font-semibold text-foreground">Inspection Standard</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Véhicule</p>
              <p className="font-semibold text-foreground">Peugeot 308 (2018)</p>
            </div>
            <div className="flex items-start gap-2">
              <Calendar className="size-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground">Date & Heure</p>
                <p className="font-semibold text-foreground">Samedi 25 Janvier 2024 à 14:00</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Lieu</p>
              <p className="font-semibold text-foreground">123 Avenue de la République, Paris (75011)</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Durée Estimée</p>
              <p className="font-semibold text-foreground">1-2 heures</p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="size-5 text-primary" />
              Informations de Contact
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground">Nom</p>
              <p className="font-semibold text-foreground">Jean Dupont</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="size-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="font-semibold text-foreground">jean@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="size-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Téléphone</p>
                <p className="font-semibold text-foreground">+33 6 12 34 56 78</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="size-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Adresse</p>
                <p className="font-semibold text-foreground text-sm">123 Rue de la Paix<br />75011 Paris</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* What&apos;s Next */}
      <Card className="bg-primary/10 border-primary">
        <CardHeader>
          <CardTitle>Prochaines Étapes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                1
              </div>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Confirmation par Email</p>
              <p className="text-sm text-muted-foreground">
                Un email de confirmation avec tous les détails a été envoyé à jean@example.com
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                2
              </div>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Rappel 24h Avant</p>
              <p className="text-sm text-muted-foreground">
                Vous recevrez un rappel par SMS et email 24 heures avant votre rendez-vous
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                3
              </div>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Inspection & Rapport</p>
              <p className="text-sm text-muted-foreground">
                Votre inspection aura lieu selon la date prévue. Le rapport sera disponible dans votre espace client
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-semibold">
          <Download className="size-5" />
          Télécharger la Confirmation
        </button>
        <Link
          href={ROUTES.HOME}
          className="flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
        >
          Retour à l&apos;Accueil
        </Link>
      </div>

      {/* Contact Support */}
      <div className="text-center p-6 bg-muted/30 rounded-lg">
        <p className="text-sm text-muted-foreground mb-3">
          Vous avez des questions?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+33123456789" className="text-primary hover:underline font-semibold">
            +33 1 23 45 67 89
          </a>
          <span className="text-muted-foreground">ou</span>
          <a href="mailto:support@onclebilly.fr" className="text-primary hover:underline font-semibold">
            support@onclebilly.fr
          </a>
        </div>
      </div>
    </div>
  );
}
