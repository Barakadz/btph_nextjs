import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/navbar/navbar.css';
import "@/styles/globals.css";
import '../components/apropos/apropos.css';
import '../components/chifrescles/chifrescle.css';
import '../components/service/service.css';
import '../components/produit_detail/produit.css';

import '../components/actualites/actualites.css';
import '../components/project/project.css';
import '../components/project_rel/project_rel.css';
import '../components/projectdetail/projectdetail.css';

import { useEffect } from "react";


export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.min.js');
  }, []);
  return <Component {...pageProps} />;
}
