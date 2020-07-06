import {
    uuid,
    generateFakeContacts,
    generateFakerConversation,
    randomColor
} from "../Helper";

const delay = wait => new Promise(resolve => setTimeout(resolve, wait));
const mockDelay = 1000;

const db = {
    contacts: generateFakeContacts(25),
    conversations: {}
};

export const addNewContact = async contact => {
    await delay(mockDelay);
    const existing = db.contacts.find(c => c.number === contact.number);
    if (existing) {
        throw new Error('Contact already exists');
    }
    contact.id = uuid();
    contact.color = randomColor();
    db.contacts.unshift(contact);
}

export const updateContact = async contact => {
    await delay(mockDelay);
    let index = db.contacts.findIndex(c => c.id === contact.id);
    db.contacts[index] = {
        ...db.contacts[index],
        ...contact
    };
    return db.contacts[index];
}

export const deleteContact = async contact => {
    await delay(mockDelay);
    db.contacts = db.contacts.filter(c => c.id !== contact.id);
}

export const getAllContacts = async () => {
    await delay(mockDelay);
    return db.contacts;
}

export const getConversation = async (currentUser, targetUser) => {
    let data = [];
    if (!db.conversations[currentUser.id]) {
        db.conversations[currentUser.id] = {};
    }
    if (!db.conversations[currentUser.id][targetUser.id]) {
        db.conversations[currentUser.id][targetUser.id] = [];
    }
    data = db.conversations[currentUser.id][targetUser.id];
    if (data.length <= 0) {
        await delay(mockDelay);
        data = generateFakerConversation(100);
        db.conversations[currentUser.id][targetUser.id] = data;
    }
    return data;
}

export const sendMessage = async (currentUser, targetUser, message) => {
    message.id = uuid();
    let data = await getConversation(currentUser, targetUser);
    data = [...data, message];
    db.conversations[currentUser.id][targetUser.id] = data;
    return message;
}

export const getContact = async contactId => {
    await delay(mockDelay);
    return db.contacts.find(c => c.id === contactId);
}