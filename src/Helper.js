import faker from 'faker';
faker.locale = 'en_IND';

export const generateFakeContacts = count => {
    let data = [];
    for (let i = 0; i < count; i++) {
        data.push({
            name: faker.name.firstName() + ' ' + faker.name.lastName(),
            number: faker.phone.phoneNumber(),
            email: faker.internet.email()
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