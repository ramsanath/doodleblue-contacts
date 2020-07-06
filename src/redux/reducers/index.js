import { combineReducers } from 'redux';
import contacts from './ContactReducer';
import contactForm from './ContactFormReducer';
import user from './UserReducer';
import conversation from './ConversationReducer';
import contactDetail from './ContactDetailReducer';

export default combineReducers({
    contacts,
    contactForm,
    user,
    conversation,
    contactDetail
});