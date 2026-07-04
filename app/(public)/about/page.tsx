'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, MapPin, Award } from 'lucide-react';

const stats = [
  { label: 'Inspections Réalisées', value: '5000+' },
  { label: 'Clients Satisfaits', value: '98%' },
  { label: 'Années d\'Expérience', value: '10+' },
  { label: 'Experts Certifiés', value: '15' },
];

const team = [
  {
    name: 'Jean Dubois',
    role: 'Fondateur & Expert Principal',
    description: 'Expert en inspection automobile avec 15 ans d\'expérience',
  },
  {
    name: 'Marie Lemaire',
    role: 'Directrice Opérationnelle',
    description: 'Spécialiste en gestion de flotte et satisfaction client',
  },
  {
    name: 'Pierre Moreau',
    role: 'Expert Technique',
    description: 'Certification internationale en diagnostic automobile',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              À Propos d&apos;Oncle Billy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Depuis plus de 10 ans, nous fournissons des inspections automobiles fiables et professionnelles en Île-de-France
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Notre Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Chez Oncle Billy, nous croyons que chaque acheteur de véhicule mérite une inspection complète et honnête. Notre mission est de fournir des diagnostics automobiles fiables et détaillés pour aider nos clients à prendre les meilleures décisions.
              </p>
              <p className="text-lg text-muted-foreground">
                Nous travaillons avec intégrité, transparence et expertise pour assurer la sécurité et la satisfaction de tous nos clients.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <Card key={stat.label}>
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Award className="size-8 text-primary mb-2" />
                <CardTitle>Excellence</CardTitle>
                <CardDescription>
                  Nous maintenons les plus hauts standards de qualité dans chaque inspection
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Star className="size-8 text-primary mb-2" />
                <CardTitle>Intégrité</CardTitle>
                <CardDescription>
                  Nos rapports sont objectifs, détaillés et sans compromis
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <MapPin className="size-8 text-primary mb-2" />
                <CardTitle>Proximité</CardTitle>
                <CardDescription>
                  Service de qualité accessible à tous en Île-de-France
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Notre Équipe</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/10 border-2 border-primary rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Besoin de Nous Contacter?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Notre équipe est disponible pour répondre à toutes vos questions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+33123456789" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold">
                +33 1 23 45 67 89
              </a>
              <a href="mailto:contact@onclebilly.fr" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-semibold">
                contact@onclebilly.fr
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
