"use client";
import React from "react";
import Link from "next/link";
import { WpImage } from "~components/helpers/WpImage";
import { useInView } from "react-intersection-observer";
import HTag from "~components/helpers/hTag";

import "./style.scss";

const NewsGridItemBlock = ({ headingType, postData }) => {
    const [newsRef, isVisible] = useInView({
        root: null,
        rootMargin: "0px",
        threshold: 0.25,
        triggerOnce: true,
    });

    return (
        <div className={`news-grid-item toZoomIn ${isVisible ? "zoomIn" : ""}`} ref={newsRef}>
            <Link href={postData.uri} aria-label={postData.title}>
                {postData?.featuredImage && <WpImage file={postData?.featuredImage.node} />}

                <HTag type={headingType} className="news-grid-item__title title-five">
                    {postData.title}
                </HTag>
            </Link>
        </div>
    );
};

export default NewsGridItemBlock;
