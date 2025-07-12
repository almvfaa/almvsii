import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function UsersPage() {
  const users = [
    { id: 'USR001', name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
    { id: 'USR002', name: 'Bob Williams', email: 'bob@example.com', role: 'Warehouse Manager', status: 'Active' },
    { id: 'USR003', name: 'Charlie Brown', email: 'charlie@example.com', role: 'Supplier', status: 'Inactive' },
    { id: 'USR004', name: 'Diana Miller', email: 'diana@example.com', role: 'Dietologist', status: 'Active' },
    { id: 'USR005', name: 'Ethan Davis', email: 'ethan@example.com', role: 'Legal Team', status: 'Active' },
  ];

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl font-bold">User Management</h1>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>All Users</CardTitle>
          <Button>Add New User</Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Badge variant={user.status === 'Active' ? 'default' : 'destructive'}>
                      {user.status}
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
