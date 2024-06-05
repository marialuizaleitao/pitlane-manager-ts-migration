import "./styles.css";

const Dropdown = ({ label, values, required = false }) => {
  return (
    <div className="dropdown">
      <label>{label}</label>
      <select required={required}>
        {values.map((value) => (
          <option key={value}>{value}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
