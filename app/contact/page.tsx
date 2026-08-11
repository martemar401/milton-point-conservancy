import type { Metadata } from "next";
import { MapSection } from "@/components/map/MapSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact & Visit | Milton Point Conservancy",
  description: "Contact Milton Point Conservancy and find the Bird Homestead, Rye Meeting House, and William Voris Site in Rye, New York.",
};

export default function ContactPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="contact-hero">
          <div><p className="eyebrow">Contact & visit</p><h1>Come discover Milton Point.</h1></div>
          <div className="contact-details"><p><strong>Email</strong><a href="mailto:info@miltonpointconservancy.org">info@miltonpointconservancy.org</a></p><p><strong>Primary address</strong><span>600 Milton Road<br />Rye, New York 10580</span></p><a className="button button-primary" href="mailto:info@miltonpointconservancy.org?subject=Milton%20Point%20Conservancy%20inquiry">Send us a message</a></div>
        </section>
        <section className="contact-map-section" id="map"><div className="contact-map-heading"><p className="section-kicker">Find us</p><h2>Visit Milton Point.</h2><p>The Bird Homestead is at 600 Milton Road, with the Rye Meeting House and William Voris Site immediately nearby.</p></div><MapSection /></section>
      </main>
      <SiteFooter />
    </>
  );
}
