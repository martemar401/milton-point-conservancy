export function MapSection() {
  return (
    <div className="map-only-shell">
      <iframe
        className="google-map"
        title="Google map showing the Milton Point Conservancy at 600 Milton Road in Rye, New York"
        src="https://www.google.com/maps?q=600+Milton+Road,+Rye,+NY+10580&z=16&output=embed"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
