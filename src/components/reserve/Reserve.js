import React from "react";
import "./Reserve.css";

import {Link} from 'react-router-dom';

export default function Reserve() {
  return (
<div id="reserve">
    <i class="fa-solid fa-book"></i>
    <div class="reserve-p">
    <h4>Reserva ahora</h4>
    <Link to='/reservas/'>Ver más</Link>
</div>
</div>

);
}