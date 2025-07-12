import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function SupplierContractsPage() {
  // Assuming the logged-in supplier is "Supplier Inc."
  const contracts = [
    { id: 'CTR-001', title: 'Master Supply Agreement', parties: 'Our Company & Supplier Inc.', status: 'Active', signDate: '2023-01-15' },
    { id: 'CTR-006', title: 'Amendment for Product A', parties: 'Our Company & Supplier Inc.', status: 'Active', signDate: '2023-08-01' },
    { id: 'CTR-007', title: 'Q4 2023 Volume Rebate', parties: 'Our Company & Supplier Inc.', status: 'Expired', signDate: '2023-10-01' },
  ];

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl font-bold">Your Contracts</h1>
      <p className="text-muted-foreground">A list of your active and past contracts with Our Company.</p>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Contract Overview</CardTitle>
          <Button>Upload New Document</Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contract ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Signature Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contracts.map((contract) => (
                <TableRow key={contract.id}>
                  <TableCell>{contract.id}</TableCell>
                  <TableCell>{contract.title}</TableCell>
                  <TableCell>
                    <Badge variant={contract.status === 'Active' ? 'default' : 'destructive'}>
                      {contract.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{contract.signDate}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">View Details</Button>
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
