import React,{useState} from "react";
import './Login.css';
import FormValidation from "./FormValidation";

const SignupForm = () => {
    const [formValues, setFormValues] = useState({ fullname: "", email: "", password: "" })
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
      setIsSubmit(true);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setFormErrors(FormValidation(formValues));
    };
 

    return (
        <form className='signup-form' >
            <input
                className="sign-up-form__fullname"
                placeholder="Full Name"
                name="fullname"
                values={formValues.fullname}
                onChange={handleChange}
                type="text"
            />
            {formErrors.fullname && <p>{formErrors.fullname}</p>}
            <input
                className="sign-up-form__email"
                placeholder="Email Address"
                name="email"
                type="email"
                values={formValues.email}
                onChange={handleChange}
            />
            {formErrors.email && <p>{formErrors.email}</p>}

            <input
                className="sign-up-form__password"
                placeholder="Password"
                name="password"
                type="password"
                values={formValues.password}
                onChange={handleChange}
            />
            {formErrors.password && <p>{formErrors.password}</p>}

            <button onClick={handleSubmit} className="signup-submit-button" type='submit'>Sign up</button>
        </form>
    )
}

        export default SignupForm