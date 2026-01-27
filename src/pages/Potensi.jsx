import React from "react";
import PageHeader from "../components/PageHeader.jsx";
import { desaData } from "../data/desaData.js";
import { PertanianBarChart, PeternakanBarChart, PekerjaanDonutChart, PekerjaanPieChart } from "../components/Charts.jsx";

export default function Potensi() {
  const p = desaData.potensi;

  // parsing aman (biar gak NaN kalau ada teks)
  const pertanianChartData = p.pertanian.map((x) => ({
    name: x.komoditas,
    Luas: Number(String(x.value).replace("Ha", "").replace(",", ".").trim()),
  }));

  const peternakanChartData = p.peternakan.map((x) => ({
    name: x.jenis,
    Jumlah: Number(String(x.value).replace(/[^\d.,]/g, "").replace(",", ".") || 0),
  }));

  const pekerjaanChartData = p.pekerjaan.map((x) => ({
    name: x.jenis,
    value: Number(String(x.value).replace(/[^\d.,]/g, "").replace(",", ".") || 0),
  }));

  return (
    <div className="container">
      <PageHeader
        icon="🌾"
        title="Potensi Desa"
        subtitle="Komoditas, peternakan, dan mata pencaharian."
      />

      {/* ATAS: 2 kolom */}
      <div className="grid2">
        {/* Peternakan */}
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

            <div className="divider" />
            <div className="chartWrap">
              <PeternakanBarChart data={peternakanChartData} />
            </div>
          </div>
        </div>

        {/* Pekerjaan */}
        <div className="card">
          <div className="cardHead"><b>Mata Pencaharian</b></div>
          <div className="cardBody">
            <div className="list">
              {p.pekerjaan.map((x) => (
                <div className="listRow" key={x.jenis}>
                  <span className="muted">{x.jenis}</span>
                  <b>{Number(x.value).toLocaleString("id-ID")} orang</b>
                </div>
              ))}
            </div>

            <div className="divider" />
            <div className="chartWrap">
              <PekerjaanPieChart data={pekerjaanChartData} />
            </div>
          </div>
        </div>
      </div>

      {/* BAWAH: Pertanian full width */}
      <div className="section">
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

            <div className="divider" />
            <div className="chartWrap chartWrapWide">
              <PertanianBarChart data={pertanianChartData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}