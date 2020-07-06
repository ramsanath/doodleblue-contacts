import React from 'react';
import { getInitials } from '../../Helper';

const Initials = ({
    contact,
    size = 16,
    style,
    onClick,
    ...props
}) => {
    const initialsStyle = {
        ...style,
        backgroundColor: contact.color,
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
            {getInitials(contact.name)}
        </div>
    );
}

export default Initials;