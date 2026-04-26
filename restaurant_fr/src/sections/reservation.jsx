import React, { useRef } from "react";
import "./reservationcss.css";

const Booking = () => {
  const dateRef = useRef(null);
  const timeRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form[0].value;
    const date = form[1].value;
    const time = form[2].value;
    const guests = form[3].value;

    const message = `Table Booking Request:
Name: ${name}
Date: ${date}
Time: ${time}
Guests: ${guests}`;

    const phoneNumber = "8074505354"; 

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="booking" id="booking">
      <div className="booking-container">

        <div className="booking-content">
          <h1>Book a Table</h1>
          <p>
            Reserve your table in advance and enjoy a seamless dining experience.
          </p>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>

          <input type="text" placeholder="Your Name" required />

          <input
            type="date"
            ref={dateRef}
            onClick={() => dateRef.current.showPicker()}
            required
          />

          <input
            type="time"
            ref={timeRef}
            onClick={() => timeRef.current.showPicker()}
            required
          />

          <input
            type="number"
            placeholder="Number of Guests"
            min="1"
            max="20"
            required
          />

          <button type="submit">Book Now</button>

        </form>
      </div>
    </section>
  );
};

export default Booking;