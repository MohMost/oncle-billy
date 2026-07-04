'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants';

const navigationLinks = [
  { label: 'Accueil', href: ROUTES.HOME },
  { label: 'Services', href: ROUTES.SERVICES },
  { label: 'À propos', href: ROUTES.ABOUT },
  { label: 'Tarifs', href: ROUTES.PRICING },
  { label: 'Blog', href: ROUTES.BLOG },
  { label: 'Contact', href: ROUTES.CONTACT },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container-oncle-billy py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={ROUTES.HOME} className="flex items-center gap-2">
            <div className="font-display text-2xl font-bold text-primary">
              Oncle Billy
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex gap-3">
            <Link href={ROUTES.LOGIN} className="inline-flex items-center justify-center px-4 py-2 rounded-lg border-2 border-border text-foreground hover:bg-muted transition-colors text-sm font-semibold">
              Connexion
            </Link>
            <Link href={ROUTES.BOOK} className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-semibold">
              Réserver
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="size-6 text-foreground" />
            ) : (
              <Menu className="size-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 border-t border-border mt-4">
            <div className="flex flex-col gap-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-3 pt-4 border-t border-border">
                <Link href={ROUTES.LOGIN} className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg border-2 border-border text-foreground hover:bg-muted transition-colors text-sm font-semibold">
                  Connexion
                </Link>
                <Link href={ROUTES.BOOK} className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-semibold">
                  Réserver
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
