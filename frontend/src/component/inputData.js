import React, { useState } from "react";

const InputData = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const query =
      "INSERT INTO person VALUES ( " +
      id +
      ", " +
      name +
      ", " +
      age +
      ", " +
      gender +
      " )";
    const encodedQuery = encodeURIComponent(query);
    const url = `http://localhost:5000/insert?query=${encodedQuery}`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    })
      .then((r) => r.json())
      .then((data) => console.log(data))
      .catch();
  };

  return (
    <form onSubmit={handleSubmit}>
      <br></br>
      <label>Id </label>
      <input
        type="text"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <br />
      <label>Name </label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <label>Age </label>
      <input
        type="text"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <br />
      <label>Gender </label>
      <input
        type="text"
        value={gender}
        onChange={(e) => {
          setGender(e.target.value);
        }}
      />
      <button>Submit</button>
    </form>
  );
};

export default InputData;
