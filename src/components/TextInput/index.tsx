import React, { ChangeEvent } from "react";
import "./styles.css";

interface TextInputProps {
  label: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onAltered: (name: string, value: string) => void;
  name: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  required = false,
  value,
  onAltered,
  name,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const typedValue = event.target.value;
    onAltered(name, typedValue);
  };

  return (
    <div className="text-input">
      <label>{label}</label>
      <input
        value={value}
        onChange={handleChange}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
