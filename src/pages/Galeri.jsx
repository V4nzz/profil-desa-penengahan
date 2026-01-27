import React, { useMemo, useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import GallerySlider from "../components/GallerySlider.jsx";
import { desaData } from "../data/desaData.js";

export default function Galeri() {
  const items = useMemo(() => {
    const g = desaData.galeri || [];
    // support kalau galeri kamu berupa array string
    return typeof g[0] === "string" ? g.map((src) => ({ src })) : g;
  }, []);

  const images = items.map((it) => it.src);
  const [active, setActive] = useState(null);

  return (
    <div className="container">
      <PageHeader
        icon="🖼️"
        title="Galeri Desa"
        subtitle="Dokumentasi foto desa."
      />

      <div className="card">
        <div className="cardHead"><b>Slider Foto</b></div>
        <div className="cardBody">
          <GallerySlider images={images} intervalMs={3000} />
        </div>
      </div>

      <div className="section">
        <div className="gridGallery">
          {items.map((it, i) => (
            <button
              className="thumb"
              key={it.src + i}
              type="button"
              onClick={() => setActive(it)}
              aria-label={`Buka foto ${i + 1}`}
            >
              <img src={it.src} alt={it.title || `Foto ${i + 1}`} loading="lazy" />
              {it.title && <div className="thumbLabel">{it.title}</div>}
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div className="lightbox" onClick={() => setActive(null)} role="presentation">
          <div className="lightboxInner" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.title || "Foto desa"} />
            <div className="lightboxBar">
              <div>{active.title ? <b>{active.title}</b> : <b>Foto Desa</b>}</div>
              <button className="btnSoft" type="button" onClick={() => setActive(null)}>
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
