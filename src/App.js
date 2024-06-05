import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {
  const teams = [
    {
      name: "Ferrari",
      primaryColor: "#A6051A",
      secondaryColor: "rgba(241, 97, 101, 0.15)",
    },
    {
      name: "Mercedes",
      primaryColor: "#00A19C",
      secondaryColor: "rgba(0, 161, 156, 0.15)",
    },
    {
      name: "McLaren",
      primaryColor: "#FF8A29",
      secondaryColor: "rgba(255, 138, 41, 0.15)",
    },
    {
      name: "Red Bull",
      primaryColor: "#041E42",
      secondaryColor: "rgba(232, 255, 255)",
    },
    {
      name: "Alpine",
      primaryColor: "#FD4BC7",
      secondaryColor: "rgba(220, 110, 190, 0.15)",
    },
    {
      name: "Aston Martin",
      primaryColor: "#00352F",
      secondaryColor: "rgba(0, 200, 111, 0.15)",
    },
    {
      name: "Sauber",
      primaryColor: "#51E351",
      secondaryColor: "rgba(233, 255, 227)",
    },
  ];

  const [staff, setStaff] = useState([]);

  const onAddedPersonnel = (personnel) => {
    setStaff([...staff, personnel]);
  };

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)}
        onPersonnelRegistered={(personnel) => onAddedPersonnel(personnel)}
      />
      {teams.map((team) => (
        <Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
        />
      ))}
    </div>
  );
}

export default App;
