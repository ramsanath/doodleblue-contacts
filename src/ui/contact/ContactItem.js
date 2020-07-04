import React, { useRef, useCallback } from 'react';
import { randomColor, getInitials } from '../../Helper';
import Icon from '../components/Icon';

const ContactItem = ({
    data,
    index,
    onEdit
}) => {
    const backgroundColor = useRef(randomColor());
    const initialsStyle = {
        background: backgroundColor.current
    }
    const handleEdit = useCallback(() => {
        onEdit && onEdit(data, index);
    })

    return (
        <div className="list-item">
            <div className="initials" style={initialsStyle}>
                {getInitials(data.name)}
            </div>
            <div className="column">
                <div className="list-item-title">{data.name}</div>
                <div className="list-item-description">{data.number}</div>
            </div>
            <Icon
                onClick={handleEdit}
                icon="edit"
                className="item-edit"
            />
        </div>
    );
}

export default ContactItem;