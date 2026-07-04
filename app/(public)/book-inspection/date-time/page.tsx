'use client';

import Link from 'next/link';
import { Label } from '@/components/ui/label';
import { Calendar, Clock } from 'lucide-react';
import { useState } from 'react';

const timeSlots = ['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

export default function DateTimePage() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const isComplete = date && time;

  // Generate next 30 days
  const dates = Array.from({ length: 30 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1); // Skip today
    return d;
  });

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2">Étape 3: Date & Heure</h2>
        <p className="text-muted-foreground">
          Sélectionnez la date et l&apos;heure qui vous convient
        </p>
      </div>

      <div className="space-y-6">
        {/* Date Selection */}
        <div>
          <Label className="flex items-center gap-2 mb-4">
            <Calendar className="size-5" />
            <span>Sélectionnez une Date</span>
          </Label>
          <div className="grid grid-cols-7 gap-2">
            {dates.map((d) => {
              const dateStr = d.toISOString().split('T')[0];
              const dayName = d.toLocaleDateString('fr-FR', { weekday: 'short' }).slice(0, 3);
              const dayNum = d.getDate();
              
              return (
                <button
                  key={dateStr}
                  onClick={() => setDate(dateStr)}
                  className={`p-3 rounded-lg border-2 transition-colors text-center ${
                    date === dateStr
                      ? 'border-primary bg-primary/10 text-primary font-bold'
                      : 'border-border hover:border-primary text-foreground'
                  }`}
                >
                  <div className="text-xs font-semibold uppercase">{dayName}</div>
                  <div className="text-lg font-bold">{dayNum}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Time Selection */}
        {date && (
          <div>
            <Label className="flex items-center gap-2 mb-4">
              <Clock className="size-5" />
              <span>Sélectionnez une Heure</span>
            </Label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setTime(slot)}
                  className={`p-3 rounded-lg border-2 transition-colors font-semibold ${
                    time === slot
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border hover:border-primary text-foreground'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Summary */}
        {date && time && (
          <div className="mt-6 p-4 bg-primary/10 border-2 border-primary rounded-lg">
            <p className="text-sm text-muted-foreground">Créneaux sélectionnés</p>
            <p className="text-lg font-bold text-foreground">
              {new Date(date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} à {time}
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-8">
        <Link 
          href="/book-inspection/vehicle"
          className="px-6 py-2 text-foreground font-semibold border-2 border-border rounded-lg hover:bg-muted transition-colors"
        >
          ← Précédent
        </Link>
        <Link
          href={isComplete ? "/book-inspection/contact-info" : "#"}
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
