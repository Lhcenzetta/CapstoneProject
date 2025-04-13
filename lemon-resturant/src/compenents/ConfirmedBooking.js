import React from "react";
import { useLocation } from "react-router-dom";

function ConfirmedBooking() {
  const location = useLocation();
  const data = location.state; // ✅ Get form data passed via navigate

  if (!data) {
    return (
      <section className="confirmation-page">
        <h1>Booking Not Found</h1>
        <p>No booking data was found. Please go back and submit the form.</p>
      </section>
    );
  }

  return (
    <section className="confirmation-page">
      <h1>🎉 Booking Confirmed!</h1>
      <p>Thank you for your reservation. We look forward to seeing you at Little Lemon!</p>

      <div className="confirmation-message fade-in">
        <h2>🎉 Thank you, {data.name}!</h2>
        <p>Your booking details are as follows:</p>
        <ul>
          <li><strong>Email:</strong> {data.email}</li>
          <li><strong>Date:</strong> {data.date}</li>
          <li><strong>Time:</strong> {data.time}</li>
          <li><strong>Guests:</strong> {data.guests}</li>
        </ul>
        <p style={{ marginTop: "10px", color: "green" }}>
          We can't wait to serve you! 🧑‍🍳🍋
        </p>
      </div>
    </section>
  );
}

export default ConfirmedBooking;
