import { generateFakeContacts } from "../Helper";

const delay = wait => new Promise(resolve => setTimeout(resolve, wait));
const mockDelay = 1000;

const db = {
    contacts: generateFakeContacts(25)
};

export const addNewContact = async contact => {
    await delay(mockDelay);
    const existing = db.contacts.find(c => c.number === contact.number);
    if (existing) {
        throw new Error('Contact already exists');
    }
    db.contacts.unshift(contact);
}

export const deleteContact = async contact => {
    await delay(mockDelay);
    const index = db.findIndex(c => c.number === contact.number);
    db.contacts = db.contacts.splice(index, 1);
}

export const getAllContacts = async () => {
    await delay(mockDelay);
    return db.contacts;
}