import React from 'react';
import Nabvar from '../components/navbar/Nabvar';
import Cuerpo from '../components/cuerpo/Cuerpo';
import Footer from '../components/footer/Footer';
import Contenido from '../components/contenido/Contenido';
import Subfooter from '../components/subfooter/Subfooter';
import Subcontenido from '../components/subcontenido/Subcontenido';


const Usuario = () => {
  return (
      <>
      <div>    
        <Nabvar/>
        <Cuerpo/>
        <Contenido  titulo="TUS GENEROS FAVORITOS" genero1="Aventura" genero2="Terror" genero3="Novela" width="620px" display="flex" margin="-3px 2px 17px 69px"/>
        <Contenido  titulo="LISTA DE DESEOS"  genero1="El principito - Antonie de Saint" genero2="Callejón sin salida - Blake Pierce" width="690px" margin="-13.5rem 20px 28px 46rem"/>
        <Subcontenido/>
        <Footer/>
        <Subfooter/> 
    </div>
    </>  
  );
}

export default Usuario;