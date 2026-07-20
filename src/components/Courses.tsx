import Reveal from "./Reveal";

type Course = { name: string; desc: string; age: string };
type Family = { title: string; tag: string; courses: Course[] };

const FAMILIES: Family[] = [
  {
    title: "Archi",
    tag: "Lezione individuale · 30/45/60 min",
    courses: [
      {
        name: "Violino",
        desc: "Dall'impugnatura dell'archetto al primo concerto. Strumenti in prestito nelle misure per bambini.",
        age: "Dai 4 anni",
      },
      {
        name: "Violino — metodo Suzuki",
        desc: "Si impara a orecchio, come si impara a parlare. Il genitore partecipa alla lezione: nessuna competenza musicale richiesta.",
        age: "Dai 3 anni",
      },
      {
        name: "Violoncello",
        desc: "Il suono più vicino alla voce umana. Postura, arcata e prime melodie in duo con il maestro.",
        age: "Dai 5 anni",
      },
    ],
  },
  {
    title: "Tastiere e corde",
    tag: "Lezione individuale · 30/45/60 min",
    courses: [
      {
        name: "Pianoforte",
        desc: "Lettura, tecnica e repertorio, dal classico alle colonne sonore che i ragazzi vogliono suonare davvero.",
        age: "Dai 5 anni",
      },
      {
        name: "Chitarra",
        desc: "Classica o moderna. Accordi, accompagnamento e primi brani d'insieme fin dai primi mesi.",
        age: "Dai 6 anni",
      },
    ],
  },
  {
    title: "Fiati e percussioni",
    tag: "Lezione individuale · 30/45/60 min",
    courses: [
      {
        name: "Tromba",
        desc: "Respirazione, emissione e ritmo. Porta dritti alla musica d'insieme e all'orchestra di fiati.",
        age: "Dai 7 anni",
      },
      {
        name: "Corno",
        desc: "Uno strumento raro e richiestissimo dalle orchestre. Si comincia con il bocchino e tanto gioco.",
        age: "Dai 8 anni",
      },
      {
        name: "Percussioni",
        desc: "Batteria, tamburo, strumenti a barre. Il corso preferito da chi ha bisogno di muoversi mentre impara.",
        age: "Dai 5 anni",
      },
    ],
  },
  {
    title: "Voce e formazione musicale",
    tag: "Individuale e piccolo gruppo",
    courses: [
      {
        name: "Canto",
        desc: "Tecnica vocale rispettosa della voce dei più piccoli, repertorio scelto insieme all'allievo.",
        age: "Dai 6 anni",
      },
      {
        name: "Propedeutica musicale",
        desc: "Ritmo, canto, movimento e strumentario Orff. Il modo giusto di cominciare, prima di scegliere uno strumento.",
        age: "2–5 anni",
      },
      {
        name: "Composizione",
        desc: "Armonia, scrittura e arrangiamento per chi vuole scrivere la propria musica o preparare l'esame.",
        age: "Dai 12 anni",
      },
      {
        name: "Guida all'ascolto",
        desc: "Incontri per capire cosa succede dentro un brano. Aperti anche ai genitori e agli adulti.",
        age: "Tutte le età",
      },
    ],
  },
];

const AGES = [
  {
    n: "2–5",
    label: "Propedeutica.",
    desc: "Si gioca con il suono, si canta, si scopre il ritmo con il corpo.",
  },
  {
    n: "6–10",
    label: "Primo strumento.",
    desc: "Lezione individuale settimanale e primo saggio in sala.",
  },
  {
    n: "11–15",
    label: "Musica d'insieme.",
    desc: "Repertorio, certificazioni e orchestra della scuola.",
  },
  {
    n: "Adulti",
    label: "Mai troppo tardi.",
    desc: "Orari serali, nessun esame, solo il piacere di suonare.",
  },
];

export default function Courses() {
  return (
    <section id="corsi" className="py-16 sm:py-24 lg:py-[120px]">
      <div className="mx-auto w-[min(1180px,92vw)]">
        <Reveal>
          <div className="mb-[1.1rem] flex items-center gap-3 font-mono text-xs font-bold tracking-[0.22em] text-carta-scura uppercase before:h-0 before:w-[26px] before:border-t before:border-current before:opacity-60">
            I corsi
          </div>
        </Reveal>
        <Reveal>
          <h2 className="font-serif text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.16] font-semibold tracking-tight">
            Dodici strumenti, un solo modo di insegnarli.
          </h2>
        </Reveal>
        <Reveal>
          <p className="mt-6 max-w-[60ch] text-[1.18rem] text-notte-soft">
            Lezioni individuali settimanali, musica d&apos;insieme, teoria
            integrata nella pratica. Ogni corso è aperto tutto l&apos;anno: si
            può iniziare anche a gennaio.
          </p>
        </Reveal>

        {FAMILIES.map((fam) => (
          <Reveal key={fam.title} as="div" className="mt-12">
            <div className="flex items-baseline gap-4 border-b border-notte pb-3">
              <h3 className="text-[1.4rem] font-semibold">{fam.title}</h3>
              <span className="ml-auto text-[0.72rem] tracking-[0.18em] text-notte-soft uppercase">
                {fam.tag}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-px border-x border-b border-linea bg-linea sm:grid-cols-2 lg:grid-cols-3">
              {fam.courses.map((c) => (
                <article
                  key={c.name}
                  className="group bg-panna px-6 pt-6 pb-5.5 transition-colors hover:bg-white"
                >
                  <h4 className="mb-[0.45rem] font-serif text-[1.12rem] font-semibold tracking-tight">
                    {c.name}
                  </h4>
                  <p className="mb-4 text-[0.9rem] text-notte-soft">
                    {c.desc}
                  </p>
                  <span className="text-[0.72rem] font-bold tracking-[0.12em] text-carta-scura uppercase group-hover:text-ottone">
                    {c.age}
                  </span>
                </article>
              ))}
            </div>
          </Reveal>
        ))}

        <div
          id="eta"
          className="mt-16 grid scroll-mt-20 grid-cols-2 gap-6 sm:mt-20 lg:mt-24 lg:grid-cols-4"
        >
          {AGES.map((a) => (
            <Reveal
              key={a.n}
              as="div"
              className="rounded bg-carta-chiara p-6"
            >
              <span className="mb-2.5 block font-serif text-[1.9rem] leading-none font-semibold">
                {a.n}
              </span>
              <p className="text-[0.9rem] text-notte-soft">
                <b>{a.label}</b> {a.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
