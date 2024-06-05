import Personnel from "../Personnel";
import "./styles.css";

const Team = ({ name, primaryColor, secondaryColor, staff }) => {
  const css = { backgroundColor: secondaryColor };

  return (
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
  );
};

export default Team;
