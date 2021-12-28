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
				        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, laboriosam eaque. Repudiandae esse, autem architecto sequi pariatur illo soluta aliquam, debitis vero culpa saepe numquam repellat minima. Soluta, cupiditate quae.
						Inventore minima ad laboriosam illum. Iure ducimus rem quisquam alias ex perspiciatis tempora repellendus et exercitationem saepe accusantium, ab veniam quos nihil quam voluptatem magnam omnis fuga velit. Quis, vitae. </p>
			      </div>
		      </div>
	      </div>
      </> 
    );
}

export default SobreMi
