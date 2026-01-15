import React, { useEffect, useMemo, useRef, useState } from "react";

export default function GallerySlider({ images = [], intervalMs = 3500 }) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);

  const next = () => setIdx((i) => (i + 1) % safeImages.length);
  const prev = () => setIdx((i) => (i - 1 + safeImages.length) % safeImages.length);

  useEffect(() => {
    if (!safeImages.length) return;
    timerRef.current = setInterval(next, intervalMs);
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safeImages.length, intervalMs]);

  if (!safeImages.length) {
    return (
      <div className="card sliderEmpty">
        Tambahkan foto desa (lihat file <b>Galeri.jsx</b>) untuk menampilkan slider.
      </div>
    );
  }

  return (
    <div className="slider">
      <div className="sliderViewport">
        <div
          className="sliderTrack"
          style={{ transform: `translateX(${-idx * 100}%)` }}
        >
          {safeImages.map((src, i) => (
            <div className="slide" key={src + i}>
              <img src={src} alt={`Foto desa ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        <button className="sliderBtn left" onClick={() => { clearInterval(timerRef.current); prev(); }}>
          ‹
        </button>
        <button className="sliderBtn right" onClick={() => { clearInterval(timerRef.current); next(); }}>
          ›
        </button>

        <div className="sliderDots">
          {safeImages.map((_, i) => (
            <button
              key={i}
              className={i === idx ? "dot active" : "dot"}
              onClick={() => { clearInterval(timerRef.current); setIdx(i); }}
              aria-label={`Ke slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
