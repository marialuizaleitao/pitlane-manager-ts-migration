import { useState } from "react";
import Dropdown from "../Dropdown";
import TextInput from "../TextInput";
import Button from "../Button";
import "./styles.css";

const Form = ({ onPersonnelRegistered, teams }) => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    image: "",
    team: "",
  });

  const handleChange = (name, inputValue) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const onSave = (event) => {
    event.preventDefault();
    onPersonnelRegistered(formData);
    // Reset form data after submission
    setFormData({
      name: "",
      role: "",
      image: "",
      team: "",
    });
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
          onAltered={(name, value) => handleChange(name, value)}
        />
        <TextInput
          required
          label="Role"
          placeholder="Enter the role"
          name="role"
          value={formData.role}
          onAltered={(name, value) => handleChange(name, value)}
        />
        <TextInput
          label="Image"
          placeholder="Provide the image address"
          name="image"
          value={formData.image}
          onAltered={(name, value) => handleChange(name, value)}
        />
        <Dropdown
          required
          label="Team"
          teams={teams}
          name="team"
          value={formData.team}
          onAltered={(name, value) => handleChange(name, value)}
        />
        <Button label="Create card" />
      </form>
    </section>
  );
};

export default Form;
