import { FETCH_CONTACTS, SEARCH_CONTACT, DELETE_CONTACT } from "../actions/ContactsAction";
import { SET_CURRENT_USER } from "../actions/UserActions";

const initialState = {
    contacts: [],
    loading: false,
    error: null,
    searchInput: '',
    searchResults: []
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
        case SET_CURRENT_USER.TRIGGER: {
            const { selectedUser, currentUser } = action.payload;
            const filteredContacts = state.contacts.filter(c => c.id !== selectedUser.id);
            if (currentUser.id) {
                filteredContacts.push(currentUser);
            }
            return {
                ...state,
                contacts: filteredContacts
            }
        }
        case SEARCH_CONTACT.TRIGGER:
            return {
                ...state,
                searchInput: action.payload
            }
        case SEARCH_CONTACT.SUCCESS:
            return {
                ...state,
                searchResults: action.payload
            }
        case DELETE_CONTACT.TRIGGER:
            return {
                ...state,
                contacts: state.contacts.filter(c => c.id !== action.payload.id)
            }
        default:
            return state;
    }
}