// src/lib/session.ts
'use server';

import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const secretKey = process.env.SESSION_SECRET || 'a-very-secret-key-that-is-long-enough';
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
    return null;
  }
}

// Function to get the current session from the cookie
export async function getSession() {
  const sessionCookie = cookies().get('session')?.value;
  if (!sessionCookie) return null;
  return await decrypt(sessionCookie);
}

// Logout Server Action (moved here as it only manipulates cookies)
export async function logout() {
  cookies().set('session', '', { expires: new Date(0) });
  redirect('/login');
}
