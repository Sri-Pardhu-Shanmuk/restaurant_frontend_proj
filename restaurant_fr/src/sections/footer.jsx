import React from "react";
import "./footercss.css";
import {FaInstagram, FaFacebook, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <p><a href="#home">Home</a></p>
          <p><a href="#menu">Menu</a></p>
          <p><a href="#contact">Contact</a></p>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>+91 8074505354</p>
          <p>sripardhushanmuk@gmail.com</p>
          <p>Road No. 10, Hyderabad</p>
        </div>

        {/* OPENING HOURS */}
        <div className="footer-section">
          <h3>Opening Hours</h3>
          <p>9:00 am - 2:00 pm</p>
          <p>7:30 pm - 12:00 am</p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">

        <div className="social-icons">
          <span><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></span>
          <span><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></span>
          <span><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></span>
        </div>

        <p>© 2026 Spice&Salt. All rights reserved.</p>

      </div>

    </footer>
  );
};

export default Footer;