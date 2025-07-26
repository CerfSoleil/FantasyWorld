// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Home from './pages/Home';

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
