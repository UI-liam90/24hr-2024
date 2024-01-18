import React from "react";
import Image from "next/image";

export const WpImage = ({ file, width }) => {
    if (file.mimeType === "image/svg+xml") {
        return <img src={file.mediaItemUrl} alt={file.altText} />;
    } else {
        return <Image src={file.mediaItemUrl} alt={file.altText} height={file.mediaDetails.height} width={file.mediaDetails.width} />;
    }
};
