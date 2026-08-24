import { useState } from 'react';

const EMPTY = { name: '', email: '', message: '' };

function validate(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Enter a valid email address.';
  if (values.message.trim().length < 10)
    errors.message = 'Tell us a little more (10+ characters).';

  return errors;
}

/** Local-only contact form state — no network calls. */
export function useContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setValues(EMPTY);
    }
  };

  const reset = () => {
    setValues(EMPTY);
    setErrors({});
    setSubmitted(false);
  };

  return { values, errors, submitted, handleChange, handleSubmit, reset };
}
