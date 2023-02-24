import Navbar from "../components/navbar";
import Head from "next/head";

function Contact(){
    return(
        <>
            <Navbar />

        <Head>
          <title>Contact</title>
        </Head>

        <section className="hero">
         <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">My Contact</h1>
            <p className="description">Hubungi Saya Melalui Kontak Dibawah Ini :</p>

            <ul className="contact-links">
                <li className="contact-item">Email : rahmatjohan37@gmail.com</li>
                <li className="contact-item">Phone : 081337061856</li>
            </ul>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default Contact;