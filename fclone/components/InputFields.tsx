import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";

type InputFieldType = InputHTMLAttributes<HTMLInputElement> & {
  label: String;
  name: String;
  placeholder: String;
};

const InputFields: React.FC<InputFieldType> = (props) => {
  const [field, { error }] = useField(props);

  return (
    <div>
      <label
        htmlFor={field.name}
        className="font-semibold block pt-2 text-gray-900"
      >
        {props.label}
      </label>
      <input
        className="p-2 border rounded-md w-72"
        {...field}
        {...props}
        id={field.name}
        placeholder={props.placeholder}
      />
      {error ? (
        <div className="text-sm text-red-600 font-semibold">{error}</div>
      ) : null}
    </div>
  );
};

export default InputFields;
