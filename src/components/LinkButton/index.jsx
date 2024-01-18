import React from "react";
import Link from "next/link";

//styles for this can be found in the styles/global/button file

const LinkButton = ({ url, type, size, target, children }) => {
    return (
        <Link href={url} className={`button ${type ? `button--${type}` : ""} ${size ? `button--${size}` : ""}`} target={target}>
            {children}
        </Link>
    );
};

export default LinkButton;
