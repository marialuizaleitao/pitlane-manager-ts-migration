import React, { useState } from "react";
import Dropdown from "../Dropdown";
import TextInput from "../TextInput";
import Button from "../Button";
import "./styles.css";

interface FormData {
  name: string;
  role: string;
  image: string;
  team: string;
}

interface FormProps {
  onPersonnelRegistered: (personnel: FormData) => void;
  teams: string[];
}

const Form: React.FC<FormProps> = ({ onPersonnelRegistered, teams }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    role: "",
    image: "",
    team: "",
  });

  const handleChange = (name: string, inputValue: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const onSave = (event: React.FormEvent<HTMLFormElement>) => {
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
          onAltered={handleChange}
        />
        <TextInput
          required
          label="Role"
          placeholder="Enter the role"
          name="role"
          value={formData.role}
          onAltered={handleChange}
        />
        <TextInput
          label="Image"
          placeholder="Provide the image address"
          name="image"
          value={formData.image}
          onAltered={handleChange}
        />
        <Dropdown
          required
          label="Team"
          teams={teams}
          name="team"
          value={formData.team}
          onAltered={handleChange}
        />
        <Button label="Create card" />
      </form>
    </section>
  );
};

export default Form;
