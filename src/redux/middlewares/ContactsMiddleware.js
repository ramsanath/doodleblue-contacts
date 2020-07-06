import {
    FETCH_CONTACTS,
    SEARCH_CONTACT,
    DELETE_CONTACT
} from "../actions/ContactsAction";
import * as api from '../../data/api';
import { debounce } from "../../Helper";

const ContactsMiddleware = store => next => async action => {
    next(action);
    if (action.type === FETCH_CONTACTS.TRIGGER) {
        const { user: { currentUser } } = store.getState();
        api.getAllContacts()
            .then(contacts => {
                return currentUser.id
                    ? contacts.filter(c => c.id !== currentUser.id)
                    : contacts;
            })
            .then(contacts => store.dispatch(FETCH_CONTACTS.success(contacts)))
            .catch(error => store.dispatch(FETCH_CONTACTS.failure(error)));
    } else if (action.type === SEARCH_CONTACT.TRIGGER) {
        handleSearch(store, action);
    } else if (action.type === DELETE_CONTACT.TRIGGER) {
        api.deleteContact(action.payload)
            .then(() => store.dispatch(DELETE_CONTACT.success()))
            .catch(e => store.dispatch(DELETE_CONTACT.failure(e.message)));
    }
}

const handleSearch = debounce((store, action) => {
    const searchInput = action.payload;
    const { contacts: { contacts } } = store.getState();
    const filtered = contacts.filter(c => {
        return c.name.toLowerCase().includes(searchInput) ||
            c.number.includes(searchInput);
    });
    store.dispatch(SEARCH_CONTACT.success(filtered));
}, 200);

export default ContactsMiddleware;