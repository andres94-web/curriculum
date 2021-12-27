import React from 'react'

const Certificados = () => {

    return (
      <>
        <input type="checkbox" id="boton-modalCertificado" className="col-2 bg-transparent text-white fondoBotones "/>
	      <label for="boton-modalCertificado" className="label-modalCertificados fw-bold fs-5 my-1 text-center">Certificados</label>
        <div className="div-modalCertificados">
		        <div className="contenedor-modalCertificados">
			        <header>¡Bienvenidos!</header>
			        <label for="boton-modalCertificado">Cerrar</label>
			        <div className="contenidoCertificados">
				        <p> Certificados </p>
			      </div>
		      </div>
	      </div>
      </>
    );
}

export default Certificados
