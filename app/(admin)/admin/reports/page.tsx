'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Eye, Download, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function AdminReportsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const reports = [
    {
      id: 1,
      clientName: 'Luc Bernard',
      vehicle: 'Toyota Yaris',
      inspectionType: 'Standard',
      date: '24 Janvier 2024',
      rating: 'Excellent',
      score: 88,
      inspector: 'Monsieur Martin',
      status: 'completed',
    },
    {
      id: 2,
      clientName: 'Catherine Durand',
      vehicle: 'Citroën C3',
      inspectionType: 'Complet',
      date: '23 Janvier 2024',
      rating: 'Bon',
      score: 75,
      inspector: 'Mademoiselle Sophie',
      status: 'completed',
    },
    {
      id: 3,
      clientName: 'David Laurent',
      vehicle: 'Audi A4',
      inspectionType: 'Standard',
      date: '22 Janvier 2024',
      rating: 'Moyen',
      score: 65,
      inspector: 'Monsieur Jean',
      status: 'completed',
    },
    {
      id: 4,
      clientName: 'Valérie Petit',
      vehicle: 'Mercedes-Benz C-Class',
      inspectionType: 'Complet',
      date: '21 Janvier 2024',
      rating: 'Excellent',
      score: 94,
      inspector: 'Mademoiselle Sophie',
      status: 'completed',
    },
  ];

  const filteredReports = reports.filter(report =>
    report.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    report.vehicle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    report.inspector.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'Excellent':
        return 'bg-green-100 text-green-700';
      case 'Bon':
        return 'bg-blue-100 text-blue-700';
      case 'Moyen':
        return 'bg-yellow-100 text-yellow-700';
      case 'Mauvais':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-700';
    if (score >= 60) return 'text-blue-700';
    if (score >= 40) return 'text-yellow-700';
    return 'text-red-700';
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Gestion des Rapports</h1>
        <p className="text-muted-foreground">Consultez et gérez tous les rapports d&apos;inspection</p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-muted-foreground" />
        <Input
          placeholder="Rechercher par client, véhicule ou inspecteur..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="size-5 text-primary" />
            {filteredReports.length} Rapports
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Client</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Véhicule</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Inspecteur</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">État</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Score</th>
                  <th className="text-right py-3 px-4 font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredReports.map((report) => (
                  <tr key={report.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-4">
                      <p className="font-semibold text-foreground">{report.clientName}</p>
                    </td>
                    <td className="py-3 px-4 text-foreground text-sm">{report.vehicle}</td>
                    <td className="py-3 px-4 text-foreground text-sm">{report.inspectionType}</td>
                    <td className="py-3 px-4 text-foreground text-sm">{report.date}</td>
                    <td className="py-3 px-4 text-foreground text-sm">{report.inspector}</td>
                    <td className="py-3 px-4">
                      <Badge className={getRatingColor(report.rating)}>
                        {report.rating}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden max-w-[80px]">
                          <div 
                            className={`h-full rounded-full ${getScoreColor(report.score) === 'text-green-700' ? 'bg-green-500' : getScoreColor(report.score) === 'text-blue-700' ? 'bg-blue-500' : getScoreColor(report.score) === 'text-yellow-700' ? 'bg-yellow-500' : 'bg-red-500'}`}
                            style={{ width: `${report.score}%` }}
                          />
                        </div>
                        <span className={`font-bold text-sm ${getScoreColor(report.score)}`}>
                          {report.score}%
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1.5 hover:bg-muted rounded-lg transition-colors">
                          <Eye className="size-4 text-primary" />
                        </button>
                        <button className="p-1.5 hover:bg-muted rounded-lg transition-colors">
                          <Download className="size-4 text-muted-foreground" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
