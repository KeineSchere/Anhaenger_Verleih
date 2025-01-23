import React, { useState } from 'react';
import './CSS/Impressum.css';  // Optional: Styling für die AGB-Seite
import Sidebar from './Sidebar';

const AGB = () => {
  return (
    <div>
      <Sidebar/>
    <div className="agb-container">
      <h1>Impressum</h1>
      <div className="agb-content">
        <p>Heinz Huber Anhängervermietung
        <br />Kirchstrasse 6, 
        <br />D-85104 Pförring-Dötting
        <br />Tel. 0176/51571949
        <br />info@fahrrad-transport-anhaenger.de
        <br /> Stand: Januar 2025</p>
      </div>
            {/* Fußzeile außerhalb des Containers */}
            <footer className="footer">
        <ul>
          <li><a href="/agb">AGB</a></li>
        </ul>
      </footer>
    </div>
    </div>
  );
};

export default AGB;
