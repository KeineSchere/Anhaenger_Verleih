import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Kasse.css';

import Sidebar from './Sidebar';
import Footer from './footer';

const Kasse = () => {
  const [startDatum, setStartDatum] = useState('');
  const [endDatum, setEndDatum] = useState('');
  const [tage, setTage] = useState(0);
  const [zahlungsmethode, setZahlungsmethode] = useState('Kreditkarte'); // Standard-Zahlungsmethode
  const preisProTag = 20; // Fester Preis pro Tag in Euro
  const zubehoerKosten = 20; // Statische Zubehörkosten
  const mwstSatz = 0.19; // 19% MwSt
  const navigate = useNavigate();

  const handleStartDatumChange = (e) => {
    setStartDatum(e.target.value);
    calculateTage(e.target.value, endDatum);
  };

  const handleEndDatumChange = (e) => {
    setEndDatum(e.target.value);
    calculateTage(startDatum, e.target.value);
  };

  const calculateTage = (start, end) => {
    if (start && end) {
      const startDate = new Date(start);
      const endDate = new Date(end);
      const diffTime = Math.abs(endDate - startDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setTage(diffDays);
    }
  };

  const handleZahlungsmethodeChange = (e) => {
    setZahlungsmethode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pop-up anzeigen
    alert('Der Anhänger wurde für Sie gebucht!');
    // Weiterleiten zur Home-Seite
    navigate('/Home');
  };

  const mietkosten = tage * preisProTag;
  const gesamtKostenOhneMwst = mietkosten + zubehoerKosten;
  const mwst = gesamtKostenOhneMwst * mwstSatz;
  const gesamtKosten = gesamtKostenOhneMwst + mwst;

  return (
    <div>
      <Sidebar />
      <div className="kasse-container">
        <h1>Kasse</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="startDatum">Startdatum:</label>
            <input
              type="date"
              id="startDatum"
              value={startDatum}
              onChange={handleStartDatumChange}
              className="datum-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDatum">Enddatum:</label>
            <input
              type="date"
              id="endDatum"
              value={endDatum}
              onChange={handleEndDatumChange}
              className="datum-input"
            />
          </div>
          <div className="form-group">
            <label>Mietdauer (Tage):</label>
            <span className="mietdauer">{tage}</span>
          </div>
          <div className="form-group">
            <label>Preis pro Tag:</label>
            <span className="preis-pro-tag">{preisProTag}€</span>
          </div>
          <div className="form-group">
            <label>Zubehörkosten:</label>
            <span className="zubehoer-kosten">{zubehoerKosten}€</span>
          </div>
          <div className="form-group">
            <label>Gesamtkosten ohne MwSt:</label>
            <span className="gesamt-kosten-ohne-mwst">{gesamtKostenOhneMwst.toFixed(2)}€</span>
          </div>
          <div className="form-group">
            <label>19% MwSt:</label>
            <span className="mwst">{mwst.toFixed(2)}€</span>
          </div>
          <div className="form-group">
            <label>Gesamtkosten:</label>
            <span className="gesamt-kosten">{gesamtKosten.toFixed(2)}€</span>
          </div>
          <div className="form-group">
            <label htmlFor="zahlungsmethode">Zahlungsmethode:</label>
            <select
              id="zahlungsmethode"
              value={zahlungsmethode}
              onChange={handleZahlungsmethodeChange}
              className="zahlungsmethode-select"
            >
              <option value="Kreditkarte">Kreditkarte</option>
              <option value="PayPal">PayPal</option>
              <option value="Überweisung">Überweisung</option>
            </select>
          </div>
          <button type="submit" className="weiter-button">Weiter</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Kasse;