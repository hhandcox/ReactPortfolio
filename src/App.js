import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import React, { useState } from 'react';
import AboutMe from './pages/AboutMe';
import { Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import { createContext } from 'react';
import ReactSwitch from 'react-switch';
import Footer from './components/Footer';
import Contact from './pages/Contact';

export const ThemeContext = createContext(null);


function App() {

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
      setTheme((curr) => (curr === 'dark' ? 'light' : 'dark'));
    };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App" id={theme}>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/about' element={<AboutMe />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
        <div className='switch'>
          <label className='switchLabel'> {theme === 'light' ? 'Light' : 'Dark'} </label>
          <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}


export default App;
