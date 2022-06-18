import React from "react";
import "./Footer.css";

import {Link} from 'react-router-dom';
import Logo from './logofooter.svg';

export default function Footer() {
return (
<footer class="footer">
    <div class="foot1">
        <img src={Logo} alt='Logo'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat blanditiis vitae illo fuga beatae ipsa quisquam dolor voluptates perspiciatis.</p>
    </div>

    <div class="foot2">
        <h4>Acerca de Café y Letras</h4> 
        <Link to='#'>Sobre Nosotros</Link> 
        <Link to='#'>Preguntas frecuentes</Link>
    </div>

    <div class="foot3">
        <h4>Síguenos</h4>
        <i class="fa-brands fa-instagram socialnet"></i>
        <i class="fa-brands fa-facebook socialnet"></i>
        <i class="fa-brands fa-twitter socialnet"></i>
    </div>

    <div class="foot4">
        <h4>Contáctanos</h4>
        <p><i class="fa-brands fa-whatsapp"></i>  +57 3000000000</p>
        <p><i class="fa-solid fa-envelope"></i>  info@cafeyletras.com</p>
        <p><i class="fa-solid fa-location-dot"></i>  Calle 15 #45a-08</p>
    </div>
</footer>
);
}