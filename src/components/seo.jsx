import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export const Seo = ({ location, seoData, children }) => {
    //Get the site meta data as a seo backup
    const {
        site: {
            siteMetadata: { siteUrl },
        },
        wp: {
            generalSettings: { title, description },
        },
    } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    siteUrl
                }
            }
            wp {
                generalSettings {
                    title
                    description
                }
            }
        }
    `);

    // assign data from yoast to varibles
    const metaTitle = seoData?.title;
    const metaDescription = seoData?.metaDesc;
    const metaKeywords = seoData?.metaKeywords;
    const schema = seoData?.schema.raw;
    const titleOutput = metaTitle ? metaTitle : title;
    const descriptionOutput = metaDescription ? metaDescription : description;
    const canonical = seoData.canonical && seoData.canonical !== "/" ? siteUrl + seoData.canonical : siteUrl + location.pathname;

    //opengraph data
    const openGraphTitle = seoData?.opengraphTitle;
    const openGraphDescription = seoData?.opengraphDescription;
    const openGraphAuthor = seoData?.opengraphAuthor;
    const openGraphImage = seoData?.opengraphImage?.localFile?.url;
    const openGraphType = seoData?.opengraphType;
    const openGraphUrl = `${siteUrl}${seoData?.opengraphUrl}`;
    const openGraphSiteName = seoData?.opengraphSiteName;

    //twitter data
    const twitterTitle = seoData?.twitterTitle;
    const twitterDescription = seoData?.twitterDescription;
    const twitterImage = seoData?.twitterImage?.localFile?.url;

    //Follow and index settings
    const noFollow = seoData?.metaRobotsNofollow;
    const noIndex = seoData?.metaRobotsNoindex;
    let metaRobots = false;
    if (process.env.GATSBY_SEO_ACTIVE === "false") {
        metaRobots = `noFollow,noIndex`;
    } else if (noFollow && noIndex) {
        metaRobots = `${noFollow},${noIndex}`;
    } else if (!noFollow && noIndex) {
        metaRobots = noIndex;
    } else if (noFollow && !noIndex) {
        metaRobots = noFollow;
    }

    return (
        <>
            {titleOutput && <title>{titleOutput}</title>}
            {descriptionOutput && <meta name="description" content={descriptionOutput} />}
            {metaKeywords && <meta name="keywords" content={metaKeywords} />}
            {metaRobots && <meta name="robots" content={metaRobots} />}
            {canonical && <link rel="canonical" href={canonical} />}
            {schema && <script type="application/ld+json">{schema}</script>}
            {openGraphTitle && <meta property="og:title" content={openGraphTitle} />}
            {openGraphDescription && <meta property="og:description" content={openGraphDescription} />}
            {openGraphAuthor && <meta property="og:author" content={openGraphAuthor} />}
            {openGraphImage && <meta property="og:image" content={openGraphImage} />}
            {openGraphType && <meta property="og:type" content={openGraphType} />}
            {openGraphUrl && <meta property="og:url" content={openGraphUrl} />}
            {openGraphSiteName && <meta property="og:site_name" content={openGraphSiteName} />}
            {twitterTitle && <meta property="twitter:title" content={twitterTitle} />}
            {twitterDescription && <meta property="twitter:description" content={twitterDescription} />}
            {twitterImage && <meta property="twitter:image" content={twitterImage} />}
            {children}
        </>
    );
};
