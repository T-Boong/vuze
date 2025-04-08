import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/main", request.url));
  }
}

export const config = {
  matcher: "/", // 루트 경로에만 적용
};
