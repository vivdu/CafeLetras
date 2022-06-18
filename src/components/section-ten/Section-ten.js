import React from "react";
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Section-ten.css";
import Img_Two from './Mask group (1).svg'
import PhotoOne from './Rectangle 96.png'
import PhotoTwo from './Rectangle 111.png'
import PhotoThree from './Rectangle 112.png'
import PhotoFour from './Rectangle 119.png'
import PhotoFive from './Rectangle 120.png'
import PhotoSix from './Rectangle 121.png'
import ModalLibro from '../modal/ModalLibro'

// import required modules
import { Pagination, Navigation } from "swiper";
import { useModal } from "../hooks/useModal";

export default function SectionTen() {
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
                        <img src={PhotoOne} alt='Como diente de león'/>
                    </div>
                    <div class="details">
                        <div class="name">Como diente de león</div>
                        <div class="autor">Pilar Fernandez</div>
                        <div className="price">$80.000</div>
                        <Link to='/tienda' className="btn-buy">Comprar</Link>
                    </div>
                </div>
                <div class="botton">
                            <Link to='#'></Link>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye" onClick={openModal1}></i>
                </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bgFour">
        <div class="content">
                    <div class="img-c">
                        <img src={PhotoTwo} alt='Mi tío Oswald'/>
                    </div>
                    <div class="details">
                        <div class="name">Mi tío Oswald</div>
                        <div class="autor">Roald Dalh</div>
                        <div className="price">$80.000</div>
                        <Link to='/tienda' className="btn-buy">Comprar</Link>
                    </div>
                </div>
        <div class="botton">
                            <Link to='#'></Link>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye" onClick={openModal2}></i>
                        </div>
                        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="bgFour">
        <div class="content">
                    <div class="img-c">
                        <img src={PhotoThree} alt='Escupiré sobre vuestra tumba'/>
                    </div>
                    <div class="details">
                        <div class="name">Escupiré sobre vuestra tumba</div>
                        <div class="autor">Boris Vian</div>
                        <div className="price">$100.000</div>
                        <Link to='/tienda' className="btn-buy">Comprar</Link>
                    </div>
                </div>
        <div class="botton">
                            <Link to='#'></Link>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye" onClick={openModal3}></i>
                        </div>
                        </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="bgFour">
            <div class="content">
                    <div class="img-c">
                        <img src={PhotoFour} alt='El retrato de Dorian Gray'/>
                    </div>
                    <div class="details">
                        <div class="name">El retrato de Dorian Gray</div>
                        <div class="autor">Oscar Wilde</div>
                        <div className="price">$70.000</div>
                        <Link to='/tienda' className="btn-buy">Comprar</Link>
                    </div>
                </div>
        <div class="botton">
                            <Link to='#'></Link>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye" onClick={openModal4}></i>
                        </div>
                        </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="bgFour">
            <div class="content">
                    <div class="img-c">
                        <img src={PhotoFive} alt='El embrujo de Shanghai'/>
                    </div>
                    <div class="details">
                        <div class="name">El embrujo de Shanghai</div>
                        <div class="autor">Juan Marsé</div>
                        <div className="price">$90.000</div>
                        <Link to='/tienda' className="btn-buy">Comprar</Link>
                    </div>
                </div>
        <div class="botton">
                            <Link to='#'></Link>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye" onClick={openModal5}></i>
                        </div>
                        </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="bgFour">
            <div class="content">
                    <div class="img-c">
                        <img src={PhotoSix} alt='Moby Dick'/>
                    </div>
                    <div class="details">
                        <div class="name">Moby Dick</div>
                        <div class="autor"> Herman Melville</div>
                        <div className="price">$65.000</div>
                        <Link to='/tienda' className="btn-buy">Comprar</Link>
                    </div>
                </div>
        <div class="botton">
                            <Link to='#'></Link>
                            <div><i class="fa-solid fa-heart"></i></div>
                            <i class="fa-solid fa-eye" onClick={openModal6}></i>
                        </div>
                        </div>
        </SwiperSlide>
    </Swiper>
    <ModalLibro isOpen={isOpenModal1} closeModal={closeModal1}>
                                <img className="modal-img" src={PhotoOne} alt='Como diente de león'/>
                                <div class="modal-details">
        <h3>Como diente de león</h3>
        <h4>Pilar Fernandez</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$80.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal2} closeModal={closeModal2}>
    <img className="modal-img" src={PhotoTwo} alt='Mi tío Oswald'/>
                                <div class="modal-details">
        <h3>Mi tío Oswald</h3>
        <h4>Roald Dalh</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$80.000</label>
            <Link to='/compras'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal3} closeModal={closeModal3}>
    <img className="modal-img" src={PhotoThree} alt='Escupiré sobre vuestra tumba'/>
                                <div class="modal-details">
        <h3>Escupiré sobre vuestra tumba</h3>
        <h4>Boris Vian</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$100.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal4} closeModal={closeModal4}>
    <img className="modal-img" src={PhotoFour} alt='El retrato de Dorian Gray'/>
                                <div class="modal-details">
        <h3>El retrato de Dorian Gray</h3>
        <h4>Oscar Wilde</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$70.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal5} closeModal={closeModal5}>
    <img className="modal-img" src={PhotoFive} alt='El embrujo de Shanghai'/>
                                <div class="modal-details">
        <h3>El embrujo de Shanghai</h3>
        <h4>Juan Marsé</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$90.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal6} closeModal={closeModal6}>
    <img className="modal-img" src={PhotoSix} alt='Moby Dick'/>
                                <div class="modal-details">
        <h3>Moby Dick</h3>
        <h4>Herman Melville</h4>
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
