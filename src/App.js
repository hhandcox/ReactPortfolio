import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import React from 'react';
import AboutMe from './pages/AboutMe';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about' element={<AboutMe />}/>
        <Route path='/projects' element={<Projects />}/>
      </Routes>
    </div>
  );
}

export default App;
