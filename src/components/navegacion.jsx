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
                        <li><a href='/'>Inicio</a></li>
                        <li><a href='/AboutMe'>Acerca de mi</a></li>
                        <li><a href='/Projects'>Proyectos</a></li>
                    </ul>
                </div>
                <div className='Contact-me'>
                    <a href='#'><button>Contactame</button></a>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Navegacion