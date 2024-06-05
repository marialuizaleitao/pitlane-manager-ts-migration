import { useState } from "react";
import Dropdown from "../Dropdown";
import TextInput from "../TextInput";
import Button from "../Button";
import "./styles.css";

const teams = [
  "Ferrari",
  "Mercedes",
  "McLaren",
  "Red Bull",
  "Alpine",
  "Aston Martin",
  "Sauber",
];

const Form = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const onSave = (event) => {
    event.preventDefault();
    console.log("Form was submitted.");
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Fill in the data to create the personnel’s card.</h2>
        <TextInput
          required
          label="Name"
          placeholder="Enter the name"
          value={name}
          onAltered={(value) => setName(value)}
        />
        <TextInput
          required
          label="Role"
          placeholder="Enter the role"
          value={role}
          onAltered={(value) => setRole(value)}
        />
        <TextInput
          label="Image"
          placeholder="Provide the image address"
          value={image}
          onAltered={(value) => setImage(value)}
        />
        <Dropdown
          required
          label="Team"
          teams={teams}
          value={team}
          onAltered={(team) => setTeam(team)}
        />
        <Button label="Create card" />
      </form>
    </section>
  );
};

export default Form;
