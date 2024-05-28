import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/navbar/navbar.css';
import "@/styles/globals.css";
import '../components/apropos/apropos.css';

 
import { useEffect } from "react";


export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.min.js');
  }, []);
  return <Component {...pageProps} />;
}
