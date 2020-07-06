import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../css/contact-list.css';
import ContactItem from './ContactItem';
import ContactForm from '../contactForm/ContactForm';
import UserSelect from './UserSelect';
import Icon from '../components/Icon';
import { RESET_CONTACT_FORM_STATE, } from '../../redux/actions/ContactFormActions';
import { FETCH_CONTACTS, SEARCH_CONTACT, DELETE_CONTACT } from '../../redux/actions/ContactsAction';
import { SET_CURRENT_USER } from '../../redux/actions/UserActions';
import { SET_CONVERSATION_CONTACT } from '../../redux/actions/ConversationActions';
import SideBar from '../components/SideBar';
import ContactDetail from './ContactDetail';

const ContactList = ({
    style
}) => {
    const dispatch = useDispatch();
    const [userSelect, setUserSelect] = useState(null);
    const [sidebarContent, setSidebarContent] = useState('');
    const [initialFormData, setInitialFormData] = useState(null);
    const [contactDetailId, setContactDetailId] = useState(null);
    const { currentUser } = useSelector(store => store.user);
    const { contact: targetContact } = useSelector(store => store.conversation);
    const { contacts, searchInput, searchResults } = useSelector(store => store.contacts);

    const listData = searchInput.length > 0 ? searchResults : contacts;
    const sidebarVisible = !!sidebarContent;

    useEffect(() => {
        dispatch(FETCH_CONTACTS.trigger());
    }, []);

    const handleOnClickItem = useCallback((data, index) => {
        if (!currentUser.id) return;
        dispatch(SET_CONVERSATION_CONTACT.trigger(data));
    });

    const handleEditItem = useCallback((data, index) => {
        setInitialFormData(data);
        setSidebarContent("form");
    });

    const handleGetContactDetails = useCallback((data, callback) => {
        setSidebarContent('detail');
        setContactDetailId(data.id);
    });

    const handleDeleteItem = useCallback((data, index) => {
        if (targetContact.id === data.id) return;
        dispatch(DELETE_CONTACT.trigger(data));
    });

    const handleNewItem = useCallback(() => {
        setInitialFormData(null);
        setSidebarContent("form");
    });

    const handleCloseSidebar = useCallback(() => {
        setInitialFormData(null);
        setSidebarContent(null);
        setContactDetailId(null);
        dispatch(RESET_CONTACT_FORM_STATE.trigger());
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

    const siderStyle = {
        left: sidebarVisible ? 0 : '-100%',
        visibility: sidebarVisible ? 'visible' : 'hidden',
        transition: 'var(--animation-scale)',
    };
    const sidebarTitle = sidebarContent === 'form'
        ? (initialFormData ? 'Edit Contact' : 'New Contact')
        : 'Contact Details';

    return [
        <div className="list-container" style={style} key="1">
            <SideBar
                visible={sidebarContent}
                title={sidebarTitle}
                style={siderStyle}
                onRequestBack={handleCloseSidebar}>
                {sidebarContent === 'form' ?
                    <ContactForm
                        onSubmitted={handleCloseSidebar}
                        initialData={initialFormData}
                    />
                    : null}
                {sidebarContent === 'detail'
                    ? <ContactDetail contactId={contactDetailId} />
                    : null}
            </SideBar>
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
                        onClickInitials={handleGetContactDetails}
                        onEdit={handleEditItem}
                        onDelete={handleDeleteItem}
                    />
                )}
            </div>
        </div>,
        userSelect
    ];
}

export default ContactList;