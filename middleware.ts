import { NextRequest, NextResponse } from 'next/server';

export default function Middleware(req: NextRequest): NextResponse {
  if (req.nextUrl.pathname === req.nextUrl.pathname.toLowerCase()) return NextResponse.next();

  return NextResponse.redirect(new URL(req.nextUrl.origin + req.nextUrl.pathname.toLowerCase()));
}
