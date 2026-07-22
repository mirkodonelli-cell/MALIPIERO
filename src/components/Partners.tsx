import Image from "next/image";
import Reveal from "./Reveal";
import opvLogo from "../../public/images/opv-logo.png";

export default function Partners() {
  return (
    <section className="border-t border-b border-linea bg-panna py-10">
      <Reveal
        as="div"
        className="mx-auto flex w-[min(1180px,92vw)] flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left"
      >
        <p className="max-w-[46ch] text-[0.95rem] text-notte-soft">
          <span className="block font-serif text-[1.05rem] font-semibold text-notte">
            Siamo partner dell&apos;Orchestra di Padova e del Veneto
          </span>
          Collaboriamo con l&apos;OPV per offrire ai nostri allievi occasioni
          di ascolto e crescita musicale accanto a una delle principali
          realtà sinfoniche italiane.
        </p>
        <Image
          src={opvLogo}
          alt="Logo Orchestra di Padova e del Veneto"
          className="h-16 w-auto flex-none"
        />
      </Reveal>
    </section>
  );
}
