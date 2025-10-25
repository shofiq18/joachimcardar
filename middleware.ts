import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Get token from cookies
  const token = request.cookies.get('accessToken')?.value;
  
  // Public routes - কোন authentication লাগবে না
  const publicPaths = [
    '/',
    '/login',
    '/register',
    '/sign-in',
    '/sign-up',
    '/forgot-password',
    '/reset-password',
    '/verify-email',
  ];
  
  // Auth routes - Authenticated users access করতে পারবে না
  const authPaths = [
    '/login',
    '/register',
    '/sign-in',
    '/sign-up',
  ];
  
  // Protected routes - Authentication লাগবে
  const protectedPaths = [
    '/dashboard',
    '/profile',
    '/settings',
  ];
  
  // Seller routes
  const sellerPaths = [
    '/seller/dashboard',
    '/seller/products',
    '/seller/orders',
  ];
  
  // Admin routes
  const adminPaths = [
    '/admin',
  ];
  
  // Check if current path is in any category
  const isPublicPath = publicPaths.some(path => pathname === path || pathname.startsWith(path));
  const isAuthPath = authPaths.some(path => pathname.startsWith(path));
  const isProtectedPath = protectedPaths.some(path => pathname.startsWith(path));
  const isSellerPath = sellerPaths.some(path => pathname.startsWith(path));
  const isAdminPath = adminPaths.some(path => pathname.startsWith(path));
  
  // 1. If authenticated user tries to access auth pages (login/register) - redirect to dashboard
  if (token && isAuthPath) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  
  // 2. If non-authenticated user tries to access protected routes - redirect to login
  if (!token && (isProtectedPath || isSellerPath || isAdminPath)) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }
  
  // 3. Allow everything else
  return NextResponse.next();
}

// Configure matcher
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
};