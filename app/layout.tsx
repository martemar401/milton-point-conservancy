import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const image = `${protocol}://${host}/og.png`;
  const description = "Preserving the Bird Homestead, Rye Meeting House, and William Voris historic site in Rye, New York.";
  return {
    title: "Milton Point Conservancy | Rye, New York",
    description,
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: { title: "Milton Point Conservancy", description, images: [{ url: image, width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title: "Milton Point Conservancy", description, images: [image] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
