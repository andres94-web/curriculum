import React from 'react'

const SobreMi = () => {

    return (
      <>
        <input type="checkbox" id="boton-modalSobreMi" className="col-2 text-white fondoBotones"/>
	      <label for="boton-modalSobreMi" className="label-modalSobreMi fw-bold fs-5 my-1 text-center">Sobre mi</label>
        <div className="div-modalSobreMi">
		        <div className="contenedor-modalSobreMi">
			        <header>¡Bienvenidos!</header>
			        <label for="boton-modalSobreMi">Cerrar</label>
			        <div className="contenidoSobreMi my-4">
				        <p>
							Mi nombre es Alvaro Andres Hurtado Vallecilla, tengo 27 años de edad,
							llevo metido en el mundo de la programacion mas o menos un año con seis meses,
							voy en quinto semestre de ingenieria en sistemas, ademas de la programacion me
							encanta tambien el futbol incluso soy portero de la seleccion de futbol sala 
							en una de las sedes de la Universidad del Valle. 
						</p>
			      </div>
		      </div>
	      </div>
      </> 
    );
}

export default SobreMi
