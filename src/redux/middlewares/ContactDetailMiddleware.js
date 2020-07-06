import { FETCH_CONTACT_DETAIL } from '../actions/ContactDetailActions';
import * as api from '../../data/api';

const ContactDetailMiddleware = store => next => async action => {
    next(action);
    if (action.type === FETCH_CONTACT_DETAIL.TRIGGER) {
        await api.getContact(action.payload)
            .then(contact => store.dispatch(FETCH_CONTACT_DETAIL.success(contact)))
            .catch(e => store.dispatch(FETCH_CONTACT_DETAIL.failure(e.message)));
    }
}

export default ContactDetailMiddleware;