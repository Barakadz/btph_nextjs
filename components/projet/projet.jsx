import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Autoplay, Navigation } from 'swiper/modules';
import React, { useRef } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";



const Projet =()=>{
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
    return(
        <div>
      
<div class="project-area ">   
            <div class="project-inner"  >
                <div class="button-wrap text-end">
                    <a class="btn btn-project" href="project.html"><span>Voir plus <FaArrowRightLong />
</span></a>
                </div>             
                   
                <h2   class="text-center   text-white text-uppercase mb-4 mt-2" style={{position:'relative'}} ><FaQuoteLeft id="iconleft" style={{position:'absolute',top:'0',fontSize:'1.5rem'}}/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span  >50 ans de réalisations</span>&nbsp;&nbsp;&nbsp; <FaQuoteRight style={{position:'absolute',top:'0',fontSize:'1.5rem'}}/>
 </h2>                          
                
                <div class="container-fluid p-0">
                    <div class="project-with-title">
                        <div class="section-title-area text-white h-100">
                            <div class="title-with-arrow">
 
                                <div class="project-button-wrap">
                                    <div class="project-button-prev"onClick={slidePrev}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>                                    </div>
                                    <div class="project-button-next"onClick={slideNext}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <Swiper
                ref={swiperRef}

                             breakpoints={{
                                // when window width is >= 320px
                                500: {
                                  slidesPerView: 1,
                                },
                                // when window width is >= 480px
                                700: {
                                  slidesPerView: 2,
                                },
                                // when window width is >= 640px
                                950: {
                                  slidesPerView: 4,
                                },
                              }}
      spaceBetween={0}
       loop={true} 
      navigation
       pagination={{ clickable: true }}
      modules= {[Navigation,Autoplay]}
      autoplay={{ delay: 2000 }}

    >              

      <SwiperSlide><div class="project-item">
      <a class="project-img" href="project.html">
                                            <img src="IMG_6899.jpg"height="auto"  alt="Project Image"/>
                                        </a>
                                        <div class="project-content">
                                            <span class="sub-title">CONSTRUCTION</span>
                                            <h3 class="title mb-0"><a href="project.html">RESIDENCE EL FATH</a></h3>
                                            <span>Délais: 24 mois</span>
                                        </div>
                                    </div></SwiperSlide>
      <SwiperSlide>   <div class="project-item">
                                        <a class="project-img" href="project.html">
                                            <img src="IMG_3759.jpg" height="auto" alt="Project Image"/>
                                        </a>
                                        <div class="project-content">
                                            <span class="sub-title">CONSTRUCTION</span>
                                            <h3 class="title mb-0 text-uppercase"><a href="project.html">Hotel Plaza oran</a></h3>
                                            <span>Délais: 29 mois</span>
                                        </div>
                                    </div></SwiperSlide>
      <SwiperSlide> <div class="project-item">
                                        <a class="project-img" href="project.html">
                                            <img src="2024-02-19.jpg" height="auto" alt="Project Image"/>
                                        </a>
                                        <div class="project-content">
                                            <span class="sub-title">CONSTRUCTION</span>
                                            <h3 class="title mb-0"><a href="project.html">ORAN</a></h3>
                                            <span>Délais: 08 mois</span>
                                        </div>
                                    </div></SwiperSlide>
      <SwiperSlide> <div class="project-item">
                                        <a class="project-img" href="project.html">
                                            <img src="Hcanc.jpg" height="auto" alt="Project Image"/>
                                        </a>
                                        <div class="project-content">
                                            <span class="sub-title">CONSTRUCTION</span>
                                            <h3 class="title mb-0"><a href="project.html">CAC</a></h3>
                                            <span>Délais: 08 mois</span>
                                        </div>
                                    </div></SwiperSlide>
      <SwiperSlide> <div class="project-item">
                                        <a class="project-img" href="project.html">
                                            <img src="hero-.jpg" height="auto" alt="Project Image"/>
                                        </a>
                                        <div class="project-content">
                                            <span class="sub-title">CONSTRUCTION</span>
                                            <h3 class="title mb-0"><a href="project.html">Railway Tunnel</a></h3>
                                            <span>Duration: 36 month</span>
                                        </div>
                                    </div></SwiperSlide>
                                    <SwiperSlide>  <div class="project-item">
                                        <a class="project-img" href="project.html">
                                            <img src="AlRiadh20.jpg" alt="Project Image" height="auto"/>
                                        </a>
                                        <div class="project-content">
                                            <span class="sub-title">ARCHITECTURE</span>
                                            <h3 class="title mb-0"><a href="project.html">Pink Garden</a></h3>
                                            <span>Duration: 6 month</span>
                                        </div>
                                    </div></SwiperSlide>
    </Swiper>


                            
                            </div>
                        </div>
                    </div>
                </div>
      
  
        </div>
    );
}
export default Projet;