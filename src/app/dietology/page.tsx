import DashboardLayout from '@/components/dashboard-layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, Utensils, ClipboardList, TrendingUp } from 'lucide-react';

export default function DietologyDashboard() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1 md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle className="font-headline">¡Bienvenido, equipo de Dietología!</CardTitle>
            <CardDescription>Gestiona menús y horarios de dietas de pacientes desde aquí.</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Utensils />Planificador de Menús</CardTitle>
            <CardDescription>Crea y gestiona plantillas de menús para desayuno, almuerzo y cena.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              <PlusCircle className="mr-2 h-4 w-4" /> Crear Nuevo Menú
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><ClipboardList />Consolidación de Horarios</CardTitle>
            <CardDescription>Crea y visualiza horarios mensuales. Se consolidarán automáticamente para el almacén.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" variant="secondary">Ver Horarios</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><TrendingUp />Analíticas</CardTitle>
            <CardDescription>Información sobre la popularidad de los menús y datos nutricionales.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" variant="outline">Ver Informes</Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
