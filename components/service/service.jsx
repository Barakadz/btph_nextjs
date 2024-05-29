import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Autoplay, Navigation } from 'swiper/modules';
import { IoIosArrowDown } from "react-icons/io";


 
const Service = () => {
    const [showText, setShowText] = useState(false);

    const handleIconClick = () => {
        setShowText(!showText);
    };
    const [showTextt, setShowTextt] = useState(false);

    const handleIconClickk = () => {
        setShowTextt(!showTextt);
    };
    const [showTexttt, setShowTexttt] = useState(false);

    const handleIconClickkk = () => {
        setShowTexttt(!showTexttt);
    };
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
                        <a href='tel:048706603' className="info mb-0">Avez-vous des projets? <span>048 70 66 03</span></a>
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
                                                <img src="beton.avif" alt="Service Image"/>
                                            </a>
                                            <div className="add-action text-white" style={{height:'87px'}}>
                                                <h5 className="servicebutton  mb-0"><a onClick={handleIconClickk} >Béton Pret à l'emploi</a></h5>
                                                <div className="icon" onClick={handleIconClickk}>
                                                    <a className="text-lowercase servicebutton"    >
                                                    <IoIosArrowDown />
                                                    </a>
                                                </div>
                                            </div>{showTextt && (
                        <div className="additional-text" style={{backgroundColor:'#00225a'}}>
                            <p style={{color:'white',padding:'15px',textAlign:'justify'}}>Nous sommes bien plus qu'une simple entreprise : nous sommes votre partenaire de confiance pour la rénovation et la réhabilitation, mettant à votre disposition notre expertise, notre dévouement et notre engagement pour transformer vos espaces.</p>
                        </div>
                    )}
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="service-item ">
            <div className="service-img">
                <a href="service.html">
                    <img src="travaux.jpg" alt="Service Image" style={{height:'246px'}} />
                </a>
                <div className="add-action text-white" style={{ height: 'fit-content' }}>
                    <h5 className="mb-0"onClick={handleIconClick}>
                        <a  className='servicebutton'>Construction de bâtiments, travaux publics et hydraulique</a>
                    </h5>
                    <div className="icon">
                        <a className="servicebutton text-lowercase p-4 position-relative" onClick={handleIconClick} >
                              <IoIosArrowDown style={{position:'absolute',top:'20',left:'10'}}/>

                        </a>
                    </div>
                    
                </div>{showText && (
                        <div className="additional-text" style={{backgroundColor:'#00225a'}}>
                            <p style={{color:'white',padding:'15px',textAlign:'justify'}}>À la pointe de l'innovation dans le domaine du bâtiment, des travaux publics et de l'hydraulique, nous repoussons les limites pour façonner un avenir où la technologie, la durabilité et l'efficacité.</p>
                        </div>
                    )}
            </div>
        </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-item">
                                        <div className="service-img">
                                            <a href="service.html">
                                                <img src="renovation.avif" alt="Service Image"/>
                                            </a>
                                            <div className="add-action text-white"  style={{height:'87px'}}>
                                                <h5 className="servicebutton  mb-0"><a   onClick={handleIconClickkk}>Rénovation et la réhabilitation</a></h5>
                                                <div className="icon">
                                                    <a className="text-lowercase servicebutton" onClick={handleIconClickkk}>
                                                    <IoIosArrowDown />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {showTexttt && (
                        <div className="additional-text" style={{backgroundColor:'#00225a'}}>
                            <p style={{color:'white',padding:'15px',textAlign:'justify'}}>Nous sommes bien plus qu'une simple entreprise : nous sommes votre partenaire de confiance pour la rénovation et la réhabilitation, mettant à votre disposition notre expertise, notre dévouement et notre engagement pour transformer vos espaces</p>
                        </div>
                    )}
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
