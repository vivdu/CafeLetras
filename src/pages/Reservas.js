import React from 'react';
import Header from '../components/header/Header';
import Nabvar from '../components/navbar/Nabvar';
import Footer from '../components/footer/Footer';
import Subfooter from '../components/subfooter/Subfooter';
import FormReserva from '../components/Reservas/Form';

function Reservas(){
    return (
        <main>
        <Header />
        <Nabvar />
        <FormReserva />
        <Footer />
        <Subfooter />
        </main>
    )
}
export default Reservas;