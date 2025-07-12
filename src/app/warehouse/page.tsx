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
            <CardTitle className="font-headline">Warehouse Operations Center</CardTitle>
            <CardDescription>Manage inventory, track deliveries, and handle returns.</CardDescription>
          </CardHeader>
        </Card>

        <Card className="md:col-span-2">
            <CardHeader>
                <CardTitle>Inventory Control</CardTitle>
                <CardDescription>Record stock entries, exits to departments, and returns to suppliers.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <Button><PackagePlus className="mr-2 h-4 w-4" /> Record Entry</Button>
                <Button variant="secondary"><PackageMinus className="mr-2 h-4 w-4" /> Record Exit</Button>
                <Button variant="destructive"><PackageX className="mr-2 h-4 w-4" /> Record Return</Button>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><CalendarDays />Master Schedule</CardTitle>
            <CardDescription>View the consolidated master schedule for food requirements.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" variant="outline">View Schedule</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><AlertTriangle className="text-[hsl(var(--destructive))]"/>Automated Penalty</CardTitle>
            <CardDescription>Late deliveries are automatically flagged when recording an entry.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">The system will calculate delays and create a breach document for Legal review when you 'Record Entry' with a date later than scheduled.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><MessageSquareWarning className="text-[hsl(var(--accent))]"/>Return Notification</CardTitle>
            <CardDescription>Notifications are sent to Legal and Suppliers upon return registration.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">When you 'Record Return', an AI-generated notification is automatically sent to initiate the warranty process.</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
