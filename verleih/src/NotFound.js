import React from 'react';
import './CSS/NotFound.css';
import Footer from './CSS/utils/footer';
import Sidebar from './CSS/utils/Sidebar';

const NotFound = () => {
  return (
    <div>
        <Sidebar/>
    <div className="not-found-container">
      <h1>Seite nicht gefunden ):</h1>
      <p1>Dafür aber ein SAP Meme!</p1>
      <br/>
      <img src='./meme.png' alt="Meme" className="meme-image" />
    </div>
    <Footer/>
    </div>
  );
};

export default NotFound;