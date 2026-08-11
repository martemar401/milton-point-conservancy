"use client";

import "mapbox-gl/dist/mapbox-gl.css";
import type { Map as MapboxMap, Marker } from "mapbox-gl";
import { useEffect, useRef } from "react";
import type { ConservancyLocation } from "@/data/locations";

type InteractiveMapProps = {
  locations: ConservancyLocation[];
  activeId: string;
  onSelect: (id: string) => void;
};

export default function InteractiveMap({ locations, activeId, onSelect }: InteractiveMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapboxMap | null>(null);
  const markersRef = useRef<Map<string, Marker>>(new Map());
  const selectRef = useRef(onSelect);

  useEffect(() => { selectRef.current = onSelect; }, [onSelect]);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token) return;

    let disposed = false;
    let resizeObserver: ResizeObserver | undefined;
    const markers = markersRef.current;

    void import("mapbox-gl").then(({ default: mapboxgl }) => {
      if (disposed || !containerRef.current) return;
      mapboxgl.accessToken = token;

      const map = new mapboxgl.Map({
        container: containerRef.current,
        style: "mapbox://styles/mapbox/light-v11",
        center: [-73.68928, 40.9592],
        zoom: 16.1,
        maxZoom: 19,
        attributionControl: true,
      });
      mapRef.current = map;
      map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "top-right");

      map.on("load", () => {
        const recolor = (id: string, property: "fill-color" | "background-color", value: string) => {
          if (map.getLayer(id)) map.setPaintProperty(id, property, value);
        };
        recolor("water", "fill-color", "#b9d4d1");
        recolor("land", "background-color", "#f5f0e5");
        recolor("landcover", "fill-color", "#dce4d2");
        recolor("national-park", "fill-color", "#dce4d2");
        recolor("building", "fill-color", "#d8cdb8");
      });

      const bounds = new mapboxgl.LngLatBounds();
      locations.forEach((location, index) => {
        const markerButton = document.createElement("button");
        markerButton.type = "button";
        markerButton.className = "map-marker";
        markerButton.dataset.locationId = location.id;
        markerButton.setAttribute("aria-label", `Show ${location.name}`);
        markerButton.innerHTML = `<span>${String(index + 1).padStart(2, "0")}</span>`;
        markerButton.addEventListener("click", () => selectRef.current(location.id));

        const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}`;
        const popup = new mapboxgl.Popup({ offset: 22, closeButton: true, maxWidth: "260px" })
          .setHTML(`<div class="map-popup"><p>${location.category}</p><h3>${location.name}</h3><span>${location.address}</span><a href="${directions}" target="_blank" rel="noreferrer">Get directions ↗</a></div>`);

        const marker = new mapboxgl.Marker({ element: markerButton, anchor: "bottom" })
          .setLngLat([location.longitude, location.latitude])
          .setPopup(popup)
          .addTo(map);
        markers.set(location.id, marker);
        bounds.extend([location.longitude, location.latitude]);
      });

      map.fitBounds(bounds, { padding: 72, maxZoom: 16.7, duration: 0 });
      resizeObserver = new ResizeObserver(() => map.resize());
      resizeObserver.observe(containerRef.current);
    });

    return () => {
      disposed = true;
      resizeObserver?.disconnect();
      markers.clear();
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [locations]);

  useEffect(() => {
    document.querySelectorAll<HTMLButtonElement>(".map-marker").forEach((element) => {
      element.classList.toggle("is-active", element.dataset.locationId === activeId);
    });
    const location = locations.find((item) => item.id === activeId);
    if (location && mapRef.current) {
      mapRef.current.easeTo({ center: [location.longitude, location.latitude], zoom: 17, duration: 700 });
    }
  }, [activeId, locations]);

  if (!process.env.NEXT_PUBLIC_MAPBOX_TOKEN) {
    return (
      <div className="map-fallback" role="status">
        <p className="section-kicker">Interactive map</p>
        <h3>Map preview unavailable</h3>
        <p>Add the public Mapbox token to view the themed interactive map. All locations and directions remain available in the list.</p>
      </div>
    );
  }

  return <div ref={containerRef} className="interactive-map" aria-label="Interactive map of Milton Point Conservancy sites" />;
}
