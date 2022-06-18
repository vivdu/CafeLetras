import React from 'react';
import Header from '../components/header/Header';
import Nabvar from '../components/navbar/Nabvar';
import Footer from '../components/footer/Footer';
import Subfooter from '../components/subfooter/Subfooter';
import PayCart from '../components/PayBook/PayCart';

function PayBook(){
    return (
        <main>
        <Header />
        <Nabvar />
        <PayCart />
        <Footer />
        <Subfooter />
        </main>
    )
}
export default PayBook;