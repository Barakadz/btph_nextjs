import { FaSearch } from "react-icons/fa";
import { useRouter } from 'next/router';
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const Products = [
    {
        id:1,
        title:"Béton de remplissage",
        desc:"Le béton de remplissage est un mélange de béton coulé dans des espaces vides ou des cavités,souvent utilisé pour remplir des tranchées, des conduits, des tunnels ou des espaces entre les murs et les piliers. Le béton de remplissage peut étre utilisé pour stabiliser ou renforcer une structure existante, pour ajouter de la résistance et de la durabilité & un batiment ou une infrastructure, ou simplement pour remplir un espace inutilisé. Le béton de remplissage peut étre composé de différents types de ciments, d'agrégats et d'additifs en fonction des besoins spécifiques du projet" ,
        image:"beton-remplissage.jpg",
        avantages:"",
        domaine:"",
        mise:""

        },{
        id:2,
        title:"Béton prét a l'emploi",
        desc:"La BTPH HASNAOUI est spécialisée dans la fabrication et la commercialisation du béton prét a l'emploi de haute qualité. Nous sommes fiers de fournir un béton fiable et résistant, qui répond aux normes les plus strictes de lindustrie de la construction. Nous sommes conscients que chaque projet a des exigences différentes en matiére de béton, c'est pourquoi nous travaillons en étroite collaboration avec nos clients pour créer une formulation adaptée a leurs besoins spécifiques. Nous utilisons des constituants de qualité supérieure, tels que des ciments spéciaux, des adjuvants et des agrégats de haute qualité, pour obtenir une résistance et une durabilité optimales du béton. Grace a notre expertise, nous sommes en mesure de produire un béton prét a l'emploi qui répond aux exigences de n'importe quel projet de construction, du plus petit au plus grand.",
        image:"betonpret.jpg",
        avantages:"",
        domaine:"",
        },{
        id:3,
        title:"Béton a haute résistance",
        desc:"Nouvelle génération de betons, plus compacts, se caractérise par une durabilité accrue et une trés haute résistance : a partir de 50 MPA. Cette résistance permet d'obtenir des propriétés mécaniques élevées et une plus grande durabilité. Ces bétons peuvent également étre caractérisés par une plus faible porosité et une plus grande résis",
        avantages:"Une grande ouvrabilité grace a I'ajout de super plastifiants et une résistance élevée au jeune age.  Une faible porosité grace a une teneur en eau réduite et une granulomeétrie a 6 niveaux. Des résistances mécaniques élevées (compression/traction) et des déformations sous charges diminuées. Une grande résistance a la pénétration d'agents agressifs et au cycle gel/dégel Résistance élevée au jeune age facilitant I'optimisation des cycles de décoffrage Moindre retrait limitant la fissuration",
        domaine:"Les avantages des BHP les destinent a des ouvrages a fortes solicitations tels que les ouvrages d'art ou encore des batiments de grande hauteur.\n La résistance au jeune age du BHP permet des décoffrages rapides ainsi que des précontraintes accélérées : préfabrication de poutres ou de planchers en usine et réalisation sur le chantier de voussoirs de ponts ou de poteaux.",
        mise:"La fabrication, le transport et la mise en ceuvre du béton a haute performance se font avec le matériel habituellement utilisé pour les bétons ordinaires ; La mise en ceuvre du béton a haute",
        image:"beton-resistance.jpg",
        },{
        id:4,
        title:"Béton autoplacant",
        desc:"Le béton auto-plagant (BAP) est un béton tres fluide, stable et homogeéne. Il se distingue des bétons ordinaires par ses propriétés a I'état frais et sa capacité de moulage, d'enrobage et de compaction par le seul effet gravitaire , un type de béton qui peut étre coulé sans vibrations ni tassement.",
        avantages:"<b>Facilité d'utilisation :</b> Le béton auto-placant est facile a utiliser car il peut étre coulé sans vibrations ni tassement.<br/> ll peut étre utilisé pour remplir des zones difficiles d'acces et pour des travaux de découpe ou de creusement.<br/> <b>Productivité :</b> Le béton auto-plagant augmente la productivité car il peut étre coulé rapidement et sans interruption. ll réduit également les codts de main-d'ceuvre car il nécessite moins de personnel pour le couler Qualité de surface : Le béton auto-plagant a une surface lisse et unifiée qui nécessite moins de traitement de surface pour obtenir un fini esthétique.<br/><b>Flexibilité :</b>  Le béton auto-plagant peut étre utilisé dans une variété d'applications, notamment les travaux de génie civil, les travaux de fondation, les travaux de remblayage, les travaux de remblaiement et les travaux de réparation Résistance : Le béton auto-plagant a une résistance élevée a la compression et une durabilité élevée Efficacité énergétique : Certains types de béton auto-plagant peuvent contenir des matériaux isolants pour améliorer I'efficacité énergétique des batiments.",
        domaine:"Tous types de dalles y compris dalles de compression sur poutrelles hourdis Radiers. <br/>Plancher dalle pleine et plancher chauffant Rattrapage de niveau en rénovation Fondations superficielles Voiles, poteaux, poutres.",
        mise:"Le béton auto-placant est coulé & la pompe.",
        emploi:"La vitesse de bétonnage (pas trop rapide pour éliminer l'air excédentaire) Ajouts d'eau interdits Une bonne étanchéité du coffrage, sa résistance a la poussée hydrostatique Protection du béton frais par des conditions de cure adaptées.",
        information:"",
        image:"beton-autoplaçant.jpg",
        },{
        id:5,
        title:"Béton extrudé",
        desc:"Utilisés en voirie pour la réalisation d'ouvrages linéaires, les bétons extrudés sont mis en ceuvre avec des machines a coffrage glissant.",
        domaine:"Des bordures de trottoir.Des caniveaux, cunettes.Des séparateurs et glissiéres en béton armé (DBA et GBA)",
        avantages:"Le béton extrudé permet la réalisation d'ouvrages de qualité avec des rendements élevés.La technique du béton extrudé permet de réaliser de multiples finitions en faisant varier les aspects et coloris des ouvrages réalisés",
        mise:"La mise en ceuvre est faite par une extrudeuse, qui pousse le mélange & travers un moule pour créer une forme précise. du béton directement sur le chantier.",
        information:"",
        image:"beton-extrude.jpg",
        },{
        id:6,
        title:"Béton fibré (polypropyléne - Acier)",
        desc:"Le béton fibre est un type de béton qui contient des fibres métalliques ou synthétiques qui sont ajoutées au mélange de béton avant le coulage. Les fibres renforcent le béton et lui donnent une résistance supplémentaire a la flexion, a la traction et a la compression. Ce type de béton est utilisé pour les travaux de génie civil, les travaux de fondation, les travaux de remblayage, les travaux de remblaiement et les travaux de réparation.Il est particulierement utile pour les éléments de structure exposés a des charges de flexion et de traction. ll est également utilisé pour les travaux d'aménagement paysager tels que les bordures, les caniveaux, les trottoirs, le dallage industrielle et les chaussées",
        avantages: "<b>Résistance supplémentaire :</b> Les fibres ajoutées au béton renforcent le béton et lui donnent une résistance supplémentaire a la flexion, a la traction et a impact, ce qui permet de réduire les sections transversales des éléments porteurs et d'économiser sur les matériaux.<br> <b>Durabilité :</b>  Le béton fibré a une durée de vie plus longue et est moins sujet aux fissures et aux dégradations que le béton standard.<br> <b>Flexibilité :</b> Le béton fibré peut être utilisé dans une variété d'applications, notamment les travaux de génie civil, les travaux de fondation, les travaux de remblayage, les travaux de remblaiement et les travaux de réparation.<br> <b>Résistance au feu :</b> Certains types de fibres ajoutées au béton augmentent sa résistance au feu.<br> <b>Résistance au sulfate :</b> Le béton fibré a une meilleure résistance au sulfate que le béton standard."
        ,mise:"Les bétons fibrés peuvent étre mis en ceuvre sous différentes formes.Béton coulé en place a la pompe ou a I'aide d'une benne.",
        information:"",
        image:"couler-dalle-beton-fibre.jpg",
        domaine:"",
        },{
        id:7,
        title:"Béton accéléré",
        desc:"Béton acceéléré est un béton a prise et durcissement rapide conseillé au coulage par temps froid et décoffrage rapide",
        avantages:"Bétonnage rapide en temps froid.Augmentation de 50% des temps de début de durcissement, et accéléré le décoffrage.Augmentation importante des performances mécaniques et facilité de mise en ceuvre,Permet de réduire les délais de réalisation du chantier ;Permet une bonne efficience des coffrages.Améliore la productivité.",
        mise:"Le béton accéléré est mis en ceuvre a la pompe, a la benne ou le camion toupie.",
        information:"",
        image:"beton-a-prise-rapide.jpg",
        domaine:"",
        },{
        id:8,
        title:"Béton retardé",
        desc:"Béton retardé est un béton a prise et durcissement retardé conseillé au coulage par temps chaud.",
        avantages:"Bétons de grande masse.Bétonnage par temps chaud.Bétons pompés/transportés sur des grandes distances.Reprise de bétonnage. Pieux et parois moulés.",
        mise:"Le béton retardé est mis en ceuvre a la pompe, a la benne ou le camion toupie.Vérifier le béton avant décoffrage.",
        information:"",
        domaine:"",
        image:"images.jfif",
        },{
        id:9,
        title:"Mortier a magonner retardé",
        desc:"Mortier a magonné retardé est un mortier de maconnerie au ciment a prise retardée de la classe de mortier M5 M10 et M15 pour ouvrages de magonnerie standard selon la norme EN998-2, ayant une courbe de granulométrie choisie et contenant des agrégats et des additifs spéciaux.",
        avantages:"Convient pour la réalisation de murs standards porteurs et non porteurs en brigues.Magonnerie en brique et en parpaings, notamment & température élevée (par exemple pendant les mois d'été).Mortier prét a l'emploi.Ouvrabilité et homogénéité d'un maintien de 24 heures.Mise en ceuvre tres facile.Rendement élevé.",
        mise:"Le Mortier a maconné retardé reste e pateux et applicable pendant 24 heures environ a +20 C ou pendant 12 heure environ de +25 a +35 °C dans le bac a gacher. ll faut choisir les quantités de mortier a gacher de maniére a pouvoir utiliser le produit pendant ce délai. Il faut éviter un apport d'eau ultérieur.",
        image:"images.jfif",
        },{
        id:10,
        title:"Béton désactivé",
        desc:"Le béton désactivé ou béton lave est un béton a l'aspect gravillonné qui laisse apparaitre les graviers de couleurs 4 la surface.D'un point de vue esthétique, il peut étre utilisé pour un mariage insolite de surfaces et des effets de matiére. Du fait de sa surface, il est antidérapant. ll est robuste et également trés résistant aux chocs thermiques.",
        image:"beton-desactive.jpg",
        },{
        id:11,
        title:"",
        desc:"",
        image:"",
    }
];

