import React from 'react';
import "../cuerpo/Cuerpo.css";

function Contenido(props) {
    return(
        <>
        <div className="contenido" style={{
            width: props.width,
            display: props.flex,
            margin: props.margin,
        }}>
                <h3>{props.titulo} <i className="fa-solid fa-square-pen"></i></h3>
                <p> {props.genero1}</p>
                <p>{props.genero2}</p>
                <p>{props.genero3}</p>
        </div>
        </>
    );
}
export default Contenido;