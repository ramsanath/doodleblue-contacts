const { FETCH_CONTACT_DETAIL } = require("../actions/ContactDetailActions");

const initialState = {
    contact: {},
    loading: true,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTACT_DETAIL.TRIGGER:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_CONTACT_DETAIL.SUCCESS:
            return {
                ...state,
                loading: false,
                contact: action.payload
            }
        case FETCH_CONTACT_DETAIL.TRIGGER:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}