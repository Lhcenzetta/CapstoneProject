import { useState } from "react";


function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [checkSubmit, setCheckSubmit] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    setCheckSubmit(true);
    setSubmittedData({
      name,
      email,
      date,
      time,
      guests,
    });
    cleanForm();
  };

  const cleanForm = () => {
    setName("");
    setEmail("");
    setDate("");
    setTime("");
    setGuests("");
  };

  return (
    <section className="reservation-section">
      <div className="reservation-box">
        <h1 className="reservation-title">Reserve Your Table</h1>
        <p className="reservation-subtext">
          We look forward to serving you at Little Lemon!
        </p>

        <form onSubmit={handleSubmit} className="reservation-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              id="name"
              placeholder="e.g. John Doe"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. john@example.com"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="guests">Number of Guests</label>
            <input
              type="number"
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              min="1"
              max="20"
              placeholder="2"
              required
            />
          </div>

          <button type="submit" className="reservation-btn">
            Reserve Table
          </button>
        </form>

        {/* Confirmation Message with animation */}
        {checkSubmit && submittedData && (
  <div className="confirmation-message fade-in">
    <h2>🎉 Thank you for your reservation!</h2>
    <p>Welcome, Mr./Ms. <strong>{submittedData.name}</strong> 👋</p>
    <p>Your booking details are as follows:</p>
    <ul>
      <li><strong>Email:</strong> {submittedData.email}</li>
      <li><strong>Date:</strong> {submittedData.date}</li>
      <li><strong>Time:</strong> {submittedData.time}</li>
      <li><strong>Guests:</strong> {submittedData.guests}</li>
    </ul>
    <p style={{ marginTop: "10px", color: "green" }}>We can't wait to serve you! 🧑‍🍳🍋</p>
  </div>
)}

      </div>
    </section>
  );
}

export default BookingForm;
