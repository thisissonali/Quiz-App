import React, { useEffect, useState } from 'react'
import '../App.css'
function TotalScore({ questions }) {
  const [score, setScore] = useState(0);
  
  useEffect(() => {
    let totalScore = 0;

    questions.forEach((question) => {
      if (question.selectedOptionId === question.correctOptionId) {
        totalScore++;
      }
    })
    setScore(totalScore);
  }, [questions]);
  return (
    <div className="container">
      <div className="mcqContainer">
        <span className='score-style'>You Scored :- {score }</span>
      </div>
    </div>
  );
}

export default TotalScore
