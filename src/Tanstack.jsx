import React, { useState } from "react";

function Tanstack() {
  const [answers, setAnswers] = useState([]);

  const handleAnswerChange = (e, index) => {
    
    // Create a copy of the current answers array
    
    // const newAnswers = [...answers];
    // console.log(newAnswers,"arrrrrr")
    // Update the answer for the specific question at index
    answers[index] = { ...answers[index], answer: e.target.value };
    
    // // Update state with the new array of answers
    setAnswers(answers);
  };

  console.log(answers)

  const handleNext = () => {
    console.log(answers); // Log all answers when Next button is clicked
  };

  return (
    <div>
      <label>Q1. What are you doing?</label>
      <br />
      <input
        onChange={(e) => handleAnswerChange(e, 0)} // Pass index 0 for first question
      />
      <br />
      <label>Q2. What's your name?</label>
      <br />
      <input
        onChange={(e) => handleAnswerChange(e, 1)} // Pass index 1 for second question
      />
      <br />
      <br />
      <br />
      <button onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default Tanstack;
