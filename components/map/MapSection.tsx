import { locations } from "@/data/locations";

export function MapSection() {
  return (
    <div className="map-layout">
      <div className="location-list" aria-label="Conservancy locations">
        {locations.map((location, index) => {
          const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}`;
          return (
            <article className="location-card" key={location.id}>
              <div className="location-summary">
                <span className="location-number">{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <small>{location.category}</small>
                  <strong>{location.name}</strong>
                  <span>{location.description}</span>
                </span>
              </div>
              <div className="location-meta">
                <span>{location.address}</span>
                <a href={directions} target="_blank" rel="noreferrer">Directions ↗</a>
              </div>
            </article>
          );
        })}
      </div>
      <div className="map-shell">
        <iframe
          className="google-map"
          title="Google map showing the Milton Point Conservancy at 600 Milton Road in Rye, New York"
          src="https://www.google.com/maps?q=600+Milton+Road,+Rye,+NY+10580&z=16&output=embed"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
