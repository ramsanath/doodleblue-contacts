import { FETCH_CONTACTS } from '../actions/ContactsAction';
import { SUBMIT_CONTACT_FORM } from "../actions/ContactFormActions";
import * as api from '../../data/api';

const ContactFormMiddleware = store => next => async action => {
    next(action);
    if (action.type === SUBMIT_CONTACT_FORM.TRIGGER) {
        const { update, formData } = action.payload;
        let apiFn = api.addNewContact;
        if (update) {
            apiFn = api.updateContact
        }
        apiFn(formData)
            .then(() => store.dispatch(FETCH_CONTACTS.trigger()))
            .then(() => store.dispatch(SUBMIT_CONTACT_FORM.success()))
            .catch(error => store.dispatch(SUBMIT_CONTACT_FORM.failure(error.message)));
    }
}

export default ContactFormMiddleware;