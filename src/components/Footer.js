import React from 'react';
import '../css/Footer.css';

function Footer() {
  return (
    <div className="footer_container">
      <h2>Bledisoe: Home to your products</h2>
      <div className="footer_container_holder_divs">
        <article className="footer_container_holder_divs_articles">
          <h3>About Us</h3>
          <nav>
            <a href="javascript;void()">Aim</a>
            <a href="javascript;void()">Vision</a>
            <a href="javascript;void()">Testimonials</a>
          </nav>
        </article>
        <article className="footer_container_holder_divs_articles">
          <h3>Products</h3>
          <nav>
            <a href="javascript;void()">Washing products</a>
            <a href="javascript;void()">Cosmetics</a>
          </nav>
        </article>
        <article className="footer_container_holder_divs_articles">
          <h3>Contact Us</h3>
          <nav>
            <p>
              Tel:
              <a href="tel:+4733378901"> +254 77 12 345 789</a>
            </p>
            <p>
              Whatsapp:
              <a href="https://api.whatsapp.com/send?phone=0712345678&amp;text=Hi there! I have a question :)" target="_blank" rel="noreferrer"> Send Message</a>
            </p>
            <address>
              Send an Email to
              {' '}
              <a href="mailto:webmaster@example.com">Bledisoe</a>
              .
              <br />
              Or Visit us at:
              <br />
              Example.com
              <br />
              Box 564, Nairobi
              <br />
              Kenya
            </address>
          </nav>
        </article>
        <article className="footer_container_holder_divs_articles">
          <h3>Social Media</h3>
          <nav>
            <a href="javascript;void()">Facebook</a>
            <a href="javascript;void()">Instagram</a>
            <a href="javascript;void()">Twitter</a>
          </nav>
        </article>
      </div>
    </div>
  );
}

export default Footer;
