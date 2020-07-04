import React from 'react';
import '../css/contact.css';
import ContactItem from './ContactItem';

const data = [
    {
        name: 'Test Name',
        number: '999999999'
    }, {
        name: 'Test Name 2',
        number: '999999998'
    }
]

for(let i = 0; i < 100; i++) {
    data.push(data[0]);
}

const ContactList = ({
    style
}) => {
    return (
        <div className="column list" style={style}>
            <div className="header">
                Hi
            </div>
            {data.map(item => <ContactItem key={item.number} data={item} />)}
        </div>
    );
}

export default ContactList;