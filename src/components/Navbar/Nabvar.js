import {Link} from 'react-router-dom';
import './Navbar.css';


function Nabvar (){
return(


<div class="wrapper-nav">
    <nav>
    <div className='icon-shop'><i class="fa-solid fa-cart-shopping"></i></div>
      <input type="checkbox" id="show-menu"></input>
      <label for="show-menu" class="menu-icon"><i class="fa-solid fa-bars"></i></label>
      <div class="content">
        <ul class="links">
          <li><Link to='/CafeLetras/'>Inicio</Link></li>
          <li><Link to='#' className='hide-login'>Login</Link></li>
          <li>
            <Link to='/catalogo/' class="desktop-link">Catalogo<i class="fa-solid fa-angle-right"></i></Link>
            <input type="checkbox" id="show-features"/>
            <label for="show-features">Catalogo  <i class="fa-solid fa-angle-right"></i></label>
            <ul>
              <li><Link to='/catalogo/'>Catalogo</Link></li>
              <li><Link to='/catalogo/ninos'>Niños</Link></li>
              <li><Link to='/catalogo/adultos'>Adultos</Link></li>
              <li><Link to='/catalogo/hogar'>Hogar</Link></li>
            </ul>
          </li>
          <li><Link to='/reservas/'>Reservas</Link></li>
          <li><Link to='#'>Actividades</Link></li>
        </ul>
      </div>
      <div class="search">
            <div class="search_wrap">
                <div class="search_box">
                    <input type="text" class="input" placeholder="Buscar"/>
                    <div class="btn btn_common">
                        <i class="fas fa-search"></i>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  </div>

);

}



export default Nabvar;