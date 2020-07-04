import React from 'react';

const ContactItem = ({
    data
}) => {
    return (
        <div className="list-item row">
            <div className="initials">
                {data.name.split(' ').map(n => n[0].toUpperCase()).join('')}
            </div>
            <div className="column">
                <div className="list-item-title">{data.name}</div>
                <div className="list-item-description">{data.number}</div>
            </div>
        </div>
    );
}

export default ContactItem;