'use client';

import { Card } from '@/components/ui/card';
import { CheckCircle2, Circle } from 'lucide-react';

interface BookingLayoutProps {
  children: React.ReactNode;
  currentStep?: number;
  totalSteps?: number;
}

const steps = [
  { number: 1, title: 'Type d\'Inspection' },
  { number: 2, title: 'Véhicule' },
  { number: 3, title: 'Date & Heure' },
  { number: 4, title: 'Informations' },
  { number: 5, title: 'Paiement' },
  { number: 6, title: 'Confirmation' },
];

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  // We'll extract step from pathname client-side in the main page
  return (
    <main className="min-h-screen bg-background py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            Réserver une Inspection
          </h1>
          <p className="text-lg text-muted-foreground">
            Suivez les 6 étapes pour réserver votre inspection automobile
          </p>
        </div>

        {/* Steps Progress */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center flex-1">
                <div className="flex items-center w-full">
                  {index > 0 && (
                    <div className="flex-1 h-1 bg-muted mx-2" />
                  )}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold flex-shrink-0 ${
                    step.number === 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                  }`}>
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="flex-1 h-1 bg-muted mx-2" />
                  )}
                </div>
                <span className="text-xs text-muted-foreground text-center mt-2 px-1 hidden sm:block">
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Card */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              {children}
            </Card>
          </div>

          {/* Summary Card */}
          <div>
            <Card className="p-6 sticky top-8">
              <h2 className="text-lg font-bold mb-6">Résumé</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Type d&apos;Inspection</p>
                  <p className="font-semibold text-foreground">À sélectionner</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Véhicule</p>
                  <p className="font-semibold text-foreground">À sélectionner</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Date & Heure</p>
                  <p className="font-semibold text-foreground">À sélectionner</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-1">Tarif</p>
                  <p className="text-2xl font-bold text-primary">À partir de 99€</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
