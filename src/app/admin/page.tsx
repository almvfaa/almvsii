import { DashboardLayout } from '@/components/dashboard-layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Users, Gavel, Handshake, AreaChart, Warehouse, Utensils } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <DashboardLayout role="admin">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1 lg:col-span-3">
          <CardHeader>
            <CardTitle className="font-headline">Resumen de Administración</CardTitle>
            <CardDescription>Supervisión completa de todas las actividades del sistema.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Bienvenido, Admin. Desde este panel, puede gestionar todos los aspectos de la aplicación.</p>
          </CardContent>
        </Card>

        {getAdminCards().map((card) => (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
              <card.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <p className="text-xs text-muted-foreground">{card.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
}

const getAdminCards = () => [
  { title: "Gestión de Usuarios", icon: Users, value: "125", description: "Usuarios activos totales" },
  { title: "Menús de Dietología", icon: Utensils, value: "42", description: "Plantillas de menú activas" },
  { title: "Estado del Inventario", icon: Warehouse, value: "8,921", description: "Artículos en stock" },
  { title: "Contratos Legales", icon: Gavel, value: "15", description: "Contratos de proveedores activos" },
  { title: "Red de Proveedores", icon: Handshake, value: "23", description: "Proveedores registrados" },
  { title: "Salud del Sistema", icon: AreaChart, value: "99.8%", description: "Uptime últimos 30 días" },
];
