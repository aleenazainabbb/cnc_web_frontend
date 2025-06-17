export const isValidEmail = (email: string): boolean => {
  const gmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return gmailRegex.test(email);
};

export const isValidPassword = (password: string): boolean => {
  const lengthCheck = password.length >= 8;
  const specialCharCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const numberCheck = /\d/.test(password);
  const upperCaseCheck = /[A-Z]/.test(password);
  const lowerCaseCheck = /[a-z]/.test(password);

  return lengthCheck && specialCharCheck && numberCheck && upperCaseCheck && lowerCaseCheck;
};
