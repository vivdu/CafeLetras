import React from "react";
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Section-fourteen.css";
import Img from './Mask group.svg'
import PhotoOne from './Group 158.png'
import PhotoTwo from './Group 159.png'
import PhotoThree from './Group 160.png'
import PhotoFour from './Group 161.png'
import PhotoFive from './Group 162.png'
import PhotoSix from './Group 163.png'
import PhotoSeven from './Rectangle 135.png'
import PhotoEight from './Rectangle 102.png'
import PhotoNine from './Rectangle 103.png'
import PhotoTen from './Rectangle 97.png'
import PhotoEleven from './Rectangle 97 (1).png'
import PhotoTwelve from './Rectangle 97 (2).png'
import ModalLibro from '../modal/ModalLibro'

// import required modules
import { Pagination, Navigation } from "swiper";
import { useModal } from "../hooks/useModal";

export default function SectionNine() {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    const [isOpenModal2, openModal2, closeModal2] = useModal(false);
    const [isOpenModal3, openModal3, closeModal3] = useModal(false);
    const [isOpenModal4, openModal4, closeModal4] = useModal(false);
    const [isOpenModal5, openModal5, closeModal5] = useModal(false);
    const [isOpenModal6, openModal6, closeModal6] = useModal(false);
  return (
<section>
<img class="img_decoration_one" src={Img} alt='Decoracion'/>
    <h1>OFERTAS</h1>
    <Swiper
        slidesPerView={3}
        spaceBetween={10}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
        clickable: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"


        breakpoints={{

            320: {
                slidesPerView: 1,
                spaceBetween: 30,
                slidesPerGroup: 1,

                },

            768: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 2,
            },


            1024: {
                slidesPerView: 3,
                spaceBetween: 55,
                },
        }}>
        <SwiperSlide>
        <div class="content">
                    <div class="img-c">
                        <img src={PhotoOne} alt='Cocina divertida para niños'/>
                    </div>
                    <div class="details">
                        <div class="name">Cocina divertida para niños</div>
                        <div class="autor">VV.AA</div>
                        <div className="price">$70.000</div>
                        <Link to='/tienda' className="btn-buy">Comprar</Link>
                    </div>
                </div>
                <div class="botton">
                            <Link to='/tienda'></Link>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye" onClick={openModal1}></i>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="content">
                    <div class="img-c">
                        <img src={PhotoTwo} alt='1000 Chairs'/>
                    </div>
                    <div class="details">
                        <div class="name">1000 Chairs</div>
                        <div class="autor">Charlotte & Peter Fiell</div>
                        <div className="price">$80.000</div>
                        <Link to='/tienda' className="btn-buy">Comprar</Link>
                    </div>
                </div>
        <div class="botton">
                            <Link to='/tienda#'></Link>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye" onClick={openModal2}></i>
                        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="content">
                    <div class="img-c">
                        <img src={PhotoThree} alt='Como Construir un Jardin Vertical'/>
                    </div>
                    <div class="details">
                        <div class="name">Como Construir un Jardin Vertical</div>
                        <div class="autor">Martin Staffler</div>
                        <div className="price">$60.000</div>
                        <Link to='/tienda' className="btn-buy">Comprar</Link>
                    </div>
                </div>
        <div class="botton">
                            <Link to='/tienda'></Link>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye" onClick={openModal3}></i>
                        </div>
        </SwiperSlide>
        <SwiperSlide> <div class="content">
                    <div class="img-c">
                        <img src={PhotoFour} alt='Lorenzo Castillo'/>
                    </div>
                    <div class="details">
                        <div class="name">Lorenzo Castillo</div>
                        <div class="autor">Varios autores</div>
                        <div className="price">$70.000</div>
                        <Link to='/tienda' className="btn-buy">Comprar</Link>
                    </div>
                </div>
        <div class="botton">
                            <Link to='/tienda'></Link>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye" onClick={openModal4}></i>
                        </div>
        </SwiperSlide>
        <SwiperSlide> <div class="content">
                    <div class="img-c">
                        <img src={PhotoFive} alt='SOFÍA ASPE.INTERIORISMO'/>
                    </div>
                    <div class="details">
                        <div class="name">SOFÍA ASPE.INTERIORISMO</div>
                        <div class="autor">Alberto Ruy Sánchez</div>
                        <div className="price">$90.000</div>
                        <Link to='/tienda' className="btn-buy">Comprar</Link>
                    </div>
                </div>
        <div class="botton">
                            <Link to='/tienda'></Link>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye" onClick={openModal5}></i>
                        </div>
        </SwiperSlide>
        <SwiperSlide> <div class="content">
                    <div class="img-c">
                        <img src={PhotoSix} alt='LAGOM'/>
                    </div>
                    <div class="details">
                        <div class="name">LAGOM</div>
                        <div class="autor">Lola Akerstrom</div>
                        <div className="price">$65.000</div>
                        <Link to='/tienda' className="btn-buy">Comprar</Link>
                    </div>
                </div>
        <div class="botton">
                            <Link to='/tienda'></Link>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye" onClick={openModal6}></i>
                        </div>
        </SwiperSlide>
    </Swiper>
    <ModalLibro isOpen={isOpenModal1} closeModal={closeModal1}>
                                <img className="modal-img" src={PhotoSeven} alt='Cocina divertida para niños'/>
                                <div class="modal-details">
        <h3>Cocina divertida para niños</h3>
        <h4>VV.AA</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$70.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal2} closeModal={closeModal2}>
    <img className="modal-img" src={PhotoEight} alt='1000 Chairs'/>
                                <div class="modal-details">
        <h3>1000 Chairs</h3>
        <h4>Charlotte & Peter Fiell</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$80.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal3} closeModal={closeModal3}>
    <img className="modal-img" src={PhotoNine} alt='Como Construir un Jardin Vertical'/>
                                <div class="modal-details">
        <h3>Como Construir un Jardin Vertical</h3>
        <h4>Martin Staffler</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$100.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal4} closeModal={closeModal4}>
    <img className="modal-img" src={PhotoTen} alt='Lorenzo Castillo'/>
                                <div class="modal-details">
        <h3>Lorenzo Castillo</h3>
        <h4>Varios autores</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$70.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal5} closeModal={closeModal5}>
    <img className="modal-img" src={PhotoEleven} alt='SOFÍA ASPE.INTERIORISMO '/>
                                <div class="modal-details">
        <h3>SOFÍA ASPE.INTERIORISMO </h3>
        <h4>Alberto Ruy Sánchez</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$90.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal6} closeModal={closeModal6}>
    <img className="modal-img" src={PhotoTwelve} alt='LAGOM'/>
                                <div class="modal-details">
        <h3>LAGOM</h3>
        <h4>Lola Akerstrom</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$65.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
</section>
);
}
