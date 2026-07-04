'use client';

import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';

export default function ContactInfoPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    acceptNotifications: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const isComplete = formData.firstName && formData.lastName && formData.email && formData.phone;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2">Étape 4: Informations de Contact</h2>
        <p className="text-muted-foreground">
          Fournissez vos informations personnelles pour compléter votre réservation
        </p>
      </div>

      <form className="space-y-6">
        {/* Name */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">Prénom *</Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="Jean"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="lastName">Nom *</Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Dupont"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Contact Details */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="jean@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="phone">Téléphone *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+33 6 12 34 56 78"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <Label htmlFor="address">Adresse</Label>
          <Input
            id="address"
            name="address"
            placeholder="123 Rue de la Paix"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        {/* City and Postal Code */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="city">Ville</Label>
            <Input
              id="city"
              name="city"
              placeholder="Paris"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="postalCode">Code Postal</Label>
            <Input
              id="postalCode"
              name="postalCode"
              placeholder="75011"
              value={formData.postalCode}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Preferences */}
        <div className="flex items-start space-x-2 p-4 bg-muted/30 rounded-lg">
          <Checkbox
            id="acceptNotifications"
            name="acceptNotifications"
            checked={formData.acceptNotifications}
            onCheckedChange={(checked) => setFormData(prev => ({
              ...prev,
              acceptNotifications: checked as boolean,
            }))}
          />
          <label htmlFor="acceptNotifications" className="text-sm text-foreground cursor-pointer">
            J&apos;accepte de recevoir des notifications par email et SMS concernant ma réservation
          </label>
        </div>

        {/* Confirmation Text */}
        <div className="p-4 bg-primary/10 border-2 border-primary rounded-lg text-sm text-foreground">
          En continuant, vous confirmez que les informations fournies sont exactes et que vous acceptez nos 
          <Link href="/terms" className="text-primary hover:underline ml-1">conditions d&apos;utilisation</Link>.
        </div>
      </form>

      {/* Navigation */}
      <div className="flex justify-between pt-8">
        <Link 
          href="/book-inspection/date-time"
          className="px-6 py-2 text-foreground font-semibold border-2 border-border rounded-lg hover:bg-muted transition-colors"
        >
          ← Précédent
        </Link>
        <Link
          href={isComplete ? "/book-inspection/payment" : "#"}
          className={`px-6 py-2 font-semibold rounded-lg transition-colors ${
            isComplete
              ? 'bg-primary text-primary-foreground hover:bg-primary/90'
              : 'bg-muted text-muted-foreground cursor-not-allowed opacity-50'
          }`}
        >
          Suivant →
        </Link>
      </div>
    </div>
  );
}
