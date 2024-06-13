import React from "react";
import "./styles.css";

interface PersonnelProps {
  name: string;
  role: string;
  image: string;
}

const Personnel: React.FC<PersonnelProps> = ({ name, role, image }) => {
  return (
    <div className="personnel">
      <div className="header">
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
};

export default Personnel;
