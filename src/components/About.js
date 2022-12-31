import React from 'react';
import Ceo from './Ceo';
import Testimonial from './Testimonial';

import '../css/About.css';

function About() {
  return (
    <div className="about_container">
      <Ceo />
      <Testimonial />
    </div>
  );
}

export default About;
