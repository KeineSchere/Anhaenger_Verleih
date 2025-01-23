// src/RueckgabeMieter.js
import React, { useState } from 'react';
import './CSS/Rueckgabe_mieter.css';

const RueckgabeMieter = () => {
  // States für die Rückgabe-Protokoll-Daten
  const [name, setName] = useState('');
  const [adresse, setAdresse] = useState('');
  const [telefon, setTelefon] = useState('');
  const [ausweisNr, setAusweisNr] = useState('');
  const [schadenBeschreibung, setSchadenBeschreibung] = useState('');
  const [rueckgabeStatus, setRueckgabeStatus] = useState('');
  const [angemeldeteSchaden, setAngemeldeteSchaden] = useState(false);
  const [unterschrift, setUnterschrift] = useState('');
  const [showAnhängerDetails, setShowAnhängerDetails] = useState(false);  // Steuerung für das Ausklappen
  const [anhängerDetails, setAnhängerDetails] = useState({
    ruecknahmeStatus: 'nicht zurückgenommen',
    schadenStatus: 'keine Schäden',
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Rückgabeprotokoll für den Mieter wurde abgeschickt!');
  };

  const toggleDetails = () => {
    setShowAnhängerDetails(!showAnhängerDetails);
  };

  const handleUnterschriftChange = (e) => {
    setUnterschrift(e.target.value);
  };

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
  }

  return (
    <div>
    <div className="app">
      {/* Button zum Öffnen/Schließen der Seitenleiste */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Seitenleiste */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <nav>
          <ul>
            <li></li>
            <li><a href="home">Home</a></li>
            <li><a href="rueckgabe">Rückgabe</a></li>
            <li><a href="mieten">Mieten</a></li>
            <li><a href="sonstiges">Sonstiges</a></li>
          </ul>
        </nav>
      </div>
      </div>
    <div className="rueckgabe-container">
      <h1>Rückgabeprotokoll für PKW-Anhänger</h1>

      <h2>Mieter</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Vollständiger Name:</label>
          <br /><p1>Max Mustermann</p1>
        </div>

        <div>
          <label>Adresse:</label>
          <br /><p1>Musterstraße 1</p1>
        </div>

        <div>
          <label>Telefonnummer:</label>
          <br /><p1>000</p1>
        </div>

        <div>
          <label>Führerschein-Nr. / Personalausweis-Nr.:</label>
          <br /><p1>DE1213</p1>
        </div>

        <div className="anhänger-container">
          <h3>Ihre gemieteten Anhänger</h3>
          <div className="kachel" onClick={toggleDetails}>
            <h4>Fahrrad-Transport-Anhänger</h4>
            <p2>Klicken für Details</p2>
          </div>

          {showAnhängerDetails && (
            <div className="anhänger-details">
              <p><strong>Rücknahme Status:</strong> {anhängerDetails.ruecknahmeStatus}</p>
              <p><strong>Schaden Status:</strong> {anhängerDetails.schadenStatus}</p>

              {anhängerDetails.schadenStatus !== 'keine Schäden' && (
                <div>
                  <h4>Schäden, die vom Vermieter erfasst wurden:</h4>
                  <textarea 
                    value={schadenBeschreibung} 
                    onChange={(e) => setSchadenBeschreibung(e.target.value)} 
                    placeholder="Bitte beschreiben Sie die Schäden, falls vorhanden"
                  />
                </div>
              )}

              {anhängerDetails.schadenStatus !== 'keine Schäden' && (
                <div>
                  <label>Unterschrift des Mieters:</label>
                  <input 
                    type="text" 
                    value={unterschrift} 
                    onChange={handleUnterschriftChange} 
                    placeholder="Unterschrift des Mieters" 
                    required 
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </form>
      <footer className="footer">
        <ul>
          <li><a href="/impressum">Impressum</a></li>
          <li><a href="/agb">AGB</a></li>
        </ul>
      </footer>
    </div>
    </div>
  );
};

export default RueckgabeMieter;
