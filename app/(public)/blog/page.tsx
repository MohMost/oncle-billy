'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDate, truncate } from '@/lib/utils';
import { Calendar, User } from 'lucide-react';

const articles = [
  {
    id: 'what-to-check-used-car',
    title: 'Ce qu\'il faut Vérifier Avant d\'Acheter une Voiture d\'Occasion',
    excerpt: 'Un guide complet pour inspecter un véhicule d\'occasion et éviter les mauvaises surprises.',
    author: 'Jean Dubois',
    date: new Date('2024-01-15'),
    category: 'Conseils d\'Achat',
    readTime: '5 min',
  },
  {
    id: 'car-maintenance-tips',
    title: '10 Conseils d\'Entretien Automobile pour Prolonger la Durée de Vie de Votre Voiture',
    excerpt: 'Découvrez les meilleures pratiques pour entretenir votre véhicule et éviter les réparations coûteuses.',
    author: 'Marie Lemaire',
    date: new Date('2024-01-10'),
    category: 'Entretien',
    readTime: '7 min',
  },
  {
    id: 'understanding-obd',
    title: 'Comprendre le Diagnostic OBD: Comment Fonctionne le Diagnostic Automobile',
    excerpt: 'Explication technique du système de diagnostic moderne des véhicules et ce que cela signifie pour vous.',
    author: 'Pierre Moreau',
    date: new Date('2024-01-05'),
    category: 'Technique',
    readTime: '8 min',
  },
  {
    id: 'winter-car-care',
    title: 'Préparer Votre Voiture pour l\'Hiver: Checklist Complète',
    excerpt: 'Les étapes essentielles pour préparer votre véhicule aux conditions hivernales difficiles.',
    author: 'Jean Dubois',
    date: new Date('2023-12-28'),
    category: 'Saisonnalité',
    readTime: '6 min',
  },
  {
    id: 'red-flags-used-cars',
    title: 'Les Signaux d\'Alerte à Rechercher chez une Voiture d\'Occasion',
    excerpt: 'Apprenez à identifier les problèmes potentiels qui devraient vous faire hésiter à acheter.',
    author: 'Pierre Moreau',
    date: new Date('2023-12-20'),
    category: 'Conseils d\'Achat',
    readTime: '6 min',
  },
  {
    id: 'electric-car-inspection',
    title: 'L\'Inspection des Véhicules Électriques: Ce qui Est Différent',
    excerpt: 'Un guide spécifique pour inspecter les voitures électriques et évaluer la santé de la batterie.',
    author: 'Marie Lemaire',
    date: new Date('2023-12-15'),
    category: 'Électrique',
    readTime: '7 min',
  },
];

const categories = [
  'Tous les Articles',
  'Conseils d\'Achat',
  'Entretien',
  'Technique',
  'Saisonnalité',
  'Électrique',
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Blog Automobile
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conseils, guides techniques et actualités pour vous aider à mieux comprendre votre véhicule
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-full border-2 border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors text-sm font-medium"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <Link key={article.id} href={`/blog/${article.id}`}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded font-semibold">
                        {article.category}
                      </span>
                      <span>{article.readTime}</span>
                    </div>
                    <CardTitle className="text-xl line-clamp-2">{article.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                      <div className="flex items-center gap-1">
                        <Calendar className="size-3.5" />
                        <span>{formatDate(article.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="size-3.5" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 rounded-lg border-2 border-border text-foreground hover:bg-muted transition-colors text-base font-semibold">
              Charger Plus d&apos;Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-16 bg-primary/10 border-2 border-primary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Restez Informé</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Recevez nos derniers conseils et actualités directement dans votre boîte de réception
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold whitespace-nowrap"
              >
                S&apos;Abonner
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
