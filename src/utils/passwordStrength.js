export const getPasswordStrength = (password) => {
    if (!password) return '';
    
    const lengthCriteria = password.length >= 8;
    const numberCriteria = /\d/.test(password);
    const lowercaseCriteria = /[a-z]/.test(password);
    const uppercaseCriteria = /[A-Z]/.test(password);
    const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
    let strength = '';
    
    if (lengthCriteria && numberCriteria && lowercaseCriteria && uppercaseCriteria && specialCharCriteria) {
      strength = 'Strong';
    } else if (lengthCriteria && (lowercaseCriteria || uppercaseCriteria)) {
      strength = 'Medium';
    } else {
      strength = 'Weak';
    }
  
    return strength;
  };
  