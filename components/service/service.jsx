import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Autoplay, Navigation } from 'swiper/modules';
 
 
const Service = () => {
    const swiperRef = useRef(null);

    const slideNext = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    };
  
    const slidePrev = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slidePrev();
      }
    };
    return (
        <div className="service-area py-140">
            <div className="container">
                <div className="section-title-area pb-70">
                    <div className="section-title with-border pb-5 pb-lg-0">
                        <h4 className="mb-0 font-size-50">Fournir un service <br/> unique et de qualité</h4>
                    </div>
                    <div className="section-banner text-white align-self-center p-7" style={{backgroundImage:'url(1-1.png)'}}  >
                        <h2 className="info mb-0">Avez-vous des projets? <span>048 70 66 03</span></h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="custom-arrow-holder position-relative">
                            
                            <Swiper
                                className="service-slider swiper-arrow with-bg_white"
                                ref={swiperRef}
 
                             breakpoints={{
                                // when window width is >= 320px
                                500: {
                                  slidesPerView: 1,
                                },
                                // when window width is >= 480px
                                700: {
                                  slidesPerView: 2,
                                  spaceBetween:20

                                },
                                // when window width is >= 640px
                                950: {
                                  slidesPerView: 3,
                                  spaceBetween:30
                                },
                              }}
        loop={true} 
      navigation
       pagination={{ clickable: true }}
      modules= {[Navigation,Autoplay]}
      autoplay={{ delay: 2000 }}
                            >
                                <SwiperSlide>
                                    <div className="service-item">
                                        <div className="service-img">
                                            <a href="service.html">
                                                <img src="1-1-371x254.jpg" alt="Service Image"/>
                                            </a>
                                            <div className="add-action text-white">
                                                <h2 className="title mb-0"><a href="single-service.html">Béton Pret à l'emploi</a></h2>
                                                <div className="icon">
                                                    <a className="text-lowercase" href="mailto://info@example.com">
                                                        <i className="ion-ios-plus-empty"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-item">
                                        <div className="service-img">
                                            <a href="service.html">
                                                <img src="1-2-371x254.jpg" alt="Service Image"/>
                                            </a>
                                            <div className="add-action text-white">
                                                <h2 className="title mb-0"><a href="single-service.html">Construction de bâtiments, travaux publics et hydraulique</a></h2>
                                                <div className="icon">
                                                    <a className="text-lowercase" href="mailto://info@example.com">
                                                        <i className="ion-ios-plus-empty"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-item">
                                        <div className="service-img">
                                            <a href="service.html">
                                                <img src="1-3-371x254.jpg" alt="Service Image"/>
                                            </a>
                                            <div className="add-action text-white">
                                                <h2 className="title mb-0"><a href="single-service.html">Rénovation et la réhabilitation</a></h2>
                                                <div className="icon">
                                                    <a className="text-lowercase" href="mailto://info@btph-hasnaoui.com">
                                                        <i className="ion-ios-plus-empty"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
