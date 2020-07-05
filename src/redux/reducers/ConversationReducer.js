import {
    FETCH_CONVERSATION,
    SET_CONVERSATION_CONTACT,
    TYPE_IN_MESSAGE,
    SEND_MESSAGE
} from "../actions/ConversationActions";

const initialState = {
    conversations: [],
    contact: {},
    loading: true,
    error: null,
    messageInput: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONVERSATION.TRIGGER:
            return {
                ...state,
                loading: true,
                error: false,
                conversations: [],
            }
        case FETCH_CONVERSATION.SUCCESS:
            return {
                ...state,
                loading: false,
                conversations: action.payload
            }
        case SET_CONVERSATION_CONTACT.TRIGGER: {
            return {
                ...state,
                contact: action.payload
            }
        }
        case TYPE_IN_MESSAGE.TRIGGER:
            return {
                ...state,
                messageInput: action.payload
            }
        case SEND_MESSAGE.SUCCESS:
            return {
                ...state,
                messageInput: '',
                conversations: [
                    ...state.conversations,
                    action.payload
                ]
            }
        default:
            return state;
    }
}