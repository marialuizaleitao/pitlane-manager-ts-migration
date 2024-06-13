import React from "react";
import Personnel from "../Personnel";
import "./styles.css";

interface Personnel {
  name: string;
  role: string;
  image: string;
}

interface TeamProps {
  name: string;
  primaryColor: string;
  secondaryColor: string;
  staff: Personnel[];
}

const Team: React.FC<TeamProps> = ({ name, primaryColor, secondaryColor, staff }) => {
  const css = { backgroundColor: secondaryColor };

  return staff.length > 0 ? (
    <section className="team" style={css}>
      <h3 style={{ borderColor: primaryColor }}>{name}</h3>
      <div className="staff">
        {staff.map((personnel) => (
          <Personnel
            key={personnel.name}
            name={personnel.name}
            role={personnel.role}
            image={personnel.image}
          />
        ))}
      </div>
    </section>
  ) : null;
};

export default Team;
