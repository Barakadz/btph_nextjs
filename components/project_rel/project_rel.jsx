import React, { useState } from 'react';
import { IoTimeOutline } from 'react-icons/io5';
import { FiMapPin } from 'react-icons/fi';
import Link from 'next/link';

const ProjectRel = () => {
  const [filter, setFilter] = useState('Tous');
  
  const projects=[
    {
title:"CENTRE ANTI-CANCER",
desc:"Le centre anti cancer de sidi bel abbés est situé sur le boulevard périphérique de la ville, à proximité de l'hôpital et du pôle universitaire, il s'étend sur un terrain de 62 000 m2, il est l'un des plus importants bâtiments publics de la ville, non seulement par sa dimension architecturale mais aussi par sa pertinence essentielle au développement de la ville elle-même et de ses équipements infra structuraux. Ajoutant à cela la valeur symbolique de ce bâtiments dédié au diagnostic et au traitement du cancer.",
time:"20 Mois",
localisation:"Sidi Bel Abbés",
annee:"2020",
domaine:"santé",
type:"Réalisation Batiment",
image:'IMG_20161031_104634.jpg',

    },
    {
title:"RÉSIDENCE ANES",
desc:"La résidence ANES se compose de 2 tours de 15 étages qui se dressent sur un soubassement commun de 2 étages destinés à accueillir des bureaux, un centre commercial et des restaurants. Les tours compteront 112 appartements et un parking au sous-sol sur 2 niveaux. Du 1er au 13éme étage, nous avons 4 appartements T4 par palier, tandis que les 2 derniers étages sont disposés de 4 appartements de type duplex T6.",
time:"12 Mois",
localisation:"Oran",
annee:"2016",
domaine:"Batiment",
type:"Réalisation Batiment",
image:"aziz-1024x768.jpg",
    },{
        title:"RÉNOVATION MAIRIE SBA",
        desc:"Réhabilitation du siège (toiture du château) de l’APC de Sidi Bel Abbès.",
        time:"05 Mois",
        localisation:"Sidi Bel Abbés",
        annee:"2018",
        domaine:"",
        type:"Travaux de réhabilitation",
        image:"mairie-1024x768.jpg",
    },
    {
        title:"HÔTEL TAHAT",
        desc:"Réhabilitation de l’hôtel Tahat, avec 108 chambres à Tamanrasset",
        time:"24 Mois",
        localisation:"Tamanrasset",
        annee:"2015",
        domaine:"Hotel",
        type:"Réalisation Batiment",
        image:"tahat-1024x768.jpg",
    },
    {
        title:"TRAVAUX DE BÉTONNAGE",
        desc:`Le centre d'enfouissement technique (CET) implanté au lieu-dit TikRemtath, en périphérie sud du chef-lieu de la commune d'Ahnif, est réalisé selon les normes internationales, il fonctionne à plein régime, en commençant au début avec une moyenne de 15 tonnes de déchets ménagers par jour pour atteindre à l'heure actuelle 55 tonnes. Le projet consistait en la réalisation d'un casier, travaux de VRD, réalisation d'un bâtiment d'exploitation, le mur de clôture et l'acquisition des équipements nécessaires pour le CET.            `,
        time:"11 Mois",
        localisation:"Bouira",
        annee:"2010",
        domaine:"Agriculture",
        type:"Réalisation hydraulique",
        image:"AIN-M’LILAOUM-EL-BOUAGHI02.jpg",
    },
    {
        title:"USINE MDM",
        desc:"Travaux de construction d’un bâtiment industriel en charpente métallique.",
        time:"20 Mois",
        localisation:"Sidi bel abbes",
        annee:"2015",
        domaine:"usine",
        type:"Réalisation batiment industriel",
        image:"mdm-1024x768 (1).jpg",
    },
    {
        title:"RÉSIDENCE RYAD",
        desc:"Premier programme que le Groupe des sociétés Hasnaoui prend en charge sur le territoire de la wilaya d'Oran, El Ryad est un projet de promotion immobilière de 1 807 logements qui s'étend sur une superficie totale de 450.00 m². Conçu comme un nouveau quartier de la zone Est de la ville d'Oran, il se distingue par une basse densité du bâti, de façon à offrir aux futurs acquéreurs les meilleures conditions de vie.",
        time:"21 Mois",
        localisation:"Oran",
        annee:"2015",
        domaine:"batiment",
        type:"Réalisation batiment",
        image:"ryad-1024x768.jpg",
    },
    {
        title:"HOPITAL TABIA",
        desc:"L’hôpital de Tabia est un établissement public hospitalier d’une capacité de 60 lits, construit dans le cadre de développement de la santé en Algérie et inauguré par le ministre de la Santé et de la Réforme hospitalière de l’Algérie. Composé de 7 bâtiments, il comprend la salle d’opérations, les chambres pour les patients, un restaurant, la morgue, les bâtiments administratifs, des logements, des aménagements extérieurs.",
        time:"20 Mois",
        localisation:"Sidi bel abbés",
        annee:"2021",
        domaine:"",
        type:"Réalisation batiment",
        image:"tabiaaA.jpg",
    },
    {
        title:"CENTRE DE FORMATION",
        desc:"Le centre de formation LE PHARE est né de la rencontre heureuse d'une vision à long terme et de compétences avérées dans les divers domaines de la réalisation et de la gestion. Le Groupe des Sociétés HASNAOUI, accorde un intérêt particulier à la formation de son personnel. Outre les multiples sessions de formations réalisées en partenariat avec les centres de formation professionnelle, la préoccupation de se doter d'un personnel formé s'est traduite par l'ouverture, en 2005, d'un centre de formation agréé par l'Etat propre au Groupe, en vue d'assurer la mise à niveau des jeunes ingénieurs et leur perfectionnement continu.",
        time:"21 Mois",
        localisation:"Sidi bel abbes",
        annee:"2016",
        domaine:"Formation",
        type:"Réalisation batiment",
        image:"phareee.jpg",
    },
]

  const filteredProjects = filter === 'Tous' 
    ? projects 
    : projects.filter(project => project.type === filter);

  return (
    <>
      <div className="container">
  
      <button 
          onClick={() => setFilter('Tous')}
          className={filter === 'Tous' ? 'bntfilter activee' : 'bntfilter'}
        >
          Tous
        </button>
        <button 
          onClick={() => setFilter('Réalisation batiment')}
          className={filter === 'Réalisation batiment' ? 'bntfilter activee' : 'bntfilter'}
        >
          Réalisation batiment
        </button>
        <button 
          onClick={() => setFilter('Réalisation batiment industriel')}
          className={filter === 'Réalisation batiment industriel' ? 'bntfilter activee' : 'bntfilter'}
        >
          Réalisation batiment industriel
        </button>
        <button 
          onClick={() => setFilter('Réalisation hydraulique')}
          className={filter === 'Réalisation hydraulique' ? 'bntfilter activee' : 'bntfilter'}
        >
          Réalisation hydraulique
        </button>
        <button 
          onClick={() => setFilter('Réalisation de réhabilitation')}
          className={filter === 'Réalisation de réhabilitation' ? 'bntfilter activee' : 'bntfilter'}
        >
          Réalisation de réhabilitation
        </button>
        <div className="row">
          {filteredProjects.map((project, index) => (
           
            <div className="col-lg-4" key={index}>
                          <Link href={`/project_detail?id=${index+1}`}>   
  <div className="container">
                <div className="cardcontainer m-4">
                  <div className="photo">
                    <img src={project.image} alt={project.title}/>
                    <div className="photos" style={{ whiteSpace: 'nowrap' }}>{project.type}</div>
                  </div>
                  <div className="content">
                    <p className="txt4">{project.title}</p>
                    <p className="txt9">{project.desc.split(' ').slice(0, 15).join(' ')}....</p>
                    <p><a className="btn btn-outline-success mt-2">Plus de détails</a></p>
                  </div>
                  <div className="mx-4" style={{ marginTop: '45px' }}>
                    <p className="txt3">
                      <IoTimeOutline size={20} className="me-1 mb-1" />
                      {project.time}
                      <span className="comments">
                        <FiMapPin size={17} className="me-1 mb-1" />
                        {project.localisation}
                      </span>
                    </p>
                  </div>
                </div>
              </div></Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectRel;
