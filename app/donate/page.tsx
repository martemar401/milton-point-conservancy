import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const donateUrl = "https://www.paypal.com/donate/?hosted_button_id=VB2RQ88HR5HQL";

export const metadata: Metadata = {
  title: "Donate | Milton Point Conservancy",
  description: "Support the restoration and stewardship of Milton Point’s historic places in Rye, New York.",
};

export default function DonatePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="donate-hero">
          <div className="donate-copy">
            <p className="eyebrow">Give history a future</p>
            <h1>Your gift opens the doors again.</h1>
            <p>Every contribution supports restoration, preservation, and hands-on learning at the Bird Homestead, Rye Meeting House, and William Voris Site.</p>
            <a className="button donate-primary" href={donateUrl} target="_blank" rel="noreferrer">Donate securely with PayPal</a>
            <small>You’ll continue to PayPal to complete your gift securely.</small>
          </div>
          <div className="donate-image"><Image src="/bird-homestead.jpg" alt="The Bird Homestead, whose restoration is supported by donations" fill priority sizes="(max-width: 840px) 100vw, 50vw" /></div>
        </section>
        <section className="donate-impact">
          <div className="impact-stat"><strong>$172K</strong><span>New York State challenge grant</span></div>
          <div className="impact-copy"><p className="section-kicker">Your support unlocks the match</p><h2>Public funding must be matched.</h2><p>Your donation helps repair the Homestead exterior, safeguard the Meeting House, interpret the William Voris Site, and prepare all three places for community learning.</p></div>
        </section>
        <section className="ways-to-help"><div><p className="section-kicker">More ways to help</p><h2>Stand with Milton Point.</h2></div><div className="help-grid"><article><h3>Make a gift</h3><p>One-time contributions of every size move the restoration forward.</p></article><article><h3>Fundraise with us</h3><p>Bring neighbors together around an event or community campaign.</p></article><article><h3>Start a conversation</h3><p>Contact us about major gifts, matching gifts, or other ways to support the work.</p><Link href="/contact">Contact the Conservancy</Link></article></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
