 
import Footer from "../../component/footer/footer";
import NavBar from "../../component/navbar/navbar";
 
import Topbar from "../../component/topbar/topbar";
import Main from "../../component/main/main";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Autoplay, Navigation ,Pagination,EffectCoverflow} from 'swiper/modules';
import './apropos.css';
const Apropos=()=>{
    const contact="Société de Batiment, Travaux  Publics et Hydrauliques";
    const image="url('btph_equipe.jpg')";
    return(
        <div>
            
             <Topbar/>
            <NavBar/>
            <Main name={contact} image={image} />

<div className="container">
    <div className="row">
        <div className="col-sm-6">
         <p className="p-4" style={{textAlign:'justify'}}>Issue de la société mère, la société par actions BTPH HASNAOUI est spécialisée et hautement qualifiée dans la réalisation du bâtiment et du génie civil, (Elle déploie une capacité de réalisation de 1.500 logements par an). Tout en consolidant son corps de métier qu’est la promotion immobilière la BTPH HASNAOUI est chargée de la réalisation des différents programmes de constructions civiles et industrielles. Elle dispose de structures techniques et de groupes spécialisés.</p>
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

<div   style={{backgroundColor:'#f7f7f8'}}>
     <div className="row p-6">
<div className="col-sm  wow fadeIn" data-wow-delay="0.2s">
<center><div className=" " style={{padding:'0.6em',borderRadius:'300px 300px 300px 300px', width:'fit-content',background:'#eaf5ff'}}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path fill="none" d="M0 0h24v24H0z"></path><path d="M9 1v2h6V1h2v2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2zm11 9H4v9h16v-9zm-4.964 1.136l1.414 1.414-4.95 4.95-3.536-3.536L9.38 12.55l2.121 2.122 3.536-3.536zM7 5H4v3h16V5h-3v1h-2V5H9v1H7V5z"></path></svg>
    </div></center> 

<h4 className="text-center mt-4">+50 ans d'experience</h4>
<p className="text-center">Grande experience dans le domaine du BTP</p>
</div>
<div className="col-sm wow fadeIn" data-wow-delay="0.4s">
   <center><div style={{padding:'0.6em',borderRadius:'300px 300px 300px 300px', width:'fit-content',background:'#eaf5ff'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path fill="none" d="M0 0h24v24H0z"></path><path d="M17.841 15.659l.176.177.178-.177a2.25 2.25 0 0 1 3.182 3.182l-3.36 3.359-3.358-3.359a2.25 2.25 0 0 1 3.182-3.182zM12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 7.75-7.996L12 14zm0-13c3.315 0 6 2.685 6 6a5.998 5.998 0 0 1-5.775 5.996L12 13c-3.315 0-6-2.685-6-6a5.998 5.998 0 0 1 5.775-5.996L12 1zm0 2C9.79 3 8 4.79 8 7s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path></svg></div></center> 
<h4 className="text-center mt-4">Meilleurs experts</h4>
<p className="text-center">Une équipe qui maîtrise son métier</p>
</div>
<div className="col-sm wow fadeIn" data-wow-delay="0.6s">
<center><div className=" " style={{padding:'0.6em',borderRadius:'300px 300px 300px 300px', width:'fit-content',background:'#eaf5ff'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path fill="none" d="M0 0h24v24H0z"></path><path d="M9.973 18h4.054c.132-1.202.745-2.194 1.74-3.277.113-.122.832-.867.917-.973a6 6 0 1 0-9.37-.002c.086.107.807.853.918.974.996 1.084 1.609 2.076 1.741 3.278zM14 20h-4v1h4v-1zm-8.246-5a8 8 0 1 1 12.49.002C17.624 15.774 16 17 16 18.5V21a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.5C8 17 6.375 15.774 5.754 15zM13 10.004h2.5l-4.5 6v-4H8.5L13 6v4.005z"></path></svg></div></center> 

<h4 className="text-center mt-4">Rapidité et performance</h4>
<p className="text-center">Réalisation rapide</p>
</div>
<div className="col-sm wow fadeIn" data-wow-delay="0.8s">
<center><div className=" " style={{padding:'0.6em',borderRadius:'300px 300px 300px 300px', width:'fit-content',background:'#eaf5ff'}}><i class="fas fa-money-bill-wave-alt" style={{width:'30',height:'30'}}  ></i> </div></center> 

<h4 className="text-center mt-4">Prix flexible</h4>
<p className="text-center">Tarifs et services raisonnables</p>
</div>
    </div>
</div>


            <div className="container">
                <div className="row p-4 align-items-center justify-content-center">
                    <div className="col-sm-4">
                    <img src="BTPH-personnel.jpeg" className="img-thumbnail"  alt="" srcset="" />
                    </div>
                    <div className="col-sm-8">
                        <h2 className="text-primary">L’esprit d’équipe</h2>
                        <p>Chez BTPH HASNAOUI, l’esprit d’équipe est primordial dans la prise de décision et dans la mise en œuvre de chantier de qualité. La solidarité et la bonne entente des équipes font de l’entreprise un vecteur de performance dans son domaine.</p>
                    </div>
                </div>

            </div>

            <h2 className="text-center text-primary">POURQUOI NOUS CHOISIR ?</h2>
          <center> <hr style={{width: '150px', color:'  rgb(0, 146, 63)' }}/></center> 
            <div className="row">
                <div className="col-sm p-4">
               <div class="d-flex align-items-center p-4 wow fadeIn" data-wow-delay="0.2s">
  <div class="flex-shrink-0">
  <img src="quality.png" width="80" height="80" alt="" srcset="" />
  </div>
  <div class="flex-grow-1 ms-3">
    <h3 className=" ">Qualité Exceptionnelle</h3>
  <p>Nous nous engageons à maintenir des normes de qualité élevées dans tous nos projets, avec la satisfaction du client comme priorité absolue.</p>
  </div>
</div>

            <div class="d-flex align-items-center p-4  wow fadeIn" data-wow-delay="0.4s">
  <div class="flex-shrink-0">
  <img src="save-the-world.png" width="80" height="80" alt="" srcset="" />
  </div>
  <div class="flex-grow-1 ms-3">
  <h3 className=" ">Durabilité Environnementale</h3>
  <p>Nous nous engageons à assurer la sécurité de nos employés, sous-traitants et partenaires avec des protocoles stricts pour zéro accident sur nos chantiers.</p>
   </div>
</div>

<div class="d-flex align-items-center p-4  wow fadeIn" data-wow-delay="0.6s">
  <div class="flex-shrink-0">
  <img src="simplicity.png" width="80" height="80" alt="" srcset="" />
   </div>
  <div class="flex-grow-1 ms-3">
    <h3 className=" ">Intégrité et Éthique</h3>
  <p>L'intégrité est au cœur de notre entreprise, nous traitons nos clients, employés, et partenaires avec respect, honnêteté, et respectons scrupuleusement les lois et réglementations en vigueur.</p>
  </div>
</div>
               </div>
               <div className="col-sm p-4">
               <div class="d-flex align-items-center p-4  wow fadeIn" data-wow-delay="0.3s">
  <div class="flex-shrink-0">
  <img src="shield.png" width="70" height="70" alt="" srcset="" />
 </div>
  <div class="flex-grow-1 ms-3">
    <h3 className=" ">Sécurité Avant Tout</h3>
  <p>Nous nous engageons à assurer la sécurité de nos employés, sous-traitants et partenaires en mettant en place des protocoles stricts pour un environnement de travail sans accident.</p>
  </div>
</div>

            <div class="d-flex align-items-center p-4  wow fadeIn" data-wow-delay="0.5s">
  <div class="flex-shrink-0">
  <img src="public-relation.png" width="80" height="80" alt="" srcset="" />  </div>
  <div class="flex-grow-1 ms-3">
  <h3 className=" ">Engagement Communautaire </h3>
  <p>Nous nous engageons à soutenir les communautés locales à travers des initiatives caritatives et le développement durable.</p>
   </div>
</div>

<div class="d-flex align-items-center p-4  wow fadeIn" data-wow-delay="0.7s">
  <div class="flex-shrink-0">
  <img src="innovation.png" width="80" height="80" alt="" srcset="" />
 </div>
  <div class="flex-grow-1 ms-3">
    <h3 className=" ">Innovation et Excellence</h3>
  <p>
Nous nous engageons à soutenir les communautés locales en participant à des initiatives caritatives et en contribuant au développement durable des régions où nous opérons.</p>
  </div>
</div>
               </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Apropos;