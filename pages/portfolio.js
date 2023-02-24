import Navbar from "../components/navbar";
import Head from "next/head";
import Image from "next/image";
import Project1 from "../public/1.jpg";
import Project2 from "../public/2.jpg";
import Footer from "../components/Footer";

function Portfolio(){
    return(
        <>

        <Head>
          <title>Portfolio</title>
        </Head>

            <Navbar />
        <section className="hero">
         <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Portfolio</h1>
            <p className="description">Incididunt in cillum magna occaecat nisi qui in exercitation labore anim adipisicing amet irure tempor id pariatur nostrud labore nulla veniam.</p>

            <div className="portfolio-wrapper">
                <div className="portfolio-item">
                    <Image src={Project1} className="portfolio-image" alt="" />

                        <h4 className="portfolio-name">E-commerce Website</h4>
                            <div className="portfolio-category">Web Dev</div>
                </div>
                 <div className="portfolio-item">
                   <Image src={Project2} className="portfolio-image"  alt=""/>

                        <h4 className="portfolio-name">Chat Website</h4>
                            <div className="portfolio-category">Web Dev</div>
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

