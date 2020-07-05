import {
    uuid,
    generateFakeContacts,
    generateFakerConversation
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
    const index = db.findIndex(c => c.number === contact.number);
    db.contacts = db.contacts.splice(index, 1);
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
    await delay(mockDelay);
    let data = await getConversation(currentUser, targetUser);
    message.id = uuid();
    data.push(message);
}