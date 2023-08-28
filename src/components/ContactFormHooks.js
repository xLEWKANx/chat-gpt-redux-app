import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { setFormData } from '../redux/actions';

const initialFormState = {
  firstName: '',
  lastName: '',
  email: '',
  message: ''
};

function ContactFormHooks() {
  const formData = useSelector(state => state.formData);
  const dispatch = useDispatch();
  
  const [localData, setLocalData] = useState(formData);
  const [errors, setErrors] = useState({});
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    const changed = Object.keys(formData).some(key => formData[key] !== localData[key]);
    setIsChanged(changed);
  }, [localData, formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalData({
      ...localData,
      [name]: value
    });
  };

  const hasErrors = Object.keys(errors).length === 0;

  const validateInput = () => {
    let tempErrors = {};

    if (!validator.isAlpha(localData.firstName)) {
      tempErrors.firstName = "Invalid first name";
    }
    
    if (!validator.isAlpha(localData.lastName)) {
      tempErrors.lastName = "Invalid last name";
    }

    if (!validator.isEmail(localData.email)) {
      tempErrors.email = "Invalid email";
    }

    if (!validator.isLength(localData.message, { min: 10 })) {
      tempErrors.message = "Message should be at least 10 characters long";
    }

    setErrors(tempErrors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateInput()) {
      dispatch(setFormData(localData));
      setLocalData(initialFormState);

    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={localData.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      {errors.firstName && <p>{errors.firstName}</p>}

      <input
        type="text"
        name="lastName"
        value={localData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      {errors.lastName && <p>{errors.lastName}</p>}

      <input
        type="email"
        name="email"
        value={localData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      {errors.email && <p>{errors.email}</p>}

      <textarea
        name="message"
        value={localData.message}
        onChange={handleChange}
        placeholder="Message"
      ></textarea>
      {errors.message && <p>{errors.message}</p>}

      <button type="submit" disabled={!isChanged && !hasErrors}>Submit</button>
    </form>
  );
}

export default ContactFormHooks;
