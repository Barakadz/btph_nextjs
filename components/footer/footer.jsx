import React from "react";


import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
 const Footer = () => {
    const divStyle = {
        backgroundImage: 'url(1-1-1920x454.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: 'auto', // Set the height as needed
      };

    

    return(
 
 <div>  
         <div class="footer-area wow fadeInUp" data-wow-delay="0.7s">
            <div class="footer-top pt-100 pb-70" style={{backgroundImage:'url(1-1-1920x454.png)'}} >
                <div class="container">
                     <div class="row">
                        <div class="col-xl-3 col-lg-3">
                            <div class="widget-item text-hawkes-blue">
                               <div class="footer-logo pb-5">
                                    <a href="#">
                                        <img src="50_ans_logo.png" width="180" height="auto" alt="Logo"/>
                                    </a>
                                </div> 
                                <p class="short-desc font-size-16 mb-5  ">Issue de la société mère, la société par actions BTPH HASNAOUI est spécialisée et hautement qualifiée dans la réalisation du bâtiment et du génie civil</p>
                                
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-2 col-sm-6 pl-xl-80 pt-8 pt-lg-0">
                            <div class="widget-item">
                                <h3 class="heading text-primary mb-6">Plan du site</h3>
                                <ul class="widget-list-item text-hawkes-blue">
                                    <li>
                                        <a href="#">Accueil</a>
                                    </li>
                                    <li>
                                        <a href="#">A propos</a>
                                    </li>
                                    <li>
                                        <a href="#">Services et Produits</a>
                                    </li>
                                    <li>
                                        <a href="#">Réalisations</a>
                                    </li>
                                    <li>
                                        <a href="#">Actualités</a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-sm-6 ps-lg-10 pt-8 pt-lg-0">
                            <div class="widget-item">
                                <h3 class="heading text-primary mb-6"  >Carrières </h3>
                                <ul class="widget-list-item text-hawkes-blue">
                                    <li>
                                        <a href="#">Offres d'emploi</a>
                                    </li>
                                    <li>
                                        <a href="#">Candidature spontanée</a>
                                    </li>
                                    <li>
                                        <a href="#">Demande de stage</a>
                                    </li>
                              
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 pt-8 pt-lg-0">
                            <div class="widget-item">
                                <h3 class="heading text-primary mb-6">Contact  </h3>
                                <div class="widget-list-item text-hawkes-blue">
                                    <div class="widget-address  ">
                                       <p class="mb-1"><i class="fas fa-map-marker-alt"></i>&nbsp;&nbsp;Section 214, ilot 30, Zone industrielle, <span class="text-primary">Sidi Bel Abbès, Algeria</span></p>
                                        
                                        <span><i class="fas fa-phone"></i>&nbsp;&nbsp;+213 (048) 70 66 03/ (048) 70 66 04</span>
                                    </div>
                                    <div class="widget-address">
                                        <p class="mb-1"><i class="fa fa-envelope-open me-2"></i>info@btph-hasnaoui.com
                                         </p>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom py-3 text-hawkes-blue" style={{backgroundColor:'#00225a'}}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-4">
                            <ul class="social-link">
                                <li class="facebook">
                                <Tooltip
      title="Facebook"
      position="top"
      trigger="mouseenter"
      arrow={true}
      animation="fade"
    >
                                    <a href="https://www.facebook.com/btph.hasnaoui/" target="_blank" >
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                    </Tooltip>
                                </li>
                             
  <li class="twitter">   <Tooltip
      title="Twitter"
      position="top"
      trigger="mouseenter"
      arrow={true}
      animation="fade"
    >
                                    <a href="#"target="_blank">
                                        <i class="fa fa-twitter"></i>
                                    </a>
        </Tooltip>                         </li>
   
                                
                                <li class="instagram">
                                <Tooltip
      title="Instagram"
      position="top"
      trigger="mouseenter"
      arrow={true}
      animation="fade"
    >
                                    <a href="#"target="_blank" >
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                    </Tooltip>
                                </li>
                                <li class="youtube">
                                <Tooltip
      title="Youtube"
      position="top"
      trigger="mouseenter"
      arrow={true}
      animation="fade"
    >
                                    <a href="https://www.youtube.com/watch?v=rqf1miNw07Y"target="_blank" >
                                        <i class="fa fa-youtube"></i>
                                    </a>
                                    </Tooltip>
                                </li>
                                <li class="linkedin">
                                <Tooltip
      title="LinkedIn"
      position="top"
      trigger="mouseenter"
      arrow={true}
      animation="fade"
    >
                                    <a href="https://www.linkedin.com/company/btph-hasnaoui-spa"target="_blank" >
                                        <i class="fa fa-linkedin"></i>
                                    </a>
                                    </Tooltip>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-6 col-sm-8 align-self-center">
                            <div class="copyright">
                                <span class="copyright-text"> © 2024 Groupe des Sociétés HASNAOUI.All Rights Reserved-Designed by GSH</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 </div>
    );
}

export default Footer;