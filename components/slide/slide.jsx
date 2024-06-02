
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Autoplay, Navigation, Pagination } from 'swiper/modules';
  
 const Slide =()=>{
    return(
<div >
        
<div className="slider-area">
      <Swiper
         className="main-slider swiper-arrow with-bg_white"
        
        navigation
        pagination={{ clickable: true }}
        modules= {[Navigation, Pagination,Autoplay]}
        autoplay={{ delay: 7000 }} 
      >
        <SwiperSlide className="swiper-slide animation-style-01">
  <div className="slide-inner bg-height" style={{ width: '100%', height: '300px' }}>
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1, // Ensures the video stays behind other content
      }}
    >
      <source src="BTPH_video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    
  </div>
</SwiperSlide>
        <SwiperSlide className="swiper-slide animation-style-01">
          <div
            className="slide-inner bg-height"
            style={{
              backgroundImage: `url(1-122.jpg)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '100%',
              height: '300px' // Set the height as needed
            }}
          >
            <div className="container">
              <div className="slide-content">
                <span className="sub-title mb-1">Depuis 1974</span>
                <h2 className="title mb-3"> BTPH <span>HASNAOUI</span> 
 </h2>
                <p className="short-desc-2 font-size-20 mb-7">
                 Construction et rénovation n'ont jamais été aussi simples
                </p>
                <div className="button-wrap">
                  <a className="btn btn-custom btn-secondary btn-white-hover me-3" href="project.html">
                  En savoir plus
                                    </a>
                  <a className="btn btn-custom btn-primary btn-white-hover" href="contact.html">
                  Contactez-nous                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide animation-style-01">
          <div
            className="slide-inner bg-height"
            style={{
              backgroundImage: `url(CENTRAL-A-BETON.jpg)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '100%',
              height: '300px' // Set the height as needed
            }}
          >
            <div className="container">
              <div className="slide-content">
                <span className="sub-title mb-1">Depuis 1974</span>
                <h2 className="title mb-3">Travaux   <span>Spéciaux</span></h2>
                <p className="short-desc-2 font-size-20 mb-7">
                  La réalisation de travaux spéciaux avec précision par nos experts.
                </p>
                <div className="button-wrap">
                  <a className="btn btn-custom btn-secondary btn-white-hover me-3" href="project.html">
                  En savoir plus
                                    </a>
                  <a className="btn btn-custom btn-primary btn-white-hover" href="contact.html">
                  Contactez-nous                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        

        <SwiperSlide className="swiper-slide animation-style-01">
          <div
            className="slide-inner bg-height"
            style={{
              backgroundImage: `url(1-2.jpg)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '100%',
              height: '300px' // Set the height as needed
            }}
          >
            <div className="container">
              <div className="slide-content">
                <span className="sub-title mb-1">Depuis 1974</span>
                <h2 className="title mb-3">
                L'excellence en<br /> construction, c'est notre 
                   <span>Métier</span></h2>
                <p className="short-desc-2 font-size-20 mb-7">
                  Construction of itself, because it is pain, but because some proper style design
                  occur in which toil and pain pleasure.
                </p>
                <div className="button-wrap">
                  <a className="btn btn-custom btn-secondary btn-white-hover me-3" href="project.html">
                  En savoir plus
                                    </a>
                  <a className="btn btn-custom btn-primary btn-white-hover" href="contact.html">
                  Contactez-nous                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
       </Swiper>
    </div>

</div>
    );
}
export default Slide;