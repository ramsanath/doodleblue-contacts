import faker from 'faker';
faker.locale = 'en_IND';

export const generateFakeContacts = count => {
    let data = [];
    for (let i = 0; i < count; i++) {
        data.push({
            id: uuid(),
            name: faker.name.firstName() + ' ' + faker.name.lastName(),
            number: faker.phone.phoneNumber(),
            email: faker.internet.email(),
            company: faker.company.companyName(),
            address: faker.address.streetAddress()
        });
    }
    return data;
}

export const randomColor = () => {
    return faker.internet.color();
}

export const getInitials = name => {
    return name.split(' ').map(n => n[0].toUpperCase()).join('');
}

export const uuid = () => faker.random.uuid();

export const debounce = (callback, wait) => {
    let timeout;
    return function () {
        if (timeout) {
            timeout = clearTimeout(timeout);
        }
        timeout = setTimeout(callback.bind(null, ...arguments), wait);
    }
}