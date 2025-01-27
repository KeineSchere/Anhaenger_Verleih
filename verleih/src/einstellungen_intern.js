import React, { useState } from 'react';
import './CSS/Einstellungen.css';
import Footer from './CSS/utils/footer';
import Sidebar from './CSS/utils/Sidebar_intern';

function App() {
  const [formData, setFormData] = useState({
    companyName: '',
    firstName: '',
    lastName: '',
    street: '',
    postalCode: '',
    city: '',
    phone: '',
    email: '',
    idNumber: '',
    licenseNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="App">
    <Sidebar/>
      <h1>Persönliche Daten</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Firma / Name / Vorname:</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Straße & Hausnummer:</label>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Postleitzahl & Ort:</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Telefon / E-Mail-Adresse:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Daten speichern</button>
      </form>
      <Footer/>
    </div>
  );
}

export default App;