import { FETCH_CONTACTS } from "../actions/ContactsAction";
import * as contactsRepo from '../../data/ContactsRepo';

const ContactsMiddleware = store => next => async action => {
    next(action);
    if (action.type === FETCH_CONTACTS.TRIGGER) {
        const { user: { currentUser } } = store.getState();
        contactsRepo.getAllContacts()
            .then(contacts => {
                return currentUser.id
                    ? contacts.filter(c => c.id !== currentUser.id)
                    : contacts;
            })
            .then(contacts => store.dispatch(FETCH_CONTACTS.success(contacts)))
            .catch(error => store.dispatch(FETCH_CONTACTS.failure(error)));
    }
}

export default ContactsMiddleware;