'use client';

import Link from 'next/link';
import { CheckCircle, Shield, ClipboardList, Star, Play } from 'lucide-react';
import { ROUTES } from '@/constants';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-creme py-16 md:py-24">
        <div className="container-oncle-billy">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="section-badge mb-8">
                LE DE FRANCE - 2024 FORMAT
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-bleu leading-tight mb-6">
                Un avis pro.
                <br />
                <span className="text-rouge">Un achat sûr.</span>
              </h1>
              <p className="text-lg text-bleu/70 mb-8 leading-relaxed">
                Nos mécaniciens passent votre futur véhicule au crible avant que vous l&apos;achetiez. Pas de mauvaise surprise, pas de facture cachée. Juste la vérité mécanique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href={ROUTES.BOOK} className="btn-rouge">
                  RÉSERVER UN AVIS
                </Link>
                <button className="btn-outline-bleu">
                  EN SAVOIR PLUS
                </button>
              </div>
              <p className="font-display text-lg text-bleu">
                <span className="text-rouge font-bold">Avant d&apos;acheter,</span> demande à Billy.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-square bg-bleu/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 bg-gradient-to-br from-bleu/20 to-rouge/20 rounded-full" />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white rounded-lg p-3 shadow-md border-2 border-bleu">
                    <Shield className="w-8 h-8 text-bleu" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars Section */}
      <section className="section-bleu">
        <div className="container-oncle-billy">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Pillar 1 */}
            <div className="value-pillar">
              <Shield className="value-pillar-icon" />
              <h3 className="value-pillar-title text-creme font-bold">
                100% indépendant
              </h3>
              <p className="value-pillar-description">
                Aucun conflit d&apos;intérêt. Nous n&apos;avons rien à vendre sauf notre avis, c&apos;est vous.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="value-pillar">
              <ClipboardList className="value-pillar-icon" />
              <h3 className="value-pillar-title text-creme font-bold">
                180+ points de contrôle
              </h3>
              <p className="value-pillar-description">
                Vérification exhaustive du mécanique, électronique, habitacle. On ne laisse rien passer.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="value-pillar">
              <CheckCircle className="value-pillar-icon" />
              <h3 className="value-pillar-title text-creme font-bold">
                Rapport détaillé
              </h3>
              <p className="value-pillar-description">
                Un document professionnel avec photos et recommandations d&apos;exploitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-creme">
        <div className="container-oncle-billy">
          <p className="section-title">LE PROCESS</p>
          <h2 className="section-heading">
            Trois étapes, zéro stress.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {/* Step 1 */}
            <div className="step-card">
              <div className="step-number">01</div>
              <h3 className="step-title">Vous réservez</h3>
              <p className="step-description">
                Rendez-vous en ligne, on vous rappelle dans les 2h heures.
              </p>
            </div>

            {/* Step 2 */}
            <div className="step-card">
              <div className="step-number">02</div>
              <h3 className="step-title">On inspecte</h3>
              <p className="step-description">
                Un inspecteur se déplace chez le vendeur en Île-de-France.
              </p>
            </div>

            {/* Step 3 */}
            <div className="step-card">
              <div className="step-number">03</div>
              <h3 className="step-title">Vous décidez</h3>
              <p className="step-description">
                Rapport détaillé sous 24h. Vous achetez en toute confiance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-rouge">
        <div className="container-oncle-billy">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="price-title font-bold">
                Un tarif simple.
                <br />
                Un forfait unique.
              </h2>
              <p className="price-subtitle">
                200€ tout compris + déplacement, inspection complète, rapport détaillé.
              </p>
            </div>
            <div>
              <div className="price-amount">200€</div>
              <div className="price-features mt-8">
                <span className="price-feature">
                  <CheckCircle className="w-5 h-5" />
                  Toute la France
                </span>
                <span className="price-feature">
                  <CheckCircle className="w-5 h-5" />
                  Rapport sous 24h
                </span>
              </div>
              <Link href={ROUTES.BOOK} className="btn-rouge mt-8">
                RÉSERVER MAINTENANT
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-creme">
        <div className="container-oncle-billy">
          <p className="section-title">POURQUOI ONCLE BILLY</p>
          <h2 className="section-heading">
            Parce qu&apos;une occasion, ça se vérifie.
          </h2>

          <div className="benefits-grid mt-16">
            <div className="benefit-card">
              <Shield className="benefit-icon" />
              <div className="benefit-text">
                <p className="font-bold text-bleu mb-2">Vous évitez les vices cachés</p>
                <p className="text-bleu/70 text-sm">
                  des moteurs usés, des antécédents sinistres, des rappels d&apos;usine.
                </p>
              </div>
            </div>

            <div className="benefit-card">
              <CheckCircle className="benefit-icon" />
              <div className="benefit-text">
                <p className="font-bold text-bleu mb-2">Vous négociez avec arguments techniques</p>
                <p className="text-bleu/70 text-sm">
                  Notre rapport vous donne les chiffres, pas des aprioris sur la qualité.
                </p>
              </div>
            </div>

            <div className="benefit-card">
              <Shield className="benefit-icon" />
              <div className="benefit-text">
                <p className="font-bold text-bleu mb-2">Vous achetez sans stress, mème à distance</p>
                <p className="text-bleu/70 text-sm">
                  Un inspecteur qualifié vous vérifie le véhicule en île-de-france.
                </p>
              </div>
            </div>

            <div className="benefit-card">
              <ClipboardList className="benefit-icon" />
              <div className="benefit-text">
                <p className="font-bold text-bleu mb-2">Vous gagnez du temps - un seul rendez-vous</p>
                <p className="text-bleu/70 text-sm">
                  tout en voiture, c'est vrai rendez-vous, tout est vérifié.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href={ROUTES.BOOK} className="btn-rouge">
              RÉSERVER MON INSPECTION
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-bleu">
        <div className="container-oncle-billy">
          <p className="section-title text-rouge">MES CLIENTS</p>
          <h2 className="section-heading-light text-creme font-bold">
            Ils ont demandé à Billy.
            <br />
            <span className="text-rouge">Ils ont acheté sereinement.</span>
          </h2>

          {/* Video Player */}
          <div className="mt-16 mb-16">
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-rouge hover:bg-rouge/90 text-creme rounded-full p-6 transition-colors">
                  <Play className="w-12 h-12 fill-current" />
                </button>
              </div>
              <div className="absolute bottom-4 right-4 text-creme text-sm">
                Voir client
              </div>
            </div>
          </div>

          {/* Testimonials Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                author: 'Thomas L.',
                role: 'Acheteur Île-de-France',
                quote: '"J\'avais repéré une Clio sur Leboncoin. L\'inspection a révélé à l\'enleaveur à risque ! Grâce à Billy, j\'ai évité une mauvaise affaire. Le prix de l\'inspection me l\'a déjà payante - je lui fais confiance."',
              },
              {
                author: 'Karina B.',
                role: 'Acheteur Île-de-France',
                quote: '"J\'aime voiture pour ma fils. Oncle Billy a tout vérifié, c\'est exigus respect un service constement dans ses engagements. Service impeccable !"',
              },
              {
                author: 'Sophia M.',
                role: 'Acheteur Île-de-France',
                quote: '"J\'achète une voiture à distance sans sur, j\'ai engagé un Billy. Le rapport sur définition m\'a saisi ! J\'ai fait un technicien en toute confiance."',
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="testimonial-card-dark">
                <div className="testimonial-stars mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="testimonial-star" />
                  ))}
                </div>
                <p className="testimonial-quote">{testimonial.quote}</p>
                <div className="testimonial-footer">
                  <p className="testimonial-author text-creme font-bold">
                    {testimonial.author}
                  </p>
                  <p className="testimonial-details">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
