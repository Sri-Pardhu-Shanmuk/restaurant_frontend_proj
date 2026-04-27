import React, { useRef } from "react";
import "./reservationcss.css";

const Booking = () => {
  const dateRef = useRef(null);
  const timeRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const date = form.date.value;
    const time = form.time.value;
    const guests = form.guests.value;

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

          <div className="input-group">
            <label>Your Name</label>
            <input type="text" name="name" required />
          </div>

          <div className="input-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              ref={dateRef}
              onClick={() => dateRef.current.showPicker()}
              required
            />
          </div>

          <div className="input-group">
            <label>Time</label>
            <input
              type="time"
              name="time"
              ref={timeRef}
              onClick={() => timeRef.current.showPicker()}
              required
            />
          </div>

          <div className="input-group">
            <label>Number of Guests</label>
            <input
              type="number"
              name="guests"
              min="1"
              max="20"
              required
            />
          </div>

          <button type="submit">Book Now</button>

        </form>
      </div>
    </section>
  );
};

export default Booking;