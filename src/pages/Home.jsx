import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import StatCard from "../components/StatCard.jsx";
import GallerySlider from "../components/GallerySlider.jsx";
import { desaData } from "../data/desaData.js";

export default function Home() {
  const s = desaData.statistik;

  // GANTI ini dengan foto desa kamu (lokal / URL)
  const heroImages = [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=60",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=60",
    "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1600&q=60",
  ];

  return (
    <div className="container">
      <div className="heroBright">
        <div className="heroLeft">
          <div className="pillBright">🌿 Profil Desa • Data Ringkas</div>
          <h1 className="heroTitle">
            Selamat Datang di <span className="gradText">{desaData.nama}</span>
          </h1>
          <p className="heroDesc">{desaData.ringkas}</p>

          <div className="heroActions">
            <Link className="btnPrimary" to="/profil">Lihat Profil</Link>
            <Link className="btnSoft" to="/kontak">Lokasi & Kontak</Link>
          </div>

          <div className="grid4">
            <StatCard label="Penduduk" value={s.penduduk.toLocaleString("id-ID")} hint="jiwa" />
            <StatCard label="KK" value={s.kk.toLocaleString("id-ID")} hint="keluarga" />
            <StatCard label="Dusun" value={s.dusun} hint="wilayah" />
            <StatCard label="Luas" value={s.luasHa.toLocaleString("id-ID")} hint="Ha" />
          </div>
        </div>

        <div className="heroRight">
          <div className="card">
            <div className="cardHead">
              <b>Galeri Singkat</b>
              <span className="muted">foto desa (slider)</span>
            </div>
            <div className="cardBody">
              <GallerySlider images={heroImages} intervalMs={3200} />
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <PageHeader
          icon="📌"
          title="Navigasi Cepat"
          subtitle="Akses halaman profil, potensi, pemerintahan, galeri, dan kontak."
        />

        <div className="grid3">
          <Link className="card linkCard" to="/profil">
            <div className="linkIcon">🏡</div>
            <b>Profil Desa</b>
            <p className="muted">Sejarah, batas wilayah, data dasar.</p>
          </Link>
          <Link className="card linkCard" to="/potensi">
            <div className="linkIcon">🌾</div>
            <b>Potensi</b>
            <p className="muted">Pertanian, peternakan, pekerjaan.</p>
          </Link>
          <Link className="card linkCard" to="/pemerintahan">
            <div className="linkIcon">🏛️</div>
            <b>Pemerintahan</b>
            <p className="muted">Struktur & pembagian dusun.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
