import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 sm:py-24">
          <div className="mx-auto w-[min(760px,92vw)]">
            <div className="mb-[1.1rem] flex items-center gap-3 font-mono text-xs font-bold tracking-[0.22em] text-carta-scura uppercase before:h-0 before:w-[26px] before:border-t before:border-current before:opacity-60">
              Informazioni legali
            </div>
            <h1 className="font-serif text-[clamp(2rem,4vw,2.8rem)] leading-[1.16] font-semibold tracking-tight">
              {title}
            </h1>
            <p className="mt-4 text-[0.85rem] text-notte-soft italic">
              Ultimo aggiornamento: {updated}
            </p>
            <div className="legal-content mt-10 space-y-6 text-[1.02rem] leading-[1.7] text-notte-soft">
              {children}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
