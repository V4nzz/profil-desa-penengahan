import React from "react";

export default function PageHeader({ title, subtitle, icon = "🏡" }) {
  return (
    <div className="pageHeader">
      <div className="pageHeaderBadge">
        <span className="pageHeaderIcon" aria-hidden="true">{icon}</span>
        <span className="pageHeaderText">Profil Desa</span>
      </div>
      <h1 className="pageTitle">{title}</h1>
      {subtitle ? <p className="pageSubtitle">{subtitle}</p> : null}
    </div>
  );
}
