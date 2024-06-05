import "./styles.css";

const Dropdown = ({ label, teams, required = false, value, name, onAltered }) => {
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    onAltered(name, selectedValue);
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
