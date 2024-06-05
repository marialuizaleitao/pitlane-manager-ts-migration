import Dropdown from "../Dropdown";
import TextInput from "../TextInput";
import "./styles.css";

const Form = () => {
  const values = [
    "Ferrari",
    "Mercedes",
    "McLaren",
    "Red Bull",
    "Alpine",
    "Aston Martin",
    "Sauber",
  ];

  return (
    <section className="form">
      <form>
        <h2>Fill in the data to create the personnel’s card.</h2>
        <TextInput label="Name" placeholder="Enter the name" />
        <TextInput label="Role" placeholder="Enter the role" />
        <TextInput label="Image" placeholder="Provide the image address" />
        <Dropdown label="Team" values={values} />
      </form>
    </section>
  );
};

export default Form;
