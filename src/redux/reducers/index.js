import { combineReducers } from 'redux';
import contacts from './ContactReducer';
import contactForm from './ContactFormReducer';

export default combineReducers({
    contacts,
    contactForm
});