const Produit_detail = () => {
    const router = useRouter();
    const { id } = router.query;

    function getProductById(id) {
        return Products.find(product => product.id === parseInt(id));
    }

    const product = getProductById(id);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <div className="product-detail-area py-140">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="product-detail-wrap row">
                                <div className="col-lg-12">
                                    <div className="product-detail-img">
                                        <div className="swiper-container product-detail-slider swiper-arrow swiper-arrow-sm-size with-bg_white">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <div className="single-img zoom position-relative">
                                                        <img src={product.image} className="overlayproduit" alt="Product Image" />
                                                        <h2 className="title mb-2 textproduit" style={{textAlign:'center'}}>{product.title}</h2>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="product-detail-tab pt-9">
                                        <ul className="nav nav-pills" id="myTab" role="tablist">
                                        {product.desc ? (
  <li className="nav-item" role="presentation">
    <a
      className="nav-link active"
      id="description-tab"
      data-bs-toggle="tab"
      href="#description"
      role="tab"
      aria-controls="description"
      aria-selected="true"
    >
      Description
    </a>
  </li>
) : null}

{product.avantages ? (
     <li className="nav-item" role="presentation">
     <a className="nav-link" id="aditional-info-tab" data-bs-toggle="tab" href="#aditional-info" role="tab" aria-controls="description" aria-selected="false">Avantages</a>
 </li>
) : null}
  
  {product.domaine ? (
    <li className="nav-item" role="presentation">
    <a className="nav-link" id="shopping-returns-tab" data-bs-toggle="tab" href="#shopping-returns" role="tab" aria-controls="shopping-returns" aria-selected="false">Utilisation </a>
</li>
) : null}

{product.mise ? (
 <li className="nav-item" role="presentation">
 <a className="nav-link" id="review-tab" data-bs-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">Mise en œuvre</a>
</li>
) : null}
                                            
                                        
                                        
                                           
                                        </ul>
                                        <div className="tab-content pt-7" id="myTabContent">
                                            <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                                                <div className="description-body">
                                                <p
  className="short-desc mb-5"
  style={{ textAlign: 'justify' }}
  dangerouslySetInnerHTML={{ __html: product.desc.replace(/\n/g, '<br>') }}
></p>                                                 </div>
                                            </div>
                                            <div className="tab-pane fade" id="aditional-info" role="tabpanel" aria-labelledby="aditional-info-tab">
                                                <div className="additional-info-body">
                                                <p
  className="short-desc mb-5"
  style={{ textAlign: 'justify' }}
  dangerouslySetInnerHTML={{ __html: product.avantages.replace(/\n/g, '<br>').replace(/(\*\*|__)(.*?)\1/g, '<b>$2</b>') }}
></p>                                                    </div>
                                            </div>
                                            <div className="tab-pane fade" id="shopping-returns" role="tabpanel" aria-labelledby="shopping-returns-tab">
                                                <div className="shopping-returns-body">
                                                <p
  className="short-desc mb-5"
  style={{ textAlign: 'justify' }}
  dangerouslySetInnerHTML={{ __html: product.domaine.replace(/\n/g, '<br>').replace(/(\*\*|__)(.*?)\1/g, '<b>$2</b>') }}
></p>                                                          </div>
                                            </div>
                                            <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                                                <div className="review-body">
                                                    <div className="blog-feedback-area">
                                                    <p className="shopping-desc mb-5"style={{textAlign:'justify'}}>{product.mise}</p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 ps-lg-9 pt-10 pt-lg-0">
                            <div class="sidebar-area">
                                <div class="sidebar-widget sidebar-searchbar sidebar-common mb-8"  style={{backgroundColor:'#f4f8ff'}}>
                                    <h3 class="sidebar-title mb-5">Recherche</h3>
                                    <form class="sidebar-form">
                                        <input class="searchbox-input" type="text" placeholder="Recheche..."/>
                                        <button class="btn btn-primary btn-secondary-hover searchbox-btn" type="submit">
                                        <FaSearch />
                                        </button>
                                    </form>
                                </div>
                                <div class="sidebar-widget sidebar-blog-categories sidebar-common mb-8" style={{backgroundColor:'#f4f8ff'}}>
                                    <h3 class="sidebar-title mb-5">Catégories</h3>
                                    <ul>
                                    {Products.map((product, index) => (
        <li>            <Link legacyBehavior href={`/produit_detail?id=${index+1}`}>   

                                            <a  >{product.title}
                                                <span><MdKeyboardDoubleArrowRight />
 </span>
                                            </a></Link> 
                                        </li>
      ))}
                                       
                                        
                                        
                                    </ul>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        
        </>
    )
}
export default Produit_detail