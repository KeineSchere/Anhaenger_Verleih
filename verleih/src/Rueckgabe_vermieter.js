import React, { useState } from 'react';
import './Rueckgabe.css';

const RueckgabeVermieter = () => {
  const [vermieterName, setVermieterName] = useState('');
  const [adresse, setAdresse] = useState('');
  const [telefon, setTelefon] = useState('');
  const [email, setEmail] = useState('');
  const [zustandBestätigung, setZustandBestätigung] = useState('');
  const [schadenStatus, setSchadenStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Rückgabeprotokoll für den Vermieter wurde abgeschlossen!');
  };

  return (
    <div className="rueckgabe-container">
      <h1>Rückgabeprotokoll für PKW-Anhänger</h1>
    
      <div className="Inputs">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Vermieter Name:</label>
            <textarea
              value={vermieterName} 
              onChange={(e) => setVermieterName(e.target.value)} 
              placeholder="Vermieter Name" 
            />
          </div>

          <div>
            <label>Adresse:</label>
            <textarea 
              value={adresse} 
              onChange={(e) => setAdresse(e.target.value)} 
              placeholder="Adresse des Vermieters"
            />
          </div>

          <div>
            <label>Telefon:</label>
            <textarea 
              value={telefon} 
              onChange={(e) => setTelefon(e.target.value)} 
              placeholder="Telefonnummer" 
            />
          </div>

          <div>
            <label>E-Mail:</label>
            <textarea
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="E-Mail Adresse" 
            />
          </div>
        </form>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="rueckgabe-status">
          <h3>Bestätigung der Rückgabe</h3>
          <label>
            <input 
              type="radio" 
              name="zustandBestätigung" 
              value="ja" 
              onChange={() => setZustandBestätigung('ja')} 
              checked={zustandBestätigung === 'ja'}
            />
            Anhänger wurde in ordnungsgemäßem Zustand zurückgegeben
          </label>
          
          <label>
            <input 
              type="radio" 
              name="zustandBestätigung" 
              value="nein" 
              onChange={() => setZustandBestätigung('nein')} 
              checked={zustandBestätigung === 'nein'}
            />
            Es gab Mängel oder Schäden
          </label>

          {zustandBestätigung === 'nein' && (
            <div>
              <textarea 
                className="resizable"
                value={schadenStatus} 
                onChange={(e) => setSchadenStatus(e.target.value)} 
                placeholder="Bitte beschreiben Sie die Schäden oder Mängel"
              />
            </div>
          )}
        </div>

        <div className="unterschriften">
          <div>
            <input type="text" placeholder="Ort, Datum" />
            <input type="text" placeholder="Unterschrift" />
          </div>
        </div>

        <button type="submit" className="submit-button">Rückgabe abschließen</button>
      </form>

      <footer className="footer">
        <ul>
          <li><a href="/impressum">Impressum</a></li>
          <li><a href="/agb">AGB</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default RueckgabeVermieter;
