import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function ClientReports() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">
          Mes rapports
        </h1>
        <p className="text-foreground/70">
          Consultez tous vos rapports d&apos;inspection
        </p>
      </div>

      <Card className="border-2 border-dashed">
        <CardHeader className="text-center py-12">
          <FileText className="size-12 text-foreground/20 mx-auto mb-4" />
          <CardTitle>Aucun rapport</CardTitle>
          <CardDescription className="mt-2">
            Vous n&apos;avez pas encore de rapports d&apos;inspection. Ils apparaîtront ici une fois que vos inspections seront complétées.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
