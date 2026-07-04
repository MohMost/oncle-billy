'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard, Lock } from 'lucide-react';
import { useState } from 'react';

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardData, setCardData] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardData(prev => ({ ...prev, [name]: value }));
  };

  const isComplete = paymentMethod === 'card' 
    ? cardData.cardName && cardData.cardNumber && cardData.expiryDate && cardData.cvv
    : paymentMethod === 'paypal' || paymentMethod === 'transfer';

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2">Étape 5: Paiement</h2>
        <p className="text-muted-foreground">
          Sélectionnez votre mode de paiement et complétez la transaction
        </p>
      </div>

      {/* Price Summary */}
      <Card className="bg-primary/10 border-primary">
        <CardHeader>
          <CardTitle className="text-2xl">Récapitulatif du Paiement</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Inspection Standard</span>
              <span className="font-semibold">149,00€</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>TVA (20%)</span>
              <span>29,80€</span>
            </div>
            <div className="border-t border-primary pt-2 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-primary">178,80€</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <div className="space-y-4">
        <Label>Méthode de Paiement</Label>
        
        {/* Card Payment */}
        <Card 
          className={`cursor-pointer transition-colors ${paymentMethod === 'card' ? 'ring-2 ring-primary' : ''}`}
          onClick={() => setPaymentMethod('card')}
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <input 
                type="radio" 
                name="payment" 
                value="card" 
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')}
                className="w-5 h-5"
              />
              <div className="flex items-center gap-2 flex-1">
                <CreditCard className="size-5 text-primary" />
                <CardTitle className="text-base">Carte Bancaire</CardTitle>
              </div>
            </div>
          </CardHeader>
          
          {paymentMethod === 'card' && (
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="cardName">Nom du Titulaire</Label>
                <Input
                  id="cardName"
                  name="cardName"
                  placeholder="Jean Dupont"
                  value={cardData.cardName}
                  onChange={handleCardChange}
                />
              </div>

              <div>
                <Label htmlFor="cardNumber">Numéro de Carte</Label>
                <Input
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={cardData.cardNumber}
                  onChange={handleCardChange}
                  maxLength={19}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiryDate">Date d&apos;Expiration</Label>
                  <Input
                    id="expiryDate"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={cardData.expiryDate}
                    onChange={handleCardChange}
                    maxLength={5}
                  />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    name="cvv"
                    placeholder="123"
                    value={cardData.cvv}
                    onChange={handleCardChange}
                    maxLength={4}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="size-4" />
                <span>Paiement sécurisé par SSL</span>
              </div>
            </CardContent>
          )}
        </Card>

        {/* PayPal */}
        <Card 
          className={`cursor-pointer transition-colors ${paymentMethod === 'paypal' ? 'ring-2 ring-primary' : ''}`}
          onClick={() => setPaymentMethod('paypal')}
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <input 
                type="radio" 
                name="payment" 
                value="paypal" 
                checked={paymentMethod === 'paypal'}
                onChange={() => setPaymentMethod('paypal')}
                className="w-5 h-5"
              />
              <CardTitle className="text-base">PayPal</CardTitle>
              <span className="text-xs text-muted-foreground ml-auto">Recommandé</span>
            </div>
          </CardHeader>
        </Card>

        {/* Bank Transfer */}
        <Card 
          className={`cursor-pointer transition-colors ${paymentMethod === 'transfer' ? 'ring-2 ring-primary' : ''}`}
          onClick={() => setPaymentMethod('transfer')}
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <input 
                type="radio" 
                name="payment" 
                value="transfer" 
                checked={paymentMethod === 'transfer'}
                onChange={() => setPaymentMethod('transfer')}
                className="w-5 h-5"
              />
              <CardTitle className="text-base">Virement Bancaire</CardTitle>
            </div>
          </CardHeader>
        </Card>
      </div>

      {/* Terms Confirmation */}
      <div className="p-4 bg-muted/30 rounded-lg text-sm text-foreground">
        En cliquant sur &quot;Valider la Réservation&quot;, vous confirmez que vous avez lu et accepté nos 
        <Link href="/terms" className="text-primary hover:underline ml-1">conditions de paiement</Link>.
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-8">
        <Link 
          href="/book-inspection/contact-info"
          className="px-6 py-2 text-foreground font-semibold border-2 border-border rounded-lg hover:bg-muted transition-colors"
        >
          ← Précédent
        </Link>
        <Link
          href={isComplete ? "/book-inspection/confirmation" : "#"}
          className={`px-6 py-2 font-semibold rounded-lg transition-colors ${
            isComplete
              ? 'bg-primary text-primary-foreground hover:bg-primary/90'
              : 'bg-muted text-muted-foreground cursor-not-allowed opacity-50'
          }`}
        >
          Valider →
        </Link>
      </div>
    </div>
  );
}
