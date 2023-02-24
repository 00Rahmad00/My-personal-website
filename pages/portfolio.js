import Navbar from "../components/navbar";
import Head from "next/head";

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
                    <img src="/1.jpg" className="portfolio-image" />

                        <h4 className="portfolio-name">E-commerce Website</h4>
                            <div className="portfolio-category">Web Dev</div>
                </div>
                 <div className="portfolio-item">
                    <img src="2.jpg" className="portfolio-image" />

                        <h4 className="portfolio-name">Chat Website</h4>
                            <div className="portfolio-category">Web Dev</div>
                </div>
            </div>
		</div>
	        </div>
			</section>
		</>
	);
}

export default Portfolio;

