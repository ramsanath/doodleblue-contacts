import { combineReducers } from 'redux';
import contacts from './ContactReducer';
import contactForm from './ContactFormReducer';
import user from './UserReducer';

export default combineReducers({
    contacts,
    contactForm,
    user
});