import React from "react";
import "./contactcss.css";

const ContactInfo = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <div className="contact-item">
            <div className="icon">📞</div>
            <div>
              <h3>Phone</h3>
              <p>+91 8074505354</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon">📍</div>
            <div>
              <h3>Address</h3>
              <p>Road No. 10, Jubilee Hills, Hyderabad</p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE (MAP PLACEHOLDER) */}
        <div className="contact-map">
          <div className="map-placeholder">
            <span><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30452.863281228467!2d78.38917188733608!3d17.43059434167204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96cc62a87613%3A0xa8317fa22362be49!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1777108936126!5m2!1sen!2sin" width="100%"
    height="250"
    style={{ border: 0, borderRadius: "16px" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Map"></iframe></span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactInfo;