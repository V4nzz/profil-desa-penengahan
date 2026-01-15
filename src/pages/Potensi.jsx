import React from "react";
import PageHeader from "../components/PageHeader.jsx";
import { desaData } from "../data/desaData.js";

export default function Potensi() {
  const p = desaData.potensi;

  return (
    <div className="container">
      <PageHeader
        icon="🌾"
        title="Potensi Desa"
        subtitle="Komoditas, peternakan, dan mata pencaharian."
      />

      <div className="grid3">
        <div className="card">
          <div className="cardHead"><b>Pertanian / Perkebunan</b></div>
          <div className="cardBody">
            <div className="list">
              {p.pertanian.map((x) => (
                <div className="listRow" key={x.komoditas}>
                  <span className="muted">{x.komoditas}</span>
                  <b>{x.value}</b>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cardHead"><b>Peternakan</b></div>
          <div className="cardBody">
            <div className="list">
              {p.peternakan.map((x) => (
                <div className="listRow" key={x.jenis}>
                  <span className="muted">{x.jenis}</span>
                  <b>{x.value}</b>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cardHead"><b>Mata Pencaharian</b></div>
          <div className="cardBody">
            <div className="list">
              {p.pekerjaan.map((x) => (
                <div className="listRow" key={x.jenis}>
                  <span className="muted">{x.jenis}</span>
                  <b>{x.value.toLocaleString("id-ID")} orang</b>
                </div>
              ))}
            </div>

            <div className="note">
              Tips: kamu bisa tambah “UMKM unggulan” dan “produk olahan” untuk memperkuat halaman ini.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
