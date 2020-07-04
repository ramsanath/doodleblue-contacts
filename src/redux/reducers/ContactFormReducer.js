import {
    SUBMIT_CONTACT_FORM,
    ON_CHANGE_INPUT,
    RESET_CONTACT_FORM_STATE
} from "../actions/ContactFormActions";

const initialState = {
    formData: {
        name: '',
        number: '',
        email: ''
    },
    submitted: false,
    submitting: false,
    submitError: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ON_CHANGE_INPUT.TRIGGER:
            return {
                ...state,
                formData: {
                    ...state.formData,
                    [action.payload.key]: action.payload.value
                }
            }
        case SUBMIT_CONTACT_FORM.TRIGGER:
            return {
                ...state,
                submitting: true,
                submitError: false
            }
        case SUBMIT_CONTACT_FORM.SUCCESS:
            return {
                ...state,
                submitting: false,
                submitted: true
            }
        case SUBMIT_CONTACT_FORM.FAILURE:
            return {
                ...state,
                submitting: false,
                submitError: action.payload
            }
        case RESET_CONTACT_FORM_STATE.TRIGGER:
            return {
                ...initialState
            }
        default:
            return state;
    }
}