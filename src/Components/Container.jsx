import React , { useState , useEffect} from 'react'
import '../App.css'
import { useNavigate } from "react-router-dom";

function Container() {
   const navigate = useNavigate();
   const [questions, setQuestions] = useState([
    {
      id: 1,
      label: "Who was Gandhi's killer?",
      correctOptionId: 2,
      selectedOptionId: null,
      options: [
        {
          id: 1,
          label: "Aditya",
        },
        {
          id: 2,
          label: "Nathuram godse",
        },
        {
          id: 3,
          label: "Mickey Mouse",
        },
      ],
    },
    {
      id: 2,
      label: "Naam btaie ?",
      correctOptionId: 3,
      selectedOptionId: null,
      options: [
        {
          id: 4,
          label: "Arvind Bhaiya",
        },
        {
          id: 5,
          label: "Gajju",
        },
        {
          id: 6,
          label: "Bhupender jogi",
        },
      ],
    },
    {
      id: 3,
      label: "Kya chip sch mai lgi hai?",
      correctOptionId: 2,
      selectedOptionId: null,
      options: [
        {
          id: 7,
          label: "ayeein",
        },
        {
          id: 8,
          label: "Haaannnn drr lgraa",
        },
        {
          id: 9,
          label: "Naa",
        },
      ],
    },
    {
      id: 4,
      label: "Mai or batman kbhi same room mai kyu ni rhte",
      correctOptionId: 2,
      selectedOptionId: null,
      options: [
        {
          id: 10,
          label: "dushman ho",
        },
        {
          id: 11,
          label: "same time pr washroom jana pdjata hai",
        },
        {
          id: 12,
          label: "kyunki tum hi batman ho (scared)",
        },
      ],
    },
  ]);
  const[score, setScore] = useState(0);  
      
  const clickHandler = (option) => {
    setQuestions(questions.map((question, index) => {
      if (qsnNo != index) return question;
     
      return {
        ...question, selectedOptionId: option.id
      }
    }))
  };
  console.log(score);
  const [qsnNo, setQsnNo] = useState(0);
  return (
    <div className="container">
      <div className="mcqContainer">
        
        <span className="qsn-numberheading">
          Qsn. {` ${qsnNo + 1} / ${questions.length} `}
        </span>
       
        <span className="span-qsns">{questions[qsnNo].label}</span>
       
        <div className="option-container">
          {questions[qsnNo].options.map((option) => (
            <button
              className={`options ${
                questions[qsnNo].selectedOptionId == option.id
                  ? `selected-option`
                  : null
              }`}
              onClick={() => clickHandler(option)}
              
              key={option.id}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <div className="btn-container">
        <button
          className="btn-prev-next"
          disabled={qsnNo == 0}
          onClick={() => setQsnNo((prevQsnNo) => prevQsnNo - 1)}
        >
          &lt;
        </button>
        <button
          className="btn-prev-next"
          onClick={() => setQsnNo((prevQsnNo) => prevQsnNo + 1)}
        >
          &gt;
        </button>
        {qsnNo == questions.length - 1 && (
          <button
            className="submit-btn"
            onClick={() => navigate("total-score")}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default Container
