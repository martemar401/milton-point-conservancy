"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";

const navigation = [
  { href: "#places", label: "Our places" },
  { href: "#story", label: "Our story" },
  { href: "#visit", label: "Visit" },
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
      <a className="brand" href="#top" aria-label="Milton Point Conservancy home" onClick={() => setOpen(false)}>
        <span className="logo-crop">
          <Image src="/milton-point-logo.png" alt="Milton Point Conservancy" width={432} height={140} priority />
        </span>
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
        <a className="nav-give" href="#support" onClick={() => setOpen(false)}>Support us</a>
      </nav>
    </header>
  );
}
