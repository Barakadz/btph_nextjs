import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";

const NavBar = () => {
    const router = useRouter();
    const [isSticky, setIsSticky] = useState(false);
   
	const handleScroll = () => {
	  if (window.scrollY > 50) {
		setIsSticky(true);
	  } else {
		setIsSticky(false);
	  }
	};
  
	useEffect(() => {
	  window.addEventListener('scroll', handleScroll);
	  return () => {
		window.removeEventListener('scroll', handleScroll);
	  };
	}, []);
    return (
        <div>
            		<nav className={`navbar navbar-expand-lg bg-white navbar-light p-0 wow fadeIn ${isSticky ? 'fixed-top' : ''}`} style={{zIndex:'111'}}>

                 <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <img src="logo.jpg" alt="BTPH HASNAOUI" width="42" height="auto" className="d-inline-block align-top" />
                </a>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <li className="nav-item"><Link legacyBehavior href="/"><a className={router.pathname === '/' ? 'nav-link active' : 'nav-link'} aria-current="page">Accueil</a></Link></li>
                        <li className="nav-item"><Link legacyBehavior href="/apropos"><a className={router.pathname === '/apropos' ? 'nav-link active' : 'nav-link'} aria-current="page">A propos</a></Link></li>
                        <li className="nav-item"><Link legacyBehavior href="/service"><a className={router.pathname === '/service' ? 'nav-link active' : 'nav-link'} aria-current="page">Services et Produits</a></Link></li>
                        <div className="nav-item dropdown">
                            <li className="nav-item"><Link legacyBehavior href="#"><a className={router.pathname === '/project_cour' || router.pathname === '/project_rel' ? 'nav-link dropdown-toggle active' : 'nav-link dropdown-toggle'} data-bs-toggle="dropdown" aria-current="page">Réalisations</a></Link></li>
                            <div className="dropdown-menu rounded-0 m-0">
                                <li className="nav-item"><Link legacyBehavior href="/project_cour"><a className={router.pathname === '/project_cour' ? 'dropdown-item' : 'dropdown-item'} aria-current="page">Projets en cours</a></Link></li>
                                <li className="nav-item"><Link legacyBehavior href="/project_rel"><a className={router.pathname === '/project_rel' ? 'dropdown-item' : 'dropdown-item'} aria-current="page">Projets réalisés</a></Link></li>
                            </div>
                        </div>
                        <div className="nav-item"><Link legacyBehavior href="/actualite"><a className={router.pathname === '/actualite' ? 'nav-link active' : 'nav-link'} aria-current="page">Actualités</a></Link></div>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" data-i18n="Services">Carrières</a>
                            <div className="dropdown-menu rounded-0 m-0">
                                <a className="dropdown-item" href="/emplois">Offres d'emploi</a>
                                <a className="dropdown-item" href="/candidature">Candidature spontanée</a>
                                <a className="dropdown-item" href="/stage">Demande de stage</a>
                                <a className="dropdown-item" href="/users">Admin</a>
                            </div>
                        </div>
                        <li className="nav-item"><Link legacyBehavior href="/contact"><a className={router.pathname === '/contact' ? 'nav-link active' : 'nav-link'} aria-current="page">Contact</a></Link></li>
                    </div>
                    <a href="#" className="btn btn-secondary rounded-0 py-4 px-lg-5 d-none d-lg-block">Catalogue<i className="fa fa-arrow-right ms-3"></i></a>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
