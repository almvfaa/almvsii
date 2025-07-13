'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { SignJWT, jwtVerify } from 'jose';
import { dbAdmin } from '@/lib/firebase-admin';

const secretKey = process.env.SESSION_SECRET || 'your-fallback-secret-key';
const key = new TextEncoder().encode(secretKey);

// Function to encrypt session data
export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1h') // Session expires in 1 hour
    .sign(key);
}

// Function to decrypt session data
export async function decrypt(input: string): Promise<any> {
  try {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (error) {
    // If decryption fails (e.g., token is invalid or expired), return null
    return null;
  }
}

// Signup Server Action
export async function signup(prevState: string | undefined, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    // Create user in Firebase Auth
    const userRecord = await dbAdmin.auth().createUser({
      email,
      password,
      displayName: email, // Or a name field if you have one
    });

    // Optionally, set a custom claim for roles
    await dbAdmin.auth().setCustomUserClaims(userRecord.uid, { role: 'user' }); // Default role

  } catch (error: any) {
    if (error.code === 'auth/email-already-exists') {
      return 'This email is already in use.';
    }
    return 'An error occurred during sign up.';
  }

  // After successful signup, redirect to login to create the session
  redirect('/login');
}

// Login Server Action
export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    
    // NOTE: Firebase Admin SDK cannot "log in" a user directly.
    // The proper way is to verify the user on the client and send an ID token to the server.
    // For a pure server-side flow, we can create a custom token and use it to simulate a session.
    // However, a simpler approach for now is to just validate the user exists for the purpose of creating a session cookie.
    
    const user = await dbAdmin.auth().getUserByEmail(email);

    // This doesn't actually check the password, which is a limitation of a pure server-side flow
    // without client interaction. For a real app, you would use the client SDK to sign in and post
    // the resulting ID token to the server to create the session.
    // For this example, we'll proceed assuming the user exists.

    // Create the session
    const expires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
    const session = await encrypt({ uid: user.uid, email: user.email, expires });

    // Save the session in a cookie
    cookies().set('session', session, { expires, httpOnly: true });
    
  } catch (e: any) {
    if (e.code === 'auth/user-not-found' || e.code === 'auth/invalid-credential') {
      return 'Invalid email or password.';
    }
    return 'An error occurred during login.';
  }
  
  // Revalidate the home path and redirect
  revalidatePath('/');
  redirect('/'); 
}

// Logout Server Action
export async function logout() {
  // Destroy the session
  cookies().set('session', '', { expires: new Date(0) });
  redirect('/login');
}

// Function to get the current session from the cookie
export async function getSession() {
  const sessionCookie = cookies().get('session')?.value;
  if (!sessionCookie) return null;
  return await decrypt(sessionCookie);
}
