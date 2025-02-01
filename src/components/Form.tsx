import { useState } from "react";
import { v4 as uuid4 } from "uuid";

export interface IFormField {
  fieldKey: string;
  fieldValue: string;
  fieldType: React.HTMLInputTypeAttribute | React.HTMLTextAreaTypeAttribute;
}

interface IFormFieldProps {
  formFields: IFormField[];
  buttonText: string;
}

export const Form = ({ formFields, buttonText }: IFormFieldProps) => {
  const [formData, setFormData] = useState({});
  /* const [formResponse, setFormResponse] = useState(); */

  const handleFormSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
    } catch (e) {}
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <form>
      {formFields.map((field) => {
        return (
          (field.fieldType === "input" && (
            <label key={uuid4()}>
              {field.fieldKey}
              <input
                name={field.fieldKey}
                value={field.fieldValue}
                onChange={handleInputChange}
              />
            </label>
          )) ||
          (field.fieldType === "textarea" && (
            <label>
              <textarea
                name={field.fieldKey}
                value={field.fieldValue}
              ></textarea>
            </label>
          ))
        );
      })}
      <button>{buttonText}</button>
    </form>
  );
};
