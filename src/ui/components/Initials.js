import React, { useRef } from 'react';
import { randomColor, getInitials } from '../../Helper';

const Initials = ({
    name,
    size = 16,
    style,
    onClick,
    ...props
}) => {
    const color = useRef(randomColor());
    const initialsStyle = {
        ...style,
        backgroundColor: color.current,
        fontSize: size,
        height: size * 1.5,
        width: size * 1.5,
        padding: size / 3
    };
    const className = onClick ? 'clickable' : '';
    return (
        <div
            className={"initials " + className}
            style={initialsStyle}
            onClick={onClick}
            {...props}>
            {getInitials(name)}
        </div>
    );
}

export default Initials;