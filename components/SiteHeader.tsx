"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

const navigation = [
  { href: "/#places", label: "Our places" },
  { href: "/our-story", label: "Our story" },
  { href: "/contact#map", label: "Visit" },
  { href: "/contact", label: "Contact" },
];

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
      <Link className="brand" href="/" aria-label="Milton Point Conservancy home" onClick={() => setOpen(false)}>
        <BrandMark />
      </Link>
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
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
        ))}
        <Link className="nav-give" href="/donate" onClick={() => setOpen(false)}>Donate now</Link>
      </nav>
    </header>
  );
}
