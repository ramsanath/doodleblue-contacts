import { FETCH_CONVERSATION } from '../actions/ConversationActions';
import * as contactsRepo from '../../data/ContactsRepo';

const ConversationMiddleware = store => next => async action => {
    next(action);
    if (action.type === FETCH_CONVERSATION.TRIGGER) {
        const { currentUser, targetUser } = action.payload;
        const data = await contactsRepo.getConversation(currentUser, targetUser);
        store.dispatch(FETCH_CONVERSATION.success(data));
    }
}

export default ConversationMiddleware;