import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {
  const [staff, setStaff] = useState([]);

  const onAddedPersonnel = (personnel) => {
    setStaff([...staff, personnel]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        onPersonnelRegistered={(personnel) => onAddedPersonnel(personnel)}
      />
      <Team name="Ferrari" />
      <Team name="Mercedes" />
      <Team name="McLaren" />
    </div>
  );
}

export default App;
