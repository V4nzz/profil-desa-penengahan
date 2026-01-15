import React from "react";
import { desaData } from "../data/desaData.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div>
          <div className="footerTitle">{desaData.nama}</div>
          <div className="footerSub">
            Kec. {desaData.kecamatan} • Kab. {desaData.kabupaten}
          </div>
        </div>
        <div className="footerRight">
          <span>© {new Date().getFullYear()}</span>
          <a className="footerLink" href="#top" onClick={(e)=>{e.preventDefault(); window.scrollTo({top:0, behavior:"smooth"});}}>
            Ke atas ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
