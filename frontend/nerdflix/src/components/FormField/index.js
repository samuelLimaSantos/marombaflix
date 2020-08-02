import React from "react";
import { FormFieldWrapper, Label, Input } from "./style";

// import { Container } from './styles';

const FormField = ({ value, change, name, type, title }) => {
  const isTypeTextArea = type === "textarea";
  const tag = isTypeTextArea ? "textarea" : "input";
  const hasValue = Boolean(value.length);

  return (
    <FormFieldWrapper>
      <Label>
        <Input
          as={tag}
          type={type}
          value={value}
          name={name}
          onChange={change}
          hasValue={hasValue}
        />
        <Label.Text>{title}</Label.Text>
      </Label>
    </FormFieldWrapper>
  );
};

export default FormField;
