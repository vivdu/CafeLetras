import React from "react";
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Section-four.css";
import Img_Two from './Mask group (1).svg'
import PhotoOne from './Rectangle 102.png'
import PhotoTwo from './Rectangle 103.png'
import PhotoThree from './Rectangle 104.png'
import PhotoFour from './Rectangle 39.png'
import PhotoFive from './Rectangle 101.png'
import PhotoSix from './Rectangle 100 (1).png'
import ModalLibro from '../modal/ModalLibro'

// import required modules
import { Pagination, Navigation } from "swiper";
import { useModal } from "../hooks/useModal";

export default function SectionFour() {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    const [isOpenModal2, openModal2, closeModal2] = useModal(false);
    const [isOpenModal3, openModal3, closeModal3] = useModal(false);
    const [isOpenModal4, openModal4, closeModal4] = useModal(false);
    const [isOpenModal5, openModal5, closeModal5] = useModal(false);
    const [isOpenModal6, openModal6, closeModal6] = useModal(false);
  return (
<section className="sectionFour">
<img class="activities-decoration" src={Img_Two} alt='Decoracion'/> 
    <h1>LO MÁS VENDIDO</h1>
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
            <div className="bgFour">
        <div class="contentFour">
                    <div class="img-c">
                        <img src={PhotoOne} alt='Wayward witch'/>
                    </div>
                    <div class="details">
                        <div class="name">Wayward witch</div>
                        <div class="autor">Zoraida Córdova</div>
                        <div className="price">$80.000</div>
                        <Link to='/tienda' className="btn-buy">Comprar</Link>
                    </div>
                </div>
                <div class="botton">
                            <Link to='/tienda'></Link>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye" onClick={openModal1}></i>
                </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bgFour">
        <div class="content">
                    <div class="img-c">
                        <img src={PhotoTwo} alt='Ruido'/>
                    </div>
                    <div class="details">
                        <div class="name">Ruido</div>
                        <div class="autor">Daniel Kahneman</div>
                        <div className="price">$80.000</div>
                        <Link to='/tienda' className="btn-buy">Comprar</Link>
                    </div>
                </div>
        <div class="botton">
                            <Link to='/tienda'></Link>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye" onClick={openModal2}></i>
                        </div>
                        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="bgFour">
        <div class="content">
                    <div class="img-c">
                        <img src={PhotoThree} alt='Cincuenta Sombras de Grey'/>
                    </div>
                    <div class="details">
                        <div class="name">Cincuenta Sombras de Grey</div>
                        <div class="autor">E. L. James</div>
                        <div className="price">$100.000</div>
                        <Link to='/tienda' className="btn-buy">Comprar</Link>
                    </div>
                </div>
        <div class="botton">
                            <Link to='/tienda'></Link>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye" onClick={openModal3}></i>
                        </div>
                        </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="bgFour">
            <div class="content">
                    <div class="img-c">
                        <img src={PhotoFour} alt='Ariadna'/>
                    </div>
                    <div class="details">
                        <div class="name">Ariadna</div>
                        <div class="autor">Jennifer Saint</div>
                        <div className="price">$70.000</div>
                        <Link to='/tienda' className="btn-buy">Comprar</Link>
                    </div>
                </div>
        <div class="botton">
                            <Link to='/tienda'></Link>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye" onClick={openModal4}></i>
                        </div>
                        </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="bgFour">
            <div class="content">
                    <div class="img-c">
                        <img src={PhotoFive} alt='Crimen y Castigo<'/>
                    </div>
                    <div class="details">
                        <div class="name">Crimen y Castigo</div>
                        <div class="autor">Fiódor Dostoyevski</div>
                        <div className="price">$90.000</div>
                        <Link to='/tienda' className="btn-buy">Comprar</Link>
                    </div>
                </div>
        <div class="botton">
                            <Link to='/tienda'></Link>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye" onClick={openModal5}></i>
                        </div>
                        </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="bgFour">
            <div class="content">
                    <div class="img-c">
                        <img src={PhotoSix} alt='Orgullo y Prejuicio'/>
                    </div>
                    <div class="details">
                        <div class="name">Orgullo y Prejuicio</div>
                        <div class="autor">Jane Austen</div>
                        <div className="price">$65.000</div>
                        <Link to='/tienda' className="btn-buy">Comprar</Link>
                    </div>
                </div>
        <div class="botton">
                            <Link to='/tienda'></Link>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye" onClick={openModal6}></i>
                        </div>
                        </div>
        </SwiperSlide>
    </Swiper>
    <ModalLibro isOpen={isOpenModal1} closeModal={closeModal1}>
                                <img className="modal-img" src={PhotoOne} alt='Wayward witch'/>
                                <div class="modal-details">
        <h3>Wayward witch</h3>
        <h4>Zoraida Córdova</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$120.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal2} closeModal={closeModal2}>
    <img className="modal-img" src={PhotoTwo} alt='Ruido'/>
                                <div class="modal-details">
        <h3>Ruido</h3>
        <h4>Daniel Kahneman</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$80.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal3} closeModal={closeModal3}>
    <img className="modal-img" src={PhotoThree} alt='Cincuenta Sombras de Grey'/>
                                <div class="modal-details">
        <h3>Cincuenta Sombras de Grey</h3>
        <h4>E. L. James</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$100.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal4} closeModal={closeModal4}>
    <img className="modal-img" src={PhotoFour} alt='Ariadna'/>
                                <div class="modal-details">
        <h3>Ariadna</h3>
        <h4>Jennifer Saint</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$70.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal5} closeModal={closeModal5}>
    <img className="modal-img" src={PhotoFive} alt='Crimen y Castigo'/>
                                <div class="modal-details">
        <h3>Crimen y Castigo</h3>
        <h4>Fiódor Dostoyevski</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$90.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal6} closeModal={closeModal6}>
    <img className="modal-img" src={PhotoSix} alt='Orgullo y Prejuicio'/>
                                <div class="modal-details">
        <h3>Orgullo y Prejuicio</h3>
        <h4>Jane Austen</h4>
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
