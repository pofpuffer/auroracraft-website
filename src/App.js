import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import ServerStatistics from './components/ServerStatistics';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='container'>
      <>
        <Router>
          <Navbar/>
          <ServerStatistics/>
          <Routes>
            <Route path='/' exact />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
