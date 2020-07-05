import { combineReducers } from 'redux';
import contacts from './ContactReducer';
import contactForm from './ContactFormReducer';
import user from './UserReducer';
import conversation from './ConversationReducer';

export default combineReducers({
    contacts,
    contactForm,
    user,
    conversation
});