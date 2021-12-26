import React from 'react'
import SobreMi from './ventanasModales/SobreMi'

const contenedor = () => {
    return (
        <div className='contenedor container text-white'>
            <h1 className='text-center display-6 m-3'>Alvaro Andres Hurtado Vallecilla</h1>
            <p className='text-center m-0'>Estudiante de ingenieria en sistemas</p>
            <p className='text-center'>Universidad del Valle</p>
            

            <div className="container">
                <div className="row botones">
                    <SobreMi />
                    <button className="col-2 w-100 bg-transparent text-white my-1 py-2 fs-5 fw-bold fondoBotones">
                        Lenguajes
                    </button>
                    <button className="col-2 w-100 bg-transparent text-white my-1 py-2 fs-5 fw-bold fondoBotones">
                        Certificados
                    </button>
                    <button className="col-2 w-100 bg-transparent text-white my-1 py-2 fs-5 fw-bold fondoBotones">
                        Portafolio
                    </button>
                    <button className="col-2 w-100 bg-transparent text-white my-1 py-2 fs-5 fw-bold fondoBotones">
                        Proyectos
                    </button>
                    <button className="col-2 w-100 bg-transparent text-white my-1 py-2 rounded-bottom fs-5 fw-bold fondoBotones">
                        Contacto
                    </button>
                </div>
            </div>
        </div>
    )
}

export default contenedor
