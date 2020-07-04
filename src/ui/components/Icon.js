import React from 'react';
import IconData from './IconData';

const Icon = ({
    icon,
    size = 25,
    style,
    ...rest
}) => {
    return (
        <img
            className="clickable"
            alt={icon}
            style={{ ...style, width: size, height: size }}
            src={IconData[icon]}
            {...rest}
        />
    );
}

export default Icon;