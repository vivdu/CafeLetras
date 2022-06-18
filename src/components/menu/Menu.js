import React from "react";


import "./Menu.css";


import PhotoOne from './jelly-drink-café.jpg'
import PhotoTwo from './smoothie-de-café-.jpg'
import PhotoThree from './capuchino-con-baileys.jpg'
import Img from './Mask group.svg'
import Img_one from './Mask group (5).svg'

export default function Menu() {
return (
<div class="menu">
    <img class="menu-img_decoration_one" src={Img} alt='Decoracion'/>
    <h1>SABORES <br/> NUEVOS</h1>
    <img class="menu-img-decoration" src={Img_one} alt='Decoracion'/>
    <div class="menu-section">
        <div class="menu-sabor">
        <img src={PhotoOne} alt='Jally drink'/>
        <h4>JELLY DRINK </h4>
        </div>
        <div class="menu-sabor">
        <img src={PhotoTwo} alt='Smothie de cafe'/>
        <h4>SMOOTHIE DE CAFÉ</h4>
        </div>
        <div class="menu-sabor">
        <img src={PhotoThree} alt='Capuchino con baileys'/>
        <h4>CAPUCHINO CON BAILEYS</h4>
        </div>
    </div>
    <div class="btn-menu"><a href="">VER MENU</a></div>
    </div>
);
}