import React from "react";

export default function MapEmbed({
  query = "Kantor Desa Penengahan, Penengahan, Lampung Selatan",
  height = 360,
}) {
  const src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2536.588825868219!2d105.6965684!3d-5.770672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e410bfab9b85e6b%3A0x74a56a175b169087!2sKantor%20Desa%20Penengahan!5e0!3m2!1sid!2sid!4v1706500000000!5m2!1sid!2sid
  `;

  return (
    <div style={{ height, borderRadius: 16, overflow: "hidden" }}>
      <iframe
        title="Peta Lokasi"
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
