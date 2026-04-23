import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware is disabled — auth protection is handled client-side via useAuth()
// Firebase client SDK does not set session cookies by default, so cookie-based
// middleware checks cause redirect loops.
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
