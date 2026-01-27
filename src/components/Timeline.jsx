import React from "react";

export default function Timeline({ items = [] }) {
  return (
    <div className="timeline">
      {items.map((it, i) => (
        <div key={i} className="timelineItem">
          <div className="timelineDot" />
          <div className="timelineContent">
            <div className="timelineYear">{it.tahun}</div>
            <div className="timelineTitle">{it.judul}</div>
            <p className="timelineDesc">{it.deskripsi}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
