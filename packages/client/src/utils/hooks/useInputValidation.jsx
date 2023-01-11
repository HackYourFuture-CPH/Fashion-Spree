import { useState } from 'react';
import { validateForm } from '../validateForm';

const useInputValidation = (type) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const valueHandler = (input) => {
    const invalid = validateForm(input, type);
    if (!invalid) {
      setValue(input);
      setError(false);
    } else {
      setError(invalid);
      setValue(input);
    }
  };
  return [value, error, valueHandler];
};

export default useInputValidation;
