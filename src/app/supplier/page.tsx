import { DashboardLayout } from '@/components/dashboard-layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Bell } from 'lucide-react';

export default function SupplierDashboard() {
  return (
    <DashboardLayout role="supplier">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle className="font-headline">Supplier Portal</CardTitle>
            <CardDescription>View awarded products and respond to notifications from the hospital.</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><FileText />Awarded Products</CardTitle>
            <CardDescription>Review products and pricing as per your active contract.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">View Contract Details</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Bell />Return Notifications</CardTitle>
            <CardDescription>You have 2 new return notifications that require your attention.</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="flex flex-col space-y-2 text-sm">
                <div className="flex items-center justify-between rounded-md bg-secondary p-3">
                    <span>Return Notice: #RN-1034</span>
                    <Button variant="ghost" size="sm">View</Button>
                </div>
                <div className="flex items-center justify-between rounded-md bg-secondary p-3">
                    <span>Return Notice: #RN-1031</span>
                    <Button variant="ghost" size="sm">View</Button>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
