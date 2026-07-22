const WHATSAPP_NUMBER = "393343887656";
const MESSAGE = "Ciao! Vorrei prenotare una lezione di prova.";

export default function Booking() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <section
      id="prenota"
      className="scroll-mt-[90px] bg-notte py-16 text-panna sm:py-24 lg:py-[120px]"
    >
      <div className="mx-auto w-[min(1180px,92vw)] text-center">
        <div className="mx-auto mb-[1.1rem] flex w-fit items-center gap-3 font-mono text-xs font-bold tracking-[0.22em] text-carta uppercase before:h-0 before:w-[26px] before:border-t before:border-current before:opacity-60">
          Prenota
        </div>
        <h2 className="font-serif text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.16] font-semibold tracking-tight text-panna">
          Scriveteci su WhatsApp, fissiamo la lezione di prova insieme.
        </h2>
        <p className="mx-auto mt-6 max-w-[60ch] text-[1.18rem] text-panna/78">
          Un messaggio veloce, senza moduli da compilare: ci dite quale
          strumento vi interessa e vi proponiamo giorno e orario.
        </p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded border border-ottone bg-ottone px-8 py-4 font-sans text-[0.95rem] font-bold tracking-[0.06em] text-white uppercase transition-colors hover:border-[#a9762f] hover:bg-[#a9762f]"
        >
          Prenota la lezione di prova su WhatsApp
        </a>
      </div>
    </section>
  );
}
