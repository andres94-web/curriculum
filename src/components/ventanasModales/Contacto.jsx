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
			        <div className="contenidoContacto text-center mt-5">
				        <p> numero de llamadas:
							<a className='text-white' target="_blank"> +57 315 858 3789 </a>
						</p>
				        <p> numero de Whatsapp:
							<a className='text-white' href="https://wa.me/573188519011" target="_blank"> +57 318 851 9011</a>
						</p>
						<p> Correo:
							<a className='text-white' href="mailto:andresvallelap@gmail.com" target="_blank"> andresvallelap@gmail.com</a>
						</p>
			      </div>
		      </div>
	      </div>
      </>
    );
}

export default Contacto
