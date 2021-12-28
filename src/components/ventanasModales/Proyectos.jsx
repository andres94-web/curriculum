import React from 'react'

const Proyectos = () => {

    return (
      <>
        <input type="checkbox" id="boton-modalProyecto" className="col-2 text-white fondoBotones"/>
	      <label for="boton-modalProyecto" className="label-modalProyecto fw-bold fs-5 my-1 text-center">Proyectos</label>
        <div className="div-modalProyecto">
		        <div className="contenedor-modalProyecto">
			        <header>¡Bienvenidos!</header>
			        <label for="boton-modalProyecto">Cerrar</label>
			        <div className="contenidoProyecto">
				        <p> Proyectos </p>
			      </div>
		      </div>
	      </div>
      </>
    );
}

export default Proyectos
