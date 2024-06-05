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
  const onSave = (event) => {
    event.preventDefault();
    console.log("Form was submitted.");
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Fill in the data to create the personnel’s card.</h2>
        <TextInput required label="Name" placeholder="Enter the name" />
        <TextInput required label="Role" placeholder="Enter the role" />
        <TextInput label="Image" placeholder="Provide the image address" />
        <Dropdown required label="Team" values={teams} />
        <Button label="Create card" />
      </form>
    </section>
  );
};

export default Form;
