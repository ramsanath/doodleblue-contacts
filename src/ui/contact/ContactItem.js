import React from 'react';
import { randomColor, getInitials } from '../../Helper';

const ContactItem = ({
    data
}) => {
    const initialsStyle = {
        background: randomColor()
    }
    return (
        <div className="list-item row">
            <div className="initials" style={initialsStyle}>
                {getInitials(data.name)}
            </div>
            <div className="column">
                <div className="list-item-title">{data.name}</div>
                <div className="list-item-description">{data.number}</div>
            </div>
        </div>
    );
}

export default ContactItem;