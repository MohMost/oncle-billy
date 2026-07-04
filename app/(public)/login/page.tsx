'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { ROUTES } from '@/constants';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // TODO: Implement authentication with backend
      // For now, just simulate success
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Redirect to dashboard
      window.location.href = '/dashboard';
    } catch (err) {
      setError('Identifiants invalides. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Connexion</CardTitle>
            <CardDescription>
              Accédez à votre compte Oncle Billy
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-lg bg-destructive/10 border border-destructive text-destructive text-sm">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Adresse Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Mot de Passe</Label>
                  <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                    Mot de passe oublié?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  disabled={loading}
                />
                <Label htmlFor="remember" className="cursor-pointer">
                  Se souvenir de moi
                </Label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 px-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold"
              >
                {loading ? 'Connexion...' : 'Se Connecter'}
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-background text-muted-foreground">
                    Vous n&apos;avez pas de compte?
                  </span>
                </div>
              </div>

              <Link
                href={ROUTES.REGISTER}
                className="w-full block text-center py-2 px-4 rounded-lg border-2 border-border text-foreground hover:bg-muted transition-colors font-semibold"
              >
                Créer un Compte
              </Link>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-6">
              En vous connectant, vous acceptez nos{' '}
              <Link href="/terms" className="text-primary hover:underline">
                conditions d&apos;utilisation
              </Link>{' '}
              et notre{' '}
              <Link href="/privacy" className="text-primary hover:underline">
                politique de confidentialité
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
