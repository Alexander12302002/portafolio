import { useState } from 'react'
import '../styles/about.css'
import Navegacion from './navegacion'
import photo from '../../public/img/foto.png'
import pythonSvg from '../assets/python.svg'
import JsSvg from '../assets/js.svg'
import javaSvg from '../assets/java.svg'
import mongodbSvg from '../assets/mongodb.svg'
import ExpressSvg from '../assets/express.svg'
import gitSvg from '../assets/git.svg'
import githubSvg from '../assets/github.svg'
import mySqlSvg from '../assets/mysql.svg'
import nodejs from '../assets/node-js.svg'
import postgresqlSvg from '../assets/postgresql.svg'
import reactSvg from '../assets/react.svg'
import railwaySvg from '../assets/railway.svg'
import litSvg from '../assets/lit.svg'
import flaskSvg from '../assets/flask.svg'
import ubutuSvg from '../assets/ubuntu.svg'
import htmlSvg from '../assets/html.svg'
import cssSvg from '../assets/css.svg'
import termiusSvg from '../assets/termius.svg'

function AboutMe() {

  return (
    <>
    <Navegacion/>
        <div className='container-aboutMe'>
          <div className='container-init'>
            <div className='photo'>
                <img src={photo}></img>
            </div>
            <div className='aboutMe'>
                <h1>Alexander</h1>
                <p>
                  Soy Backend, actualmente vivo en Bucaramanga, Colombia.
                  Me agrada la idea de trabajar en equipo, pienso que es una manera 
                  de conectar con nuevas habilidades y de brindar mi conocimiento 
                  al equipo con el fin de mejorar la productividad en el desarrollo 
                  
                  Me gusta descubrir cosas nuevas a diario y ser un activo valioso en cualquier 
                  equipo en el que me desarrolle, por lo que estoy aprendiendo constantemente e investigando 
                  acerca de las nuevas tendencias.
                  
                  Trato de buscar todo el Feedback posible en los proyectos, 
                  con el fin de mejorar.

                  Hablemos! 
                </p>
                <h5>Jalexander27@misena.edu.co</h5>
            </div>
          </div>
          <div className='skills'>
            <div className='programming'>
              <div className='container-name-skills'>
                <h1>Habilidades</h1>
              </div>
              <div className='img-skills'>
                <div className='languages'>
                  <div className='container-name'>
                  <h1>Lenguajes de Programación</h1> 
                  </div>
                  <div className='imagenes'>
                  <img src={pythonSvg} alt='Python'></img>
                  <img src={JsSvg} alt='JavaScript'></img>
                  <img src={javaSvg} alt='Java'></img>
                  </div>
                </div>
                <div className='databases'>
                <div className='container-name'>
                  <h1>Bases de Datos </h1> 
                  </div>
                  <div className='imagenes'>
                  <img src={mongodbSvg} alt='MongoDB'></img>
                  <img src={mySqlSvg} alt='MySQL'></img>
                  <img src={postgresqlSvg} alt='PostgreSQL'></img>
                  </div>
                </div>
                <div className='frameworks'>
                <div className='container-name'>
                  <h1>Frameworks </h1> 
                  </div>
                  <div className='imagenes'>
                  <img src={ExpressSvg} alt='Express.js'></img>
                  <img src={reactSvg} alt='React'></img>
                  <img src={flaskSvg} alt='Flask'></img>
                  </div>
                </div>
                <div className='tools'>
                  <div className='container-name'>
                  <h1>Herramientas </h1> 
                  </div>
                  <div className='imagenes'>
                  <img src={gitSvg} alt='Git'></img>
                  <img src={githubSvg} alt='GitHub'></img>
                  <img src={railwaySvg} alt='Railway'></img>
                  <img src={nodejs} alt='Node.js'></img>
                  <img src={litSvg} alt='Lit'></img>
                  <img src={ubutuSvg} alt='Ubuntu'></img>
                  <img src={htmlSvg} alt='Html'></img>
                  <img src={cssSvg} alt='Css'></img>
                  <img src={termiusSvg} alt='Termius'></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='vision-and-mission'>
            <h1>Mi Visión y Misión</h1>
            <div className='vision'>
              <h1>Visión</h1>
              <p>Convertirme en un programador competente y valioso, 
                capaz de contribuir al éxito de proyectos tecnológicos 
                innovadores y sostenibles, mediante el aprendizaje continuo 
                y la resolución eficiente de problemas, impactando positivamente 
                en la sociedad y en el ámbito profesional.</p>
            </div>
            <div className='mission'>
              <h1>Misión</h1>
              <p>Adquirir y aplicar conocimientos en programación y desarrollo de software, 
                enfocándome en el desarrollo de habilidades técnicas y blandas que me permitan 
                colaborar efectivamente en equipos de trabajo. Mi objetivo es aprender de cada 
                experiencia, aceptar nuevos desafíos y aportar soluciones creativas e innovadoras, 
                mientras construyo una sólida carrera en el campo de la tecnología</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default AboutMe