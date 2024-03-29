import React from "react";

const HTag = ({ type, className, ref, children }) => {
    return (
        <>
            {type === "h1" && <h1 className={className}>{children}</h1>}
            {type === "h2" && <h2 className={className}>{children}</h2>}
            {type === "h3" && <h3 className={className}>{children}</h3>}
            {type === "h4" && <h4 className={className}>{children}</h4>}
            {type === "h5" && <h5 className={className}>{children}</h5>}
            {type === "h6" && <h6 className={className}>{children}</h6>}
        </>
    );
};

export default HTag;
