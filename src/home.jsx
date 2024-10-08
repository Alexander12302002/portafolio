import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './components/about'
import Cv from './components/cv'
import Project from './components/project';
import Contact from './components/contact'

function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cv />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Projects" element={<Project />} />
        <Route path="/ContactMe" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default Home
