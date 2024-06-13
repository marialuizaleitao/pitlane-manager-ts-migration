import React from "react";
import "./styles.css";

interface DropdownProps {
 label: string;
 teams: string[];
 required?: boolean;
 value: string;
 name: string;
 onAltered: (name: string, value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
 label,
 teams,
 required = false,
 value,
 name,
 onAltered,
}) => {
 const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const selectedValue = event.target.value;
  onAltered(name, selectedValue);
 };

 return (
  <div className="dropdown">
   <label>{label}</label>
   <select onChange={handleChange} required={required} value={value}>
    <option value={""} />
    {teams.map((team) => (
     <option key={team} value={team}>
      {team}
     </option>
    ))}
   </select>
  </div>
 );
};

export default Dropdown;
