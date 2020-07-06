import React from 'react';

const Loader = ({
    backgroundColor = 'var(--border-color)',
    foregroundColor = 'var(--accent-color)',
    size = 15,
    style
}) => {
    return <div
        className="loading"
        style={{
            ...style,
            borderColor: backgroundColor,
            borderTopColor: foregroundColor,
            width: size,
            height: size,
        }}
    />;
}

export default Loader;