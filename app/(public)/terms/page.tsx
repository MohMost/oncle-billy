'use client';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Conditions Générales d&apos;Utilisation</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptation des Conditions</h2>
            <p>
              En utilisant le site web d&apos;Oncle Billy et en réservant nos services, vous acceptez d&apos;être
              lié par ces conditions générales. Si vous n&apos;acceptez pas ces conditions, vous ne pouvez pas
              utiliser nos services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Services Fournis</h2>
            <p>
              Oncle Billy fournit des services d&apos;inspection automobile professionnelle. Nos inspecteurs
              examinent les véhicules et fournissent des rapports basés sur leur expertise et leurs observations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Réservations et Paiements</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Les réservations doivent être effectuées via notre site web</li>
              <li>Un acompte peut être requis au moment de la réservation</li>
              <li>Les paiements sont traités de manière sécurisée</li>
              <li>Les prix incluent la TVA sauf indication contraire</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Annulation et Remboursement</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Les annulations faites 48 heures avant l&apos;inspection sont remboursées intégralement</li>
              <li>Les annulations de moins de 48 heures sont facturées à 50%</li>
              <li>Les inspections manquées sans avis sont facturées intégralement</li>
              <li>Nous offrons une garantie de satisfaction à 100%</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Responsabilité</h2>
            <p>
              Oncle Billy fournit des services d&apos;inspection basés sur des normes industrielles. Cependant,
              nous ne pouvons pas garantir que toutes les conditions du véhicule seront détectées. Les rapports
              sont basés sur l&apos;inspection à un moment donné et ne constituent pas une garantie du véhicule.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Utilisation du Site Web</h2>
            <p>Vous acceptez d&apos;utiliser ce site web uniquement à des fins légales et de ne pas:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Violer les droits de propriété intellectuelle</li>
              <li>Transmettre du contenu offensant ou illégal</li>
              <li>Tenter d&apos;accéder à des systèmes de manière non autorisée</li>
              <li>Spammer ou harceler d&apos;autres utilisateurs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Propriété Intellectuelle</h2>
            <p>
              Tout le contenu de ce site web, y compris les textes, images, logos et rapports d&apos;inspection,
              est la propriété d&apos;Oncle Billy ou de ses partenaires et est protégé par les lois sur la propriété
              intellectuelle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Limitation de Responsabilité</h2>
            <p>
              Sauf disposition légale contraire, Oncle Billy ne sera pas responsable des dommages indirects,
              accidentels ou consécutifs résultant de votre utilisation de nos services ou de notre site web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Modifications des Conditions</h2>
            <p>
              Oncle Billy se réserve le droit de modifier ces conditions à tout moment. Les modifications prendront
              effet immédiatement après leur publication. Votre utilisation continue du site constitue votre
              acceptation des conditions modifiées.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Droit Applicable</h2>
            <p>
              Ces conditions sont régies par les lois de la France. Tout différend sera résolu selon la juridiction
              compétente en France.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Contact</h2>
            <p>
              Pour toute question concernant ces conditions, contactez-nous à:
              <br />
              Email: legal@onclebilly.fr
              <br />
              Téléphone: +33 1 23 45 67 89
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
