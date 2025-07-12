import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function HistoryPage() {
  const historyLogs = [
    { id: 1, date: '2023-10-26', user: 'Admin', action: 'Received 50 units of Product A (SKU001)' },
    { id: 2, date: '2023-10-25', user: 'Manager', action: 'Shipped 20 units of Product B (SKU002)' },
    { id: 3, date: '2023-10-24', user: 'Admin', action: 'Stock adjustment for Product C (SKU003), new quantity: 75' },
    { id: 4, date: '2023-10-23', user: 'Staff', action: 'Moved Product D (SKU004) to Aisle 1, Shelf 3' },
  ];

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl font-bold">Movement History</h1>
      <Card>
        <CardHeader>
          <CardTitle>History Log</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {historyLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>{log.date}</TableCell>
                  <TableCell>{log.user}</TableCell>
                  <TableCell>{log.action}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
