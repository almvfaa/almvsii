import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function InventoryPage() {
  const inventoryItems = [
    { id: 'SKU001', name: 'Product A', quantity: 150, location: 'Aisle 1, Shelf 2' },
    { id: 'SKU002', name: 'Product B', quantity: 200, location: 'Aisle 3, Shelf 1' },
    { id: 'SKU003', name: 'Product C', quantity: 75, location: 'Aisle 2, Shelf 4' },
    { id: 'SKU004', name: 'Product D', quantity: 300, location: 'Aisle 1, Shelf 3' },
  ];

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl font-bold">Warehouse Inventory</h1>
      <Card>
        <CardHeader>
          <CardTitle>Inventory List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>SKU</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Location</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventoryItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.location}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
