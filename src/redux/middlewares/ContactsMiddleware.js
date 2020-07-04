import { FETCH_CONTACTS } from "../actions/ContactsAction";
import * as contactsRepo from '../../data/ContactsRepo';

const ContactsMiddleware = store => next => async action => {
    next(action);
    if (action.type === FETCH_CONTACTS.TRIGGER) {
        contactsRepo.getAllContacts()
            .then(contacts => store.dispatch(FETCH_CONTACTS.success(contacts)))
            .catch(error => store.dispatch(FETCH_CONTACTS.failure(error)));
    }
}

export default ContactsMiddleware;