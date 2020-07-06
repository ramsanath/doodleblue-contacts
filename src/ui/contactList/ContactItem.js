import React, { useCallback } from 'react';
import Initials from '../components/Initials';
import Icon from '../components/Icon';

const ContactItem = ({
    data,
    index,
    onEdit,
    onDelete,
    onClickInitials,
    onClick
}) => {
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

    const handleOnClickInitials = useCallback(e => {
        e.stopPropagation();
        onClickInitials && onClickInitials(data, index);
    })

    return (
        <div className="list-item" onClick={handleClick}>
            <Initials
                onClick={handleOnClickInitials}
                contact={data}
            />
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