

function Resevation() {
  return (
    <section className="reservation-section">
      <div className="reservation-box">
        <h1 className="reservation-title">Reserve Your Table</h1>
        <p className="reservation-subtext">We look forward to serving you at Little Lemon!</p>

        <form className="reservation-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="e.g. John Doe" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="e.g. john@example.com" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input type="date" id="date" />
            </div>

            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input type="time" id="time" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="guests">Number of Guests</label>
            <input type="number" id="guests" min="1" max="20" placeholder="2" />
          </div>

          <button type="submit" className="reservation-btn">Reserve Table</button>
        </form>
      </div>
    </section>
  );
}

export default Resevation;
