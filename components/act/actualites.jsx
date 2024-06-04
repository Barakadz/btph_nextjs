import { IoSearchSharp } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
 
const actuaites = [
    // Array of product objects
    {
      img: 'actualites1.jpg',
      title: 'Retour en images sur le dernier jour de notre participation à l’événement BATIMATEC 2024',
      desc: 'Retour en image sur le dernier jour de notre participation à l’événement BATIMATEC 2024 ...',
      comment: '10 commentaires',
      type:'Evénement',
      date:'10/05/2024'
    },
    {
        img: 'actualites2.jpg',
        title: 'Inauguration officielle de BATIMATEC 2024 par Monsieur le Ministre de l`Habitat, Mohamed Tarek BELARIBI',
        desc: 'Monsieur le Ministre de l`Habitat, de l`Urbanisme et de la Ville, Mohamed...',
        comment: '5 commentaires',
        type:'Evénement',
        date:'04/05/2024'
    },
    {
        img: 'actualites3.jpg',
        title: 'Retour en images sur la 2ème journée d’étude de l’association nationale des architectes',
        desc: 'La 2ème journée d’étude organisée par l’association nationale des architectes ...',
        comment: '9 commentaires',
        type:'Evénement',
        date:'04/06/2024'
    },
    
  ];

const Act=()=>{
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;
  
    // Calculate the displayed products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = actuaites.slice(indexOfFirstProduct, indexOfLastProduct);
  
    const totalPages = Math.ceil(actuaites.length / productsPerPage);
    return(
        <>
        
      <div class="product-area py-140">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 order-lg-1 order-2 pe-lg-9 pt-8 pt-lg-0">
                        <div class="sidebar-area">
                            <div class="sidebar-widget sidebar-searchbar sidebar-common mb-8" style={{backgroundColor:'#f4f8ff'}}  >
                                <h3 class="sidebar-title mb-5">Rechercher</h3>
                                <form class="sidebar-form">
                                    <input class="searchbox-input" type="text" placeholder="rechercher..."/>
                                    <button class="btn btn-custom md-size btn-primary btn-secondary-hover searchbox-btn" type="submit">
                                    <IoSearchSharp />
                                    </button>
                                </form>
                            </div>
                            <div class="sidebar-widget sidebar-blog-categories sidebar-common mb-8"style={{backgroundColor:'#f4f8ff'}} >
                                <h3 class="sidebar-title mb-5">Categories</h3>
                                <ul>
                                    <li>
                                        <a href="#">text
                                            <span>328</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">text
                                            <span>240</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">text
                                            <span>120</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">text
                                            <span>87</span>
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <a href="#">text
                                            <span>128</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            
                            
                            <div class="sidebar-widget sidebar-tags sidebar-common"  style={{backgroundColor:'#f4f8ff'}}>
                                <h3 class="sidebar-title mb-5">Tags</h3>
                                <ul>
                                    <li>
                                        <a href="#">Construction</a>
                                    </li>
                                    <li>
                                        <a href="#">Renovation</a>
                                    </li>
                                    <li>
                                        <a href="#">interrior</a>
                                    </li>
                                    <li>
                                        <a href="#">Architecture</a>
                                    </li>
                                    <li>
                                        <a href="#">Planning</a>
                                    </li>
                                    <li>
                                        <a href="#">Concrete</a>
                                    </li>
                                    <li>
                                        <a href="#">Readymix</a>
                                    </li>
                                    <li>
                                        <a href="#">Consultancy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 order-lg-2 order-1">
                    <div className="product-wrap row">
      {currentProducts.map((actualite, index) => (
   
<div class="col-md-6 pt-6">
<Link href={`/actualites_detail?id=${index+1}`}>   

<div class="blog-item">
    <div class="inner-item">
        <a class="blog-img" href="blog.html">
            <img className="imagestyle" src={actualite.img} alt="Blog Image"/>
        </a>
        <div class="blog-content">
            <span class="blog-meta">{actualite.date}  -  {actualite.type}</span>
            <h5 class="title mb-3"><a href="blog-detail.html">{actualite.title}</a></h5>
            <p class="mb-4">{actualite.desc}</p>
            <ul class="blog-button-wrap">
                <li>
                    <a class="btn btn-link p-0" href="blog.html">Lire la suite</a>
                </li>
                <li>
                    <a href="#">{actualite.comment}</a>
                </li>
            </ul>
        </div>
    </div>
</div></Link>
</div>
      ))}
      <div className="col-lg-12 pt-10">
        <div className="pagination-wrap">
          <nav aria-label="Page navigation example">
            <ul className="pagination pagination-custom justify-content-center">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)} tabIndex="-1" aria-disabled="true">
                  <FaArrowLeft />
                </button>
              </li>
              {[...Array(totalPages)].map((_, index) => (
                <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
                    {index + 1}
                  </button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>
                  <FaArrowRight />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Act;