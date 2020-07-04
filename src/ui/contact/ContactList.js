import React from 'react';
import '../css/contact.css';
import ContactItem from './ContactItem';
import Icon from '../components/Icon';

const data = [
    {
        name: 'Test Name',
        number: '999999999'
    }, {
        name: 'Test Name 2',
        number: '999999998'
    }
]

for (let i = 0; i < 100; i++) {
    data.push(data[0]);
}

const ContactList = ({
    style
}) => {
    return (
        <div className="column list" style={style}>
            <div className="header">
                <div className="list-title">
                    <div>Test Name</div>
                    <Icon icon="add" size={25} />
                </div>
                <input
                    type="search"
                    placeholder="Search"
                />
            </div>
            {data.map(item => <ContactItem key={item.number} data={item} />)}
        </div>
    );
}

export default ContactList;