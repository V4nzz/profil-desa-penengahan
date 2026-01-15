import React from "react";
import PageHeader from "../components/PageHeader.jsx";
import { desaData } from "../data/desaData.js";

export default function Pemerintahan() {
  const pem = desaData.pemerintahan;

  return (
    <div className="container">
      <PageHeader
        icon="🏛️"
        title="Pemerintahan Desa"
        subtitle="Struktur inti dan pembagian wilayah dusun."
      />

      <div className="grid2">
        <div className="card">
          <div className="cardHead"><b>Perangkat Inti</b></div>
          <div className="cardBody">
            <div className="kv"><span>Kepala Desa</span><b>{pem.kades}</b></div>
            <div className="kv"><span>Sekretaris Desa</span><b>{pem.sekdes}</b></div>
            <div className="kv"><span>BPD</span><b>{pem.bpd}</b></div>
            <div className="softBox">
              <b>Catatan</b>
              <p className="muted">
                Nanti bisa ditambah bagan organisasi lengkap (KAUR/KASI/Kadus) versi visual.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cardHead"><b>Pembagian Dusun</b></div>
          <div className="cardBody">
            <div className="table">
              <div className="tRow tHead"><div>Dusun</div><div className="tRight">RT</div></div>
              {pem.dusun.map((d) => (
                <div className="tRow" key={d.nama}>
                  <div>{d.nama}</div>
                  <div className="tRight"><b>{d.rt}</b></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
