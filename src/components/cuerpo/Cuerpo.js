import React from 'react';
import './Cuerpo.css';
import Imagen from "./usuariofoto.png";

const Cuerpo = () => {
  return (
    <body className='cuerpo'>
    <article className="card">
    <img src={Imagen} alt="perfil-img" className="card-img"/>
           <div className="card-body">
                <h2 className="card-text">Marcos Lopez</h2>
                <p >Me encanta perderme en las letras con mi buen café</p>
           </div>
   </article> 
</body>
  );
}

export default Cuerpo;