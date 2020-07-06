import { FETCH_CONVERSATION, SEND_MESSAGE } from '../actions/ConversationActions';
import * as api from '../../data/api';

const ConversationMiddleware = store => next => async action => {
    next(action);
    if (action.type === FETCH_CONVERSATION.TRIGGER) {
        const { currentUser, targetUser } = action.payload;
        const data = await api.getConversation(currentUser, targetUser);
        store.dispatch(FETCH_CONVERSATION.success(data));
    } else if (action.type === SEND_MESSAGE.TRIGGER) {
        const {
            conversation: { contact, messageInput },
            user: { currentUser }
        } = store.getState();
        const message = {
            message: messageInput,
            type: 'outgoing'
        };
        api.sendMessage(currentUser, contact, message)
            .then(response => store.dispatch(SEND_MESSAGE.success(response)));
    }
}

export default ConversationMiddleware;