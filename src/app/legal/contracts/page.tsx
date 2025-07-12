import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ContractsPage() {
  const contracts = [
    { id: 'CTR-001', title: 'Supplier Agreement', parties: 'Our Company & Supplier Inc.', status: 'Active', signDate: '2023-01-15' },
    { id: 'CTR-002', title: 'Service Level Agreement', parties: 'Our Company & Client Corp.', status: 'Active', signDate: '2023-02-20' },
    { id: 'CTR-003', title: 'Non-Disclosure Agreement', parties: 'Our Company & Partner LLC', status: 'Expired', signDate: '2022-05-10' },
    { id: 'CTR-004', title: 'Warehouse Lease Agreement', parties: 'Our Company & Realty Group', status: 'Upcoming', signDate: '2024-07-01' },
  ];

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl font-bold">Legal Contracts</h1>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Contract Management</CardTitle>
          <Button>Add New Contract</Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contract ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Parties Involved</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Signature Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contracts.map((contract) => (
                <TableRow key={contract.id}>
                  <TableCell className="font-mono">{contract.id}</TableCell>
                  <TableCell className="font-medium">{contract.title}</TableCell>
                  <TableCell>{contract.parties}</TableCell>
                  <TableCell>
                    <Badge variant={
                      contract.status === 'Active' ? 'default' :
                      contract.status === 'Expired' ? 'destructive' : 'secondary'
                    }>
                      {contract.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{contract.signDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
