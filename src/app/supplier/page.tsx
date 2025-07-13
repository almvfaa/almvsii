import DashboardLayout from '@/components/dashboard-layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Bell } from 'lucide-react';

export default function SupplierDashboard() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle className="font-headline">Portal de Proveedores</CardTitle>
            <CardDescription>Visualiza productos adjudicados y responde a notificaciones del hospital.</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><FileText />Productos Adjudicados</CardTitle>
            <CardDescription>Revisa productos y precios según tu contrato activo.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Ver Detalles del Contrato</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Bell />Notificaciones de Devolución</CardTitle>
            <CardDescription>Tienes 2 nuevas notificaciones de devolución que requieren tu atención.</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="flex flex-col space-y-2 text-sm">
                <div className="flex items-center justify-between rounded-md bg-secondary p-3">
                    <span>Aviso de Devolución: #RN-1034</span>
                    <Button variant="ghost" size="sm">Ver</Button>
                </div>
                <div className="flex items-center justify-between rounded-md bg-secondary p-3">
                    <span>Aviso de Devolución: #RN-1031</span>
                    <Button variant="ghost" size="sm">Ver</Button>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
