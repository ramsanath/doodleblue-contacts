import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import ContactsMiddleware from './middlewares/ContactsMiddleware';

export default createStore(reducer, applyMiddleware(ContactsMiddleware));