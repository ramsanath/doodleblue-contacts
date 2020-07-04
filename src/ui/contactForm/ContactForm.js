import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '../components/Icon';
import {
    ON_CHANGE_INPUT,
    SUBMIT_CONTACT_FORM,
    RESET_CONTACT_FORM_STATE,
    SET_INITIAL_CONTACT_FORM_DATA
} from '../../redux/actions/ContactFormActions';
import { validateForm } from './ContactFormHelper';
import FilledButton from '../components/FilledButton';

const ContactForm = ({
    onClose,
    style,
    initialData
}) => {
    const dispatch = useDispatch();
    const {
        formData,
        submitting,
        submitted,
        submitError
    } = useSelector(store => store.contactForm);
    const updateMode = !!initialData;
    const { name, number, email } = formData;

    const handleOnChange = useCallback(e => {
        const key = e.target.name;
        const value = e.target.value;
        dispatch(ON_CHANGE_INPUT.trigger({ key, value }));
    });

    const handleOnClose = useCallback(() => {
        onClose && onClose();
        dispatch(RESET_CONTACT_FORM_STATE.trigger());
    });

    useEffect(() => {
        if (submitted) {
            handleOnClose();
        }
    }, [submitted]);

    useEffect(() => {
        if (updateMode) {
            dispatch(SET_INITIAL_CONTACT_FORM_DATA.trigger(initialData));
        }
    }, [updateMode]);

    const handleSubmit = useCallback(() => {
        const errors = validateForm(formData);
        if (errors) {
            dispatch(SUBMIT_CONTACT_FORM.failure(errors));
        } else {
            dispatch(SUBMIT_CONTACT_FORM.trigger({ formData, update: updateMode }));
        }
    });

    return (
        <div id="contact-form" style={style}>
            <div id="contact-form-header">
                <Icon
                    icon="back"
                    onClick={handleOnClose}
                    style={{ marginRight: 10 }}
                />
                {updateMode ? 'Edit Contact' : 'Add New Contact'}
            </div>
            <div id="contact-form-content">
                <div className="error-message">
                    {submitError}
                </div>
                <input
                    name="name"
                    value={name}
                    onChange={handleOnChange}
                    placeholder="Name"
                />
                <input
                    name="number"
                    value={number}
                    onChange={handleOnChange}
                    placeholder="Phone Number"
                />
                <input
                    name="email"
                    value={email}
                    onChange={handleOnChange}
                    placeholder="Email Address"
                />
                <FilledButton
                    onClick={handleSubmit}
                    loading={submitting}
                    style={{ marginTop: 20 }}>
                    Submit
                </FilledButton>
            </div>
        </div>
    );
}

export default ContactForm;