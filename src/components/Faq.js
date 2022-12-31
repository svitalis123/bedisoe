import React, { useState } from 'react';
import faqdata from './faqdata';
import SingleQuestion from './Question';
import '../css/Faq.css';

/*eslint-disable*/

function Faq() {
  const [questions, setQuestions] = useState(faqdata);
  return (
    <main className="main_container">
      <div className="main_container_container">
        <h3>questions and answers</h3>
        <div className="main_container_container_section">
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Faq;
