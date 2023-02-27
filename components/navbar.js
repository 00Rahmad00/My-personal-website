import Link from "next/link";
import { withRouter } from "next/router";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react"; // tambahkan import useState dari react

function Navbar({ router }) {
  const navs = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Portfolio", href: "/portfolio" },
    { text: "Contact", href: "/contact" },
  ];

  // tambahkan useState untuk membuat state
  const [clicked, setClicked] = useState(false);

  // ubah handleClicked ke arrow function
  const handleClicked = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav className="navbar">
        <Link href="/" className="Logo">
          Rahmad.
        </Link>
        <div>
          <ul className="navbar">
            {navs.map((nav, index) => (
              <li key={index}>
                <Link
                  href={nav.href}
                  className={`nav-item ${
                    router.pathname === nav.href ? "active" : ""
                  }`}
                >
                  {nav.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mobile" onClick={handleClicked}>
          <FontAwesomeIcon
            icon={clicked ? faTimes : faBars}
            className="fa-icon"
          />
        </div>
      </nav>
    </>
  );
}

export default withRouter(Navbar);
