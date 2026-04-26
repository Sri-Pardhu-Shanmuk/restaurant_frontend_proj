import React from "react";
import './aboutcss.css';

const About = () => {
  return (
    <div className="about" id="about">

        <div className="about-image">
        <img src="/aboutimg.webp" alt="About Us" />
        </div>

        <div className="about-content">

        <h1>Our Story</h1>
        <p>
            At our restaurant, food is not just served — it’s crafted with intention.

            We blend traditional flavors with modern techniques to create dishes that feel both familiar and elevated. Every ingredient is carefully selected, every plate is thoughtfully presented, and every detail is designed to give you a refined dining experience.

            From intimate dinners to lively gatherings, our space is built to bring people together over exceptional food and warm, understated hospitality.

            <span className="signature">
            -Pardhu Shanmuk
            </span>
        </p>

        </div>
    </div>
  );
}

export default About;