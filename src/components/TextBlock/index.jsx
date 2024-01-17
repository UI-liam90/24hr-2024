import React from "react";

const TextBlock = ({ children }) => {
    return (
        <>
            <div className="text-block">
                <div className="container">
                    this is a text block!
                    {children}
                </div>
            </div>
        </>
    );
};

export default TextBlock;
