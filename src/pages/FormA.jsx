import React, { useState } from "react";

function FormA() {
  const initialFormState = {
    name: "",
    age: 0,
    city: "",
  };

  const [formValues, setFormValues] = useState(() => initialFormState);

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name: ${formValues.name}, Agr: ${formValues.age}, City: ${formValues.city}`
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "16px" }}
    >
      <label>
        Enter your name:
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your age:
        <input
          type="number"
          name="age"
          value={formValues.age}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your name:
        <input
          type="text"
          name="city"
          value={formValues.city}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}

export default FormA;
