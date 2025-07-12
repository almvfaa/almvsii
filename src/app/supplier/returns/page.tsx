import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function SupplierReturnsPage() {
  // Data for returns relevant to the logged-in supplier
  const returnItems = [
    { id: 'RET001', orderId: 'ORD050', product: 'Product B', quantity: 2, reason: 'Damaged in transit', status: 'Action Required' },
    { id: 'RET005', orderId: 'ORD061', product: 'Product A', quantity: 10, reason: 'Incorrect item shipped', status: 'Return Approved' },
    { id: 'RET006', orderId: 'ORD065', product: 'Product B', quantity: 5, reason: 'Quality issue reported', status: 'Under Investigation' },
  ];

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl font-bold">Manage Customer Returns</h1>
      <p className="text-muted-foreground">Review and process return requests for your products.</p>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Return Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Return ID</TableHead>
                <TableHead>Original Order ID</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Stated Reason</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {returnItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.orderId}</TableCell>
                  <TableCell>{item.product}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.reason}</TableCell>
                  <TableCell>
                    <Badge variant={
                      item.status === 'Action Required' ? 'destructive' : 
                      item.status === 'Return Approved' ? 'default' : 'secondary'
                    }>
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      {item.status === 'Action Required' ? 'Process Return' : 'View Details'}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
