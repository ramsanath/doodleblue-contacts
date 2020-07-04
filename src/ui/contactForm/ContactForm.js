import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '../components/Icon';
import {
    ON_CHANGE_INPUT,
    SUBMIT_CONTACT_FORM,
    RESET_CONTACT_FORM_STATE
} from '../../redux/actions/ContactFormActions';
import { validateForm } from './ContactFormHelper';
import FilledButton from '../components/FilledButton';

const ContactForm = ({
    onClose
}) => {
    const dispatch = useDispatch();
    const {
        formData,
        submitting,
        submitted,
        submitError
    } = useSelector(store => store.contactForm);

    const { name, number, email } = formData;

    const handleOnChange = useRef(e => {
        const key = e.target.name;
        const value = e.target.value;
        dispatch(ON_CHANGE_INPUT.trigger({ key, value }));
    });

    useEffect(() => {
        if (submitted) {
            handleOnClose();
        }
    }, [submitted]);

    let handleOnClose = () => {
        onClose && onClose();
        dispatch(RESET_CONTACT_FORM_STATE.trigger());
    }


    const handleSubmit = () => {
        const errors = validateForm(formData);
        if (errors) {
            dispatch(SUBMIT_CONTACT_FORM.failure(errors));
        } else {
            dispatch(SUBMIT_CONTACT_FORM.trigger({ formData, update: false }));
        }
    };

    return (
        <div id="contact-form">
            <div id="contact-form-header">
                <Icon
                    icon="back"
                    onClick={handleOnClose}
                    style={{ marginRight: 10 }}
                />
                Add New Contact
            </div>
            <div id="contact-form-content">
                <div className="error-message">
                    {submitError}
                </div>
                <input
                    name="name"
                    value={name}
                    onChange={handleOnChange.current}
                    placeholder="Name"
                />
                <input
                    name="number"
                    value={number}
                    onChange={handleOnChange.current}
                    placeholder="Phone Number"
                />
                <input
                    name="email"
                    value={email}
                    onChange={handleOnChange.current}
                    placeholder="Email Address"
                />
                <FilledButton
                    onClick={handleSubmit}
                    loading={submitting}>
                    Submit
                </FilledButton>
            </div>
        </div>
    );
}

export default ContactForm;