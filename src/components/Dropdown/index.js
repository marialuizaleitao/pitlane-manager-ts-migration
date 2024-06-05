import "./styles.css";

const Dropdown = ({ label, teams, required = false, value, onChange }) => {
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <div className="dropdown">
      <label>{label}</label>
      <select onChange={handleChange} required={required} value={value}>
        {teams.map((team) => (
          <option key={team}>{team}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
