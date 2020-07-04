import React from 'react';
import IconData from './IconData';

const Icon = ({ icon, size, ...rest }) => {
    return (
        <img
            className="clickable"
            alt={icon}
            style={{ width: size, height: size }}
            src={IconData[icon]}
            {...rest}
        />
    );
}

export default Icon;