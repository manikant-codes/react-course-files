import React, { useState } from "react";

function AgeCalculator() {
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
    <div className="demoContainer">
      <div className="demoWrapper" style={{ flexDirection: "column" }}>
        <h2 style={{ marginBottom: "32px" }}>Age Calculator</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px" }}>
          <input
            type="number"
            name="birthYear"
            value={birthYear}
            placeholder="Birth year e.g. 1992"
            onChange={handleChange}
          />
          <button type="submit">Get Age</button>
        </form>
        {age && (
          <p style={{ marginTop: "16px", fontSize: "1.5rem" }}>Age: {age}</p>
        )}
      </div>
    </div>
  );
}

export default AgeCalculator;
