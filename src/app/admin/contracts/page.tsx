import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminContractsPage() {
  const allContracts = [
    { id: 'CTR-001', title: 'Supplier Agreement', parties: 'Our Company & Supplier Inc.', status: 'Active', category: 'Supplier' },
    { id: 'CTR-002', title: 'Service Level Agreement', parties: 'Our Company & Client Corp.', status: 'Active', category: 'Client' },
    { id: 'CTR-003', title: 'Non-Disclosure Agreement', parties: 'Our Company & Partner LLC', status: 'Expired', category: 'Partnership' },
    { id: 'CTR-004', title: 'Warehouse Lease Agreement', parties: 'Our Company & Realty Group', status: 'Active', category: 'Real Estate' },
    { id: 'CTR-005', title: 'Employee Contract', parties: 'Our Company & John Doe', status: 'Terminated', category: 'Employment' },
  ];

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl font-bold">All System Contracts</h1>
      <Card>
        <CardHeader>
          <CardTitle>Master Contract View</CardTitle>
          <div className="flex space-x-2 pt-2">
            <Input placeholder="Filter by title, party, or category..." />
            <Button>Search</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contract ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Parties</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allContracts.map((contract) => (
                <TableRow key={contract.id}>
                  <TableCell>{contract.id}</TableCell>
                  <TableCell>{contract.title}</TableCell>
                  <TableCell>{contract.parties}</TableCell>
                  <TableCell>{contract.category}</TableCell>
                  <TableCell>
                    <Badge variant={
                      contract.status === 'Active' ? 'default' :
                      contract.status === 'Expired' ? 'destructive' : 'secondary'
                    }>
                      {contract.status}
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
