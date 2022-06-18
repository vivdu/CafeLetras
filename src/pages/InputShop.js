import React from 'react';
import Header from '../components/header/Header';
import Nabvar from '../components/navbar/Nabvar';
import Footer from '../components/footer/Footer';
import Subfooter from '../components/subfooter/Subfooter';
import FormShop from '../components/InputForm/Validacion';

function InputShop(){
    return (
        <main>
        <Header />
        <Nabvar />
        <FormShop />
        <Footer />
        <Subfooter />
        </main>
    )
}
export default InputShop;