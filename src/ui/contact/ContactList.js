import React, { useEffect, useState, useCallback } from 'react';
import '../css/contact.css';
import ContactItem from './ContactItem';
import ContactForm from '../contactForm/ContactForm';
import Icon from '../components/Icon';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_CONTACTS } from '../../redux/actions/ContactsAction';

const ContactList = ({
    style
}) => {
    const dispatch = useDispatch();
    const { contacts, loading, error } = useSelector(store => store.contacts);
    const [formVisible, setFormVisible] = useState(false);
    const [initialFormData, setInitialFormData] = useState(null);

    useEffect(() => {
        dispatch(FETCH_CONTACTS.trigger());
    }, []);

    const handleOnClickItem = useCallback((data, index) => {
        
    });

    const handleEditItem = useCallback((data, index) => {
        setInitialFormData(data);
        setFormVisible(true);
    });

    const handleNewItem = useCallback(() => {
        setInitialFormData(null);
        setFormVisible(true);
    });

    const handleCloseForm = useCallback(() => {
        setInitialFormData(null);
        setFormVisible(false);
    });

    const formStyle = {
        left: formVisible ? 0 : '-100%',
        visibility: formVisible ? 'visible' : 'hidden',
        transition: 'var(--animation-scale)',
    };

    return (
        <div className="list-container" style={style}>
            <ContactForm
                style={formStyle}
                initialData={initialFormData}
                onClose={handleCloseForm}
            />
            <div className="list">
                <div className="header">
                    <div className="list-title">
                        {"Test Name"}
                        <Icon
                            icon="add"
                            onClick={handleNewItem}
                        />
                    </div>
                    <input
                        type="search"
                        placeholder="Search"
                    />
                </div>
                {contacts.map((item, index) =>
                    <ContactItem
                        key={item.number}
                        data={item}
                        index={index}
                        onClick={handleOnClickItem}
                        onEdit={handleEditItem}
                    />
                )}

            </div>
        </div>
    );
}

export default ContactList;