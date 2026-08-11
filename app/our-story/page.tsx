import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Our Story | Milton Point Conservancy",
  description: "Discover the people, places, and coastal landscape at the heart of Milton Point Conservancy in Rye, New York.",
};

export default function OurStoryPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="inner-hero story-hero">
          <div className="inner-hero-image"><Image src="/bird-homestead.jpg" alt="The historic Bird Homestead in Rye, New York" fill priority sizes="100vw" /></div>
          <div className="inner-hero-copy">
            <p className="eyebrow">Our story</p>
            <h1>One landscape. Generations of discovery.</h1>
            <p>Milton Point’s history lives in its homes, gathering places, archaeology, and relationship with Blind Brook Estuary.</p>
          </div>
        </section>

        <section className="editorial-section">
          <div className="editorial-intro">
            <p className="section-kicker">Why this place matters</p>
            <h2>Preservation connects the past to community life today.</h2>
          </div>
          <div className="story-columns">
            <div><span>01</span><h3>The Bird family</h3><p>Five generations made the Homestead a center of science, exploration, art, literature, craftsmanship, and conservation.</p></div>
            <div><span>02</span><h3>A community landmark</h3><p>The Rye Meeting House has served as a schoolhouse, chapel, lending library, Quaker meeting house, and gathering place.</p></div>
            <div><span>03</span><h3>William Voris</h3><p>The archaeological site preserves the story of a pioneering Black entrepreneur who built a home and businesses here before the Civil War.</p></div>
          </div>
        </section>

        <section className="story-plan">
          <div className="story-plan-copy"><p className="section-kicker light">A connected landscape</p><h2>Three historic places beside the estuary.</h2><p>Together, the Bird Homestead, Rye Meeting House, and William Voris Site reveal a richer and more inclusive history of Milton Point.</p><Link className="button button-light" href="/#places">Explore the places</Link></div>
          <div className="story-plan-image"><Image src="/milton-point-site-plan.png" alt="Site plan of the three Milton Point Conservancy properties" fill sizes="(max-width: 840px) 100vw, 55vw" /></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
