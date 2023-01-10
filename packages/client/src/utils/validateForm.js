const validateForm = (value, type) => {
  let error;

  //  regex in the email and password validation
  /* eslint-disable no-console */

  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  if (value.length < 2 && type === 'fullname') {
    error = 'Full name is required!';
  }
  if (!value && type === 'email') {
    error = 'Email is required!';
  } else if (value && type === 'email' && !regexEmail.test(value)) {
    error = 'Invalid email format!';
  }

  if (!value && type === 'password') {
    error = 'Password is required!';
  } else if (value && type === 'password' && !regexPassword.test(value)) {
    error = `Password must Contain 8 Characters,One Uppercase, One Lowercase, One Number and One special case Character!`;
  }

  if (!value && type === 'message') {
    error = 'Message is required!';
  } else if (value && type === 'message' && value.length < 5) {
    error = 'Message must be more than five characters!';
  }

  /* eslint-disable no-console */
  if (
    value &&
    (type === 'message' || 'name' || 'email' || 'password') &&
    !error
  ) {
    console.log(`${type}: ${value}`);
  }

  return error;
};
export default validateForm;
