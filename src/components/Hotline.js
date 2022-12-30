import React from 'react';
import '../css/Hotline.css';

function Hotline() {
  return (
    <div className="hotline_container">
      <h2 className="hotline_container_h21">How to reach out</h2>
      <nav className="hotline_container_nav1">
        <p>
          <img src="/images/phone.png" alt="phone icon" />
          <a href="tel:+4733378901"> +254 77 12 345 789</a>
        </p>
        <p>
          <img src="/images/whatsapp.png" alt="whatsapp icon" />
          <a href="https://api.whatsapp.com/send?phone=0712345678&amp;text=Hi there! I have a question :)" target="_blank" rel="noreferrer"> Send Message</a>
        </p>
        <address>
          <img src="/images/mail.png" alt="email icon" />
          {' '}
          <a href="mailto:webmaster@example.com">Bledisoe@gmail.com</a>
        </address>
      </nav>
    </div>
  );
}

export default Hotline;
