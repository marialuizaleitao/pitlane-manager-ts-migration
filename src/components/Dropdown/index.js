import "./styles.css";

const Dropdown = ({ label, values }) => {
  return (
    <div className="dropdown">
      <label>{label}</label>
      <select>
        {values.map((value) => {
          return <option key={value}>{value}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
