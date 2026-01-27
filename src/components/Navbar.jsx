import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Beranda" },
  { to: "/profil", label: "Profil" },
  { to: "/potensi", label: "Potensi" },
  { to: "/pemerintahan", label: "Pemerintahan" },
  { to: "/galeri", label: "Galeri" },
  { to: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navWrap">
      <div className="container navInner">
        <a className="brand" href="/" aria-label="Beranda">
          <div className="brandLogoImgWrap">
            <img
              src="/Logo.webp"
              alt="Logo Desa"
              className="brandLogoImg"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const fallback = e.currentTarget.parentElement.querySelector(".brandLogoFallback");
                if (fallback) fallback.style.display = "grid";
              }}
            />
            <div className="brandLogoFallback">DP</div>
          </div>

          <div className="brandText">
            <div className="brandName">Desa Penengahan</div>
            <div className="brandSub">Profil & Informasi Publik</div>
          </div>
        </a>

        <nav className={`navLinks ${open ? "open" : ""}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => (isActive ? "navItem active" : "navItem")}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button className="navBtn" onClick={() => setOpen((s) => !s)} aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
