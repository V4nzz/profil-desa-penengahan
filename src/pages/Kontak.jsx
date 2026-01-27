import React from "react";
import PageHeader from "../components/PageHeader.jsx";
import { desaData } from "../data/desaData.js";
import MapEmbed from "../components/MapEmbed.jsx";

export default function Kontak() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  // GANTI koordinat ini dengan koordinat kantor desa yang benar
  const center = desaData.kontak?.koordinat || { lat: -5.770671399706533, lng: 105.69913794167336 };

  const alamat =
    desaData.kontak?.alamat ||
    `${desaData.nama}, Kec. ${desaData.kecamatan}, Kab. ${desaData.kabupaten}`;

  const email = desaData.kontak?.email || "kantordesapenegahan.2016@gmail.com";
  const telepon = desaData.kontak?.telepon || "082164514893";
  const whatsapp = desaData.kontak?.whatsapp || telepon;

  const waDigits = whatsapp.replace(/[^\d]/g, "");
  const waLink = waDigits ? `https://wa.me/${waDigits}` : null;
  const telLink = telepon ? `tel:${telepon.replace(/[^\d+]/g, "")}` : null;
  const emailLink = email ? `mailto:${email}` : null;

  const gmapsQuery = "Kantor Desa Penengahan, Penengahan, Lampung Selatan";
  const gmapsLink =
  "https://www.google.com/maps?cid=8405240928101896327";

  return (
    <div className="container">
      <PageHeader
        icon="📍"
        title="Kontak & Lokasi"
        subtitle="Informasi resmi dan peta interaktif kantor desa."
      />

      <div className="grid2">
        {/* INFO KONTAK */}
        <div className="card">
          <div className="cardHead"><b>Info Kontak</b></div>
          <div className="cardBody">
            <div className="contactBox">
              <div className="contactRow">
                <div className="contactLabel">Alamat</div>
                <div className="contactValue">{alamat}</div>
              </div>

              <div className="contactRow">
                <div className="contactLabel">Email</div>
                <div className="contactValue">{email}</div>
              </div>

              <div className="contactRow">
                <div className="contactLabel">Telepon</div>
                <div className="contactValue">{telepon}</div>
              </div>

              <div className="contactRow">
                <div className="contactLabel">WhatsApp</div>
                <div className="contactValue">{whatsapp}</div>
              </div>

              <div className="divider" />

              <div className="contactActions">
                {waLink && (
                  <a className="btnPrimary" href={waLink} target="_blank" rel="noreferrer">
                    Chat WhatsApp
                  </a>
                )}

                {telLink && (
                  <a className="btnSoft" href={telLink}>
                    Telepon
                  </a>
                )}

                {emailLink && (
                  <a className="btnSoft" href={emailLink}>
                    Kirim Email
                  </a>
                )}

                {gmapsLink && (
                  <a className="btnSoft" href={gmapsLink} target="_blank" rel="noreferrer">
                    Buka di Google Maps
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* MAP */}
        <div className="card">
          <div className="cardHead"><b>Peta Desa</b></div>
          <div className="cardBody">
            <MapEmbed query="Kantor Desa Penengahan, Penengahan, Lampung Selatan" />
          </div>
        </div>
      </div>
    </div>
  );
}
