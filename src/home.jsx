import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './components/about'
import Cv from './components/cv'
import Project from './components/project';

function Home() {

  return (
    <Router>
            <Routes>
              <Route path="/" element={<Cv/>}/>
              <Route path="/AboutMe" element={<AboutMe />} />
              <Route path="/Projects" element={<Project />} />
      </Routes> 
    </Router>
  )
}

export default Home
