const validateForm = (values) => {
  const errors = {};

  //  regex in the email and password validation
  /* eslint-disable no-console */

  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  if (!values.fullname) {
    errors.fullname = 'Full name is required!';
  }
  if (!values.email) {
    errors.email = 'Email is required!';
  } else if (!regexEmail.test(values.email)) {
    errors.email = 'Invalid email format!';
  }
  if (!values.password) {
    errors.password = 'Password is required!';
  } else if (!regexPassword.test(values.password)) {
    errors.password = `Password must Contain 8 Characters,One Uppercase, One Lowercase, One Number and One special case Character!`;
  }
  if (!values.message) {
    errors.message = 'Message is required!';
  } else if (values.message.length < 5) {
    errors.message = 'Message must be more than five characters!';
  }
  /* eslint-disable no-console */
  if (values.fullname && values.email && values.password) {
    console.log(
      `fullname: ${values.fullname}, email: ${values.email}, password:${values.password}`,
    );
  }

  return errors;
};
export default validateForm;