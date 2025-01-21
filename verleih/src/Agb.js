import React, { useState } from 'react';
import './Agb.css';  // Optional: Styling für die AGB-Seite

const AGB = () => {


  return (
    <div className="agb-container">
      <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>
      <div className="agb-content">
        <p>
           1. Geltungsbereich 
    <br /> Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Geschäftsbeziehungen zwischen dem Anbieter und dem Kunden.
    <br />
    <br /> 2. Haftung
    <br /> Der Anbieter haftet nur für Schäden, die auf vorsätzlichem oder grob fahrlässigem Verhalten beruhen.
    <br />
    <br /> 3. Schlussbestimmungen
    <br /> Ihre Daten werden grundlos erhoben.
    <br />
    <br /> Stand: Januar 2025</p>
      </div>
            {/* Fußzeile außerhalb des Containers */}
            <footer className="footer">
        <ul>
          <li><a href="/impressum">Impressum</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default AGB;
