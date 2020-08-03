import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const setValue = (key, value) => {
    setValues({ ...values, [key]: value });
  };

  const handleChange = ({ target }) => {
    setValue(target.getAttribute("name"), target.value);
  };

  const clearForm = () => {
    setValues(initialValues);
  };

  return {
    values,
    handleChange,
    clearForm,
  };
};

export default useForm;
