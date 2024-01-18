"use client";

import Script from "next/script";

export default function GoogleTagManager({ measurementId }) {
    return (
        <>
            <Script type="text/plain" data-category="analytics" data-service="Google Tag Manager" id="google-tagmanager" strategy="afterInteractive">
                {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${measurementId}');
        `}
            </Script>
        </>
    );
}
