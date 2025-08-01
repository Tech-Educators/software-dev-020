import { clerkMiddleware, createRouteMatcher} from '@clerk/nextjs/server'

// set up protected routes
const isProtectedRoute = createRouteMatcher(['/profile(.*)'])

// actually protect my route
// we intercept the users request to go to the profile route
// if they're not signed in, auth.protect() will redirect the user to sign in
export default clerkMiddleware(async (auth, req) => {
    if (isProtectedRoute(req)) {
        await auth.protect()
    }
})


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}