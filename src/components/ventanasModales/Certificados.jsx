import React from 'react'

const Certificados = () => {

    return (
      <>
        <input type="checkbox" id="boton-modalCertificado" className="col-2 text-white fondoBotones "/>
	      <label for="boton-modalCertificado" className="label-modalCertificados fw-bold fs-5 my-1 text-center">Certificados</label>
        <div className="div-modalCertificados">
		        <div className="contenedor-modalCertificados">
			        <header>¡Bienvenidos!</header>
			        <label for="boton-modalCertificado">Cerrar</label>
			        <div className="contenidoCertificados text-center mt-5">
				        <p> Primer certificado
							<a href="misCertificadosGoogle/certificado1.pdf" target="_blank"> Ver certificado</a>
						</p>
						<p> Segundo certificado
							<a href="misCertificadosGoogle/certificado2.pdf" target="_blank">Ver certificado</a>
						</p>
			      </div>
		      </div>
	      </div>
      </>
    );
}

export default Certificados
