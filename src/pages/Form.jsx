import React, { useState } from "react";

function Form() {
  const [birthYear, setBirthYear] = useState();
  const [age, setAge] = useState();

  const handleChange = (e) => {
    setBirthYear(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    setAge(age);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 129px)",
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
        color: "white",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ marginBottom: "32px" }}>Age Calculator</h1>
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px" }}>
          <input
            type="number"
            name="birthYear"
            value={birthYear}
            onChange={handleChange}
          />
          <button type="submit">Get Age</button>
        </form>
        {age && <h2 style={{ marginTop: "32px" }}>Age: {age}</h2>}
      </div>
    </div>
  );
}

export default Form;
