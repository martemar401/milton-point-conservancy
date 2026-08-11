type BrandMarkProps = {
  inverse?: boolean;
};

export function BrandMark({ inverse = false }: BrandMarkProps) {
  return (
    <span className={inverse ? "brand-mark brand-mark-inverse" : "brand-mark"} aria-label="Milton Point Conservancy">
      <span className="brand-monogram" aria-hidden="true">MP</span>
      <span className="brand-words" aria-hidden="true">
        <strong>Milton Point</strong>
        <small>Conservancy · Rye, New York</small>
      </span>
    </span>
  );
}
