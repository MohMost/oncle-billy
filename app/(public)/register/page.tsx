'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { ROUTES } from '@/constants';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      setLoading(false);
      return;
    }

    if (!formData.agreeTerms) {
      setError('Vous devez accepter les conditions d\'utilisation');
      setLoading(false);
      return;
    }

    try {
      // TODO: Implement registration with backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess(true);
      // Redirect to login after success
      setTimeout(() => {
        window.location.href = ROUTES.LOGIN;
      }, 2000);
    } catch (err) {
      setError('Une erreur s\'est produite lors de la création du compte');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md">
          <CardContent className="pt-8 text-center">
            <div className="mb-4 text-4xl">✓</div>
            <h2 className="text-2xl font-bold mb-2">Compte Créé!</h2>
            <p className="text-muted-foreground mb-6">
              Votre compte a été créé avec succès. Vous serez redirigé vers la page de connexion...
            </p>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Créer un Compte</CardTitle>
            <CardDescription>
              Inscrivez-vous pour accéder à tous les services d&apos;Oncle Billy
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-lg bg-destructive/10 border border-destructive text-destructive text-sm">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Jean"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Dupont"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Adresse Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Mot de Passe</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmer le Mot de Passe</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) => setFormData(prev => ({
                    ...prev,
                    agreeTerms: checked as boolean,
                  }))}
                  disabled={loading}
                />
                <label htmlFor="agreeTerms" className="text-sm text-foreground cursor-pointer">
                  J&apos;accepte les{' '}
                  <Link href="/terms" className="text-primary hover:underline">
                    conditions d&apos;utilisation
                  </Link>{' '}
                  et la{' '}
                  <Link href="/privacy" className="text-primary hover:underline">
                    politique de confidentialité
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 px-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold"
              >
                {loading ? 'Création...' : 'Créer un Compte'}
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-background text-muted-foreground">
                    Vous avez déjà un compte?
                  </span>
                </div>
              </div>

              <Link
                href={ROUTES.LOGIN}
                className="w-full block text-center py-2 px-4 rounded-lg border-2 border-border text-foreground hover:bg-muted transition-colors font-semibold"
              >
                Se Connecter
              </Link>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
