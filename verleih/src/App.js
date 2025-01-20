import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';      // Startseiten-Komponente
import AGB from './Agb.js';       // AGB-Komponente
import Register from './register.js';

function App() {
  return (
    <Router>
      <div>

        {/* Routen definieren */}
        <Routes>
          <Route path="/login" element={<Login />} /> {/* Startseite */}
          <Route path="/agb" element={<AGB />} /> {/* AGB-Seite */}
          <Route path="/register" element={<Register />} /> {/* AGB-Seite */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;