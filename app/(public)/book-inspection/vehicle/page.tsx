'use client';

import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

const vehicleYears = Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i);
const vehicleConditions = ['Excellent', 'Bon', 'Moyen', 'Mauvais'];

export default function VehiclePage() {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    mileage: '',
    fuelType: 'petrol',
    condition: 'bon',
    vin: '',
    licensePlate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isComplete = formData.brand && formData.model && formData.year;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2">Étape 2: Informations du Véhicule</h2>
        <p className="text-muted-foreground">
          Fournissez les détails de votre véhicule
        </p>
      </div>

      <form className="space-y-6">
        {/* Vehicle Basics */}
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="brand">Marque *</Label>
            <Input
              id="brand"
              name="brand"
              placeholder="Ex: Peugeot, Renault, BMW"
              value={formData.brand}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="model">Modèle *</Label>
            <Input
              id="model"
              name="model"
              placeholder="Ex: 308, Clio, X3"
              value={formData.model}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="year">Année *</Label>
            <select
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Sélectionnez l&apos;année</option>
              {vehicleYears.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Mileage and Fuel */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="mileage">Kilométrage (km)</Label>
            <Input
              id="mileage"
              name="mileage"
              type="number"
              placeholder="Ex: 120000"
              value={formData.mileage}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="fuelType">Type de Carburant</Label>
            <select
              id="fuelType"
              name="fuelType"
              value={formData.fuelType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="petrol">Essence</option>
              <option value="diesel">Diesel</option>
              <option value="hybrid">Hybride</option>
              <option value="electric">Électrique</option>
            </select>
          </div>
        </div>

        {/* Condition and VIN */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="condition">État Général</Label>
            <select
              id="condition"
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="excellent">Excellent</option>
              <option value="bon">Bon</option>
              <option value="moyen">Moyen</option>
              <option value="mauvais">Mauvais</option>
            </select>
          </div>
          <div>
            <Label htmlFor="licensePlate">Plaque d&apos;Immatriculation</Label>
            <Input
              id="licensePlate"
              name="licensePlate"
              placeholder="Ex: AB-123-CD"
              value={formData.licensePlate}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* VIN */}
        <div>
          <Label htmlFor="vin">VIN (Numéro d&apos;Identification du Véhicule)</Label>
          <Input
            id="vin"
            name="vin"
            placeholder="Ex: VF1JK55D762234567 (Optionnel)"
            value={formData.vin}
            onChange={handleChange}
          />
          <p className="text-xs text-muted-foreground mt-1">
            Optionnel - Vous le trouverez sur les documents d&apos;enregistrement ou le pare-brise
          </p>
        </div>
      </form>

      {/* Navigation */}
      <div className="flex justify-between pt-8">
        <Link 
          href="/book-inspection"
          className="px-6 py-2 text-foreground font-semibold border-2 border-border rounded-lg hover:bg-muted transition-colors"
        >
          ← Précédent
        </Link>
        <Link
          href={isComplete ? "/book-inspection/date-time" : "#"}
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
