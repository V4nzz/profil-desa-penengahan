import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container" style={{ padding: "56px 0" }}>
      <div className="card" style={{ padding: 22 }}>
        <b>Halaman tidak ditemukan</b>
        <p className="muted">Kembali ke beranda.</p>
        <Link className="btnPrimary" to="/">Beranda</Link>
      </div>
    </div>
  );
}
