import { useState } from 'react'
import '../styles/project.css'
import Navegacion from './navegacion'
import JsSvg from '../assets/js.svg'
import mongodbSvg from '../assets/mongodb.svg'
import ExpressSvg from '../assets/express.svg'
import nodejs from '../assets/node-js.svg'
import reactSvg from '../assets/react.svg'
import litSvg from '../assets/lit.svg'
import flaskSvg from '../assets/flask.svg'
import campusShop from '../../public/img/CampusShop.png'
import cineApp from '../../public/img/CineApp.png'
import garden from '../../public/img/Garden.png'


function Project() {
    return ( 
        <>
            <Navegacion/>
            <div className='container-projects'>
                <div className='project'>  
                    <div className='info-project'>
                        <h1>CineApp</h1>
                        <p>El proyecto consistió en desarrollar una aplicación web mobile para la gestión de boletos 
                            de cine, permitiendo a los usuarios explorar películas, seleccionar horarios, 
                            elegir asientos, y comprar boletos de forma sencilla y eficiente. Esta plataforma 
                            fue diseñada para mejorar la experiencia del usuario al comprar entradas de cine y 
                            para optimizar la operación interna del cine.</p>
                            <div className='tecnologias'>
                            <div className='tech-item'>
                                <img src={JsSvg} alt="JavaScript"></img>
                                <span className='tech-name'>JavaScript</span>
                            </div>
                            <div className='tech-item'>
                                <img src={mongodbSvg} alt="MongoDB"></img>
                                <span className='tech-name'>MongoDB</span>
                            </div>
                            <div className='tech-item'>
                                <img src={ExpressSvg} alt="Express"></img>
                                <span className='tech-name'>Express</span>
                            </div>
                            <div className='tech-item'>
                                <img src={nodejs} alt="Node.js"></img>
                                <span className='tech-name'>Node.js</span>
                            </div>
                            <div className='tech-item'>
                                <img src={reactSvg} alt="React"></img>
                                <span className='tech-name'>React</span>
                            </div>
                            </div>
                    </div>
                    <div className='img-proyect'>
                        <img src={cineApp}></img>
                    </div>
                </div>
                <div className='project'>  
                    <div className='info-project'>
                        <h1>Garden</h1>
                        <p>El proyecto consistió en desarrollar una API para una tienda de jardinería 
                            que proporciona acceso a datos de productos de jardinería como plantas, 
                            herramientas, fertilizantes, y decoraciones. La API permite a los clientes 
                            acceder a la información de los productos mediante consultas predefinidas, 
                            devolviendo los datos en formato JSON para facilitar su consumo por aplicaciones 
                            móviles.</p>
                            <div className='tecnologias'>
                            <div className='tech-item'>
                                <img src={JsSvg} alt="JavaScript"></img>
                                <span className='tech-name'>JavaScript</span>
                            </div>
                            <div className='tech-item'>
                                <img src={nodejs} alt="Node.js"></img>
                                <span className='tech-name'>Node.js</span>
                            </div>
                            <div className='tech-item'>
                                <img src={litSvg} alt="lit"></img>
                                <span className='tech-name'>lit</span>
                            </div>
                            </div>
                    </div>
                    <div className='img-proyect'>
                        <img src={garden}></img>
                    </div>
                </div>
                <div className='project'>  
                    <div className='info-project'>
                        <h1>CampusShop</h1>
                        <p>El proyecto consistió en desarrollar una plataforma de eCommerce para la 
                            venta de ropa, ofreciendo una experiencia de compra en línea sencilla y atractiva 
                            para los usuarios. La plataforma permite a los clientes explorar una variedad de 
                            productos de moda, agregar artículos al carrito de compras, y realizar pedidos de 
                            manera rápida y segura. El uso de tecnologías modernas como JavaScript, Lit y Flask 
                            permitió construir una aplicación web rápida, eficiente y fácil de mantener.</p>
                            <div className='tecnologias'>
                            <div className='tech-item'>
                                <img src={JsSvg} alt="JavaScript"></img>
                                <span className='tech-name'>JavaScript</span>
                            </div>
                            <div className='tech-item'>
                                <img src={litSvg} alt="lit"></img>
                                <span className='tech-name'>lit</span>
                            </div>
                            <div className='tech-item'>
                                <img src={flaskSvg} alt="flask"></img>
                                <span className='tech-name'>flask</span>
                            </div>
                            </div>
                    </div>
                    <div className='img-proyect'>
                        <img src={campusShop}></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project

