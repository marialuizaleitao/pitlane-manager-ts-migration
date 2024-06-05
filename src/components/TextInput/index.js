import "./styles.css";

const TextInput = ({ label, placeholder, required = false, value, onAltered }) => {
  
  const onTyped = (event) => {
    onAltered(event.target.value);
  };

  return (
    <div className="text-input">
      <label>{label}</label>
      <input
        value={value}
        onChange={onTyped}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
