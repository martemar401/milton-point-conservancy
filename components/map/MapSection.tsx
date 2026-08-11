"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { locations } from "@/data/locations";

const InteractiveMap = dynamic(() => import("./InteractiveMap"), {
  ssr: false,
  loading: () => <div className="map-loading" aria-label="Loading interactive map" />,
});

export function MapSection() {
  const [activeId, setActiveId] = useState(locations[0].id);

  return (
    <div className="map-layout">
      <div className="location-list" aria-label="Conservancy locations">
        {locations.map((location, index) => {
          const active = location.id === activeId;
          const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}`;
          return (
            <article className={active ? "location-card is-active" : "location-card"} key={location.id}>
              <button type="button" onClick={() => setActiveId(location.id)} aria-pressed={active}>
                <span className="location-number">{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <small>{location.category}</small>
                  <strong>{location.name}</strong>
                  <span>{location.description}</span>
                </span>
              </button>
              <div className="location-meta">
                <span>{location.address}</span>
                <a href={directions} target="_blank" rel="noreferrer">Directions ↗</a>
              </div>
            </article>
          );
        })}
      </div>
      <div className="map-shell">
        <InteractiveMap locations={locations} activeId={activeId} onSelect={setActiveId} />
      </div>
    </div>
  );
}
