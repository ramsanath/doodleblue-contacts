import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { Logger } from './middlewares/CommonMiddlewares';
import ContactsMiddleware from './middlewares/ContactsMiddleware';
import ContactFormMiddleware from './middlewares/ContactFormMiddleware';


const middlewares = applyMiddleware(
    Logger,
    ContactsMiddleware,
    ContactFormMiddleware,
);
export default createStore(reducer, middlewares);