import "./styles.css";

const Dropdown = ({ label, teams, required = false, value, onAltered }) => {
  return (
    <div className="dropdown">
      <label>{label}</label>
      <select
        onChange={(event) => onAltered(event.target.value)}
        required={required}
        value={value}
      >
        {teams.map((team) => (
          <option key={team}>{team}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
