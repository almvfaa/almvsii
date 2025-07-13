import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decrypt } from '@/lib/session'; // Use the new, clean session utility
import { cookies } from 'next/headers';

// 1. Specify protected and public routes
const protectedRoutes = ['/admin', '/warehouse', '/dietology', '/supplier', '/legal', '/'];
const publicRoutes = ['/login', '/signup'];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // Check if the current route is protected or public
  const isProtectedRoute = protectedRoutes.some((route) => path.startsWith(route));
  const isPublicRoute = publicRoutes.some((route) => path.startsWith(route));

  // 3. Decrypt the session from the cookie
  const cookie = cookies().get('session')?.value;
  const session = await decrypt(cookie);

  // 5. Redirect logic
  // If the user is trying to access a protected route and is not authenticated,
  // redirect them to the login page.
  if (isProtectedRoute && !session?.uid) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  // If the user is authenticated and tries to access a public route (like login),
  // redirect them to the home page.
  if (isPublicRoute && session?.uid) {
    return NextResponse.redirect(new URL('/', req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\.png$).*)'],
};
