import Image from "next/image";
import heroMaestro from "../../public/images/hero-maestro.png";

const NOTES = [
  { cx: 70, cy: 80 },
  { cx: 150, cy: 60 },
  { cx: 230, cy: 70 },
  { cx: 310, cy: 40 },
  { cx: 390, cy: 50 },
  { cx: 470, cy: 30 },
];

export default function Hero() {
  return (
    <section className="overflow-hidden pt-12 sm:pt-16 lg:pt-[88px]">
      <div className="mx-auto grid w-[min(1180px,92vw)] items-end gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-[1.1rem] flex items-center gap-3 font-mono text-xs font-bold tracking-[0.22em] text-carta-scura uppercase before:h-0 before:w-[26px] before:border-t before:border-current before:opacity-60">
            Scuola di musica · bambini dai 2 anni e adulti
          </div>
          <h1 className="font-serif text-[clamp(2.3rem,5vw,3.9rem)] leading-[1.1] font-semibold tracking-tight">
            Il primo suono
            <br />
            non si scorda <em className="text-carta-scura italic">più.</em>
          </h1>
          <p className="mt-6 max-w-[60ch] text-[1.18rem] text-notte-soft">
            Da più di 40 anni insegniamo musica ai bambini di Padova con
            maestri diplomati al Conservatorio, lezioni individuali e un
            palco vero su cui salire due volte l&apos;anno. Si comincia con
            una lezione di prova: la prenotate qui, in un minuto.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center justify-center gap-2 rounded border border-ottone bg-ottone px-6 py-3.5 font-sans text-[0.88rem] font-bold tracking-[0.06em] text-white uppercase transition-colors hover:border-[#a9762f] hover:bg-[#a9762f]"
              href="#prenota"
            >
              Prenota la lezione di prova
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded border border-notte px-6 py-3.5 font-sans text-[0.88rem] font-bold tracking-[0.06em] text-notte uppercase transition-colors hover:bg-notte hover:text-panna"
              href="#corsi"
            >
              Guarda i corsi
            </a>
          </div>
        </div>

        <div className="relative justify-self-center">
          <svg
            className="melody pointer-events-none absolute -left-[58%] bottom-[34%] hidden h-[120px] w-[150%] lg:block"
            viewBox="0 0 600 120"
            aria-hidden="true"
          >
            <line x1="0" y1="20" x2="600" y2="20" strokeWidth="1" />
            <line x1="0" y1="40" x2="600" y2="40" strokeWidth="1" />
            <line x1="0" y1="60" x2="600" y2="60" strokeWidth="1" />
            <line x1="0" y1="80" x2="600" y2="80" strokeWidth="1" />
            <line x1="0" y1="100" x2="600" y2="100" strokeWidth="1" />
            {NOTES.map((n, i) => (
              <circle
                key={i}
                className="note"
                cx={n.cx}
                cy={n.cy}
                r="7"
                style={{ animationDelay: `${400 + i * 180}ms` }}
              />
            ))}
          </svg>
          <Image
            src={heroMaestro}
            alt="Illustrazione del maestro direttore con la bacchetta"
            className="w-[min(340px,72vw)]"
            priority
          />
        </div>
      </div>

      <div className="mx-auto mt-12 w-[min(1180px,92vw)] border-t border-b border-linea">
        <ul className="grid list-none grid-cols-1 gap-0 p-0 md:grid-cols-3">
          <li className="flex items-start gap-3 border-linea px-6 py-6 text-[0.95rem] md:border-l md:first:border-l-0">
            <span>♪</span>
            <div>
              <b className="mb-1 block text-[0.72rem] font-bold tracking-[0.18em] text-carta-scura uppercase">
                Prima lezione di prova
              </b>
              Conoscete il maestro e lo strumento prima di iscrivervi.
            </div>
          </li>
          <li className="flex items-start gap-3 border-t border-linea px-6 py-6 text-[0.95rem] md:border-t-0 md:border-l">
            <span>♪</span>
            <div>
              <b className="mb-1 block text-[0.72rem] font-bold tracking-[0.18em] text-carta-scura uppercase">
                Maestri di conservatorio
              </b>
              Concertisti e didatti, formati sul metodo Suzuki e sulla
              didattica per l&apos;infanzia.
            </div>
          </li>
          <li className="flex items-start gap-3 border-t border-linea px-6 py-6 text-[0.95rem] md:border-t-0 md:border-l">
            <span>♪</span>
            <div>
              <b className="mb-1 block text-[0.72rem] font-bold tracking-[0.18em] text-carta-scura uppercase">
                Saggi e concerti
              </b>
              Due volte l&apos;anno i ragazzi suonano in sala, davanti a un
              pubblico vero.
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
