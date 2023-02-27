import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="footer__text">© 2023 by Rahmad Hidayat.</div>
    </footer>
  );
}

export default Footer;
