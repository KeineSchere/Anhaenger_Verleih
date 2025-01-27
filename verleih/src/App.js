//Use in Firefox Chrome is shit
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';      
import AGB from './Agb.js';       
import Register from './register.js';
import Impressum from './Impressum.js';
import Home from './Home.js';
import Rueckgabe from './Rueckgabe_mieter.js';
import Rueckgabe_Ver from './Rueckgabe_vermieter.js';
import Mieten from './Mieten.js';
import Sonstiges from './Sonstiges.js';
import Zubehoer from './zubehoer.js';
import Einstellungen from './Einstellungen.js';
import Kasse from './Kasse.js';
import NotFound from './NotFound.js'
import Vermietet_Dashboard from './Vermietet_Dashboard.js';
import Einstellungen_intern from './einstellungen_intern.js'

function App() {
  return (
    <Router>
      <div>

        {/* Routen definieren */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/agb" element={<AGB />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/home" element={<Home />} />
          <Route path="/rueckgabe" element={<Rueckgabe />} />  
          <Route path="/rueckgabe_intern" element={<Rueckgabe_Ver />} />  
          <Route path="/mieten" element={<Mieten />} />
          <Route path="/mieten/zubehoer" element={<Zubehoer />} />
          <Route path="/mieten/kasse" element={<Kasse />} />
          <Route path="/einstellungen" element={<Einstellungen />} />
          <Route path="/sonstiges" element={<Sonstiges />} />
          {/*Mitarbeiter Ansich*/}
          <Route path="/rueckgabe_intern" element={<Rueckgabe_Ver />} />
          <Route path="/vermietet" element={<Vermietet_Dashboard />} />
          <Route path="/einstellungen_intern" element={<Einstellungen_intern />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;