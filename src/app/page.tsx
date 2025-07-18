'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Leaf, LogIn } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const roles: { [key: string]: string } = {
  admin: 'Admin',
  dietology: 'Dietología',
  warehouse: 'Almacén',
  legal: 'Legal',
  supplier: 'Proveedor',
};

export default function LoginPage() {
  const [role, setRole] = useState<string>('');
  const router = useRouter();

  const handleLogin = () => {
    if (role) {
      router.push(`/${role}`);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Leaf className="h-8 w-8" />
          </div>
          <CardTitle className="font-headline text-3xl font-bold text-primary">SII Almacén de Víveres Faa</CardTitle>
          <CardDescription>
            Sistema Integral de Inventarios para el Almacén de Víveres
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-8">
          <div className="space-y-2">
            <Label htmlFor="role-select">Selecciona tu Rol</Label>
            <Select onValueChange={setRole} value={role}>
              <SelectTrigger id="role-select" className="w-full">
                <SelectValue placeholder="Elige un rol para continuar..." />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(roles).map(([key, value]) => (
                  <SelectItem key={key} value={key} className="capitalize">
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleLogin} disabled={!role} className="w-full">
            <LogIn className="mr-2 h-4 w-4" />
            Entrar al Panel
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
