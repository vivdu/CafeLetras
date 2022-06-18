import Header from '../components/header/Header';
import Nabvar from '../components/navbar/Nabvar';
import Slider from '../components/slider/Slider';
import SectionOne from '../components/section-one/Section_one';
import Reserve from '../components/reserve/Reserve';
import Menu from '../components/menu/Menu';
import Newsletter from '../components/newsletter/Newsletter';
import Footer from '../components/footer/Footer';
import Subfooter from '../components/subfooter/Subfooter';
import SectionTwo from '../components/section-two/Section-two';

function Home(){
    return(
        <div>
            <Header/>
            <Nabvar/>
            <Slider/>
            <Reserve/>
            <SectionOne/>
            <SectionTwo/>
            <Menu/>
            <Newsletter/>
            <Footer/>
            <Subfooter/>
        </div>
        
    );
}

export default Home;