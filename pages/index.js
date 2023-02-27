import Link from "next/link";
import Navbar from "../components/navbar";
import Head from "next/head";
import Image from "next/image";
import Profile from "../public/profile.jpeg";
import Footer from "../components/Footer";

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
            <p className="description">
              Saya Seorang Junior Front-End Developer, Video Editor, Online
              Advertiser.
            </p>
            <Link href="/contact" className="cta">
              Kontak Saya
            </Link>
          </div>
          <div className="image-wrapper">
            <Image src={Profile} alt="" className="profile-image" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
