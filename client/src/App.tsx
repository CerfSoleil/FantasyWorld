// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Home from './pages/Home';

import CharacterCreation from './pages/CharacterCreation';

import Classes from './pages/Classes';

import Maps from './pages/Maps';
import TheEyeMap from './components/TheEyeMap';

function App() {
  return (
    <Router>
      <div>
        {/* <Header /> */}
        {/* <NavBar /> */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Character Creation */}
            <Route path="/character-creation" element={<CharacterCreation />} />
            {/* Class Page */}
            <Route path="/classes" element={<Classes />} />
            {/* Subclass Landing Page */}
            <Route path="/classes/subclasses" element={<CharacterCreation />} />
            {/* Maps */}
            <Route path="/maps" element={<Maps />} />
            <Route path="/maps/TheEye" element={<TheEyeMap />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App
