import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";

function App() {

  const [staff, setStaff] = useState([])

  const onAddedPersonnel = (personnel) => {
    setStaff([...staff, personnel]);
  } 

  return (
    <div className="App">
      <Banner />
      <Form
        onPersonnelRegistered={(personnel) => onAddedPersonnel(personnel)}
      />
    </div>
  );
}

export default App;
