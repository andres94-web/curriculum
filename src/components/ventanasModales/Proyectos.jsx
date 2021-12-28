import React from 'react'

const Proyectos = () => {

    return (
      <>
        <input type="checkbox" id="boton-modalProyecto" className="col-2 text-white fondoBotones"/>
	      <label for="boton-modalProyecto" className="label-modalProyecto fw-bold fs-5 my-1 text-center">Repositorio de GitHub</label>
        <div className="div-modalProyecto">
		        <div className="contenedor-modalProyecto">
			        <header>¡Bienvenidos!</header>
			        <label for="boton-modalProyecto">Cerrar</label>
			        <div className="contenidoProyecto mt-5 text-center">
				        <p> Para mirar el Repositorio por favor haga click aqui.
							<a href="https://github.com/dashboard" target="_blank"> Ver Repositorio</a>
						</p>
			      </div>
		      </div>
	      </div>
      </>
    );
}

export default Proyectos
