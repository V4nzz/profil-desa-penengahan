import React from "react";
import PageHeader from "../components/PageHeader.jsx";
import StatCard from "../components/StatCard.jsx";
import Timeline from "../components/Timeline.jsx";
import { desaData } from "../data/desaData.js";
import { DusunBarChart, LahanDonutChart } from "../components/Charts.jsx";

export default function Profil() {
  const s = desaData.statistik;
  const dusunChartData = desaData.pendudukDusun.map((d) => ({
    name: d.dusun.replace("Dusun ", ""),
    Penduduk: d.jiwa,
  }));
  const lahanChartData = desaData.lahan.map((l) => ({
    name: l.nama,
    Luas: Number(String(l.luas).replace("Ha","").replace(",", ".").trim()),
  }));  

  return (
    <div className="container">
      <PageHeader
        icon="🏡"
        title="Profil Desa"
        subtitle={`Kecamatan ${desaData.kecamatan} • Kabupaten ${desaData.kabupaten}`}
      />

      {/* Statistik */}
      <div className="grid4" style={{ marginBottom: 24 }}>
        <StatCard label="Penduduk" value={s.penduduk.toLocaleString("id-ID")} hint="jiwa" />
        <StatCard label="Kepala Keluarga" value={s.kk.toLocaleString("id-ID")} hint="KK" />
        <StatCard label="Dusun" value={s.dusun} hint="wilayah" />
        <StatCard label="Luas Wilayah" value={s.luasHa.toLocaleString("id-ID")} hint="Ha" />
      </div>

      {/* Gambaran Umum */}
      <div className="card">
        <div className="cardHead">
          <b>Gambaran Umum</b>
        </div>
        <div className="cardBody">
          <p className="muted" style={{ lineHeight: 1.7 }}>
            {desaData.ringkas}
          </p>
        </div>
      </div>

      {/* Sejarah & Batas */}
      <div className="section">
        <div className="grid2">
          <div className="card">
            <div className="cardHead"><b>Sejarah Desa</b></div>
            <div className="cardBody">
              <Timeline items={desaData.sejarah} />
            </div>
          </div>

          <div className="card">
            <div className="cardHead"><b>Batas Wilayah</b></div>
            <div className="cardBody">
              <div className="boundaryGrid">
                {desaData.batas.map((b) => (
                  <div key={b.arah} className="boundaryCard">
                    <div className="boundaryDir">{b.arah}</div>
                    <div className="boundaryVal">{b.nilai}</div>
                  </div>
                ))}
              </div>

              <div className="softBox" style={{ marginTop: 12 }}>
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
      </div>

      {/* Tabel Data */}
      <div className="section">
        <div className="grid2">
        <div className="card">
          <div className="cardHead"><b>Sebaran Penduduk per Dusun</b></div>
          <div className="cardBody">

            {/* Tabel */}
            <div className="table">
              <div className="tRow tHead">
                <div>Dusun</div>
                <div className="tRight">Jumlah Jiwa</div>
              </div>
              {desaData.pendudukDusun.map((d) => (
                <div key={d.dusun} className="tRow">
                  <div>{d.dusun}</div>
                  <div className="tRight"><b>{d.jiwa}</b></div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="divider" />

            {/* Grafik */}
            <div className="chartWrap">
              <DusunBarChart data={dusunChartData} />
            </div>
          </div>
        </div>

          <div className="card">
            <div className="cardHead"><b>Pemanfaatan Lahan</b></div>
            <div className="cardBody">
              <div className="table">
                <div className="tRow tHead">
                  <div>Jenis Lahan</div>
                  <div className="tRight">Luas</div>
                </div>
                {desaData.lahan.map((l) => (
                  <div key={l.nama} className="tRow">
                    <div>{l.nama}</div>
                    <div className="tRight"><b>{l.luas}</b></div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="divider" />

              {/* Grafik */}
              <div className="chartWrap">
                <LahanDonutChart data={lahanChartData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
