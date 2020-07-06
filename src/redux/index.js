import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { Logger } from './middlewares/CommonMiddlewares';
import ContactsMiddleware from './middlewares/ContactsMiddleware';
import ContactFormMiddleware from './middlewares/ContactFormMiddleware';
import ConversationMiddleware from './middlewares/ConversationMiddleware';
import ContactDetailMiddleware from './middlewares/ContactDetailMiddleware';

const middlewares = applyMiddleware(
    Logger,
    ContactsMiddleware,
    ContactFormMiddleware,
    ConversationMiddleware,
    ContactDetailMiddleware
);
export default createStore(reducer, middlewares);