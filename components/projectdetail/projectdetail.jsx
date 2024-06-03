import { useRouter } from 'next/router';


const ProjectDetail=()=>{
    
  const projects=[
    {
        id:1,
title:"CENTRE ANTI-CANCER",
desc:"Le centre anti cancer de sidi bel abbés est situé sur le boulevard périphérique de la ville, à proximité de l'hôpital et du pôle universitaire, il s'étend sur un terrain de 62 000 m2, il est l'un des plus importants bâtiments publics de la ville, non seulement par sa dimension architecturale mais aussi par sa pertinence essentielle au développement de la ville elle-même et de ses équipements infra structuraux. Ajoutant à cela la valeur symbolique de ce bâtiments dédié au diagnostic et au traitement du cancer.",
time:"20 Mois",
localisation:"Sidi Bel Abbés",
annee:"2020",
domaine:"santé",
type:"Réalisation Batiment",
image:'IMG_20161031_104634.jpg',
img1:'cac1.jpg',
img2:'cac2.jpg',
img3:'cac3.jpg',
img4:'cac4.jpg',



    },
    {
        id:2,
title:"RÉSIDENCE ANES",
desc:"La résidence ANES se compose de 2 tours de 15 étages qui se dressent sur un soubassement commun de 2 étages destinés à accueillir des bureaux, un centre commercial et des restaurants. Les tours compteront 112 appartements et un parking au sous-sol sur 2 niveaux. Du 1er au 13éme étage, nous avons 4 appartements T4 par palier, tandis que les 2 derniers étages sont disposés de 4 appartements de type duplex T6.",
time:"12 Mois",
localisation:"Oran",
annee:"2016",
domaine:"Batiment",
type:"Réalisation Batiment",
image:"aziz-1024x768.jpg",
img1:"pm1.jpg",
img2:"pm2.jpg",
img3:"pm3.jpg",
img4:"pm4.jpg",
    },{
        id:3,
        title:"RÉNOVATION MAIRIE SBA",
        desc:"Réhabilitation du siège (toiture du château) de l’APC de Sidi Bel Abbès.",
        time:"05 Mois",
        localisation:"Sidi Bel Abbés",
        annee:"2018",
        domaine:"",
        type:"Travaux de réhabilitation",
        image:"mairie-1024x768.jpg",
        img1:"rn1.jpg",
        img2:"rn2.jpeg",
        img3:"rn3.jpg",
        img4:"rn4.jpg",
    },
    {
        id:4,
        title:"HÔTEL TAHAT",
        desc:"Réhabilitation de l’hôtel Tahat, avec 108 chambres à Tamanrasset",
        time:"24 Mois",
        localisation:"Tamanrasset",
        annee:"2015",
        domaine:"Hotel",
        type:"Réalisation Batiment",
        image:"tahat-1024x768.jpg",
        img1:"th1.jpg",
        img2:"th2.jpg",
        img3:"th3.jpg",
        img4:"th4.jpg",
    },
    {
        id:5,
        title:"TRAVAUX DE BÉTONNAGE",
        desc:`Le centre d'enfouissement technique (CET) implanté au lieu-dit TikRemtath, en périphérie sud du chef-lieu de la commune d'Ahnif, est réalisé selon les normes internationales, il fonctionne à plein régime, en commençant au début avec une moyenne de 15 tonnes de déchets ménagers par jour pour atteindre à l'heure actuelle 55 tonnes. Le projet consistait en la réalisation d'un casier, travaux de VRD, réalisation d'un bâtiment d'exploitation, le mur de clôture et l'acquisition des équipements nécessaires pour le CET.            `,
        time:"11 Mois",
        localisation:"Bouira",
        annee:"2010",
        domaine:"Agriculture",
        type:"Réalisation hydraulique",
        image:"AIN-M’LILAOUM-EL-BOUAGHI02.jpg",
        img1:"",
        img2:"",
        img3:"",
        img4:"",
    },
    {
        id:6,
        title:"USINE MDM",
        desc:"Travaux de construction d’un bâtiment industriel en charpente métallique.",
        time:"20 Mois",
        localisation:"Sidi bel abbes",
        annee:"2015",
        domaine:"usine",
        type:"Réalisation batiment industriel",
        image:"mdm-1024x768 (1).jpg",
        img1:"md1.jfif",
        img2:"md2.jfif",
        img3:"md3.jfif",
        img4:"md4.jpg",
    },
    {
        id:7,
        title:"RÉSIDENCE RYAD",
        desc:"Premier programme que le Groupe des sociétés Hasnaoui prend en charge sur le territoire de la wilaya d'Oran, El Ryad est un projet de promotion immobilière de 1 807 logements qui s'étend sur une superficie totale de 450.00 m². Conçu comme un nouveau quartier de la zone Est de la ville d'Oran, il se distingue par une basse densité du bâti, de façon à offrir aux futurs acquéreurs les meilleures conditions de vie.",
        time:"21 Mois",
        localisation:"Oran",
        annee:"2015",
        domaine:"batiment",
        type:"Réalisation batiment",
        image:"ryad-1024x768.jpg",
        img1:"",
        img2:"",
        img3:"",
        img4:"",
    },
    {
        id:8,
        title:"HOPITAL TABIA",
        desc:"L’hôpital de Tabia est un établissement public hospitalier d’une capacité de 60 lits, construit dans le cadre de développement de la santé en Algérie et inauguré par le ministre de la Santé et de la Réforme hospitalière de l’Algérie. Composé de 7 bâtiments, il comprend la salle d’opérations, les chambres pour les patients, un restaurant, la morgue, les bâtiments administratifs, des logements, des aménagements extérieurs.",
        time:"20 Mois",
        localisation:"Sidi bel abbés",
        annee:"2021",
        domaine:"",
        type:"Réalisation batiment",
        image:"tabiaaA.jpg",
        img1:"",
        img2:"",
        img3:"",
        img4:"",
    },
    {
        id:9,
        title:"CENTRE DE FORMATION",
        desc:"Le centre de formation LE PHARE est né de la rencontre heureuse d'une vision à long terme et de compétences avérées dans les divers domaines de la réalisation et de la gestion. Le Groupe des Sociétés HASNAOUI, accorde un intérêt particulier à la formation de son personnel. Outre les multiples sessions de formations réalisées en partenariat avec les centres de formation professionnelle, la préoccupation de se doter d'un personnel formé s'est traduite par l'ouverture, en 2005, d'un centre de formation agréé par l'Etat propre au Groupe, en vue d'assurer la mise à niveau des jeunes ingénieurs et leur perfectionnement continu.",
        time:"21 Mois",
        localisation:"Sidi bel abbes",
        annee:"2016",
        domaine:"Formation",
        type:"Réalisation batiment",
        image:"phareee.jpg",
        img1:"",
        img2:"",
        img3:"",
        img4:"",
    },
]
const router = useRouter();
const { id } = router.query;

function getProductById(id) {
    return projects.find(project => project.id === parseInt(id));
}

const project = getProductById(id);

if (!project) {
    return <div>Projet not found</div>;
}
    return(
        <>
         <div class="project-detail-area py-100"> 
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 pe-lg-9">
                    <div class="single-content pt-10 pb-5">
                            <h2 class="title font-size-60 mb-3" >{project.title}</h2>
                         
                             <p class="short-desc mb-0">
                                {project.desc}
                            </p>
                        </div>
                        <div class="project-detail-banner row g-0">
                            <div class="col-md-5 pb-4 pb-md-0">
                                <div class="single-img">
                                    <img class="img-full" src={project.image} alt="Project Image"/>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <div class="group-img row g-0 mb-4">
                                    <div class="col-6">
                                        <div class="single-img">
                                            <img class="img-full" src={project.img1} alt="Project Image"/>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="single-img">
                                            <img class="img-full" src={project.img2} alt="Project Image"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="group-img row g-0">
                                    <div class="col-6">
                                        <div class="single-img">
                                            <img class="img-full" src={project.img3} alt="Project Image"/>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="single-img">
                                            <img class="img-full" src={project.img4} alt="Project Image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        </div>
                        
                    <div class="col-lg-3 pt-8 pt-lg-0">
                        <div class="sidebar-area">
                            <div class="sidebar-widget sidebar-categories text-white mb-6">
                                <h2 class="title mb-0">Informations sur le projet</h2>
                                <ul>
                                    <li>
                                    Nom du client:

                                        <span>Rosebel Group</span>
                                    </li>
                                    <li>
                                    Emplacement :
                                        <span>New York</span>
                                    </li>
                                    <li>
                                    Zone :
                                        <span>8500 sqft</span>
                                    </li>
                                    <li>
                                    Budget :
                                        <span>64,56,000 DA</span>
                                    </li>
                                    <li>
                                    Architecte:
                                        <span>BTP HASNAOUI</span>
                                    </li>
                                    <li>
                                    Prestataire:
                                        <span>Oxybuild</span>
                                    </li>
                                    <li>
                                    La Date de début :
                                        <span>25 Aug, 2018</span>
                                    </li>
                                    <li>
                                    La Date de livraison :
                                        <span>25 Aug, 2020</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="sidebar-widget sidebar-download-brochure text-white mb-6">
                                <ul>
                                    <li>
                                        <a href="#">Brochure.PDF</a>
                                    </li>
                                    <li>
                                        <a href="#">Brochure.DOC</a>
                                    </li>
                                </ul>
                            </div>
                         
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="banner-style-2 position-relative " style={{backgroundImage:"url('2-1.png')"}} data-bg-image=" ">
            <div class="container-fluid p-0 overflow-hidden">
                <div class="row g-0">
                    <div class="col-lg-6">
                    <div className="project-banner">
                            <div className="pro-bnr-img">
                                <img src="Hcancereux.jpg" alt="" srcset="" />
                            </div>
                            <div class="pro-bnr-text">
                                <h2>Nous bâtissons votre bien-être</h2>
                                <p>Quelle que soit la portée de votre projet, BTP HASNAOUI exécute les travaux de manière à répondre aux besoins de ses clients de la façon la plus rapide et la plus rentable, et ce, toujours avec un souci de qualité et de sécurité.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 align-self-center">
                        <div class="banner-content text-white">
                        
                            <div class="form-container">
      <div class="logo-container">
        Forgot Password
      </div>

      <form class="form">
      <span>CONTACTEZ-NOUS</span>
      <div className="row">
        <div className="col-lg-6">
               <div class="form-group">
           <input type="text" id="email" name="email" className="mb-2" placeholder="Enter votre Nom" required=""/>
        </div>
        </div>

        <div className="col-lg-6">
            <div class="form-group">
           <input type="text" id="email" name="email" className="mb-2"placeholder="Enter votre Prénom" required=""/>
        </div>  
        </div>
      </div>
     
      <div className="row">
        <div className="col-lg-6">
        <div class="form-group">
           <input type="text" id="email" name="email" className="mb-2"placeholder="Entreprise ou organisation" required=""/>
        </div>
        </div>
        <div className="col-lg-6">
        <div class="form-group">
           <input type="text" id="email" name="email" className="mb-2"placeholder="ville" required=""/>
        </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
  <div class="form-group">
           <input type="text" id="email" name="email" className="mb-2"placeholder="courriel" required=""/>
        </div>
        </div>
        <div className="col-lg-6">
 <div class="form-group">
           <input type="text" id="email" name="email" className="mb-2"placeholder="Téléphone" required=""/>
        </div>
        </div>
      </div>
     
      
       
        <div class="form-group">
        <textarea id="message" name="message" rows="2"placeholder="Comment pouvons-nous vous aider ?" required="" cols="50">
  </textarea>
         </div>
        <button class="form-submit-btn" type="submit">Soumettre</button>
      </form>

 
    </div>
                             
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default ProjectDetail;