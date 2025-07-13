// This is now a Server Component
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { dbAdmin } from "@/lib/firebase-admin"; // We use the admin SDK here

// Define the User type based on our data structure
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

// This async function fetches data directly on the server before the page is rendered
async function getUsers(): Promise<User[]> {
  const usersCollection = dbAdmin.collection('users');
  const snapshot = await usersCollection.get();
  
  if (snapshot.empty) {
    console.log('No matching documents.');
    return [];
  }

  const users: User[] = [];
  snapshot.forEach(doc => {
    // We can cast the data to our User type, assuming the data in Firestore matches
    users.push({ id: doc.id, ...doc.data() } as User);
  });

  return users;
}

export default async function UsersPage() {
  // Call the server-side function to get the user data
  const users = await getUsers();

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl font-bold">User Management (Server Fetched)</h1>
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
