import React from 'react'

const Portafolio = () => {

    return (
      <>
        <input type="checkbox" id="boton-modalPortafolio" className="col-2 text-white fondoBotones"/>
	      <label for="boton-modalPortafolio" className="label-modalPortafolio fw-bold fs-5 my-1 text-center">Portafolio</label>
        <div className="div-modalPortafolio">
		        <div className="contenedor-modalPortafolio">
			        <header>¡Bienvenidos!</header>
			        <label for="boton-modalPortafolio">Cerrar</label>
			        <div className="contenidoPortafolio text-center mt-5">
				        <p> El siguiente enlace los llevara al primer portafolio que hice el cual fue construido
							solamente con Html y Css. 
							<a href="https://loving-wright-d21059.netlify.app/" target="_blank"> Ver portafolio</a>
							</p>
			      </div>
		      </div>
	      </div>
      </>
    );
}

export default Portafolio
