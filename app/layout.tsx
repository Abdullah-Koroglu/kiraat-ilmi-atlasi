import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const heading = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kıraat İlmi Atlası",
  description:
    "Kıraat tarihini kurrâ, dönemler, şehirler ve kıraat farklılıkları üzerinden görselleştiren dijital beşeri bilimler projesi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${heading.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
