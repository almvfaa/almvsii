import { DashboardLayout } from '@/components/dashboard-layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, FileText, Bell, Gavel } from 'lucide-react';

export default function LegalDashboard() {
  return (
    <DashboardLayout role="legal">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle className="font-headline">Legal Department Dashboard</CardTitle>
            <CardDescription>Manage supplier contracts and oversee compliance.</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Gavel />Contract Management</CardTitle>
            <CardDescription>Create, view, and manage contracts with suppliers. Upload related documents.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Button><FileText className="mr-2 h-4 w-4" /> View All Contracts</Button>
            <Button variant="secondary"><PlusCircle className="mr-2 h-4 w-4" /> Add New Contract</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Bell />Notifications & Breaches</CardTitle>
            <CardDescription>Review automated notifications for returns and delivery delays.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-2 text-sm">
                <div className="flex items-center justify-between rounded-md bg-secondary p-3">
                    <span>Return Notice: #RN-1034</span>
                    <Button variant="ghost" size="sm">View</Button>
                </div>
                <div className="flex items-center justify-between rounded-md bg-destructive/10 p-3">
                    <span className="text-destructive">Breach: Delivery Delay #DD-045</span>
                    <Button variant="ghost" size="sm">Review</Button>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
