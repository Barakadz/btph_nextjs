import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

 
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Projectt = () => {
    return (
        <>
            < br />
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-12">
                        <div className="project-banner">
                            <div className="pro-bnr-img">
                                <img src="Hcancereux.jpg" alt="" srcset="" />
                            </div>
                            <div class="pro-bnr-text">
                                <h2>Nos projets</h2>
                                <p>Quelle que soit la portée de votre projet, BTP HASNAOUI exécute les travaux de manière à répondre aux besoins de ses clients de la façon la plus rapide et la plus rentable, et ce, toujours avec un souci de qualité et de sécurité.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7 col-12">
                        <h3 class="sidebar-title mb-5">Projets en cours :</h3>
                        <div className="swiper-container">
      <div className="swiper-button-prev">←</div>
      <div className="swiper-button-next">→</div>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="mdm.jpg" className="projectimg" alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src="mdm.jpg" className="projectimg" alt="Slide 2" /></SwiperSlide>
        <SwiperSlide><img src="mdm.jpg" className="projectimg" alt="Slide 3" /></SwiperSlide>
        <SwiperSlide><img src="mdm.jpg" className="projectimg" alt="Slide 4" /></SwiperSlide>
      </Swiper>
    </div>
                        </div>








                </div>
            </div>

        </>
    )
}

export default Projectt;