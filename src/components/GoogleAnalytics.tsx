"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA_ID = "G-DHNT0W69X6";
const STORAGE_KEY = "divine_cookie_consent";

export function GoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "accepted") {
      setHasConsent(true);
    }
    const handler = () => setHasConsent(true);
    window.addEventListener("cookie-consent-accepted", handler);
    return () => window.removeEventListener("cookie-consent-accepted", handler);
  }, []);

  if (!hasConsent) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
