import React from 'react';
import { FcBusinessContact, FcFaq } from 'react-icons/fc';
import '../css/Contact.css';
import Hotline from './Hotline';
import Faq from './Faq';

function Contact() {
  return (
    <div className="contact_container">
      <nav className="contact_container_nav">
        <a href="#contact">
          <FcBusinessContact />
          Contact
        </a>
        <a href="#faq">
          <FcFaq />
          FAQ
        </a>
      </nav>
      <div className="contact_container_div">
        <section id="contact">
          <div>
            <Hotline />
          </div>
        </section>
        <section id="faq">
          <div>
            <Faq />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
