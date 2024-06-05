import "./styles.css";

const Team = (team) => {
  return (
    <section className="team" style={{ backgroundColor: team.secondaryColor }}>
      <h3 style={{ borderColor: team.primaryColor }}>{team.name}</h3>
    </section>
  );
};

export default Team;
