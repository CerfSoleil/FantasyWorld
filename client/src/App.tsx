// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Home from './pages/Home';

import CharacterCreation from './pages/CharacterCreation';

import Classes from './pages/Classes';
import Species from './pages/Species';
import Origins from './pages/Origins';

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
            <Route path="/classes" element={<Classes />} />
            <Route path="/species" element={<Species />} />
            <Route path="/origins" element={<Origins />} />
            {/* Lore */}
            {/* Gods */}
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
