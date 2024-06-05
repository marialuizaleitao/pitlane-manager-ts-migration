import Personnel from "../Personnel";
import "./styles.css";

const Team = (team) => {
  const css = { backgroundColor: team.secondaryColor };

  return (
    <section className="team" style={css}>
      <h3 style={{ borderColor: team.primaryColor }}>{team.name}</h3>
      <div className="staff">
        {team.staff.map((personnel) => (
          <Personnel
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
