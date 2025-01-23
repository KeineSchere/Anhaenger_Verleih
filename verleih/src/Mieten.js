import React, { useState } from "react";
import "./CSS/Mieten.css";

const App = () => {
    const [selectedTrailer, setSelectedTrailer] = useState(null);
  
    const trailers = [
      {
        id: 1,
        name: "Kleinanhänger",
        description: "Perfekt für kleine Transporte wie Möbel oder Gartenabfälle.",
        details: "Maße: 2m x 1.2m, max. Gewicht: 750kg",
        image: "A1.png",
      },
      {
        id: 2,
        name: "Großanhänger",
        description: "Ideal für große Transporte wie Baustoffe oder Maschinen.",
        details: "Maße: 4m x 2m, max. Gewicht: 2000kg",
        image: "A2.png",
      },
      {
        id: 3,
        name: "Autoanhänger",
        description: "Geeignet für den Transport von Fahrzeugen.",
        details: "Maße: 5m x 2.5m, max. Gewicht: 2500kg",
        image: "A3.png",
      },
    ];
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
      };
  
    return (
      <div>  
        <div className="app">
      {/* Button zum Öffnen/Schließen der Seitenleiste */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Seitenleiste */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <nav>
          <ul>
            <li></li>
            <li><a href="home">Home</a></li>
            <li><a href="rueckgabe">Rückgabe</a></li>
            <li><a href="mieten">Mieten</a></li>
            <li><a href="sonstiges">Sonstiges</a></li>
          </ul>
        </nav>
      </div>
    </div>
      <div className="rueckgabe-container">
        <h1>Anhängerverleih - Mieten</h1>
        <div className="anhänger-container">
          {trailers.map((trailer) => (
            <div
              key={trailer.id}
              className="kachel"
              onClick={() => setSelectedTrailer(trailer)}
            >
            <h2>{trailer.name}</h2>
            </div>
          ))}
        </div>
  
        {selectedTrailer && (
          <div className="anhänger-details">
            <h2>{selectedTrailer.name}</h2>
            <p>{selectedTrailer.details}</p>
            <img
              src={selectedTrailer.image}
              className="details-image"
            />
            <p>{selectedTrailer.description}</p>
            <button
              className="submit-button"
              onClick={() => setSelectedTrailer(selectedTrailer)}
            >
              Mieten
            </button>
            <button
              className="close"
              onClick={() => setSelectedTrailer(null)}
            >
              Schließen
            </button>
          </div>
        )}
        <footer className="footer">
        <ul>
          <li><a href="/impressum">Impressum</a></li>
          <li><a href="/agb">AGB</a></li>
        </ul>
      </footer>
      </div>
      </div>
    );
  };
  
  export default App;