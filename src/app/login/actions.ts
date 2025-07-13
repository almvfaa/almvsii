'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { authAdmin } from '@/lib/firebase-admin'; // Only imports what it needs
import { encrypt } from '@/lib/session'; // Uses the new session utility

// Signup Server Action
export async function signup(prevState: string | undefined, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    const userRecord = await authAdmin.createUser({
      email,
      password,
    });
    await authAdmin.setCustomUserClaims(userRecord.uid, { role: 'user' });
  } catch (error: any) {
    if (error.code === 'auth/email-already-exists') {
      return 'Este correo ya está en uso.';
    }
    console.error('Signup Error:', error);
    return 'Ocurrió un error durante el registro.';
  }

  redirect('/login');
}

// Login Server Action
export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    const email = formData.get('email') as string;
    // We don't use the password on the server side with the admin SDK for login
    
    // Check if the user exists
    const user = await authAdmin.getUserByEmail(email);

    // Create the session
    const expires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
    const session = await encrypt({ uid: user.uid, email: user.email, expires });

    // Save the session in a cookie
    cookies().set('session', session, { expires, httpOnly: true });

  } catch (e: any) {
    if (e.code === 'auth/user-not-found' || e.code === 'auth/invalid-credential') {
      return 'Correo o contraseña inválidos.';
    }
    console.error('Authentication error:', e);
    return 'Ocurrió un error durante el inicio de sesión.';
  }
  
  // Revalidate the home path and redirect to the root page
  revalidatePath('/');
  redirect('/');
}
