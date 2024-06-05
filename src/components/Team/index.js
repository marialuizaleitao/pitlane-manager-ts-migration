import Personnel from "../Personnel";
import "./styles.css";

const Team = (team) => {
  return (
    <section className="team" style={{ backgroundColor: team.secondaryColor }}>
      <h3 style={{ borderColor: team.primaryColor }}>{team.name}</h3>
      <Personnel />
    </section>
  );
};

export default Team;
