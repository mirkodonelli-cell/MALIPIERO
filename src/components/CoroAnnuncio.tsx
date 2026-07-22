import Reveal from "./Reveal";

const WHATSAPP_NUMBER = "393343887656";
const MESSAGE =
  "Ciao! Vorrei sapere di più sul laboratorio di Canto Corale.";

export default function CoroAnnuncio() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <section className="border-t border-b border-linea bg-carta-chiara py-16 sm:py-24">
      <Reveal
        as="div"
        className="mx-auto w-[min(1180px,92vw)] max-w-[70ch] text-center"
      >
        <div className="mx-auto mb-[1.1rem] flex w-fit items-center gap-3 font-mono text-xs font-bold tracking-[0.22em] text-carta-scura uppercase before:h-0 before:w-[26px] before:border-t before:border-current before:opacity-60">
          Novità
        </div>
        <h2 className="font-serif text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.16] font-semibold tracking-tight">
          Torna all&apos;Istituto Malipiero il laboratorio di Canto Corale
        </h2>
        <p className="mt-6 text-[1.18rem] text-notte-soft">
          Curato dal M° Gian-Luca Zoccatelli: un progetto aperto a tutte le
          generazioni!
        </p>
        <p className="mt-4 text-[1.05rem] text-notte-soft">
          Non serve saper leggere la musica, bastano buona volontà,
          entusiasmo e la voglia di cantare e condividere la musica insieme.
        </p>
        <p className="mt-4 text-[1.05rem] font-medium text-notte">
          Vuoi far parte del nostro coro intergenerazionale?
        </p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded border border-ottone bg-ottone px-8 py-4 font-sans text-[0.95rem] font-bold tracking-[0.06em] text-white uppercase transition-colors hover:border-[#a9762f] hover:bg-[#a9762f]"
        >
          Scrivici per saperne di più
        </a>
      </Reveal>
    </section>
  );
}
