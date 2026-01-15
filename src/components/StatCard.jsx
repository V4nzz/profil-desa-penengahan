import React from "react";

export default function StatCard({ label, value, hint }) {
  return (
    <div className="card statCard">
      <div className="statValue">{value}</div>
      <div className="statLabel">{label}</div>
      {hint ? <div className="statHint">{hint}</div> : null}
    </div>
  );
}
