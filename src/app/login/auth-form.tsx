'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { authenticate, signup } from './actions'; // We will create this actions file next

export function AuthForm({ mode }: { mode: 'login' | 'signup' }) {
  const action = mode === 'login' ? authenticate : signup;
  const [errorMessage, dispatch] = useFormState(action, undefined);

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">{mode === 'login' ? 'Login' : 'Sign Up'}</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={dispatch} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required minLength={6} />
          </div>
          <SubmitButton mode={mode} />
          {errorMessage && (
            <div className="flex items-center justify-center">
              <p className="text-sm text-red-500">{errorMessage}</p>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}

function SubmitButton({ mode }: { mode: 'login' | 'signup' }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" aria-disabled={pending}>
      {mode === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta'}
    </Button>
  );
}
