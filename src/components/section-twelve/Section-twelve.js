import React from "react";
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Section-twelve.css";
import Img from './Mask group.svg'
import PhotoOne from './Rectangle 122.png'
import PhotoTwo from './Rectangle 127.png'
import PhotoThree from './Rectangle 124.png'
import PhotoFour from './Rectangle 123.png'
import PhotoFive from './Rectangle 125.png'
import PhotoSix from './Rectangle 126.png'
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
    <h1>PARA EL HOGAR</h1>
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
                        <img src={PhotoOne} alt='Recetas de Fiestas Para Niños'/>
                    </div>
                    <div class="details">
                        <div class="name">Recetas de Fiestas Para Niños</div>
                        <div class="autor">Equipo Editorial</div>
                        <div className="price">$120.000</div>
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
                        <img src={PhotoTwo} alt='1080 Recetas de Cocina'/>
                    </div>
                    <div class="details">
                        <div class="name">1080 Recetas de Cocina</div>
                        <div class="autor">Simone Ortega</div>
                        <div className="price">$80.000</div>
                        <Link to='/tienda' className="btn-buy">Comprar</Link>
                    </div>
                </div>
        <div class="botton">
                            <Link to='/tienda'></Link>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye" onClick={openModal2}></i>
                        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="content">
                    <div class="img-c">
                        <img src={PhotoThree} alt='Recetas De Postres'/>
                    </div>
                    <div class="details">
                        <div class="name">Recetas De Postres</div>
                        <div class="autor">Claudio Sadler</div>
                        <div className="price">$50.000</div>
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
                        <img src={PhotoFour} alt='Recetas de cocina con Crock-Pot'/>
                    </div>
                    <div class="details">
                        <div class="name">Recetas de cocina con Crock-Pot</div>
                        <div class="autor">Susaeta</div>
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
                        <img src={PhotoFive} alt='El Arte de la Cocina Francesa'/>
                    </div>
                    <div class="details">
                        <div class="name">El Arte de la Cocina Francesa</div>
                        <div class="autor">Julia Child</div>
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
                        <img src={PhotoSix} alt='La cocina de mamá y papá'/>
                    </div>
                    <div class="details">
                        <div class="name">La cocina de mamá y papá</div>
                        <div class="autor">Daniela Vidal, Nicolás de Zubiria</div>
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
                                <img className="modal-img" src={PhotoOne} alt='Recetas de Fiestas Para Niños'/>
                                <div class="modal-details">
        <h3>Recetas de Fiestas Para Niños</h3>
        <h4>Equipo Editorial</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$120.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal2} closeModal={closeModal2}>
    <img className="modal-img" src={PhotoTwo} alt='1080 Recetas de Cocina'/>
                                <div class="modal-details">
        <h3>1080 Recetas de Cocina</h3>
        <h4>Equipo Editorial</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$80.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal3} closeModal={closeModal3}>
    <img className="modal-img" src={PhotoThree} alt='Recetas De Postres'/>
                                <div class="modal-details">
        <h3>Recetas De Postres</h3>
        <h4>Mejores Cuentistas</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$100.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal4} closeModal={closeModal4}>
    <img className="modal-img" src={PhotoFour} alt='Recetas de cocina con Crock-Pot'/>
                                <div class="modal-details">
        <h3>Recetas de cocina con Crock-Pot</h3>
        <h4>Manuel Nuñez Singala</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$70.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal5} closeModal={closeModal5}>
    <img className="modal-img" src={PhotoFive} alt='El Arte de la Cocina Francesa'/>
                                <div class="modal-details">
        <h3>El Arte de la Cocina Francesa</h3>
        <h4>José Luis Canes Vallet</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$90.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal6} closeModal={closeModal6}>
    <img className="modal-img" src={PhotoSix} alt='La cocina de mamá y papá'/>
                                <div class="modal-details">
        <h3>La cocina de mamá y papá</h3>
        <h4>Sally Rippin</h4>
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
