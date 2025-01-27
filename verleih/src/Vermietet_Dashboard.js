import React, { useState, Link } from "react";
import "./CSS/Mieten.css";
import { useNavigate } from "react-router-dom";
import Footer from "./CSS/utils/footer";
import Sidebar from "./CSS/utils/Sidebar_intern";

const App = () => {
    const [selectedTrailer, setSelectedTrailer] = useState(null);
    const navigate = useNavigate();
  
    const trailers = [
      {
        id: 1,
        name: "Kleinanhänger",
        plate: "LDK-1234",
        description: "Perfekt für kleine Transporte wie Möbel oder Gartenabfälle.",
        details: "Maße: 2m x 1.2m, max. Gewicht: 750kg",
        image: "A1.png",
      },
      {
        id: 2,
        name: "Großanhänger",
        plate: "LDK-5678",
        description: "Ideal für große Transporte wie Baustoffe oder Maschinen.",
        details: "Maße: 4m x 2m, max. Gewicht: 2000kg",
        image: "A2.png",
      },
      {
        id: 3,
        name: "Autoanhänger",
        plate: "LDK-9012",
        description: "Geeignet für den Transport von Fahrzeugen.",
        details: "Maße: 5m x 2.5m, max. Gewicht: 2500kg",
        image: "A3.png",
      },
    ];
  
    const handleRentButtonClick = () => {
      setSelectedTrailer(selectedTrailer);
      navigate("/Rueckgabe_intern");
    };
  
    return (
      <div>
        <Sidebar/>
        <div className="rueckgabe-container">
          <h1>Vermietete Anhänger</h1>
          <div className="anhänger-container">
            {trailers.map((trailer) => (
              <div
                key={trailer.id}
                className="kachel"
                onClick={() => setSelectedTrailer(trailer)}
              >
                <h2>{trailer.name}</h2>
                <h2>{trailer.plate}</h2>
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
                alt={selectedTrailer.name}
              />
              <p>{selectedTrailer.description}</p>
              <button
                className="submit-button"
                onClick={handleRentButtonClick}
              >
                Rücknahme
              </button>
              <button
                className="close"
                onClick={() => setSelectedTrailer(null)}
              >
                Schließen
              </button>
            </div>
          )}
          <Footer/>
        </div>
        </div>
      );
    };
    
    export default App;