import React, { useEffect, useState, useCallback } from 'react';
import '../css/user-select.css';
import { useSelector } from 'react-redux';
import Loader from '../components/Loader';

const UserSelect = ({
    style,
    onSelect
}) => {
    const [height, setHeight] = useState(0);
    const { contacts, loading } = useSelector(state => state.contacts);

    useEffect(() => {
        setHeight('50%');
    }, []);

    const selectStyle = {
        ...style,
        height,
    }

    const handleClick = useCallback(e => {
        const id = e.target.getAttribute('name');
        const contact = contacts.find(c => c.id === id);
        onSelect && onSelect(contact);
    });

    return (
        <div style={selectStyle} id="user-select">
            {loading ? <Loader
                foregroundColor="var(--accent-color)"
                size={25}
            /> : contacts.map(contact =>
                <div
                    key={contact.id}
                    className="user-select-item"
                    name={contact.id}
                    onClick={handleClick}>
                    {contact.name}
                </div>
            )}
        </div>
    )
}

export default UserSelect;