import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get('isAuthenticated')?.value === 'true';

  // If user is not authenticated and trying to access protected routes
  if (!isAuthenticated && request.nextUrl.pathname.startsWith('/legend')) {
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('isAuthenticated');
    return response;
  }

  // If user is authenticated and trying to access auth pages
  if (isAuthenticated && (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/register')) {
    return NextResponse.redirect(new URL('/legend', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/legend/:path*', '/login', '/register'],
}; 