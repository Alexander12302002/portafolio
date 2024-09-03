import { useState } from 'react'
import '../styles/home.css'
import Cv from './cv'

function Navegacion() {
  return (
    <>
        <div className="container-main">
            <nav className="horizontal-bar">
                <div className='name'>
                    <h1>Alexander</h1>
                </div>
                <div className='items'>
                    <ul>
                        <li><a href='/portafolio/'>Inicio</a></li>
                        <li><a href='/portafolio/AboutMe'>Acerca de mi</a></li>
                        <li><a href='/portafolio/Projects'>Proyectos</a></li>
                    </ul>
                </div>
                <div className='Contact-me'>
                    <a href='/portafolio/ContactMe'><button>Contactame</button></a>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Navegacion