import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../css/contact-detail.css';
import { FETCH_CONTACT_DETAIL } from '../../redux/actions/ContactDetailActions';
import Loader from '../components/Loader';
import Initials from '../components/Initials';

const ContactDetail = ({
    contactId
}) => {
    const dispatch = useDispatch();
    const {
        contact,
        loading,
        error
    } = useSelector(state => state.contactDetail);
    useEffect(() => {
        dispatch(FETCH_CONTACT_DETAIL.trigger(contactId));
    }, [contactId]);

    const renderBody = () => {
        if (loading) {
            return <Loader />;
        }
        return (
            <div className="contact-card">
                <Initials
                    style={{ padding: 8, alignSelf: 'center', marginBottom: 16 }}
                    contact={contact}
                    size={50}
                />
                <div className="column">
                    <Info
                        label={"Name"}
                        value={contact.name}
                    />
                    <Info
                        label={"Phone Number"}
                        value={contact.number}
                    />
                    <Info
                        label={"Email Address"}
                        value={contact.email}
                    />
                    <Info
                        label={"Company"}
                        value={contact.company}
                    />
                    <Info
                        label={"Address"}
                        value={contact.address}
                    />
                </div>
            </div>
        )
    }

    return (
        <div className="contact-detail-container" >
            {renderBody()}
        </div>
    );
}

const Info = ({ label, value }) => {
    return (
        <div className="column">
            <div className="label">{label}</div>
            <div className="value">{value}</div>
        </div>
    );
}

export default ContactDetail;