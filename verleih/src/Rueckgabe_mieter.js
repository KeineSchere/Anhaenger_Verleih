// src/RueckgabeMieter.js
import React, { useState } from 'react';
import './CSS/Rueckgabe_mieter.css';
import Footer from './CSS/utils/footer';
import Sidebar from './CSS/utils/Sidebar';


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
      <Sidebar />
      </div>
    <div className="rueckgabe-container">
      <h1>Rückgabeprotokoll für PKW-Anhänger</h1>

      <h2>Mieter</h2>
      <form onSubmit={handleSubmit}>
        <div className="mieter-info">
          <label>Vollständiger Name:</label>
          <textarea
              value="Max Mustermann" 
              readOnly
              placeholder="Vollständiger Name" 
            />
        </div>

        <div className="mieter-info">
          <label>Adresse:</label>
          <textarea
              value="Musterstraße 123, 12345 Musterstadt"
              readOnly
              placeholder="Adresse" 
            />
        </div>

        <div className="mieter-info">
          <label>Telefonnummer:</label>
          <textarea
              value="000" 
              readOnly
              placeholder="Telefonnummer" 
            />
        </div>

        <div className="mieter-info">
          <label>Führerschein-Nr. / Personalausweis-Nr.:</label>
          <textarea
              value="DE 2084 7284 / 1234567890" 
              readOnly
              placeholder="Führerschein-Nr. / Personalausweis-Nr." 
            />
        </div>
        <h3>Ihre gemieteten Anhänger</h3>
        <div className="anhänger-container1">
          <div className="kachel" onClick={toggleDetails}>
            <h2>Großanhänger</h2>
            <h2>LDK-123-AA</h2>
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
      <Footer/>
    </div>
    </div>
  );
};

export default RueckgabeMieter;
