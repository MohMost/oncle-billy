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
      // Test credentials
      const testAccounts = [
        // Admin account
        { email: 'admin@onclebilly.fr', password: 'Admin123!', role: 'admin' },
        // Inspector account
        { email: 'inspector@onclebilly.fr', password: 'Inspector123!', role: 'inspector' },
        // Client account
        { email: 'client@onclebilly.fr', password: 'Client123!', role: 'client' },
      ];

      const account = testAccounts.find(acc => acc.email === email && acc.password === password);
      
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (account) {
        // Store user session
        localStorage.setItem('user', JSON.stringify({
          email: account.email,
          role: account.role,
          name: account.role === 'admin' ? 'Admin User' : account.role === 'inspector' ? 'Inspector User' : 'Client User'
        }));
        
        // Redirect based on role
        if (account.role === 'admin') {
          window.location.href = '/admin/dashboard';
        } else {
          window.location.href = '/dashboard';
        }
      } else {
        setError('Identifiants invalides. Veuillez réessayer.');
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
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

            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-xs font-semibold text-primary mb-3">Comptes de Test</p>
              <div className="space-y-2 text-xs text-foreground/70">
                <div>
                  <p className="font-semibold text-foreground">Admin:</p>
                  <p>admin@onclebilly.fr / Admin123!</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Inspector:</p>
                  <p>inspector@onclebilly.fr / Inspector123!</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Client:</p>
                  <p>client@onclebilly.fr / Client123!</p>
                </div>
              </div>
            </div>

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
