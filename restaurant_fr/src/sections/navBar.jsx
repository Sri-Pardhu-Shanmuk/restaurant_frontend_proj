import React, { useState } from "react";
import './navBarcss.css';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);



    return(
        <nav className="nav-bar">
            <div className="nav-elements">

                <div className="rname">
                    Spice & Salt
                </div>

                {/* HAMBURGER */}
                <div 
                  className={`hamburger ${menuOpen ? "active" : ""}`} 
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li>
                      <button className="bt-button" onClick={() => {
                            document.getElementById("booking").scrollIntoView({
                            behavior: "smooth"
                            });
                        }}>
                        Book Table
                      </button>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar;