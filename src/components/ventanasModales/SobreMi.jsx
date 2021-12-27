import React from 'react'

const SobreMi = () => {

    return (
      <>
        <input type="checkbox" id="boton-modalSobreMi" className="col-2 bg-transparent text-white fondoBotones"/>
	      <label for="boton-modalSobreMi" className="label-modalSobreMi fw-bold fs-5 my-1 text-center">Sobre mi</label>
        <div className="div-modalSobreMi">
		        <div className="contenedor-modalSobreMi">
			        <header>¡Bienvenidos!</header>
			        <label for="boton-modalSobreMi">Cerrar</label>
			        <div className="contenidoSobreMi">
				        <p> Sobre mi </p>
			      </div>
		      </div>
	      </div>
      </> 
    );
}

export default SobreMi
