import Header from '../components/header/Header';
import Nabvar from '../components/navbar/Nabvar';
import Slider from '../components/slider/Slider';

import Footer from '../components/footer/Footer';
import Subfooter from '../components/subfooter/Subfooter';
import SectionThree from '../components/section-three/Section_three';
import SectionFour from '../components/section-four/Section-four';
import SectionFive from '../components/section-five/Section-five';

function Catalogo(){
    return(
        <div>
            <Header/>
            <Nabvar/>
            <Slider/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>
            <Footer/>
            <Subfooter/>
        </div>
        
    );
}

export default Catalogo;