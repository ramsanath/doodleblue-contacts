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
    return errors.length > 0
        ? errors.join('\n')
        : null;
}