"use client";

import { useEffect, useId, useState } from "react";
import { BrandMark } from "@/components/BrandMark";

const navigation = [
  { href: "#places", label: "Our places" },
  { href: "#story", label: "Our story" },
  { href: "#visit", label: "Visit" },
];

const donateUrl = "https://www.paypal.com/donate/?hosted_button_id=VB2RQ88HR5HQL";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Milton Point Conservancy home" onClick={() => setOpen(false)}>
        <BrandMark />
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true" />
        <span className="menu-label">{open ? "Close" : "Menu"}</span>
      </button>
      <nav id={menuId} className={open ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
        ))}
        <a className="nav-give" href={donateUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Donate now</a>
      </nav>
    </header>
  );
}
