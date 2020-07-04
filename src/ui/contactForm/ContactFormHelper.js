export const validateForm = formData => {
    const errors = [];
    if (formData.name.length <= 0) {
        errors.push('Name cannot be empty.');
    }
    if (formData.number.length <= 0) {
        errors.push('Phone Number cannot be empty.');
    }
    if (formData.email.length <= 0) {
        errors.push('Email cannot be empty.');
    }
    if (formData.company.length <= 0) {
        errors.push('Company Name cannot be empty.');
    }
    if (formData.address.length <= 0) {
        errors.push('Address cannot be empty.');
    }
    return errors.length > 0
        ? errors.join('\n')
        : null;
}