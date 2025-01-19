import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './styles.css';

const ContactUs = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <a href="#">LearnSmart</a>
        </div>
        <ul className="nav-links center-nav">
          {/* <li><a href="#">Home</a></li> */}
        </ul>
      </nav>

      {/* Contact Us Section */}
      <section className="contact-us">
        <div className="contact-info">
          <h1>Contact Us!</h1>
          <p style={{ fontWeight: 'bolder', marginRight: '100px' }}>
            We'd love to hear from you! Reach out to us. <br /> ANYTIME, ANYWHERE!
          </p>
        </div>

        <div className="contact-form">
          <form action="#">
            <div className="form-group">
              <label htmlFor="name" style={{ fontWeight: 'bold' }}>
                Name
              </label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>

            <div className="form-group">
              <label htmlFor="email" style={{ fontWeight: 'bold' }}>
                Email
              </label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>

            <div className="form-group">
              <label htmlFor="message" style={{ fontWeight: 'bold' }}>
                Message
              </label>
              <textarea id="message" placeholder="Your Message"></textarea>
            </div>

            <button type="submit" className="cta-button">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 LearnSmart. All Rights Reserved.</p>
      </footer>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ContactUs />);

export default ContactUs;
