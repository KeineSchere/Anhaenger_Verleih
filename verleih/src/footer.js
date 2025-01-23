import React, { useState } from 'react';
import './CSS/footer.css';  // Optional: Styling für die AGB-Seite

const footer = () => {
  return (
        <div>
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

export default footer;
