import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Signup from './componentss/signup';
import Login from './componentss/login';
import Movies from './componentss/apiData';
import CompanyInfo from './componentss/companyInfo';

function App() {
  return (
    <div className="App">
      <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/company-info" element={<CompanyInfo />} />
                </Routes>
            </div>
        </Router>
    </div>
  );
}

export default App;
