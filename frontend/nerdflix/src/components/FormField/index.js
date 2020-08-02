import React from "react";

// import { Container } from './styles';

const FormField = ({ value, change, name, type, title }) => {
  return (
    <div>
      <label>
        {title}
        {(type === "textarea" && (
          <textarea name={name} value={value} onChange={change}></textarea>
        )) || <input type={type} value={value} name={name} onChange={change} />}
      </label>
    </div>
  );
};

export default FormField;
