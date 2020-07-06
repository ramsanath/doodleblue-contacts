export const validateForm = formData => {
    const errors = [];
    if (formData.name.length <= 0) {
        errors.push('Name');
    }
    if (formData.number.length <= 0) {
        errors.push('Phone Number');
    }
    if (formData.email.length <= 0) {
        errors.push('Email Address');
    }
    if (formData.company.length <= 0) {
        errors.push('Company Name');
    }
    if (formData.address.length <= 0) {
        errors.push('Address');
    }
    return errors.length > 0
        ? 'Invalid value for ' + errors.join(', ') + '.'
        : null;
}