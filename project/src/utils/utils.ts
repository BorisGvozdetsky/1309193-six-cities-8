const PASSWORD_REG = /(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]+/;
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PERCENT_COUNT = 100;
const RATING_COUNT = 5;

const addRatingPercent = (rating: number): number => (Math.round(rating) * PERCENT_COUNT) / RATING_COUNT;

const formatDate = (date: string): string => new Date(date).toLocaleDateString('en-US', {month: 'long', year: 'numeric'});

const formatDateAttribute = (date: string): string => new Date(date).toLocaleDateString('en-CA');

const capitalizeString = (string: string): string => string.charAt(0).toUpperCase() + string.slice(1);

const validatePassword = (password: string): string => {
  if (password.includes(' ')) {
    return 'Spaces are not allowed in password';
  }
  if (!PASSWORD_REG.test(password)) {
    return 'Password must contain at least one letter and a number';
  }
  return '';
};

const validateEmail = (email: string): string => {
  if (!EMAIL_REGEX.test(email)) {
    return 'Please enter valid email';
  }
  return '';
};

export {addRatingPercent, formatDate, formatDateAttribute, validatePassword, validateEmail, capitalizeString};
