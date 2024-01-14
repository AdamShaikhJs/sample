import React, { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [errors, setErrors] = useState([]);

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'name':
        if (/^[a-zA-Z\s]+$/.test(event.target.value)) {
          setName(event.target.value);
        }
        break;
      case 'age':
        setAge(event.target.value);
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      name,
      age,
    };

    // Validate the user input
    if (!name) {
      setErrors(['Please enter your name.']);
      return;
    }

    if (!age) {
      setErrors(['Please enter your age.']);
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your name"
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Your age"
        onChange={handleChange}
      />
      <input type="submit" value="Submit" />
      {errors.map((error, index) => (
        <p key={index}>{error}</p>
      ))}
    </form>
  );
}

export default App;
