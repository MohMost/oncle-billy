'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Shield, Clock, Award } from 'lucide-react';
import { INSPECTION_PACKAGES } from '@/constants';

export default function BookInspectionPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2">Étape 1: Type d&apos;Inspection</h2>
        <p className="text-muted-foreground">
          Sélectionnez le type d&apos;inspection qui correspond le mieux à vos besoins
        </p>
      </div>

      {/* Inspection Packages */}
      <div className="grid md:grid-cols-2 gap-4">
        {INSPECTION_PACKAGES.map((pkg) => (
          <Link key={pkg.id} href={`/book-inspection/vehicle`}>
            <Card className="h-full hover:ring-2 hover:ring-primary transition-all cursor-pointer">
              <CardHeader>
                <CardTitle className="text-xl">{pkg.name}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
                <div className="text-2xl font-bold text-primary mt-4">{pkg.price}€</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="size-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Why Choose Each Package */}
      <div className="mt-12 pt-8 border-t border-border">
        <h3 className="text-2xl font-bold mb-6">Comment Choisir?</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <Shield className="size-6 text-primary mb-3" />
            <h4 className="font-semibold mb-2">Pour un Achat d&apos;Occasion</h4>
            <p className="text-sm text-muted-foreground">
              Choisissez l&apos;inspection Standard ou Premium pour une évaluation complète avant l&apos;achat
            </p>
          </div>
          <div>
            <Clock className="size-6 text-primary mb-3" />
            <h4 className="font-semibold mb-2">Pour l&apos;Entretien Régulier</h4>
            <p className="text-sm text-muted-foreground">
              L&apos;inspection Basique suffit pour un contrôle de routine et de maintenance
            </p>
          </div>
          <div>
            <Award className="size-6 text-primary mb-3" />
            <h4 className="font-semibold mb-2">Pour la Tranquillité d&apos;Esprit</h4>
            <p className="text-sm text-muted-foreground">
              L&apos;inspection Premium offre la vérification la plus approfondie avec conseils experts
            </p>
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="flex justify-between pt-8">
        <button className="px-6 py-2 text-foreground font-semibold opacity-50 cursor-not-allowed">
          ← Précédent
        </button>
        <p className="text-sm text-muted-foreground">
          Sélectionnez un type d&apos;inspection pour continuer
        </p>
        <button className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors opacity-50 cursor-not-allowed">
          Suivant →
        </button>
      </div>
    </div>
  );
}
