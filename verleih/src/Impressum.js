import React, { useState } from 'react';
import './CSS/Impressum.css';  // Optional: Styling für die AGB-Seite
import Sidebar from './CSS/utils/Sidebar';
import Footer from './CSS/utils/footer';

const AGB = () => {
  return (
    <div>
      <Sidebar/>
    <div className="agb-container">
      <h1>Impressum</h1>
      <div className="agb-content">
        <p>Muster Anhängervermietung
        <br />Musterstraße 1, 
        <br />D-12345
        <br />Tel. 0123/123456789
        <br />info@anhängerverleih.de
        <br /> Stand: Januar 2025</p>
      </div>
      <Footer/>
    </div>
    </div>
  );
};

export default AGB;
