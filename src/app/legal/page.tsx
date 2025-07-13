import DashboardLayout from '@/components/dashboard-layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, FileText, Bell, Gavel } from 'lucide-react';

export default function LegalDashboard() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle className="font-headline">Panel del Departamento Legal</CardTitle>
            <CardDescription>Gestiona contratos de proveedores y supervisa el cumplimiento.</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Gavel />Gestión de Contratos</CardTitle>
            <CardDescription>Crea, visualiza y gestiona contratos con proveedores. Sube documentos relacionados.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Button><FileText className="mr-2 h-4 w-4" /> Ver Todos los Contratos</Button>
            <Button variant="secondary"><PlusCircle className="mr-2 h-4 w-4" /> Añadir Nuevo Contrato</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Bell />Notificaciones e Incumplimientos</CardTitle>
            <CardDescription>Revisa notificaciones automáticas de devoluciones y retrasos en entregas.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-2 text-sm">
                <div className="flex items-center justify-between rounded-md bg-secondary p-3">
                    <span>Aviso de Devolución: #RN-1034</span>
                    <Button variant="ghost" size="sm">Ver</Button>
                </div>
                <div className="flex items-center justify-between rounded-md bg-destructive/10 p-3">
                    <span className="text-destructive">Incumplimiento: Retraso de Entrega #DD-045</span>
                    <Button variant="ghost" size="sm">Revisar</Button>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
