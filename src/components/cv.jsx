import { useState } from 'react'
import '../styles/cv.css'
import downloadSvg from '../assets/download.svg'
import Navegacion from './navegacion'
function Cv() {

  return (
    <>
    <Navegacion/>
    <div className="container">
        <div className='info-cv'>
            <h1>Soy <span class="name">Alexander</span> Programador back-end</h1>
            <p>Este es mi portafolio y CV, puedes ver mas informacion sobre mi .¡Espero te guste!</p>
            <div className='buttons'> 
                <div className='proyectos'>
                    <a href='#'><button>Ver proyectos</button></a>
                </div>
                <div className='Cv'>
                    <a href='../../public/doc/Cv.pdf' download className='button-link'>
                        <button>
                            <img src={downloadSvg} alt="download icon" width="20" height="20" />
                            Descargar CV
                        </button> 
                    </a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cv

