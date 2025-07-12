import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AdminInventoryPage() {
  const inventoryItems = [
    { id: 'SKU001', name: 'Product A', quantity: 150, location: 'Warehouse 1', value: 2250 },
    { id: 'SKU002', name: 'Product B', quantity: 200, location: 'Warehouse 1', value: 5000 },
    { id: 'SKU003', name: 'Product C', quantity: 75, location: 'Warehouse 2', value: 750 },
    { id: 'SKU004', name: 'Product D', quantity: 300, location: 'Warehouse 1', value: 9000 },
    { id: 'SKU005', name: 'Product E', quantity: 120, location: 'Warehouse 2', value: 3600 },
  ];
  
  const totalValue = inventoryItems.reduce((acc, item) => acc + item.value, 0);
  const totalItems = inventoryItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl font-bold">Master Inventory Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Inventory Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalValue.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Number of Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalItems.toLocaleString()}</div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Global Inventory View</CardTitle>
           <div className="flex space-x-2 pt-2">
            <Input placeholder="Filter by product name, SKU, or location..." />
            <Button>Search</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>SKU</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Location / Warehouse</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventoryItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.location}</TableCell>
                  <TableCell>${item.value.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
