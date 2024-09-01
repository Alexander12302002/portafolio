import { useState } from 'react'
import '../styles/about.css'
import Navegacion from './navegacion'
import photo from '../../public/img/foto.png'
function AboutMe() {

  return (
    <>
    <Navegacion/>
        <div className='container-aboutMe'>
            <div className='photo'>
                <img src={photo}></img>
            </div>
            <div className='aboutMe'>
                <h1>Alexander</h1>
                <p>Soy un desarrollador de software especializado en tecnologías de APIs RESTful, 
                Comprometido con ofrecer soluciones óptimas y con habilidades  para resolver problemas 
                complejos mediante soluciones innovadoras y eficientes. Mi enfoque se centra en la creación 
                de aplicaciones robustas y escalables que mejoran la experiencia del usuario 
                y optimizan los procesos empresariales. 
                </p>
                <h5>Jalexander27@misena.edu.co</h5>
            </div>
        </div>
    </>
  )
}

export default AboutMe