'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Shield, Clock, Users } from 'lucide-react';
import { ROUTES } from '@/constants';

const services = [
  {
    id: 'pre-purchase',
    title: 'Inspection Pré-Achat',
    description: 'Diagnostic complet avant l\'achat d\'un véhicule d\'occasion',
    price: '149€',
    features: [
      'Contrôle mécanique approfondi',
      'Vérification historique (carfax)',
      'Test de conduite professionnel',
      'Rapport détaillé en PDF',
    ],
  },
  {
    id: 'periodic',
    title: 'Contrôle Périodique',
    description: 'Inspection régulière pour maintenir votre véhicule en bon état',
    price: 'À partir de 99€',
    features: [
      'Inspection visuelle complète',
      'Test des freins',
      'Vérification des pneus',
      'Rapport personnalisé',
    ],
  },
  {
    id: 'fleet',
    title: 'Inspection Flotte',
    description: 'Solutions d\'inspection pour les flottes professionnelles',
    price: 'Tarif entreprise',
    features: [
      'Inspections programmées',
      'Rapports de gestion',
      'Support dédié',
      'Suivi de maintenance',
    ],
  },
  {
    id: 'accident',
    title: 'Inspection Accident',
    description: 'Évaluation des dégâts après sinistre',
    price: '199€',
    features: [
      'Estimation précise des dégâts',
      'Photos professionnelles',
      'Rapport pour assurance',
      'Documentation complète',
    ],
  },
];

const features = [
  {
    icon: Shield,
    title: 'Expertise Certifiée',
    description: 'Inspecteurs formés et certifiés avec 10+ ans d\'expérience',
  },
  {
    icon: Clock,
    title: 'Service Rapide',
    description: 'Inspection complète en 1-2 heures, résultats immédiats',
  },
  {
    icon: Users,
    title: 'Support Client',
    description: 'Équipe dédiée pour répondre à toutes vos questions',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nos Services d&apos;Inspection Automobile
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des inspections professionnelles adaptées à tous vos besoins, du contrôle personnel à la gestion de flotte
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <div className="text-2xl font-bold text-primary mt-4">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="size-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={ROUTES.BOOK} className="inline-flex w-full items-center justify-center px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-semibold">
                    Réserver
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi Choisir Oncle Billy?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="text-center">
                  <Icon className="size-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/10 border-2 border-primary rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à inspirer votre véhicule?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Réservez votre inspection dès aujourd&apos;hui et obtenez un rapport complet
            </p>
            <Link href={ROUTES.BOOK} className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              Réserver une Inspection
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
