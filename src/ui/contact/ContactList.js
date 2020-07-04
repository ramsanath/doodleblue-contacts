import React, { useEffect, useState } from 'react';
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

    useEffect(() => {
        dispatch(FETCH_CONTACTS.trigger());
    }, []);

    const listStyle = {
        ...style,
        overflowY: formVisible ? 'hidden' : 'auto'
    };

    return (
        <div className="column list" style={listStyle}>
            <div className="header">
                <div className="list-title">
                    Test Name
                    <Icon
                        icon="add"
                        onClick={() => setFormVisible(true)}
                    />
                </div>
                <input
                    type="search"
                    placeholder="Search"
                />
            </div>
            {contacts.map(item =>
                <ContactItem
                    key={item.number}
                    data={item}
                />
            )}
            {formVisible ? <ContactForm
                onClose={() => setFormVisible(false)}
            /> : null}
        </div>
    );
}

export default ContactList;