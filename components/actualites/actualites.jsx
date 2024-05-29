import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Autoplay, Navigation } from 'swiper/modules';
import React, { useRef } from 'react';

const Actualite=()=>{
    return(
<div>
<div className="blog-area py-140">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Swiper
                            className="blog-slider"
                         
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
      autoplay={{ delay: 3000 }}
                        >
                            <SwiperSlide>
                                <div className="blog-item">
                                    <a className="blog-img" href="blog.html">
                                        <img className="img-full" src="actualites1.jpg" alt="Blog Image" />
                                    </a>
                                    <div className="blog-content">
                                        <span className="blog-meta">12/10/2023 -- Evénement</span>
                                        <h3 className="title mb-2"><a href="blog.html">Retour en images sur le dernier jour de notre participation à l’événement BATIMATEC 2024</a></h3>
                                        <p className="mb-4">Retour en image sur le dernier jour de notre participation à l’événement BATIMATEC 2024 ...</p>
                                        <ul className="blog-button-wrap">
                                            <li>
                                                <a className="btn btn-link p-0" href="blog.html">Lire la suite</a>
                                            </li>
                                            <li>
                                                <a href="#">35 Commentaires</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <div className="blog-item">
                                    <a className="blog-img" href="blog.html">
                                        <img className="img-full" src="actualites2.jpg" alt="Blog Image" />
                                    </a>
                                    <div className="blog-content">
                                        <span className="blog-meta">12/10/2023 -- Evénement</span>
                                        <h3 className="title mb-2"><a href="blog.html">Inauguration officielle de BATIMATEC 2024 par Monsieur le Ministre de l'Habitat, Mohamed Tarek BELARIBI</a></h3>
                                        <p className="mb-4">Monsieur le Ministre de l'Habitat, de l'Urbanisme et de la Ville, Mohamed Tarek BELARIB ...</p>
                                        <ul className="blog-button-wrap">
                                            <li>
                                                <a className="btn btn-link p-0" href="blog.html">Lire la suite</a>
                                            </li>
                                            <li>
                                                <a href="#">35 Commentaires</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <div className="blog-item">
                                    <a className="blog-img" href="blog.html">
                                        <img className="img-full" src="actualites3.jpg" alt="Blog Image" />
                                    </a>
                                    <div className="blog-content">
                                        <span className="blog-meta">12/10/2023 -- Evénement</span>
                                        <h3 className="title mb-2"><a href="blog.html">Retour en images sur la 2ème journée d’étude de l’association nationale des architectes</a></h3>
                                        <p className="mb-4">La 2ème journée d’étude organisée par l’association nationale des architectes ...</p>
                                        <ul className="blog-button-wrap">
                                            <li>
                                                <a className="btn btn-link p-0" href="blog.html">Lire la suite</a>
                                            </li>
                                            <li>
                                                <a href="#">35 Commentaires</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </SwiperSlide>
                         </Swiper>
                        <div className="blog-pagination d-md-none"></div>
                        <div className="blog-button-next"></div>
                        <div className="blog-button-prev"></div>
                    </div>
                </div>
            </div>
        </div>
</div>
    );
}

export default Actualite;