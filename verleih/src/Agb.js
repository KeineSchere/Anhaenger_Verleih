import React, { useState } from 'react';
import './CSS/Agb.css';  // Optional: Styling für die AGB-Seite
import Sidebar from './CSS/utils/Sidebar';
import Footer from './CSS/utils/footer';

const AGB = () => {
  return (
    <div>
      <Sidebar/>
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
      <Footer/>  
    </div>
    </div>
  );
};

export default AGB;
