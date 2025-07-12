import { DashboardLayout } from '@/components/dashboard-layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, Utensils, ClipboardList, TrendingUp } from 'lucide-react';

export default function DietologyDashboard() {
  return (
    <DashboardLayout role="dietology">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1 md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle className="font-headline">Welcome, Dietology Team!</CardTitle>
            <CardDescription>Manage menus and patient dietary schedules from here.</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Utensils />Menu Planner</CardTitle>
            <CardDescription>Create and manage menu templates for breakfast, lunch, and dinner.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              <PlusCircle className="mr-2 h-4 w-4" /> Create New Menu
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><ClipboardList />Schedule Consolidation</CardTitle>
            <CardDescription>Create and view monthly schedules. They will be auto-consolidated for the warehouse.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" variant="secondary">View Schedules</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><TrendingUp />Analytics</CardTitle>
            <CardDescription>Insights on menu popularity and nutritional data.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" variant="outline">View Reports</Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
