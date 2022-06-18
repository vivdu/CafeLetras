import React from "react";


import "./Newsletter.css";


import Img from './Group 100.svg'


export default function Menu() {
return (
<div class="newsletter">
    <div class="newsletter-section">
        <h1>SUSCRIBETE A <br/> NUESTRO NEWSLETTER</h1>
        <div class="search_three">
            <div class="search_wrap_three">
                <div class="search_box_three">
                    <input type="text" class="input" placeholder="Ingresa tu email"/>
                    <div class="btn btn_common_three">
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                </div>
            </div>
        </div>
        <p>Regístrate en nuestra comunidad consigue nuestros descuentos de la temporada. <span>Términos y condiciones.</span></p>
    </div>
    <img class="newsletter-decoration" src={Img} alt='Decoracion'/>
</div>
);
}