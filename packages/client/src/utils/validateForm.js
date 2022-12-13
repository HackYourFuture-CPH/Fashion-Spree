const validateForm = (values, name, type) => {
  let errors = '';

  //  regex in the email and password validation
  /* eslint-disable no-console */

  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  if (!values && name === 'fullname' && type === 'text') {
    errors = 'Full name is required!';
  }
  if (!values && name === 'email' && type === 'email') {
    errors = 'Email is required!';
  } else if (values && name === 'email' && !regexEmail.test(values)) {
    errors = 'Invalid email format!';
  }

  if (!values && name === 'password' && type === 'password') {
    errors = 'Password is required!';
  } else if (values && name === 'password' && !regexPassword.test(values)) {
    errors = `Password must Contain 8 Characters,One Uppercase, One Lowercase, One Number and One special case Character!`;
  }

  if (!values && name === 'message' && type === 'text') {
    errors = 'Message is required!';
  } else if (
    values &&
    name === 'message' &&
    type === 'text' &&
    values.length < 5
  ) {
    errors = 'Message must be more than five characters!';
  }

  /* eslint-disable no-console */
  if (values && (name === 'message' || 'name' || 'email' || 'password')) {
    console.log(`${name}: ${values}`);
  }

  return errors;
};
export default validateForm;
