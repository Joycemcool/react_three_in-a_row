
import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home'
import Sample from './pages/sample'
import Random from './pages/random'
import Navbar from './components/Navbar'

function App() {
  return (
      <Router>     
            <Navbar /> 
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/sample" element={<Sample />} />
                <Route path="/random" element={<Random/>} />
            </Routes>
      </Router>
  );
}

export default App;
