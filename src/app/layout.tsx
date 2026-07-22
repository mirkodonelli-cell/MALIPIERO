import type { Metadata } from "next";
import { Literata, Karla, Courier_Prime } from "next/font/google";
import CookieNotice from "@/components/CookieNotice";
import "./globals.css";

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Istituto Musicale G.F. Malipiero — Scuola di musica a Padova",
  description:
    "Scuola di musica a Padova per bambini dai 2 anni e adulti. Violino, pianoforte, chitarra, metodo Suzuki, violoncello, canto, fiati, percussioni, propedeutica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${literata.variable} ${karla.variable} ${courierPrime.variable}`}
      style={{ colorScheme: "light" }}
    >
      <body className="overflow-x-hidden bg-velo font-sans text-[17px] leading-[1.65] text-notte antialiased">
        {children}
        <CookieNotice />
      </body>
    </html>
  );
}
