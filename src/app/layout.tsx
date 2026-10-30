import type { Metadata } from "next";
import "./globals.css";
import "./homepage.css";
export const metadata: Metadata = { title: "GharMitra Business Group | Construction & Home Services in Nepal", description: "Find trusted construction professionals, building materials and home services in Tikapur, Kailali and across Nepal." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ne"><body>{children}</body></html>; }
