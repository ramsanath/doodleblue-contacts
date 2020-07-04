import { FETCH_CONTACTS } from "../actions/ContactsAction";

const initialState = {
    contacts: [],
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTACTS.TRIGGER: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case FETCH_CONTACTS.SUCCESS: {
            return {
                ...state,
                loading: false,
                contacts: action.payload
            }
        }
        case FETCH_CONTACTS.FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        default:
            return state;
    }
}