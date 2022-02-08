import React from 'react'

const Lenguajes = () => {

    return (
      <>
        <input type="checkbox" id="boton-modalLenguaje" className="col-2 text-white fondoBotones"/>
	      <label for="boton-modalLenguaje" className="label-modalLenguaje fw-bold fs-5 my-1 text-center">Lenguajes</label>
        <div className="div-modalLenguaje">
		        <div className="contenedor-modalLenguaje">
			        <header>¡Bienvenidos!</header>
			        <label for="boton-modalLenguaje">Cerrar</label>
			        <div className="contenidoLenguaje">
				        <p className='m-0'> JavasCript </p>
						<div className="progress">
  							<div className="progress-bar bg-danger w-50">50%</div>
						</div>

						<p className='m-0'> React </p>
						<div className="progress">
  							<div className="progress-bar bg-danger w-50">50%</div>
						</div>

						<p className='m-0'> Html y Css </p>
						<div className="progress">
  							<div className="progress-bar bg-danger w-75">75%</div>
						</div>

						<span className='mt-5'>
							Apesar de no manejar estos conocimientos aun en un 100%
							tengo bien fundamentadas las bases lo que me permite 
							desarrollar codigo con gran facilidad.
						</span>
			      </div>
		      </div>
	      </div>
      </>
    );
}

export default Lenguajes
