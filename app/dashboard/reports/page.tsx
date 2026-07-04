'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, Eye, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function DashboardReports() {
  const reports = [
    {
      id: 1,
      vehicle: 'Renault Clio',
      type: 'Inspection Complet',
      date: '15 Décembre 2023',
      rating: 'Bon',
      score: 78,
      hasSuspicions: false,
    },
    {
      id: 2,
      vehicle: 'BMW X3',
      type: 'Inspection Standard',
      date: '5 Décembre 2023',
      rating: 'Excellent',
      score: 92,
      hasSuspicions: false,
    },
    {
      id: 3,
      vehicle: 'Ford Focus',
      type: 'Inspection Standard',
      date: '20 Novembre 2023',
      rating: 'Moyen',
      score: 62,
      hasSuspicions: true,
    },
  ];

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'Excellent':
        return 'bg-green-100 text-green-700';
      case 'Bon':
        return 'bg-blue-100 text-blue-700';
      case 'Moyen':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-700';
    if (score >= 60) return 'text-blue-700';
    return 'text-yellow-700';
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Mes rapports</h1>
          <p className="text-muted-foreground">Consultez tous vos rapports d&apos;inspection</p>
        </div>

        <div className="mt-8 space-y-4">
          {reports.map((report) => (
            <Card key={report.id}>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-5 gap-6">
                  {/* Vehicle Info */}
                  <div>
                    <p className="text-xs text-muted-foreground uppercase mb-1">Véhicule</p>
                    <p className="font-semibold text-foreground">{report.vehicle}</p>
                    <p className="text-xs text-muted-foreground mt-1">{report.type}</p>
                  </div>

                  {/* Date */}
                  <div>
                    <p className="text-xs text-muted-foreground uppercase mb-1">Date</p>
                    <p className="font-semibold text-foreground">{report.date}</p>
                  </div>

                  {/* Rating */}
                  <div>
                    <p className="text-xs text-muted-foreground uppercase mb-1">État Global</p>
                    <Badge className={getRatingColor(report.rating)}>
                      {report.rating}
                    </Badge>
                  </div>

                  {/* Score */}
                  <div>
                    <p className="text-xs text-muted-foreground uppercase mb-1">Score</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${report.score >= 80 ? 'bg-green-500' : report.score >= 60 ? 'bg-blue-500' : 'bg-yellow-500'}`}
                          style={{ width: `${report.score}%` }}
                        />
                      </div>
                      <span className={`font-bold text-sm ${getScoreColor(report.score)}`}>
                        {report.score}%
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-end gap-2">
                    {report.hasSuspicions && (
                      <button className="p-2 hover:bg-yellow-100 rounded-lg transition-colors" title="Attention requise">
                        <AlertCircle className="size-5 text-yellow-600" />
                      </button>
                    )}
                    <Link 
                      href={`/dashboard/reports/${report.id}`}
                      className="p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                      <Eye className="size-5 text-primary" />
                    </Link>
                    <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                      <Download className="size-5 text-muted-foreground" />
                    </button>
                  </div>
                </div>

                {/* Suspicions Alert */}
                {report.hasSuspicions && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-start gap-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <AlertCircle className="size-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-yellow-900">Points à Vérifier</p>
                        <p className="text-sm text-yellow-800 mt-1">
                          Des anomalies ont été détectées. Consultez le rapport détaillé pour plus d&apos;informations.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
