import "./ContactUs.css";
const ContactUs = (props) => {
  return (
    <>
      <div className="contact-container">
        <h2>Contact Us</h2>
        <div className="contact-content">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <div className="contact-info">
            <h3>Our Address</h3>
            <p>123 Fitness Street</p>
            <p>City, State, Country</p>
            <h3>Contact Details</h3>
            <p>Email: info@fitnessapp.com</p>
            <p>Phone: +1 123-456-7890</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
