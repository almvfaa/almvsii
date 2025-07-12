import { DashboardLayout } from '@/components/dashboard-layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PackagePlus, PackageMinus, PackageX, CalendarDays, AlertTriangle, MessageSquareWarning } from 'lucide-react';

export default function WarehouseDashboard() {
  return (
    <DashboardLayout role="warehouse">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1 md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle className="font-headline">Centro de Operaciones de Almacén</CardTitle>
            <CardDescription>Gestiona inventario, rastrea entregas y maneja devoluciones.</CardDescription>
          </CardHeader>
        </Card>

        <Card className="md:col-span-2">
            <CardHeader>
                <CardTitle>Control de Inventario</CardTitle>
                <CardDescription>Registra entradas de stock, salidas a departamentos y devoluciones a proveedores.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <Button><PackagePlus className="mr-2 h-4 w-4" /> Registrar Entrada</Button>
                <Button variant="secondary"><PackageMinus className="mr-2 h-4 w-4" /> Registrar Salida</Button>
                <Button variant="destructive"><PackageX className="mr-2 h-4 w-4" /> Registrar Devolución</Button>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><CalendarDays />Horario Maestro</CardTitle>
            <CardDescription>Visualiza el horario maestro consolidado de requerimientos de alimentos.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" variant="outline">Ver Horario</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><AlertTriangle className="text-[hsl(var(--destructive))]"/>Penalización Automatizada</CardTitle>
            <CardDescription>Las entregas tardías se marcan automáticamente al registrar una entrada.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">El sistema calculará los retrasos y creará un documento de incumplimiento para revisión Legal al 'Registrar Entrada' con una fecha posterior a la programada.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><MessageSquareWarning className="text-[hsl(var(--accent))]"/>Notificación de Devolución</CardTitle>
            <CardDescription>Se envían notificaciones a Legal y a los Proveedores al registrar la devolución.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Al 'Registrar Devolución', se envía automáticamente una notificación generada por IA para iniciar el proceso de garantía.</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
