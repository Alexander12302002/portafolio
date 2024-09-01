import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './components/about'
import Cv from './components/cv'

function Home() {

  return (
    <Router>
            <Routes>
              <Route path="/" element={<Cv/>}/>
              <Route path="/AboutMe" element={<AboutMe />} />
      </Routes> 
    </Router>
  )
}

export default Home
