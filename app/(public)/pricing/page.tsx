'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { ROUTES } from '@/constants';

const pricingPlans = [
  {
    id: 'basic',
    name: 'Inspection Basique',
    price: '99',
    description: 'Pour un contrôle général de votre véhicule',
    features: [
      'Inspection visuelle externe',
      'Vérification des fluides',
      'Test des freins',
      'Rapport basique',
      'Support email',
    ],
    highlighted: false,
  },
  {
    id: 'standard',
    name: 'Inspection Standard',
    price: '149',
    description: 'Notre option la plus populaire',
    features: [
      'Tout ce qui est inclus en Basique',
      'Diagnostic électronique',
      'Inspection du moteur',
      'Vérification historique',
      'Rapport détaillé en PDF',
      'Support prioritaire',
      'Conseils personnalisés',
    ],
    highlighted: true,
  },
  {
    id: 'premium',
    name: 'Inspection Premium',
    price: '249',
    description: 'Pour les plus exigeants',
    features: [
      'Tout ce qui est inclus en Standard',
      'Essai routier professionnel',
      'Photos détaillées (50+)',
      'Vérification de carfax complète',
      'Rapport exécutif',
      'Support téléphonique 24/7',
      'Consultation illimitée',
      'Garantie de satisfaction',
    ],
    highlighted: false,
  },
];

const faqs = [
  {
    question: 'Combien de temps dure une inspection?',
    answer: 'Une inspection complète dure généralement 1-2 heures selon le véhicule et le type d\'inspection.',
  },
  {
    question: 'Quand reçois-je le rapport?',
    answer: 'Vous recevez un résumé initial dans les 24 heures et le rapport complet sous 48 heures.',
  },
  {
    question: 'Puis-je obtenir un remboursement?',
    answer: 'Nous offrons une garantie de satisfaction à 100%. Si vous n\'êtes pas satisfait, nous vous remboursons intégralement.',
  },
  {
    question: 'Proposez-vous des tarifs pour les flottes?',
    answer: 'Oui! Nous offrons des tarifs spéciaux pour les entreprises avec plusieurs véhicules. Contactez-nous pour un devis.',
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Tarification Transparente
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choisissez le plan d&apos;inspection qui correspond le mieux à vos besoins
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <Card 
                key={plan.id}
                className={`flex flex-col ${plan.highlighted ? 'md:scale-105 ring-2 ring-primary shadow-lg' : ''}`}
              >
                {plan.highlighted && (
                  <div className="bg-primary text-primary-foreground text-center text-sm font-semibold py-2">
                    POPULAIRE
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">€</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="size-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={ROUTES.BOOK}
                    className={`inline-flex w-full items-center justify-center px-4 py-3 rounded-lg font-semibold transition-colors ${
                      plan.highlighted
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'bg-muted text-foreground hover:bg-muted/80'
                    }`}
                  >
                    Réserver
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Questions Fréquentes</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/10 border-2 border-primary rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à Réserver?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Sélectionnez une date et heure qui vous convient pour votre inspection
            </p>
            <Link 
              href={ROUTES.BOOK} 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Commencer la Réservation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
