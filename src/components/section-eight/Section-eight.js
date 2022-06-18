import React from "react";
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Section-eight.css";
import Img from './Mask group.svg'
import PhotoOne from './Group 131.png'
import PhotoTwo from './Group 132.png'
import PhotoThree from './Group 130.png'
import PhotoFour from './Group 135.png'
import PhotoFive from './Group 136.png'
import PhotoSix from './Group 137.png'
import PhotoSeven from './Group 142.png'
import PhotoEight from './Group 143.png'
import PhotoNine from './Group 138.png'
import PhotoTen from './Group 139.png'
import PhotoEleven from './Group 140.png'
import PhotoTwelve from './Group 141.png'
import ModalLibro from '../modal/ModalLibro'

// import required modules
import { Pagination, Navigation } from "swiper";
import { useModal } from "../hooks/useModal";

export default function SectionEight() {
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
                        <img src={PhotoOne} alt='Pájaro Hambriento'/>
                    </div>
                    <div class="details">
                        <div class="name">Pájaro Hambriento</div>
                        <div class="autor">Ernest Mccartney</div>
                        <div className="price">$120.000</div>
                        <Link to='/tienda' className="btn-buy">Comprar</Link>
                    </div>
                </div>
                <div class="botton">
                            <Link to='#'></Link>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye" onClick={openModal1}></i>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="content">
                    <div class="img-c">
                        <img src={PhotoTwo} alt='Caperucita Roja'/>
                    </div>
                    <div class="details">
                        <div class="name">Caperucita Roja</div>
                        <div class="autor">Charles Perrault</div>
                        <div className="price">$80.000</div>
                        <Link to='/tienda' className="btn-buy">Comprar</Link>
                    </div>
                </div>
        <div class="botton">
                            <Link to='#'></Link>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye" onClick={openModal2}></i>
                        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="content">
                    <div class="img-c">
                        <img src={PhotoThree} alt='Bulle und Pelle'/>
                    </div>
                    <div class="details">
                        <div class="name">Bulle und Pelle</div>
                        <div class="autor">Kilian Leypold</div>
                        <div className="price">$50.000</div>
                        <Link to='/tienda' className="btn-buy">Comprar</Link>
                    </div>
                </div>
        <div class="botton">
                            <Link to='#'></Link>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye" onClick={openModal3}></i>
                        </div>
        </SwiperSlide>
        <SwiperSlide> <div class="content">
                    <div class="img-c">
                        <img src={PhotoFour} alt='Las aventuras de Pinocho'/>
                    </div>
                    <div class="details">
                        <div class="name">Las aventuras de Pinocho</div>
                        <div class="autor">Gianni Rodari</div>
                        <div className="price">$70.000</div>
                        <Link to='/tienda' className="btn-buy">Comprar</Link>
                    </div>
                </div>
        <div class="botton">
                            <Link to='#'></Link>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye" onClick={openModal4}></i>
                        </div>
        </SwiperSlide>
        <SwiperSlide> <div class="content">
                    <div class="img-c">
                        <img src={PhotoFive} alt='Aquellas Mujercitas'/>
                    </div>
                    <div class="details">
                        <div class="name">Aquellas Mujercitas</div>
                        <div class="autor">Louisa May Alcott</div>
                        <div className="price">$90.000</div>
                        <Link to='/tienda' className="btn-buy">Comprar</Link>
                    </div>
                </div>
        <div class="botton">
                            <Link to='#'></Link>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye" onClick={openModal5}></i>
                        </div>
        </SwiperSlide>
        <SwiperSlide> <div class="content">
                    <div class="img-c">
                        <img src={PhotoSix} alt='La Historia Interminable'/>
                    </div>
                    <div class="details">
                        <div class="name">La Historia Interminable</div>
                        <div class="autor">Michael Ende</div>
                        <div className="price">$65.000</div>
                        <Link to='/tienda' className="btn-buy">Comprar</Link>
                    </div>
                </div>
        <div class="botton">
                            <Link to='#'></Link>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye" onClick={openModal6}></i>
                        </div>
        </SwiperSlide>
    </Swiper>
    <ModalLibro isOpen={isOpenModal1} closeModal={closeModal1}>
                                <img className="modal-img" src={PhotoSeven} alt='Pájaro Hambriento'/>
                                <div class="modal-details">
        <h3>Pájaro Hambriento</h3>
        <h4>Ernest Mccartney</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$120.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal2} closeModal={closeModal2}>
    <img className="modal-img" src={PhotoEight} alt='Caperucita Roja'/>
                                <div class="modal-details">
        <h3>Caperucita Roja</h3>
        <h4>Charles Perrault</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$80.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal3} closeModal={closeModal3}>
    <img className="modal-img" src={PhotoNine} alt='Bulle und Pelle'/>
                                <div class="modal-details">
        <h3>Bulle und Pelle</h3>
        <h4>Kilian Leypold</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$100.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal4} closeModal={closeModal4}>
    <img className="modal-img" src={PhotoTen} alt='Las aventuras de Pinocho'/>
                                <div class="modal-details">
        <h3>Las aventuras de Pinocho</h3>
        <h4>Gianni Rodari</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$70.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal5} closeModal={closeModal5}>
    <img className="modal-img" src={PhotoEleven} alt='Aquellas Mujercitas'/>
                                <div class="modal-details">
        <h3>Aquellas Mujercitas</h3>
        <h4>Louisa May Alcott</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$90.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal6} closeModal={closeModal6}>
    <img className="modal-img" src={PhotoTwelve} alt='La Historia Interminable'/>
                                <div class="modal-details">
        <h3>La Historia Interminable'</h3>
        <h4>Louisa May Alcott</h4>
        <h5>Michael Ende</h5>
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
