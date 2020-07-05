import React, { useEffect, useState, useCallback } from 'react';
import '../css/contact.css';
import ContactItem from './ContactItem';
import ContactForm from '../contactForm/ContactForm';
import UserSelect from './UserSelect';
import Icon from '../components/Icon';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_CONTACTS, SEARCH_CONTACT } from '../../redux/actions/ContactsAction';
import { SET_CURRENT_USER } from '../../redux/actions/UserActions';
import { SET_CONVERSATION_CONTACT } from '../../redux/actions/ConversationActions';

const ContactList = ({
    style
}) => {
    const dispatch = useDispatch();
    const {
        contacts,
        searchInput,
        searchResults
    } = useSelector(store => store.contacts);
    const { currentUser } = useSelector(store => store.user);
    const [formVisible, setFormVisible] = useState(false);
    const [initialFormData, setInitialFormData] = useState(null);
    const [userSelect, setUserSelect] = useState(null);
    const listData = searchInput.length > 0 ? searchResults : contacts;

    useEffect(() => {
        dispatch(FETCH_CONTACTS.trigger());
    }, []);

    const handleOnClickItem = useCallback((data, index) => {
        if (!currentUser.id) return;
        dispatch(SET_CONVERSATION_CONTACT.trigger(data));
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

    const handleClickSelectUser = useCallback(e => {
        const { bottom, left } = e.target.getBoundingClientRect();
        const userSelect = <UserSelect
            key="2"
            style={{ top: bottom + 4, left }}
            onSelect={handleCurrentUserSelect}
        />;
        setUserSelect(userSelect);
        document.addEventListener('click', dismissUserSelect);
    });

    const dismissUserSelect = useCallback(e => {
        e.stopPropagation();
        if (!e.target.closest('#user-select')) {
            setUserSelect(null);
            document.removeEventListener('click', dismissUserSelect);
        }
    });

    const handleCurrentUserSelect = useCallback(selectedUser => {
        dispatch(SET_CURRENT_USER.trigger({
            selectedUser,
            currentUser
        }));
        dispatch(SET_CONVERSATION_CONTACT.trigger({}));
    });

    const handleSearch = useCallback(e => {
        dispatch(SEARCH_CONTACT.trigger(e.target.value));
    });

    const formStyle = {
        left: formVisible ? 0 : '-100%',
        visibility: formVisible ? 'visible' : 'hidden',
        transition: 'var(--animation-scale)',
    };

    return [
        <div className="list-container" style={style} key="1">
            <ContactForm
                style={formStyle}
                initialData={initialFormData}
                onClose={handleCloseForm}
            />
            <div className="list">
                <div className="header">
                    <div className="list-title">
                        <div
                            className="user-info"
                            onClick={handleClickSelectUser}>
                            {currentUser.id ? currentUser.name : "Select User"}
                        </div>
                        <Icon
                            icon="add"
                            onClick={handleNewItem}
                        />
                    </div>
                    <input
                        type="search"
                        placeholder="Search"
                        value={searchInput}
                        onChange={handleSearch}
                    />
                </div>
                {listData.map((item, index) =>
                    <ContactItem
                        key={item.number}
                        data={item}
                        index={index}
                        onClick={handleOnClickItem}
                        onEdit={handleEditItem}
                    />
                )}
            </div>
        </div>,
        userSelect
    ];
}

export default ContactList;