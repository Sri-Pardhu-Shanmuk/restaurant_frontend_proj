import React from "react";
import "./heroSectioncss.css";

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1>Welcome to Our Restaurant</h1>
        <p>
          Experience the best dining with us. Delicious food, cozy atmosphere, and
          excellent service.
        </p>
        <div className="t-buttons">
          <button className="menu-button" onClick={() => {
                            document.getElementById("menu").scrollIntoView({
                            behavior: "smooth"
                            });
                        }}>View Menu</button>
          <button className="bt-button" onClick={() => {
                            document.getElementById("booking").scrollIntoView({
                            behavior: "smooth"
                            });
                        }}>Book Table</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

