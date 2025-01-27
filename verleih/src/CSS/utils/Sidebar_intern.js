import React, { useState } from "react";
import './CSS/Sidebar.css';

const Sidebar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => 
    {
        setSidebarOpen(!isSidebarOpen);
    };
    return(
        <div>
      {/* Button zum Öffnen/Schließen der Seitenleiste */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Seitenleiste */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <nav>
          <ul>
            <li></li>
            <dev className="sidebar_value">
            <li><a href="/vermietet">Home</a></li>
            <li><a href="/sonstiges">Sonstiges</a></li>
            <li><a href="/einstellungen_intern">Einstellungen</a></li>
            <li><a href="/Home">Kunden POV</a></li>
            <li>-----------</li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
            </dev>
          </ul>
        </nav>
      </div>
      </div>
    );
};
export default Sidebar;