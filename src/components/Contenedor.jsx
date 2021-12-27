import React from 'react'
import SobreMi from './ventanasModales/SobreMi'
import Lenguajes from "./ventanasModales/Lenguajes"
import Certificados from "./ventanasModales/Certificados"
import Portafolio from "./ventanasModales/Portafolio"
import Proyectos from "./ventanasModales/Proyectos"
import Contacto from "./ventanasModales/Contacto"

const contenedor = () => {
    return (
        <div className='contenedor container text-white'>
            <h1 className='text-center display-6 m-3'>Alvaro Andres Hurtado Vallecilla</h1>
            <p className='text-center m-0'>Estudiante de ingenieria en sistemas</p>
            <p className='text-center'>Universidad del Valle</p>
            
            <div className="container">
                <div className="row botones">
                    <SobreMi />
                    <Lenguajes/>
                    <Certificados/>
                    <Portafolio/>
                    <Proyectos/>
                    <Contacto/>
                </div>
            </div>
        </div>
    )
}

export default contenedor
