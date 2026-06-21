"use client";

import { Toaster } from "@/components/ui/sonner";
import { CookieBanner } from "@/components/CookieBanner";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster richColors position="top-center" />
      <CookieBanner />
      <GoogleAnalytics />
    </>
  );
}
