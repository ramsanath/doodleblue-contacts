import { SET_CURRENT_USER } from '../actions/UserActions';

const initialState = {
    currentUser: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER.TRIGGER:
            return {
                ...state,
                currentUser: action.payload.selectedUser
            }
        default:
            return state
    }
}