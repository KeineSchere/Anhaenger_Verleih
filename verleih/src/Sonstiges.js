//Sonstiges
import React, { useState } from "react";
import Footer from'./footer.js';
import './CSS/Sonstiges.css';
import Sidebar from "./Sidebar.js";

const Startseite = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
      };

return (
    <div>
    <Sidebar/>
    <div className="APP">
      <img src="./meme2.png" className="down_image"/>
      </div>
      <Footer />
    </div>
);
}

export default Startseite;