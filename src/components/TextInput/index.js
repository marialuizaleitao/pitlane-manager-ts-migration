import React from "react";
import "./styles.css";

const TextInput = ({
  label,
  placeholder,
  required = false,
  value,
  onAltered,
  name,
}) => {
  const handleChange = (event) => {
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
