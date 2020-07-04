import React from 'react';

const Loader = ({
    backgroundColor = 'rgba(255, 255, 255, 0.3)',
    foregroundColor = '#ffffff',
    size = 15
}) => {
    return <div
        className="loading"
        style={{
            borderColor: backgroundColor,
            borderTopColor: foregroundColor,
            width: size,
            height: size,
        }}
    />;
}

export default Loader;