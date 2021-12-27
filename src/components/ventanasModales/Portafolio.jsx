import React from 'react'

const Portafolio = () => {

    return (
      <>
        <input type="checkbox" id="boton-modalPortafolio" className="col-2 bg-transparent text-white fondoBotones"/>
	      <label for="boton-modalPortafolio" className="label-modalPortafolio fw-bold fs-5 my-1 text-center">Portafolio</label>
        <div className="div-modalPortafolio">
		        <div className="contenedor-modalPortafolio">
			        <header>¡Bienvenidos!</header>
			        <label for="boton-modalPortafolio">Cerrar</label>
			        <div className="contenidoPortafolio">
				        <p> Portafolio </p>
			      </div>
		      </div>
	      </div>
      </>
    );
}

export default Portafolio
