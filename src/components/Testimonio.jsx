import React from "react";
import { ReactDOM } from "react";
import '../ccs/Testimonio.css';



export function Testimonio(props){ //<-- exportacion nombrada en donde usamos {en el app donde importamos}
  return(
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src= {require(`../imagenes/testimonio-${props.imagen}.png`)} alt={`foto de ${props.nombre}`} />
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio">
          <strong>{props.nombre}</strong>  en {props.pais} </p>
          <p className="cargo-testimonio">{props.cargo}  en <strong>{props.empresa}</strong></p>
          <p className="texto-testimonio">"{props.testimonio}"</p>

        </div>
    </div>
  );
}

//tambien podemos poner export default Testitmonio; <-- esto es exportacion por defecto