import "./styles.css";

const TextInput = ({ label, placeholder, required = false }) => {
  return (
    <div className="text-input">
      <label>{label}</label>
      <input required={required} placeholder={placeholder} />
    </div>
  );
};

export default TextInput;
