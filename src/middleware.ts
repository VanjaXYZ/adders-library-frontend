import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  //   // If there is no token and the user is trying to access pages other than /login or /register, redirect to /login
  //   if (!token && !["/login", "/register"].includes(request.nextUrl.pathname)) {
  //     return NextResponse.redirect(new URL("/login", request.url));
  //   }

  //   // If the user is already logged in and tries to access /login or /register, redirect to the home page
  //   if (token && ["/login", "/register"].includes(request.nextUrl.pathname)) {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }
  // }

  if (!token && request.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
export const config = {
  matcher: "/((?!api|_next|static|public|favicon.ico).*)",
};
