// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Home from './pages/Home';
import { Navbar } from './components/NavBar';

import CharacterCreation from './pages/CharacterCreation';

import Classes from './pages/Classes';
import ClassDetailsPage from './pages/ClassDetails';
import Species from './pages/Species';
import Origins from './pages/Origins';

import PlanetPage from './pages/PlanetPage';
import RegionPage from './pages/RegionPage';

import Maps from './pages/Maps';
import TheEyeMap from './components/TheEyeMap';

function App() {
  return (
    <Router>
      <div>
        {/* <Header /> */}
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Character Creation */}
            <Route path="/character-creation" element={<CharacterCreation />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/class/:className" element={<ClassDetailsPage />} />
            <Route path="/class/:className/:subclassName" element={<ClassDetailsPage />} />
            <Route path="/species" element={<Species />} />
            <Route path="/origins" element={<Origins />} />
            {/* Planets */}
            <Route path="/planets/:planetName" element={<PlanetPage />} />
            <Route path="/planets/:planetName/:regionName" element={<RegionPage />} />
            {/* Gods */}
            {/* Maps */}
            <Route path="/maps" element={<Maps />} />
            <Route path="/maps/TheEyeMap" element={<TheEyeMap />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App
