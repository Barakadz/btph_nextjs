import Head from "next/head";
 import { Inter } from "next/font/google";
  import Topbar from "@/components/topbar/topbar";
import NavBar from "@/components/navbar/navbar";
 import 'animate.css';
import Footer from "@/components/footer/footer";

import Breadcumb from "@/components/breadcrumb/breadcumb";
import Emploi from "@/components/emploi/emploi";
import Candidature from "@/components/candidature/candidature";
  
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const contact="Candidature";
  const image="url('rHB-1.jpg')";
  return (
    <>
      <Head>
      <title>Candidature Spontanée - Batiment, Travaux Publics et Hydrauliques</title>

      <link rel="icon" href="/logoicon.png" />

        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
 
        <script src="https://kit.fontawesome.com/6317faaefd.js" crossorigin="anonymous"></script> 

      </Head>
      <Topbar/>
      <NavBar/>
      <Breadcumb name={contact} image={image}/>
      <Candidature/>
        <Footer/>
    </>
  );
}
