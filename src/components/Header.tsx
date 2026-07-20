"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "../../public/images/logo.png";

const LINKS = [
  { href: "#chi-siamo", label: "Chi siamo" },
  { href: "#corsi", label: "Corsi" },
  { href: "#eta", label: "Percorsi per età" },
  { href: "#prenota", label: "Prenota" },
  { href: "#contatti", label: "Contatti" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-linea bg-velo">
      <div className="mx-auto flex h-[78px] w-[min(1180px,92vw)] items-center gap-8">
        <a
          className="mr-auto flex items-center gap-3"
          href="#top"
          onClick={() => setOpen(false)}
        >
          <Image
            src={logo}
            alt="Logo Istituto Musicale Malipiero"
            width={52}
            height={52}
            className="block h-[52px] w-[52px] flex-none rounded-full"
            priority
          />
          <span>
            <b className="block font-serif text-[1.02rem] leading-tight font-semibold tracking-tight">
              Istituto Musicale G.F. Malipiero
            </b>
            <span className="block text-[0.66rem] tracking-[0.18em] text-notte-soft uppercase">
              Scuola di musica · Padova
            </span>
          </span>
        </a>

        <nav className="hidden gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="border-b border-transparent py-1 text-[0.88rem] font-medium hover:border-ottone"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          className="hidden items-center justify-center gap-2 rounded border border-notte bg-notte px-6 py-3.5 font-sans text-[0.88rem] font-bold tracking-[0.06em] text-panna uppercase transition-colors hover:border-carta-scura hover:bg-carta-scura lg:inline-flex"
          href="#prenota"
        >
          Prenota una lezione
        </a>

        <button
          type="button"
          className="ml-auto text-2xl text-notte lg:hidden"
          aria-label={open ? "Chiudi il menu" : "Apri il menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-linea bg-velo lg:hidden">
          <div className="mx-auto flex w-[min(1180px,92vw)] flex-col py-2">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-linea py-3 text-[0.95rem] font-medium last:border-b-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#prenota"
              onClick={() => setOpen(false)}
              className="mt-3 mb-2 inline-flex items-center justify-center gap-2 rounded bg-notte px-6 py-3.5 text-center font-sans text-[0.88rem] font-bold tracking-[0.06em] text-panna uppercase"
            >
              Prenota una lezione
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
