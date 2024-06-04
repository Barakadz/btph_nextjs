import { useRouter } from 'next/router';
import Link from "next/link";
const actuaites = [
    // Array of product objects
    {
        id:1,
      img: 'actualites1.jpg',
      title: 'Retour en images sur le dernier jour de notre participation à l’événement BATIMATEC 2024',
      desc: 'Retour en image sur le dernier jour de notre participation à l’événement BATIMATEC 2024.',
      comment: '10 commentaires',
      type:'Evénement',
      date:'10/05/2024'
    },
    {
        id:2,
        img: 'actualites2.jpg',
        title: 'Inauguration officielle de BATIMATEC 2024 par Monsieur le Ministre de l`Habitat, Mohamed Tarek BELARIBI',
        desc: `Monsieur le Ministre de l'Habitat, de l'Urbanisme et de la Ville, Mohamed Tarek BELARIBI, a procédé aujourd’hui le 5 Mai 2024 à l'inauguration officielle de la 26ème édition du Salon International du Bâtiment, des Matériaux de construction et des Travaux Publics Batimatec2024, qui se tient du 5 au 9 mai courant, au Palais des expositions à Alger.
        La BTPH Hasnaoui a été honorée par la visite de Monsieur le Ministre.
        Nous vous donnons rendez-vous dès aujourd'hui jusqu'au 9 mai au Pavillon Central.`,
        comment: '5 commentaires',
        type:'Evénement',
        date:'04/05/2024'
    },
    {
        id:3,
        img: 'actualites3.jpg',
        title: 'Retour en images sur la 2ème journée d’étude de l’association nationale des architectes',
        desc: 'La 2ème journée d’étude organisée par l’association nationale des architectes ...',
        comment: '9 commentaires',
        type:'Evénement',
        date:'04/06/2024'
    },
    
  ];

