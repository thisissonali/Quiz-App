import React , { useState , useEffect} from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import TotalScore from './Components/TotalScore';
import Container from './Components/Container';

function App() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="total-score" element={<TotalScore />} />
        </Routes>
      </div>
    );  
  }

  export default App
