import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Protect admin routes
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const sessionCookie = request.cookies.get('admin-session');

    if (!sessionCookie) {
      // Redirect to login if no session
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    try {
      const session = JSON.parse(Buffer.from(sessionCookie.value, 'base64').toString());
      
      // Check if session is expired
      if (session.expiresAt < Date.now()) {
        // Session expired, redirect to login
        const response = NextResponse.redirect(new URL('/admin/login', request.url));
        response.cookies.delete('admin-session');
        return response;
      }
    } catch (error) {
      console.error('[v0] Session parsing error:', error);
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Allow logout
  if (pathname === '/api/admin/logout') {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*']
};
