import React from "react";
import PageHeader from "../components/PageHeader.jsx";
import { desaData } from "../data/desaData.js";

export default function Profil() {
  const s = desaData.statistik;

  return (
    <div className="container">
      <PageHeader
        icon="🏡"
        title="Profil Desa"
        subtitle={`Kec. ${desaData.kecamatan} • Kab. ${desaData.kabupaten}`}
      />

      <div className="grid2">
        <div className="card">
          <div className="cardHead"><b>Gambaran Umum</b></div>
          <div className="cardBody">
            <p className="muted">{desaData.ringkas}</p>
            <div className="kv">
              <span>Jumlah Penduduk</span><b>{s.penduduk.toLocaleString("id-ID")} jiwa</b>
            </div>
            <div className="kv">
              <span>Laki-laki / Perempuan</span><b>{s.laki.toLocaleString("id-ID")} / {s.perempuan.toLocaleString("id-ID")}</b>
            </div>
            <div className="kv">
              <span>Dusun / RT</span><b>{s.dusun} / {s.rt}</b>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cardHead"><b>Batas Wilayah</b></div>
          <div className="cardBody">
            <div className="list">
              {desaData.batas.map((b) => (
                <div className="listRow" key={b.arah}>
                  <span className="muted">{b.arah}</span>
                  <b>{b.nilai}</b>
                </div>
              ))}
            </div>

            <div className="softBox">
              <b>Orbitasi</b>
              <div className="softGrid">
                {desaData.orbitasi.map((o) => (
                  <div key={o.label} className="softItem">
                    <span className="muted">{o.label}</span>
                    <b>{o.value}</b>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="grid2">
          <div className="card">
            <div className="cardHead"><b>Sebaran Penduduk per Dusun</b></div>
            <div className="cardBody">
              <div className="table">
                <div className="tRow tHead"><div>Dusun</div><div>Jiwa</div></div>
                {desaData.pendudukDusun.map((d) => (
                  <div key={d.dusun} className="tRow">
                    <div>{d.dusun}</div>
                    <div className="tRight"><b>{d.jiwa}</b></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card">
            <div className="cardHead"><b>Pemanfaatan Lahan</b></div>
            <div className="cardBody">
              <div className="table">
                <div className="tRow tHead"><div>Penggunaan</div><div>Luas</div></div>
                {desaData.lahan.map((l) => (
                  <div key={l.nama} className="tRow">
                    <div>{l.nama}</div>
                    <div className="tRight"><b>{l.luas}</b></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
