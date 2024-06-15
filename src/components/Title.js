import React from "react";

export const Title = ({ children, style }) => (
    <h1
        className="title"
        style={style}>
        {children}
    </h1>
)