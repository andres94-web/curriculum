import React from 'react'

const Contacto = () => {

    return (
      <>
        <input type="checkbox" id="boton-modalContacto" className="col-2 text-white fondoBotones"/>
	      <label for="boton-modalContacto" className="label-modalContacto fw-bold fs-5 my-1 text-center">Contacto</label>
        <div className="div-modalContacto">
		        <div className="contenedor-modalContacto">
			        <header>¡Bienvenidos!</header>
			        <label for="boton-modalContacto">Cerrar</label>
			        <div className="contenidoContacto">
				        <p> Contacto </p>
			      </div>
		      </div>
	      </div>
      </>
    );
}

export default Contacto
