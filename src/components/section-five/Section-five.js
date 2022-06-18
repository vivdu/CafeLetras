import React from "react";
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Section-five.css";
import Img from './Mask group.svg'
import PhotoOne from './Group 115.png'
import PhotoTwo from './Group 117.png'
import PhotoThree from './Group 116.png'
import PhotoFour from './Group 121.png'
import PhotoFive from './Group 122.png'
import PhotoSix from './Group 123.png'
import PhotoSeven from './Group 124.png'
import PhotoEight from './Group 128.png'
import PhotoNine from './Group 129.png'
import PhotoTen from './Group 127.png'
import PhotoEleven from './Group 126.png'
import PhotoTwelve from './Group 125.png'
import ModalLibro from '../modal/ModalLibro'

// import required modules
import { Pagination, Navigation } from "swiper";
import { useModal } from "../hooks/useModal";

export default function SectionFive() {
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
                        <img src={PhotoOne} alt='La Bestia'/>
                    </div>
                    <div class="details">
                        <div class="name">La Bestia</div>
                        <div class="autor">Carmen Mola</div>
                        <div className="price">$70.000</div>
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
                        <img src={PhotoTwo} alt='Escúchate'/>
                    </div>
                    <div class="details">
                        <div class="name">Escúchate</div>
                        <div class="autor">Prem Rawat</div>
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
                        <img src={PhotoThree} alt='FLEUR'/>
                    </div>
                    <div class="details">
                        <div class="name">FLEUR</div>
                        <div class="autor">Ariana Godoy</div>
                        <div className="price">$60.000</div>
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
                        <img src={PhotoFour} alt='Papá Goriot'/>
                    </div>
                    <div class="details">
                        <div class="name">Papá Goriot</div>
                        <div class="autor">Honoré de Balzac</div>
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
                        <img src={PhotoFive} alt='Al faro'/>
                    </div>
                    <div class="details">
                        <div class="name">Al faro</div>
                        <div class="autor">Virginia Woolf</div>
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
                        <img src={PhotoSix} alt='Las uvas de la ira'/>
                    </div>
                    <div class="details">
                        <div class="name">Las uvas de la ira</div>
                        <div class="autor">John Steinbeck</div>
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
                                <img className="modal-img" src={PhotoSeven} alt='La Bestia'/>
                                <div class="modal-details">
        <h3>La Bestia</h3>
        <h4>Carmen Mola</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$70.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal2} closeModal={closeModal2}>
    <img className="modal-img" src={PhotoEight} alt='Escúchate'/>
                                <div class="modal-details">
        <h3>Escúchate</h3>
        <h4>Prem Rawat</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$80.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal3} closeModal={closeModal3}>
    <img className="modal-img" src={PhotoNine} alt='FLEUR'/>
                                <div class="modal-details">
        <h3>FLEUR</h3>
        <h4>Ariana Godoy</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$60.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal4} closeModal={closeModal4}>
    <img className="modal-img" src={PhotoTen} alt='Papá Goriot'/>
                                <div class="modal-details">
        <h3>Papá Goriot</h3>
        <h4>Honoré de Balzac</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$70.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal5} closeModal={closeModal5}>
    <img className="modal-img" src={PhotoEleven} alt='Al faro'/>
                                <div class="modal-details">
        <h3>Al faro</h3>
        <h4>Virgina Woolf</h4>
        <h5>Sinopsis</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi, aut ad facilis cupiditate a quos numquam fugiat voluptatum perspiciatis quo explicabo incidunt nobis tenetur qui provident maiores. Eligendi, cumque.</p>
        <div class="modal-btns">
            <label for="">$90.000</label>
            <Link to='/tienda'><label for="checkAlert">Comprar</label></Link>
        </div>
                                </div>
    </ModalLibro>
    <ModalLibro isOpen={isOpenModal6} closeModal={closeModal6}>
    <img className="modal-img" src={PhotoTwelve} alt='Las uvas de la ira'/>
                                <div class="modal-details">
        <h3>Las uvas de la ira</h3>
        <h4>John Steinback</h4>
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
