import React, { useEffect } from 'react';
import '../css/contact.css';
import ContactItem from './ContactItem';
import Icon from '../components/Icon';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_CONTACTS } from '../../redux/actions/ContactsAction';

const ContactList = ({
    style
}) => {
    const dispatch = useDispatch();
    const { contacts, loading, error } = useSelector(store => store.contacts);

    useEffect(() => {
        dispatch(FETCH_CONTACTS.trigger());
    }, []);

    return (
        <div className="column list" style={style}>
            <div className="header">
                <div className="list-title">
                    <div>Test Name</div>
                    <Icon icon="add" size={25} />
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
        </div>
    );
}

export default ContactList;