const ActDetail=()=>{
    const router = useRouter();
    const { id } = router.query;

    function getProductById(id) {
        return actuaites.find(actualite => actualite.id === parseInt(id));
    }

    const actualite = getProductById(id);

    if (!actualite) {
        return <div>Actualites not found</div>;
    }
   
    return(
        <>
 <div class="blog-detail-area py-140">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 order-2 ps-lg-8 pt-8 pt-lg-0">
                        <div class="sidebar-area">
                            <div class="sidebar-widget sidebar-searchbar sidebar-common mb-8" style={{backgroundColor:'#f4f8ff'}} >
                                <h3 class="sidebar-title mb-5">Search</h3>
                                <form class="sidebar-form">
                                    <input class="searchbox-input" type="text" placeholder="Type your keyword..."/>
                                    <button class="btn btn-primary btn-secondary-hover searchbox-btn" type="submit">
                                        <i class="ion-ios-search"></i>
                                    </button>
                                </form>
                            </div>
                            <div class="sidebar-widget sidebar-blog-categories sidebar-common mb-8" style={{backgroundColor:'#f4f8ff'}} >
                                <h3 class="sidebar-title mb-5">Categories</h3>
                                <ul>
                                    <li>
                                        <a href="#">Construction
                                            <span>328</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Architecture
                                            <span>240</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Project Planning
                                            <span>120</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Lamination Floor
                                            <span>87</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Readymix Supply
                                            <span>20</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Consultancy
                                            <span>59</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Renovation
                                            <span>72</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Interior Design
                                            <span>128</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="sidebar-widget sidebar-list-wrap sidebar-common mb-8" style={{backgroundColor:'#f4f8ff'}} >
                                <h3 class="sidebar-title mb-5">Poste populaire</h3>
                                <div class="list-item with-border">
                                    <a href="#" class="list-img">
                                        <img src="assets/images/sidebar/list-img/1-1-70x70.png" alt="List Image"/>
                                    </a>
                                    <div class="list-content">
                                        <h3 class="title mb-1">{actuaites.title}</h3>
                                        <span class="list-meta">
                                        <i class="ion-md-calendar"></i>
                                        August 25, 2020
                                    </span>
                                    </div>
                                </div>
                                <div class="list-item with-border">
                                    <a href="#" class="list-img">
                                        <img src="assets/images/sidebar/list-img/1-2-70x70.png" alt="List Image"/>
                                    </a>
                                    <div class="list-content">
                                        <h3 class="title mb-1">Renovation is the great way to improve design</h3>
                                        <span class="list-meta">
                                        <i class="ion-md-calendar"></i>
                                        August 20, 2020
                                    </span>
                                    </div>
                                </div>
                                <div class="list-item with-border">
                                    <a href="#" class="list-img">
                                        <img src="assets/images/sidebar/list-img/1-3-70x70.png" alt="List Image"/>
                                    </a>
                                    <div class="list-content">
                                        <h3 class="title mb-1">Bridge construction is the key factor for country</h3>
                                        <span class="list-meta">
                                        <i class="ion-md-calendar"></i>
                                        August 18, 2020
                                    </span>
                                    </div>
                                </div>
                            </div>
                           
                            <div class="sidebar-widget sidebar-tags sidebar-common mb-8" style={{backgroundColor:'#f4f8ff'}} >
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
                    <div class="col-lg-8">
                        <div class="single-item">
                            <div class="single-img">
                                <img class="img-full" src={actualite.img} alt="Blog Image"/>
                            </div>
                            <div class="single-content pt-7 pb-8">
                                <span class="blog-meta d-block pb-1">{actualite.date}  --  {actualite.type}</span>
                                <h6 class="title font-size-20 mb-4">{actualite.title}</h6>
                                   <p class="short-desc mb-7">{actualite.desc}</p>
                                
                            </div>
                            
                            <div class="social-with-tags mt-4 pt-4">
                                <ul class="tags">
                                    <li>
                                        <i class="fa fa-tags me-1"></i>
                                        <a href="#">architecture,</a>
                                    </li>
                                    <li><a href="#">construction,</a></li>
                                    <li><a href="#">renovation</a></li>
                                </ul>
                                <div class="social-link-wrap d-flex">
                                    <span class="title me-4">Partager :</span>
                                    <ul class="social-link f">
                                        <li class="facebook">
                                            <a href="#" title="Facebook">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li class="twitter">
                                            <a href="#" title="Twitter">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li class="instagram">
                                            <a href="#" title="instagram">
                                                <i class="fa fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="blog-comment-area pt-7">
                                <h2 class="blog-comment-title mb-3">Commentaires(02)</h2>
                                 <ul class="blog-comment-wrap pt-8">
                                    <li>
                                        <div class="blog-comment-img">
                                            <img src="user.png" alt="Avatar"/>
                                        </div>
                                        <div class="blog-comment-content">
                                            <h4 class="title mb-0">Abbes</h4>
                                            <span class="blog-meta mb-1">25 AUGUST, 2020  -  4 pm</span>
                                            <p class="short-desc mb-2">Construction de soi, parce que c'est une douleur, obtenir une douleur de soi, parce que c'est une douleur dans laquelle se produisent des circonstances dans lesquelles peuvent procurer un grand plaisir au client.</p>
                                            <div class="button-wrap">
                                                <a class="btn btn-link p-0" href="#">
                                                    <i class="ion-md-return-left"></i>
                                                    Répondre
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="ps-md-10">
                                        <div class="blog-comment-img">
                                            <img src="user.png" alt="Avatar"/>
                                        </div>
                                        <div class="blog-comment-content">
                                            <h4 class="title mb-0">Ibrahim</h4>
                                            <span class="blog-meta mb-1">20 AUGUST, 2020  -  1 pm</span>
                                            <p class="short-desc mb-2">Construction de soi, parce que c'est une douleur, obtenir une douleur de soi, parce que c'est une douleur dans laquelle se produisent des circonstances dans lesquelles peuvent procurer un grand plaisir au client.</p>
                                            <div class="button-wrap">
                                                <a class="btn btn-link p-0" href="#">
                                                    <i class="ion-md-return-left"></i>
                                                    Répondre
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                     
                                </ul>
                            </div>
                            <div class="blog-feedback-area pt-7">
                                <h2 class="blog-feedback-title mb-3">Laisser une réponse ou un commentaire</h2>
                                 <form class="blog-feedback-form pt-8" action="#">
                                    <div class="group-input">
                                        <input type="text" name="name" placeholder="Votre Nom*" class="input-field me-xl-6 mb-6 mb-xl-0"/>
                                        <input type="text" name="email" placeholder="Votre Mail*" class="input-field me-xl-6 mb-6 mb-xl-0"/>
                                        <input type="text" name="number" placeholder="Votre téléphone" class="input-field"/>
                                    </div>
                                    <div class="form-field mt-6">
                                        <textarea name="message" placeholder="Votre Message" class="textarea-field"></textarea>
                                    </div>
                                    <div class="button-wrap mt-8">
                                        <button type="submit" value="submit" class="btn btn-primary btn-secondary-hover btn-lg rounded-0" name="submit">Envoyer</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        </>
    )
}

export default ActDetail;