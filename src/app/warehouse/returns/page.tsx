import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function ReturnsPage() {
  const returnItems = [
    { id: 'RET001', orderId: 'ORD050', product: 'Product B', quantity: 2, reason: 'Damaged in transit', status: 'Pending' },
    { id: 'RET002', orderId: 'ORD048', product: 'Product A', quantity: 1, reason: 'Wrong item', status: 'Completed' },
    { id: 'RET003', orderId: 'ORD045', product: 'Product D', quantity: 5, reason: 'Customer changed mind', status: 'Pending' },
    { id: 'RET004', orderId: 'ORD042', product: 'Product C', quantity: 3, reason: 'Defective item', status: 'Completed' },
  ];

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl font-bold">Product Returns</h1>
      <Card>
        <CardHeader>
          <CardTitle>Returns Processing</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Return ID</TableHead>
                <TableHead>Order ID</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Reason for Return</TableHead>
                <TableHead>Status</TableHead>
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
                    <Badge variant={item.status === 'Pending' ? 'destructive' : 'default'}>
                      {item.status}
                    </Badge>
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
