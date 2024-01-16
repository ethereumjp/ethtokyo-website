import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const generateNonce = (): string => {
  const randomBuffer = crypto.getRandomValues(new Uint8Array(16));
  const nonce = Array.from(new Uint8Array(randomBuffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  return nonce;
};

const generateCspHeader = (nonce: string): string => {
  const csp = [
    `default-src 'strict-dynamic' 'nonce-${nonce}' 'self'`,
    `script-src ${
      process.env.NODE_ENV === "development"
        ? "'unsafe-eval' 'unsafe-inline'"
        : `'nonce-${nonce}'`
    } 'self'`,
    "style-src 'unsafe-inline' 'self'",
    "img-src 'self'",
    "connect-src 'self'",
    "object-src 'self'",
    "base-uri 'self'",
  ].join("; ");
  return csp;
};

export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)", "/"],
};

export const middleware = (req: NextRequest): NextResponse => {
  const newNonce = generateNonce();
  const newCsp = generateCspHeader(newNonce);

  const reqHeaders = new Headers(req.headers);

  reqHeaders.set("X-CSP-Nonce", newNonce);
  reqHeaders.set("Content-Security-Policy", newCsp);

  const res = NextResponse.next({
    request: {
      headers: reqHeaders,
    },
  });

  res.headers.set("Content-Security-Policy", newCsp);
  res.headers.set("Referrer-Policy", "same-origin");
  res.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload",
  );
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("X-CSP-Nonce", newNonce);
  res.headers.set("X-DNS-Prefetch-Control", "on");
  res.headers.set("X-Frame-Options", "sameorigin");
  res.headers.set("X-XSS-Protection", "1; mode=block");

  return res;
};
