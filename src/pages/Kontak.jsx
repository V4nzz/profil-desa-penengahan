import React from "react";
import PageHeader from "../components/PageHeader.jsx";
import MapGoogle from "../components/MapGoogle.jsx";
import { desaData } from "../data/desaData.js";

export default function Kontak() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  // GANTI koordinat ini dengan koordinat Desa Penengahan yang benar
  const center = { lat: -5.55, lng: 105.27 };

  return (
    <div className="container">
      <PageHeader
        icon="📍"
        title="Kontak & Lokasi"
        subtitle="Tambahkan info kontak resmi dan peta Google Maps."
      />

      <div className="grid2">
        <div className="card">
          <div className="cardHead"><b>Info Kontak</b></div>
          <div className="cardBody">
            <div className="kv"><span>Alamat</span><b>{desaData.nama}, Kec. {desaData.kecamatan}, Kab. {desaData.kabupaten}</b></div>
            <div className="kv"><span>Email</span><b>kantordesapenegahan.2016@gmail.com</b></div>
            <div className="kv"><span>Telepon</span><b>082164514893</b></div>

            <div className="softBox">
              <b>Aktifkan Google Maps API</b>
              <ol className="muted" style={{ marginTop: 8, lineHeight: 1.7 }}>
                <li>Buat file <code>.env</code> di root project</li>
                <li>Isi: <code>VITE_GOOGLE_MAPS_API_KEY=API_KEY_KAMU</code></li>
                <li>Restart dev server: <code>npm run dev</code></li>
              </ol>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cardHead"><b>Peta Desa</b></div>
          <div className="cardBody">
            <MapGoogle apiKey={apiKey} center={center} zoom={13} />
            <p className="muted" style={{ marginTop: 10 }}>
              Jika peta tidak muncul, pastikan API key valid dan Maps JavaScript API sudah di-enable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
