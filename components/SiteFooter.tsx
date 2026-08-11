import { BrandMark } from "@/components/BrandMark";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <BrandMark inverse />
      <div className="footer-copy">
        <p>Protecting Rye’s history, one place at a time.</p>
        <p className="fine">Milton Point Conservancy is an independent nonprofit stewarding City of Rye historic properties.</p>
      </div>
      <Link href="/contact">Contact us</Link>
    </footer>
  );
}
