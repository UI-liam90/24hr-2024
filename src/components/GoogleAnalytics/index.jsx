import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { pageview } from "./gtagHelper";

export default function GoogleAnalytics({ measurementId }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const url = pathname + searchParams.toString();

        pageview(measurementId, url);
    }, [pathname, searchParams, measurementId]);
    return (
        <>
            <script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
            <script id="google-analytics" strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('consent', 'default', {
                    'ad_storage': 'denied',
                    'analytics_storage': 'denied'
                });

                gtag('config', '${measurementId}', {
                    page_path: window.location.pathname,
                });
                `}
            </script>
        </>
    );
}
