import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    option1: '',
    option2: '',
    checkbox: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const formDataString = JSON.stringify(formData);
    // const newWindow = window.open('', '_blank');
    // newWindow.document.write(`<pre>${formDataString}</pre>`);
    console.log(formData);
  };

  return (
    <div className="App">
      <h1>Signup Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Yes</label>
          <input
            type="radio"
            name="option1"
            value="option1"
            checked={formData.option1 === 'option1'}
            onChange={handleChange}
          />
     
        </div>
        <div className="form-group">
          <label>No</label>
          <input
            type="radio"
            name="option2"
            value="option2"
            checked={formData.option2 === 'option2'}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
          />
          <label>terms and conditions</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
