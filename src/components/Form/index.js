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
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    image: "",
    team: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSave = (event) => {
    event.preventDefault();
    console.log("Form was submitted.", formData);
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Fill in the data to create the personnel’s card.</h2>
        <TextInput
          required
          label="Name"
          placeholder="Enter the name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextInput
          required
          label="Role"
          placeholder="Enter the role"
          name="role"
          value={formData.role}
          onChange={handleChange}
        />
        <TextInput
          label="Image"
          placeholder="Provide the image address"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
        <Dropdown
          required
          label="Team"
          teams={teams}
          name="team"
          value={formData.team}
          onChange={handleChange}
        />
        <Button label="Create card" />
      </form>
    </section>
  );
};

export default Form;
