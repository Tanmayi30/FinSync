import { clerkMiddleware } from '@clerk/nextjs/server';

const clerkAuth = clerkMiddleware(async (auth, req) => {
  const pathname = req.nextUrl.pathname;
  const isProtectedRoute = 
    pathname.startsWith('/dashboard') || 
    pathname.startsWith('/account') || 
    pathname.startsWith('/transaction');

  if (isProtectedRoute) {
    // this automatically redirects them to the Sign-In page.
    await auth.protect(); 
  }
});

// Wrap it in a standard function declaration for Turbopack
export default function proxy(request: any, event: any) {
  return clerkAuth(request, event);
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for Clerk's auto-proxy path
    '/__clerk/:path*',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};