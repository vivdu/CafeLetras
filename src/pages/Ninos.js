import Header from '../components/header/Header';
import Nabvar from '../components/navbar/Nabvar';
import Slider from '../components/slider/Slider';

import Footer from '../components/footer/Footer';
import Subfooter from '../components/subfooter/Subfooter';
import SectionSix from '../components/section-six/Section-six';
import SectionSeven from '../components/section-seven/Section-seven';
import SectionEight from '../components/section-eight/Section-eight';

function Ninos(){
    return(
        <div>
            <Header/>
            <Nabvar/>
            <Slider/>
            <SectionSix/>
            <SectionSeven/>
            <SectionEight/>
            <Footer/>
            <Subfooter/>
        </div>
        
    );
}

export default Ninos;