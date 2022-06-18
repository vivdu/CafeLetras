import Header from '../components/header/Header';
import Nabvar from '../components/navbar/Nabvar';
import Slider from '../components/slider/Slider';

import Footer from '../components/footer/Footer';
import Subfooter from '../components/subfooter/Subfooter';
import SectionNine from '../components/section-nine/Section-nine';
import SectionTen from '../components/section-ten/Section-ten';
import SectionEleven from '../components/section-eleven/Section-eleven';

function Adultos(){
    return(
        <div>
            <Header/>
            <Nabvar/>
            <Slider/>
            <SectionNine/>
            <SectionTen/>
            <SectionEleven/>
            <Footer/>
            <Subfooter/>
        </div>
        
    );
}

export default Adultos;