import Image from "next/image";
import Reveal from "./Reveal";
import opvLogo from "../../public/images/opv-logo.png";
import zantaLogo from "../../public/images/zanta-pianoforti.png";
import padovaPerLogo from "../../public/images/padova-per.png";

const PARTNERS = [
  {
    name: "Orchestra di Padova e del Veneto",
    logo: opvLogo,
    alt: "Logo Orchestra di Padova e del Veneto",
    logoClassName: "h-16 w-auto",
    description:
      "Collaboriamo con l'OPV per offrire ai nostri allievi occasioni di ascolto e crescita musicale accanto a una delle principali realtà sinfoniche italiane.",
  },
  {
    name: "Zanta Pianoforti",
    logo: zantaLogo,
    alt: "Logo Zanta Pianoforti",
    logoClassName: "h-14 w-auto",
    description:
      "Zanta Pianoforti, realtà veneta specializzata in vendita, accordatura e restauro dal 1979, cura la manutenzione dei pianoforti del nostro Istituto.",
  },
  {
    name: "Portale Padova Per",
    logo: padovaPerLogo,
    alt: "Logo Portale Padova Per",
    logoClassName: "h-8 w-auto",
    description:
      "Siamo censiti nel Portale Padova Per, l'ambiente digitale del Comune di Padova che raccoglie servizi e attività per le famiglie della città.",
  },
];

export default function Partners() {
  return (
    <section className="border-t border-b border-linea bg-panna py-14">
      <div className="mx-auto w-[min(1180px,92vw)]">
        <Reveal as="div" className="mb-9 text-center">
          <div className="mx-auto flex w-fit items-center gap-3 font-mono text-xs font-bold tracking-[0.22em] text-carta-scura uppercase before:h-0 before:w-[26px] before:border-t before:border-current before:opacity-60">
            I nostri partner
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PARTNERS.map((p) => (
            <Reveal
              key={p.name}
              as="div"
              className="flex flex-col items-center gap-4 rounded border border-linea bg-white px-6 py-8 text-center"
            >
              <Image src={p.logo} alt={p.alt} className={p.logoClassName} />
              <p className="text-[0.85rem] text-notte-soft">
                {p.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
