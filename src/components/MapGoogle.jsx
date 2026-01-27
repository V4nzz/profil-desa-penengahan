import React, { useMemo } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

export default function MapGoogle({ apiKey, center, zoom = 13 }) {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey || "",
  });

  const options = useMemo(
    () => ({
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
      clickableIcons: true,
    }),
    []
  );

  if (!apiKey) {
    return (
      <div className="softBox">
        <b>API Key belum diisi</b>
        <div className="muted" style={{ marginTop: 6, lineHeight: 1.7 }}>
          Isi <code>VITE_GOOGLE_MAPS_API_KEY</code> di file <code>.env</code>, lalu restart <code>npm run dev</code>.
        </div>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="softBox">
        <b>Gagal memuat Google Maps</b>
        <div className="muted" style={{ marginTop: 6, lineHeight: 1.7 }}>
          Cek API key, enable <b>Maps JavaScript API</b>, dan pastikan restriction (HTTP referrers) benar.
        </div>
      </div>
    );
  }

  return (
    <div style={{ height: 360, borderRadius: 16, overflow: "hidden" }}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={center}
          zoom={zoom}
          options={options}
        >
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <div className="softBox" style={{ height: 360, display: "grid", placeItems: "center" }}>
          <span className="muted">Loading peta…</span>
        </div>
      )}
    </div>
  );
}
