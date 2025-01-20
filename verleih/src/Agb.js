import React, { useState } from 'react';
import './Agb.css';  // Optional: Styling für die AGB-Seite

const AGB = () => {
  const [agbText] = useState(`
    Allgemeine Geschäftsbedingungen (AGB)

    1. Geltungsbereich
    Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Geschäftsbeziehungen zwischen dem Anbieter und dem Kunden.

    2. Haftung
    Der Anbieter haftet nur für Schäden, die auf vorsätzlichem oder grob fahrlässigem Verhalten beruhen.

    3. Schlussbestimmungen
    Deine Daten werden grundlos erhoben.
    
    Stand: Januar 2025
  `);

  return (
    <div className="agb-container">
      <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>
      <div className="agb-content">
        <p>{agbText}</p>
      </div>
            {/* Fußzeile außerhalb des Containers */}
            <footer className="footer">
        <ul>
          <li><a href="/impressum">Impressum</a></li>
          <li><a href="/agb">AGB</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default AGB;
