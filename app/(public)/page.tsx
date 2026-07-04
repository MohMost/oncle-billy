import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Star, Users } from 'lucide-react';
import { ROUTES, PRICING_PLANS } from '@/constants';

const features = [
  {
    title: 'Expertise Professionnelle',
    description: 'Nos inspecteurs certifiés ont plus de 10 ans d\'expérience',
    icon: <CheckCircle className="size-6 text-primary" />,
  },
  {
    title: 'Rapport Détaillé',
    description: 'Rapport PDF complet avec photos et recommandations',
    icon: <CheckCircle className="size-6 text-primary" />,
  },
  {
    title: 'Service Rapide',
    description: 'Inspection complète en moins de 2 heures',
    icon: <CheckCircle className="size-6 text-primary" />,
  },
  {
    title: 'Tarifs Transparents',
    description: 'Pas de frais cachés, prix affichés à l\'avance',
    icon: <CheckCircle className="size-6 text-primary" />,
  },
];

const testimonials = [
  {
    quote: 'Service impeccable, rapport très détaillé. Je recommande vivement!',
    author: 'Marie Dupont',
    role: 'Client satisfait',
    rating: 5,
  },
  {
    quote: 'Inspecteur professionnel et courtois. Inspection complète et rapide.',
    author: 'Jean Martin',
    role: 'Acheteur pré-achat',
    rating: 5,
  },
  {
    quote: 'Les recommandations nous ont permis de faire une bonne affaire.',
    author: 'Sophie Bernard',
    role: 'Cliente fidèle',
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-oncle-billy">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              <span className="text-sm font-medium text-primary">Expertise depuis 2015</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Inspections automobiles de confiance
            </h1>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Obtenez un diagnostic complet et détaillé de votre véhicule avec nos experts certifiés.
              Parfait pour l&apos;achat, la vente ou l&apos;entretien.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={ROUTES.BOOK} className="inline-flex items-center justify-center px-6 py-4 text-base font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                Réserver une inspection
                <ArrowRight className="ml-2 size-4" />
              </Link>
              <Link href={ROUTES.SERVICES} className="inline-flex items-center justify-center px-6 py-4 text-base font-semibold rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                Découvrir nos services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-oncle-billy">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Pourquoi nous choisir?
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Nous offrons le meilleur service d&apos;inspection automobile en Île-de-France
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/70 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-foreground/5">
        <div className="container-oncle-billy">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Nos tarifs
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Choisissez le type d&apos;inspection adapté à vos besoins
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {PRICING_PLANS.map((plan) => (
              <Card key={plan.id} className="overflow-hidden">
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="font-display text-4xl font-bold text-foreground">
                      {plan.price}€
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                        <CheckCircle className="size-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
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
          <div className="text-center">
            <Link href={ROUTES.PRICING} className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-semibold">
              Voir tous les détails
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container-oncle-billy">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Avis de nos clients
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Découvrez ce que nos clients disent de nos services
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/70 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                  <p className="text-foreground/50 text-xs">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-oncle-billy text-center">
          <h2 className="font-display text-4xl font-bold mb-6">
            Prêt à réserver votre inspection?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Obtenez un diagnostic professionnel en quelques clics
          </p>
          <Link href={ROUTES.BOOK} className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors">
            Réserver maintenant
            <ArrowRight className="ml-2 size-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
