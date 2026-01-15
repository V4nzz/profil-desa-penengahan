import React from "react";
import PageHeader from "../components/PageHeader.jsx";
import GallerySlider from "../components/GallerySlider.jsx";

export default function Galeri() {
  // GANTI ini dengan foto desa kamu:
  // - kalau foto lokal: taruh di src/assets lalu import
  // - atau pakai URL
  const images = [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=60",
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=60",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=60",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=60",
  ];

  return (
    <div className="container">
      <PageHeader
        icon="🖼️"
        title="Galeri Desa"
        subtitle="Slider foto desa + grid thumbnail."
      />

      <div className="card">
        <div className="cardHead"><b>Slider Foto</b></div>
        <div className="cardBody">
          <GallerySlider images={images} intervalMs={3000} />
        </div>
      </div>

      <div className="section">
        <div className="gridGallery">
          {images.map((src, i) => (
            <div className="thumb" key={src + i}>
              <img src={src} alt={`Thumbnail ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
