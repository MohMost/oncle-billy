'use client';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p>
              Chez Oncle Billy, nous accordons une grande importance à la confidentialité de vos données personnelles.
              Cette politique explique comment nous collectons, utilisons et protégeons vos informations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Données Collectées</h2>
            <p>Nous collectons les types de données suivants:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Informations de contact (nom, email, téléphone, adresse)</li>
              <li>Informations sur le véhicule (marque, modèle, immatriculation)</li>
              <li>Informations de paiement (traitées de manière sécurisée)</li>
              <li>Données de navigation sur notre site web</li>
              <li>Communications avec notre équipe de support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Utilisation des Données</h2>
            <p>Vos données sont utilisées pour:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Fournir et améliorer nos services d&apos;inspection</li>
              <li>Traiter les réservations et les paiements</li>
              <li>Communiquer avec vous concernant vos inspections</li>
              <li>Envoyer des mises à jour et des offres promotionnelles (avec consentement)</li>
              <li>Analyser l&apos;utilisation de notre site pour l&apos;améliorer</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Sécurité des Données</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre
              l&apos;accès non autorisé, la modification ou la divulgation. Cela inclut le chiffrement, les pare-feu
              et les contrôles d&apos;accès.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Conservation des Données</h2>
            <p>
              Nous conservons vos données personnelles tant qu&apos;elles sont nécessaires pour fournir nos services,
              conformément à la loi applicable. Vous pouvez demander la suppression de vos données à tout moment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
            <p>
              Notre site utilise des cookies pour améliorer votre expérience utilisateur. Vous pouvez gérer vos
              préférences de cookies via les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Vos Droits</h2>
            <p>Vous avez le droit de:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Accéder à vos données personnelles</li>
              <li>Corriger les informations inexactes</li>
              <li>Supprimer vos données (droit à l&apos;oubli)</li>
              <li>Vous opposer au traitement de vos données</li>
              <li>Demander la portabilité de vos données</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Contact</h2>
            <p>
              Pour toute question concernant cette politique ou vos données personnelles, contactez-nous à:
              <br />
              Email: privacy@onclebilly.fr
              <br />
              Téléphone: +33 1 23 45 67 89
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Modifications</h2>
            <p>
              Nous pouvons mettre à jour cette politique de confidentialité de temps en temps. Nous vous informerons
              de tout changement important par email ou via notre site web.
            </p>
          </section>

          <p className="text-xs text-muted-foreground pt-8 border-t border-border">
            Dernière mise à jour: Janvier 2024
          </p>
        </div>
      </div>
    </main>
  );
}
