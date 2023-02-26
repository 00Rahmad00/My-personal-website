import Navbar from "../components/navbar";
import Head from "next/head";
import Image from "next/image";
import Project1 from "../public/1.jpg";
import Project2 from "../public/2.jpg";
import Footer from "../components/Footer";
import { FaGithub, FaLink } from "react-icons/fa";

function Portfolio(){
    return(
        <>
        <Head>
          <title>Portfolio</title>
        </Head>
            <Navbar />
        <section className="hero portfolio">
         <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Portfolio</h1>
            <p className="description">Dibawah ini adalah beberapa portfolio yang telah saya buat :</p>

            <div className="portfolio-wrapper">
                <div className="portfolio-item">
                    <Image src={Project1} className="portfolio-image" alt="" />
                        <h4 className="portfolio-name">E-commerce Website</h4>
                            <div className="portfolio-category">Web Dev</div>
                            <div className="portfolio-icons">
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub className="icon github-icon" /></a>
                                <a href="https://www.example.com" target="_blank" rel="noopener noreferrer"><FaLink className="icon link-icon" /></a>
                            </div>
                </div>
                 <div className="portfolio-item">
                   <Image src={Project2} className="portfolio-image"  alt=""/>
                        <h4 className="portfolio-name">Chat Website</h4>
                            <div className="portfolio-category">Web Dev</div>
                            <div className="portfolio-icons">
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub className="icon github-icon" /></a>
                                <a href="https://www.example.com" target="_blank" rel="noopener noreferrer"><FaLink className="icon link-icon" /></a>
                            </div>
                </div>
                 <div className="portfolio-item">
                   <Image src={Project2} className="portfolio-image"  alt=""/>
                        <h4 className="portfolio-name">Chat Website</h4>
                            <div className="portfolio-category">Web Dev</div>
                            <div className="portfolio-icons">
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub className="icon github-icon" /></a>
                                <a href="https://www.example.com" target="_blank" rel="noopener noreferrer"><FaLink className="icon link-icon" /></a>
                            </div>
                </div>
                 <div className="portfolio-item">
                   <Image src={Project2} className="portfolio-image"  alt=""/>
                        <h4 className="portfolio-name">Chat Website</h4>
                            <div className="portfolio-category">Web Dev</div>
                            <div className="portfolio-icons">
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub className="icon github-icon" /></a>
                                <a href="https://www.example.com" target="_blank" rel="noopener noreferrer"><FaLink className="icon link-icon" /></a>
                            </div>
                </div>
            </div>
        </div>
            </div>
            </section>
               <Footer />
        </>
    );
}

export default Portfolio;
