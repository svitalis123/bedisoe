import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import '../css/Question.css';

/* eslint-disable */
const Question = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="question">
      <header>
        <h4 onClick={() => setExpanded(!expanded)} className="question-title">
          {title}
        </h4>
        <button type="button" className="btn" onClick={() => setExpanded(!expanded)}>
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {expanded && <p>{info}</p>}
    </article>
  );
};

export default Question;
