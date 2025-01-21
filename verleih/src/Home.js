// src/Startseite.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Ändere useHistory zu useNavigate
import './Home.css';

const Startseite = () => {
  const navigate = useNavigate(); // Verwende useNavigate statt useHistory

  const handleClick = (route) => {
    navigate(route);  // Verwende navigate statt history.push
  };

  return (
    <div className="startseite-container">
         <img 
        src="/Logo.png" // Pfad zum Bild im public-Ordner
        alt="Logo"
        className="logo" // Optional: Für weiteres Styling
      />
      <h1>Willkommen bei unserem Anhängerverleih!</h1>
      <p>Wählen Sie eine der folgenden Optionen:</p>
      <div className="kachel-container">
        <div className="kachel" onClick={() => handleClick('/rueckgabe')}>
          <h2>Rückgabe</h2>
        </div>
        <div className="kachel" onClick={() => handleClick('/mieten')}>
          <h2>Mieten</h2>
        </div>
        <div className="kachel" onClick={() => handleClick('/sonstiges')}>
          <h2>Sonstiges</h2>
        </div>
      </div>
      <footer className="footer">
        <ul>
          <li><a href="/impressum">Impressum</a></li>
          <li><a href="/agb">AGB</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default Startseite;
