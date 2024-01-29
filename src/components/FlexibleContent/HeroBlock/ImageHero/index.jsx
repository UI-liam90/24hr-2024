//"use client";
//import React from "react";
import { InView } from "react-intersection-observer";
//import { WpImage } from "@components/helpers/WpImage";
import { HTMLRender } from "@components/helpers/htmlRender";
import LinkButton from "@components/LinkButton";

const ImageHero = ({ blockData }) => {
    const file = blockData.image;
    return (
        <InView threshold="0.25" triggerOnce="true">
            {({ inView, ref }) => (
                <div ref={ref} className={`image-hero toZoomIn ${inView ? "zoomIn" : ""}`}>
                    <img class="hero-image" src={file.mediaItemUrl} alt={file.altText} height={file.mediaDetails.height} width={file.mediaDetails.width} />

                    {blockData.overlay || blockData.button ? (
                        <InView threshold="0.25" triggerOnce="true">
                            {({ inView, ref }) => (
                                <div className={`hero-overlay toFadeIn ${inView ? "fadeIn" : ""}`} ref={ref}>
                                    {blockData.overlay && <HTMLRender data={blockData.overlay} />}
                                    {blockData.button && (
                                        <LinkButton type="primary" url={blockData.button.url} target={blockData.button.target}>
                                            {blockData.button.title}
                                        </LinkButton>
                                    )}
                                </div>
                            )}
                        </InView>
                    ) : null}
                </div>
            )}
        </InView>
    );
};
export default ImageHero;
