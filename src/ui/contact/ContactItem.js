import React, { useRef, useCallback } from 'react';
import { randomColor, getInitials } from '../../Helper';
import Icon from '../components/Icon';

const ContactItem = ({
    data,
    index,
    onEdit,
    onDelete,
    onClick
}) => {
    const backgroundColor = useRef(randomColor());

    const initialsStyle = {
        background: backgroundColor.current
    }

    const handleEdit = useCallback(e => {
        e.stopPropagation();
        onEdit && onEdit(data, index);
    })

    const handleDelete = useCallback(e => {
        e.stopPropagation();
        onDelete && onDelete(data, index);
    });

    const handleClick = useCallback(e => {
        e.stopPropagation();
        onClick && onClick(data, index);
    });

    return (
        <div className="list-item" onClick={handleClick}>
            <div className="initials" style={initialsStyle}>
                {getInitials(data.name)}
            </div>
            <div className="column">
                <div className="list-item-title">{data.name}</div>
                <div className="list-item-description">{data.number}</div>
            </div>
            <div className="item-action">
                <Icon
                    onClick={handleDelete}
                    icon="delete"
                    style={{ marginRight: 8 }}
                />
                <Icon
                    onClick={handleEdit}
                    icon="edit"
                />
            </div>
        </div>
    );
}

export default ContactItem;