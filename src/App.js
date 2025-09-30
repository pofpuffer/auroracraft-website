import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
