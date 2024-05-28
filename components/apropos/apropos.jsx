import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Autoplay, Navigation ,Pagination,EffectCoverflow} from 'swiper/modules';

const Apropos=()=>{
    return(
        <>
        
   <div className="container">
    <div className="row">
        <div className="col-sm-6">
         <p className="p-4 p-apropos" >Issue de la société mère, la société par actions BTPH HASNAOUI est spécialisée et hautement qualifiée dans la réalisation du bâtiment et du génie civil, (Elle déploie une capacité de réalisation de 1.500 logements par an). Tout en consolidant son corps de métier qu’est la promotion immobilière la BTPH HASNAOUI est chargée de la réalisation des différents programmes de constructions civiles et industrielles. Elle dispose de structures techniques et de groupes spécialisés.</p>
        </div>
        <div className="col-sm-6">
          <Swiper effect={'coverflow'} 
          grabCursor={true} 
          centeredSlides={true}
           loop={true}  
          slidesPerView={'auto'} 
          coverflowEffect={
            {
              rotate:0,
              stretch:0,
              depth:100,
              modifier:2.5
            }
          }
          navigation={{
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev',
            clickable:true
          }}
          pagination={{el:'.swiper-pagination',clickable:true}}
          modules={[EffectCoverflow,Pagination,Navigation,Autoplay]}
          className="swiper_containerr"
           
          >
            <SwiperSlide className="swiper-slidee">
            <img src="hitel.jpeg" alt="" srcset="" />
            </SwiperSlide>
            <SwiperSlide  className="swiper-slidee">
            <img src="obra (1).jpeg" alt="" srcset="" />
            </SwiperSlide>
            <SwiperSlide  className="swiper-slidee">
            <img src="bechar.jpeg" alt="" srcset="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slidee" >
            <img src="elmedina2.jpeg" alt="" srcset="" />
            </SwiperSlide>
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
              <i class="fas fa-arrow-circle-left"></i>
              </div>
              <div className="swiper-button-next slider-arrow">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                  
              </div>
              <div className="swiper-pagination"></div>
            </div>
            </Swiper>
       </div>
       </div>
</div>
        </>
    )
}

export default Apropos;