import Link from "next/link";
import Navbar from "../components/navbar";
import Head  from "next/head";


function Home() {
  return (
   <>
        <Head>
          <title>Home</title>
        </Head>

     <Navbar />

     <section className="hero">
         <div className="container">
          <div className="text-wrapper">
            <h1 className="title">Halo, Saya Rahmad Hidayat</h1>
            <p className="description">Saya Seorang Junior Front-End Developer, Video Editor, Online Advertiser.</p>
              <Link href="/contact" className="cta">Kontak Saya</Link>
          </div>
           <div className="image-wrapper">
            <img src="/profile.jpeg" className="profile-image"  />
          </div>
         </div>
     </section>
   </>
  );
}

export default Home;