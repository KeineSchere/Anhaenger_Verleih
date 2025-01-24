import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Zubehoer.css';

import Sidebar from './Sidebar';
import Footer from './footer';

const Zubehoer = () => {
  const initialZubehoerListe = [
    { name: 'Spanngurte', selected: false, quantity: 0 },
    { name: 'Diebstahlsicherung', selected: false, quantity: 0 },
    { name: 'Seilwinde & Kurbel', selected: false, quantity: 0 },
    { name: 'Adapter 7/13 polig', selected: false, quantity: 0 },
    { name: 'Hebel f. Hydraulikpumpe', selected: false, quantity: 0 },
    { name: 'Sonstige', selected: false, quantity: 0, customText: '' }
  ];

  const [zubehoerListe, setZubehoerListe] = useState(initialZubehoerListe);
  const navigate = useNavigate();

  const handleCheckboxChange = (index) => {
    const newZubehoerListe = [...zubehoerListe];
    newZubehoerListe[index].selected = !newZubehoerListe[index].selected;
    setZubehoerListe(newZubehoerListe);
  };

  const handleQuantityChange = (index, value) => {
    const newZubehoerListe = [...zubehoerListe];
    newZubehoerListe[index].quantity = value;
    setZubehoerListe(newZubehoerListe);
  };

  const handleCustomTextChange = (index, value) => {
    const newZubehoerListe = [...zubehoerListe];
    newZubehoerListe[index].customText = value;
    setZubehoerListe(newZubehoerListe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Zubehör:', zubehoerListe.filter(item => item.selected));
    navigate('/mieten/kasse'); // Weiterleiten zur Kasse-Seite
  };

  return (
    <div>
      <Sidebar />
      <div className="zubehoer-container">
        <h1>Anhänger Zubehör</h1>
        <form onSubmit={handleSubmit}>
          <ul>
            {zubehoerListe.map((item, index) => (
              <li key={index} className="zubehoer-item">
                <label>
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  {item.name}
                </label>
                {item.selected && item.name !== 'Sonstige' && (
                  <input
                    type="number"
                    min="0"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(index, e.target.value)}
                    className="quantity-input"
                  />
                )}
                {item.selected && item.name === 'Sonstige' && (
                  <input
                    type="text"
                    value={item.customText}
                    placeholder="Bitte geben Sie weitere Angaben ein"
                    onChange={(e) => handleCustomTextChange(index, e.target.value)}
                    className="custom-text-input"
                  />
                )}
              </li>
            ))}
          </ul>
          <button type="submit" className="weiter-button">Weiter</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Zubehoer;