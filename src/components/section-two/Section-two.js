import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Section-two.css";
import Img_Two from './Mask group (1).svg'
import PhotoOne from './thought-catalog-mmWqrsjZ4Lw-unsplash (1).jpg'
import PhotoTwo from './cathryn-lavery-fMD_Cru6OTk-unsplash (1).jpg'
import PhotoThree from './brooke-cagle - uHVRvDr7pg-unsplash (1).jpg'

// import required modules
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

export default function SectionTwo() {
  return (
<section className="sectionTwo">
<img class="activities-decoration" src={Img_Two} alt='Decoracion'/>
    <h1>ACTIVIDADES</h1>
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
        }}>
        <SwiperSlide>
        <div class="contentTwo">
                    <div class="imgTwo">
                        <img src={PhotoOne}/>
                    </div>
                    <div class="detailsTwo">
                        <div class="title">CLUB DE LECTURA <br/> PARA TODOS</div>
                        <div class="description">
                            <p>Aumenta tu capacidad de concentración, mejora y amplía tu lenguaje, incrementa tu conocimiento y muchas ventajas más tiene el Club de lectura. Es un espacio para fomentar la lectura de literatura y generar espacios de participación y construcción colectiva de saberes.</p>
                            </div>
                        <button className="btnTwo"><Link to='/reserva'>Reservar</Link></button>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="contentTwo">
                    <div class="imgTwo">
                        <img src={PhotoTwo}/>
                    </div>
                    <div class="detailsTwo">
                        <div class="title">CLUB DE LECTURA <br/> PARA TODOS</div>
                        <div class="description">
                            <p>Aumenta tu capacidad de concentración, mejora y amplía tu lenguaje, incrementa tu conocimiento y muchas ventajas más tiene el Club de lectura. Es un espacio para fomentar la lectura de literatura y generar espacios de participación y construcción colectiva de saberes.</p>
                            </div>
                            <button className="btnTwo"><Link to='/reserva'>Reservar</Link></button>
                    </div>
                </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="contentTwo">
                    <div class="imgTwo">
                        <img src={PhotoThree}/>
                    </div>
                    <div class="detailsTwo">
                        <div class="title">CLUB DE LECTURA <br/> PARA TODOS</div>
                        <div class="description">
                            <p>Aumenta tu capacidad de concentración, mejora y amplía tu lenguaje, incrementa tu conocimiento y muchas ventajas más tiene el Club de lectura. Es un espacio para fomentar la lectura de literatura y generar espacios de participación y construcción colectiva de saberes.</p>
                            </div>
                            <button className="btnTwo"><Link to='/reserva'>Reservar</Link></button>
                    </div>
                </div>
        </SwiperSlide>
    </Swiper>

</section>
);
}
