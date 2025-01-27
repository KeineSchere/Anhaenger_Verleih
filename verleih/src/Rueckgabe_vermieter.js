import React, { useState } from 'react';
import './CSS/Rueckgabe.css';
import Sidebar from './CSS/utils/Sidebar_intern';

const RueckgabeVermieter = () => {
  const [zustandBestätigung, setZustandBestätigung] = useState('');
  const [schadenStatus, setSchadenStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Rückgabeprotokoll für den Vermieter wurde abgeschlossen!');
  };

  return (
    <div>
    <Sidebar/>
    <div className="rueckgabe-container">
      <h1>Rückgabeprotokoll für PKW-Anhänger</h1>
    
      <div className="Inputs">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Vermieter Name:</label>
            <textarea
              value=""
              readOnly
              placeholder="Vermieter Name" 
            />
          </div>

          <div>
            <label>Adresse:</label>
            <textarea 
              value="" 
              readOnly
              placeholder="Adresse des Vermieters"
            />
          </div>

          <div>
            <label>Telefon:</label>
            <textarea 
              value=""
              readOnly
              placeholder="Telefonnummer" 
            />
          </div>

          <div>
            <label>E-Mail:</label>
            <textarea
              value=""
              readOnly
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
    </div>
  );
};

export default RueckgabeVermieter;
