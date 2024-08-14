import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const publicPaths = ['/login', '/join', '/join/email', '/changePw'];
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  const isAuthenticated = Boolean(req.cookies.get('accessToken'));

  if (!isAuthenticated) {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};