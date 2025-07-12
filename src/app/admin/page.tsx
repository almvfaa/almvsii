import { DashboardLayout } from '@/components/dashboard-layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Users, Gavel, Handshake, AreaChart, Warehouse, Utensils } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <DashboardLayout role="admin">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1 lg:col-span-3">
          <CardHeader>
            <CardTitle className="font-headline">Admin Overview</CardTitle>
            <CardDescription>Comprehensive oversight of all system activities.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Welcome, Admin. From this dashboard, you can manage all aspects of the application.</p>
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
  { title: "User Management", icon: Users, value: "125", description: "Total active users" },
  { title: "Dietology Menus", icon: Utensils, value: "42", description: "Active menu templates" },
  { title: "Inventory Status", icon: Warehouse, value: "8,921", description: "Items in stock" },
  { title: "Legal Contracts", icon: Gavel, value: "15", description: "Active supplier contracts" },
  { title: "Supplier Network", icon: Handshake, value: "23", description: "Registered suppliers" },
  { title: "System Health", icon: AreaChart, value: "99.8%", description: "Uptime last 30 days" },
];
