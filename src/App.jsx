import React , { useState , useEffect} from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import TotalScore from './Components/TotalScore';
import Container from './Components/Container';

function App() {
  const [questions, setQuestions] = useState([]);
  function getData(data) {  
    setQuestions(data);
  }
    return (
      <div>
        <Routes>
          <Route path="/" element={<Container getData={getData} />} />
          <Route
            path="total-score"
            element={<TotalScore questions={questions} />}
          />
        </Routes>
      </div>
    );  
  }

  export default App
