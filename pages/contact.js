import Navbar from "../components/navbar";
import Head from "next/head";
import Footer from "../components/Footer";
import {
  FaFacebook,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <>
      <Navbar />

      <Head>
        <title>Contact</title>
      </Head>

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">My Contact</h1>
            <p className="description">
              Hubungi Saya Melalui Kontak Dibawah Ini :
            </p>

            <ul className="contact-links">
              <li className="contact-item">Email : rahmatjohan37@gmail.com</li>
              <li className="contact-item">Phone : 081337061856</li>
            </ul>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/rahmad-hidayat-657954242/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=100005912797832"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/__rahmad__/"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="mailto:rahmatjohan37@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="gmail"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
