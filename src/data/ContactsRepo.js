const delay = wait => new Promise(resolve => setTimeout(resolve, wait));

const mockDelay = 1000;

const db = {};

export const addNewContact = async contact => {
    await delay(mockDelay);

}

export const getAllContacts = async () => {
    await delay(mockDelay);
    const 
}