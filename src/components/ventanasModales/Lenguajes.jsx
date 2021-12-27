import React from 'react'

const Lenguajes = () => {

    return (
      <>
        <input type="checkbox" id="boton-modalLenguaje" className="col-2 bg-transparent text-white fondoBotones"/>
	      <label for="boton-modalLenguaje" className="label-modalLenguaje fw-bold fs-5 my-1 text-center">Lenguajes</label>
        <div className="div-modalLenguaje">
		        <div className="contenedor-modalLenguaje">
			        <header>¡Bienvenidos!</header>
			        <label for="boton-modalLenguaje">Cerrar</label>
			        <div className="contenidoLenguaje">
				        <p> Lenguajes </p>
			      </div>
		      </div>
	      </div>
      </>
    );
}

export default Lenguajes
