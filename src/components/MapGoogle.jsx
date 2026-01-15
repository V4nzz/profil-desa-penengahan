import React, { useMemo } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function MapGoogle({
  apiKey,
  center = { lat: -5.5, lng: 105.3 }, // default (silakan ganti titik desa)
  zoom = 12,
}) {
  const containerStyle = useMemo(() => ({ width: "100%", height: "360px" }), []);

  if (!apiKey) {
    return (
      <div className="card mapPlaceholder">
        <b>Google Maps belum aktif.</b>
        <p className="muted">
          Tambahkan API key di file <code>.env</code> (lihat halaman Kontak).
        </p>
      </div>
    );
  }

  return (
    <div className="mapWrap">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
