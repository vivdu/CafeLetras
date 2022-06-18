import React from "react";
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Section-one.css";
import Img from './Mask group.svg'
import PhotoOne from './Rectangle 94.png'
import PhotoTwo from './Rectangle 69 (1).png'
import PhotoThree from './Rectangle 74.png'
import PhotoFour from './Rectangle 94 (1).png'
import PhotoFive from './Rectangle 94 (2).png'
import PhotoSix from './Rectangle 94 (3).png'
import ModalLibro from '../modal/ModalLibro'

// import required modules
import { Pagination, Navigation } from "swiper";
import { useModal } from "../hooks/useModal";

export default function SectionOne() {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    const [isOpenModal2, openModal2, closeModal2] = useModal(false);
    const [isOpenModal3, openModal3, closeModal3] = useModal(false);
    const [isOpenModal4, openModal4, closeModal4] = useModal(false);
    const [isOpenModal5, openModal5, closeModal5] = useModal(false);
    const [isOpenModal6, openModal6, closeModal6] = useModal(false);
  return (
<section>
<img class="img_decoration_one" src={Img} alt='Decoracion'/>
    <h1>NOVEDADES</h1>
    <Swiper
        slidesPerView={3}
        spaceBetween={10}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
        clickable: true,
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
                        <img src={PhotoOne} alt='Mision Economía'/>
                    </div>
                    <div class="details">
                        <div class="name">Misión Economía</div>
                        <div class="autor">Mariana Mazzucato</div>
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
                        <img src={PhotoTwo} alt='3 Eras'/>
                    </div>
                    <div class="details">
                        <div class="name">3_Eras</div>
                        <div class="autor">José Luis Brea</div>
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
                        <img src={PhotoThree} alt='Crimenes Selectos'/>
                    </div>
                    <div class="details">
                        <div class="name">Crimenes Selectos</div>
                        <div class="autor">Edogawa Rampo</div>
                        <div className="price">$100.000</div>
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
                        <img src={PhotoFour} alt='Antes de Diciembre'/>
                    </div>
                    <div class="details">
                        <div class="name">Antes de Diciembre</div>
                        <div class="autor">Joana Marcus</div>
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
                        <img src={PhotoFive} alt='Un curso de meditacion'/>
                    </div>
                    <div class="details">
                        <div class="name">Un Curso de Meditación: OSHO</div>
                        <div class="autor">Urano</div>
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
                        <img src={PhotoSix} alt='El demonio de Abernnios'/>
                    </div>
                    <div class="details">
                        <div class="name">El Demonio de Abernnios</div>
                        <div class="autor">Bernard Torelló</div>
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
                                <img className="modal-img" src={PhotoOne} alt='Mision Economia'/>
                                <div class="modal-details">
        <h3>Misión Economía</h3>
        <h4>Mariana Mazzucato</h4>
        <h5>Sinopsis</h5>
        <p>Una crítica contundente y muy necesaria del capitalismo moderno en la que la galardonada economista internacional sostiene que, para resolver las crisis a las que nos enfrentamos, debemos ser innovadores.</p>
        <div class="modal-btns">
            <label for="">$120.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal2} closeModal={closeModal2}>
    <img className="modal-img" src={PhotoTwo} alt='3 Eras'/>
                                <div class="modal-details">
        <h3>3_Eras</h3>
        <h4>José Luis Brea</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$80.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal3} closeModal={closeModal3}>
    <img className="modal-img" src={PhotoThree} alt='Crimines Selectos'/>
                                <div class="modal-details">
        <h3>Crimenes Selectos</h3>
        <h4>Edogawa Rampo</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$100.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal4} closeModal={closeModal4}>
    <img className="modal-img" src={PhotoFour} alt='Antes de Diciembre'/>
                                <div class="modal-details">
        <h3>Antes de Diciembre</h3>
        <h4>Joana Marcus</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$70.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal5} closeModal={closeModal5}>
    <img className="modal-img" src={PhotoFive} alt='Un curso de meditacion'/>
                                <div class="modal-details">
        <h3>Un Curso de Meditación: OSHO</h3>
        <h4>Urano</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$90.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal6} closeModal={closeModal6}>
    <img className="modal-img" src={PhotoSix} alt='El demonio de Abernnios'/>
                                <div class="modal-details">
        <h3>El Demonio de Abernnios</h3>
        <h4>Bernard Torelló</h4>
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
