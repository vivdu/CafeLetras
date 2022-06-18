import Header from '../components/header/Header';
import Nabvar from '../components/navbar/Nabvar';
import Slider from '../components/slider/Slider';

import Footer from '../components/footer/Footer';
import Subfooter from '../components/subfooter/Subfooter';
import SectionTwelve from '../components/section-twelve/Section-twelve';
import SectionThirteen from '../components/section-thirteen/Section-thirteen';
import SectionFourteen from '../components/section-fourteen/Section-fourteen';


function Hogar(){
    return(
        <div>
            <Header/>
            <Nabvar/>
            <Slider/>
            <SectionTwelve/>
            <SectionThirteen/>
            <SectionFourteen/>
            <Footer/>
            <Subfooter/>
        </div>
        
    );
}

export default Hogar;