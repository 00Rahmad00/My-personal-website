import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">About Me</h1>
            <p className="description">
              Halo, saya Rahmad Hidayat dan saya tertarik untuk menjadi seorang
              front-end developer. Meskipun saya belum memiliki pengalaman kerja
              di industri ini, saya telah mempelajari dan mempraktikkan
              keterampilan dan pengetahuan yang diperlukan untuk menjadi seorang
              front-end developer yang kompeten.
              <br />
              <br />
              Saya telah menyelesaikan beberapa proyek pengembangan situs web
              sebagai bagian dari program pendidikan saya di Universitas Amikom
              Yogyakarta, dan selalu senang untuk mempelajari teknologi baru
              dalam industri ini. Saya memiliki keterampilan dalam HTML, CSS,
              dan JavaScript, serta telah mempelajari dan menguasai framework
              seperti Next JS, Vue JS dan library React. <br />
              <br />
              Saya juga telah mempelajari dan menguasai penggunaan Git dan
              GitHub untuk manajemen versi kode dan kolaborasi di tim. Saya
              percaya bahwa keterampilan ini akan sangat membantu saya dalam
              bekerja dengan tim dan memastikan proyek pengembangan situs web
              berjalan dengan lancar.
              <br />
              <br />
              Saya juga sangat tertarik untuk bergabung dengan perusahaan Anda
              karena saya mengagumi budaya dan nilai-nilai yang Anda miliki,
              serta fokus Anda pada inovasi dan kualitas. Saya percaya bahwa
              saya dapat belajar dan tumbuh bersama dengan perusahaan Anda, dan
              memberikan kontribusi yang berharga bagi perusahaan Anda. <br />
              <br />
              Saat ini, saya terus memperdalam pengetahuan saya dalam
              pengembangan situs web dan berbagai teknologi terkait. Saya sangat
              antusias untuk belajar dan mengembangkan keterampilan saya lebih
              lanjut di bawah bimbingan mentor dan tim yang berpengalaman.{" "}
              <br />
              <br />
              Terima kasih telah mempertimbangkan lamaran saya. Saya sangat
              berharap untuk berkesempatan untuk bergabung dengan perusahaan
              Anda dan memulai karir saya sebagai seorang front-end developer.{" "}
              <br />
              <br />
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
