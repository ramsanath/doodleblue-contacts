import {
    FETCH_CONVERSATION,
    SET_CONVERSATION_CONTACT
} from "../actions/ConversationActions";


const initialState = {
    conversations: [],
    contact: {},
    loading: true,
    error: null
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
        default:
            return state;
    }
}