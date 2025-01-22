//Sonstiges
import React, { useState } from "react";
import './Home.css';

const Startseite = () => {
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
    </div>
);
}

export default Startseite;