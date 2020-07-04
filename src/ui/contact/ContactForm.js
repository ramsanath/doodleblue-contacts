import React from 'react';
import Icon from '../components/Icon';

const ContactForm = ({
    onCancel
}) => {
    return (
        <div id="contact-form">
            <div id="contact-form-header">
                <Icon
                    icon="back"
                    onClick={onCancel}
                    style={{ marginRight: 10 }}
                />
                Add New Contact
            </div>
            <div id="contact-form-content">
                <input 
                />
            </div>
        </div>
    );
}

export default ContactForm;