// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;
  
//   // Get token from cookies
//   const token = request.cookies.get('accessToken')?.value;
  
//   // Public routes - কোন authentication লাগবে না
//   const publicPaths = [
//     '/',
//     '/login',
//     '/register',
//     '/sign-in',
//     '/sign-up',
//     '/forgot-password',
//     '/reset-password',
//     '/verify-email',
//   ];
  
//   // Auth routes - Authenticated users access করতে পারবে না
//   const authPaths = [
//     '/login',
//     '/register',
//     '/sign-in',
//     '/sign-up',
//   ];
  
//   // Protected routes - Authentication লাগবে
//   const protectedPaths = [
//     '/dashboard',
//     '/profile',
//     '/settings',
//   ];
  
//   // Seller routes
//   const sellerPaths = [
//     '/seller/dashboard',
//     '/seller/products',
//     '/seller/orders',
//   ];
  
//   // Admin routes
//   const adminPaths = [
//     '/admin',
//   ];
  
//   // Check if current path is in any category
//   const isPublicPath = publicPaths.some(path => pathname === path || pathname.startsWith(path));
//   const isAuthPath = authPaths.some(path => pathname.startsWith(path));
//   const isProtectedPath = protectedPaths.some(path => pathname.startsWith(path));
//   const isSellerPath = sellerPaths.some(path => pathname.startsWith(path));
//   const isAdminPath = adminPaths.some(path => pathname.startsWith(path));
  
//   // 1. If authenticated user tries to access auth pages (login/register) - redirect to dashboard
//   if (token && isAuthPath) {
//     return NextResponse.redirect(new URL('/dashboard', request.url));
//   }
  
//   // 2. If non-authenticated user tries to access protected routes - redirect to login
//   if (!token && (isProtectedPath || isSellerPath || isAdminPath)) {
//     const loginUrl = new URL('/login', request.url);
//     loginUrl.searchParams.set('redirect', pathname);
//     return NextResponse.redirect(loginUrl);
//   }
  
//   // 3. Allow everything else
//   return NextResponse.next();
// }

// // Configure matcher
// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except:
//      * - api routes
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico
//      * - public folder
//      */
//     '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
//   ],
// };












import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // -------------------------------------------------
  // 1. PUBLIC ROUTES – no token needed
  // -------------------------------------------------
  const publicPaths = [
    '/',
    '/login',
    '/register',
    '/sign-in',
    '/sign-up',
    '/forgot-password',
    '/reset-password',
    '/verify-email',
    // ---- DESIGN PHASE ONLY ----
    '/admin-dashboard',               // <-- allow whole admin UI
    '/admin-dashboard/:path*',        // <-- catch nested pages
  ];

  // -------------------------------------------------
  // 2. AUTH PAGES (login/register) – redirect logged-in users
  // -------------------------------------------------
  const authPaths = ['/login', '/register', '/sign-in', '/sign-up'];

  // -------------------------------------------------
  // 3. PROTECTED ROUTES (real auth will be added later)
  // -------------------------------------------------
  const protectedPaths = ['/dashboard', '/profile', '/settings'];
  const sellerPaths = ['/seller/dashboard', '/seller/products', '/seller/orders'];
  const adminPaths = ['/admin']; // keep old admin root if you have one

  // -------------------------------------------------
  // 4. HELPERS
  // -------------------------------------------------
  const isPublicPath = publicPaths.some(p =>
    pathname === p || pathname.startsWith(p.replace(':path*', ''))
  );
  const isAuthPath = authPaths.some(p => pathname.startsWith(p));
  const isProtectedPath = protectedPaths.some(p => pathname.startsWith(p));
  const isSellerPath = sellerPaths.some(p => pathname.startsWith(p));
  const isAdminPath = adminPaths.some(p => pathname.startsWith(p));

  // -------------------------------------------------
  // 5. TOKEN (commented – no DB yet)
  // -------------------------------------------------
  // const token = request.cookies.get('accessToken')?.value;

  // -------------------------------------------------
  // 6. LOGIC (skip auth in design phase)
  // -------------------------------------------------
  // ---- 1. Logged-in user on login page → go to dashboard
  // if (token && isAuthPath) {
  //   return NextResponse.redirect(new URL('/dashboard', request.url));
  // }

  // ---- 2. Un-auth user on protected routes → login
  // if (!token && (isProtectedPath || isSellerPath || isAdminPath)) {
  //   const loginUrl = new URL('/login', request.url);
  //   loginUrl.searchParams.set('redirect', pathname);
  //   return NextResponse.redirect(loginUrl);
  // }

  // ---- 3. **ALLOW EVERYTHING ELSE** (including /admin-dashboard)
  return NextResponse.next();
}

// -----------------------------------------------------------------
// Matcher – keep everything except API & static assets
// -----------------------------------------------------------------
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
};