import React from "react";

import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { IoLocationOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Topbar=()=> {
  return (
    
<div><div className="container-fluid  p-0 wow fadeIn" data-wow-delay="0.1s" style={{backgroundColor:'#eaf5ff'}}>
        <div className="row gx-0 d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                <Tooltip
      title="Google Map"
      position="top"
      trigger="mouseenter"
      arrow={true}
      animation="fade"
    >
      <IoLocationOutline className="text-primary me-2" size={20}/>

                     <a href="https://maps.app.goo.gl/4SpVmhFEUJYEjJCY9" target="_blank"><small>Localisation</small></a> 
              </Tooltip>
                </div> <div className="h-100 d-inline-flex align-items-center py-3 text-secondary">
                <Tooltip
      title="B.P. 11 M. Zone Industrielle Sidi-Bel-Abbes"
      position="top"
      trigger="mouseenter"
      arrow={true}
      animation="fade"
    >    
                     <MdAccessTime className="text-primary me-2" color="green" size={20}/>

                    <small>Samedi - Jeudi : 08.00 - 17.00 </small>
               </Tooltip> </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                     <BsTelephone  className="text-primary me-2"/>

                   <a href="tel:048706603"><small>+213 (048) 70 66 03</small></a> 
                </div>
                <div className="h-100 d-inline-flex align-items-center">
                <Tooltip
      title="Facebook"
      position="top"
      trigger="mouseenter"
      arrow={true}
      animation="fade"
    >    <a className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href=""><FaFacebookF />
    </a></Tooltip>
                    <Tooltip
      title="Tewitter"
      position="top"
      trigger="mouseenter"
      arrow={true}
      animation="fade"
    >   <a className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href=""><RiTwitterXFill />
    </a></Tooltip>
                   <Tooltip
      title="LinkedIn"
      position="top"
      trigger="mouseenter"
      arrow={true}
      animation="fade"
    >    <a className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href=""><BsLinkedin />
    </a></Tooltip>
                     <Tooltip
      title="Instegram"
      position="top"
      trigger="mouseenter"
      arrow={true}
      animation="fade"
    >  <a className="btn btn-sm-square rounded-circle bg-white text-primary me-0" href=""><FaInstagram />
    </a></Tooltip>
                </div>
            </div>
        </div>
    </div>   {/*  
  <div className="parent" >
        <div className="item"> 
            <select class="form-select">
              <option value="Fr">Fr</option>
              <option value="En">En</option>
              <option value="Ar">Ar</option>
            </select>
        </div>
       
       
        <div className="item">
          <a href="https://maps.app.goo.gl/4SpVmhFEUJYEjJCY9" target="_blank" className="reseau"><i class="fa fa-map-marker-alt me-2"></i>Localisation</a>
          <a href="tel:048706636"target="_blank" className="reseau"><i class="fa fa-phone-alt me-2" style={{  transform: 'scaleX(-1)'}}></i>+213 (048) 70 66 03</a>
          <a href="mailto:info@btph-hasnaoui.com"target="_blank" className="reseau"><i class="fa fa-envelope-open me-2"></i>info@btph-hasnaoui.com</a>
        </div>

      
        <div className="item">
              
                    <a class="btn btn-sm  btn-outline-light btn-sm-square rounded-circle me-2 reseau"target="_blank" href="https://www.facebook.com/gamshasnaoui?locale=fr_FR"><i class="fab fa-facebook fw-normal"></i></a>
                    <a class="btn btn-sm  btn-outline-light btn-sm-square rounded-circle me-2 reseau"target="_blank" href="https://www.linkedin.com/in/gamma-security-gams-8923a921a/"><i class="fab fa-linkedin-in fw-normal"></i></a>
                    <a class="btn btn-sm  btn-outline-light btn-sm-square rounded-circle me-2 reseau"target="_blank" href="https://www.linkedin.com/in/gamma-security-gams-8923a921a/"><i class="fab fa-linkedin-in fw-normal"></i></a>
                    <a class="btn btn-sm  btn-outline-light btn-sm-square rounded-circle me-2 reseau"target="_blank" href="https://www.linkedin.com/in/gamma-security-gams-8923a921a/"><i class="fab fa-youtube fw-normal"></i> </a>

          
        </div>

  </div>
  
*/}
</div>
 
  )
}
export default Topbar;