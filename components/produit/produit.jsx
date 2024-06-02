 import { IoSearchSharp } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
 
const products = [
    // Array of product objects
    {
      imgSrc: 'beton-remplissage.jpg',
      title: 'Béton de remplissage',
      newPrice: '80 DA',
      oldPrice: '120 DA'
    },
    {
      imgSrc: 'betonpret.jpg',
      title: 'Béton prét à l\'emploi',
      newPrice: '120 DA',
      oldPrice: '165 DA'
    },
    {
      imgSrc: 'beton-resistance.jpg',
      title: 'Béton à haute résistance',
      newPrice: '230 DA',
      oldPrice: '360 DA'
    },
    {
      imgSrc: 'beton-autoplaçant.jpg',
      title: 'Béton autoplacant',
      newPrice: '45 DA',
      oldPrice: '72 DA'
    },
    {
      imgSrc: 'beton-extrude.jpg',
      title: 'Béton extrudé',
      newPrice: '95 DA',
      oldPrice: '130 DA'
    },
    {
      imgSrc: 'couler-dalle-beton-fibre.jpg',
      title: 'Béton fibré',
      newPrice: '39 DA',
      oldPrice: '68 DA'
    },

    {
        imgSrc: 'beton-a-prise-rapide.jpg',
        title: 'Béton accéléré',
        newPrice: '39 DA',
        oldPrice: '68 DA'
      },
      {
        imgSrc: 'images.jfif',
        title: 'Béton retardé',
        newPrice: '39 DA',
        oldPrice: '68 DA'
      },
      {
        imgSrc: 'beton-desactive.jpg',
        title: 'Béton désactivé',
        newPrice: '39 DA',
        oldPrice: '68 DA'
      }
      ,
      {
        imgSrc: 'leger.jfif',
        title: 'Béton léger',
        newPrice: '39 DA',
        oldPrice: '68 DA'
      },
      
      {
        imgSrc: 'beton-drainant.jpg',
        title: 'Béton drainant',
        newPrice: '39 DA',
        oldPrice: '68 DA'
      },{
        imgSrc: 'bee.jpg',
        title: 'Béton hydrofuge',
        newPrice: '39 DA',
        oldPrice: '68 DA'
      },
  ];

const Produit=()=>{
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;
  
    // Calculate the displayed products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  
    const totalPages = Math.ceil(products.length / productsPerPage);
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
                                        <a href="#">Cutting Pliers
                                            <span>328</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Safety Helmet
                                            <span>240</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Wallpaper Scraper
                                            <span>120</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Digital Multimeter
                                            <span>87</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Hand Hammer
                                            <span>20</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Electric Saw
                                            <span>59</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Drill Machine
                                            <span>72</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Level Tools
                                            <span>128</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            
                            
                            <div class="sidebar-widget sidebar-tags sidebar-common" data-bg-color="#f4f8ff">
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
      {currentProducts.map((product, index) => (
        <div key={index} className="col-md-6 pt-8 pt-md-0">
          <div className="product-item text-center">
            <div className="product-img">
            <Link href={`/produit_detail?id=${index+1}`}>   
            
                         <img src={product.imgSrc} className="imagestylee" alt="Product Image" />
             </Link>
              <div className="add-action">
                <ul>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="product-content py-4">
              <h2 className="title mb-0">
               <Link legacyBehavior href="/produit_detail"><a  >{product.title}</a></Link> 
              </h2>
              <div className="price-box">
                <span className="new-price">{product.newPrice}</span>
                <span className="old-price">{product.oldPrice}</span>
              </div>
            </div>
          </div>        <br/>

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

export default Produit;