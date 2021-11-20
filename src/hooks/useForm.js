import { useState } from "react";

const useForm = (initialState = {}) => {
  const [formValues, setFormValues] = useState(initialState);

  const reset = (newState = initialState) => {
    setFormValues(newState);
  };

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  return [formValues, handleInputChange, reset];
};

export default useForm;
