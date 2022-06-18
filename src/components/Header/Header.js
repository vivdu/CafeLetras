import { Link } from 'react-router-dom';
import './Header.css';
import Logo from './logotipo.svg'

function Header (){
    return(
    <div id="d-header-one">
        <div class="d-header-one-nav">
        <img src={Logo} alt="logo"/>
        <Link to=""><i class="fa-solid fa-user"></i></Link>
        <Link to='/tienda' class="b-shop"><i class="fa-solid fa-cart-shopping"></i></Link>
        </div>
    </div>
    );
}


export default Header;