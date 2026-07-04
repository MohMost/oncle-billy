import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ROUTES, COMPANY_INFO, SOCIAL_LINKS } from '@/constants';

const footerLinks = [
  {
    title: 'Produits',
    links: [
      { label: 'Inspection Basique', href: ROUTES.SERVICES },
      { label: 'Inspection Complète', href: ROUTES.SERVICES },
      { label: 'Pré-achat', href: ROUTES.SERVICES },
    ],
  },
  {
    title: 'Compagnie',
    links: [
      { label: 'À propos', href: ROUTES.ABOUT },
      { label: 'Blog', href: ROUTES.BLOG },
      { label: 'Contact', href: ROUTES.CONTACT },
    ],
  },
  {
    title: 'Légal',
    links: [
      { label: 'Politique de confidentialité', href: '/privacy' },
      { label: 'Conditions d\'utilisation', href: '/terms' },
      { label: 'Cookies', href: '/cookies' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-oncle-billy py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl font-bold mb-4">Oncle Billy</h3>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Inspections automobiles professionnelles de confiance depuis {COMPANY_INFO.FOUNDED}.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/50 hover:text-background transition-colors"
                aria-label="Facebook"
              >
                <span className="text-sm">f</span>
              </a>
              <a
                href={SOCIAL_LINKS.INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/50 hover:text-background transition-colors"
                aria-label="Instagram"
              >
                <span className="text-sm">📸</span>
              </a>
              <a
                href={SOCIAL_LINKS.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/50 hover:text-background transition-colors"
                aria-label="LinkedIn"
              >
                <span className="text-sm">in</span>
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-sm mb-4 uppercase tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-background/70 hover:text-background text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-background/10 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href={`tel:${COMPANY_INFO.PHONE}`}
              className="flex items-start gap-3 hover:text-primary transition-colors group"
            >
              <Phone className="size-5 mt-1 flex-shrink-0 group-hover:text-primary" />
              <div>
                <p className="text-xs uppercase tracking-wide text-background/50">Téléphone</p>
                <p className="text-sm font-medium">{COMPANY_INFO.PHONE}</p>
              </div>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.EMAIL}`}
              className="flex items-start gap-3 hover:text-primary transition-colors group"
            >
              <Mail className="size-5 mt-1 flex-shrink-0 group-hover:text-primary" />
              <div>
                <p className="text-xs uppercase tracking-wide text-background/50">Email</p>
                <p className="text-sm font-medium">{COMPANY_INFO.EMAIL}</p>
              </div>
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="size-5 mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wide text-background/50">Adresse</p>
                <p className="text-sm font-medium">{COMPANY_INFO.ADDRESS}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-background/50">
              © {new Date().getFullYear()} {COMPANY_INFO.NAME}. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-xs text-background/50">
              <Link href="/privacy" className="hover:text-background transition-colors">
                Confidentialité
              </Link>
              <Link href="/terms" className="hover:text-background transition-colors">
                Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
