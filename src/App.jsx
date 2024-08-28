import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="container-main">
        <nav className="horizontal-bar">
          <img></img>
          <div className='items'>
            <ul>
              <li>Inicio</li>
              <li>Acerca de mi</li>
              <li>Proyectos</li>
            </ul>
          </div>
          <div className='Contact-me'>
            <button><a href='#'>Contactame</a></button>
          </div>
        </nav>
        <div className="container">
          
        </div>
      </div>
    </>
  )
}

export default App
