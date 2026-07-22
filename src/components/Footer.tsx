import Image from "next/image";
import logo from "../../public/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-notte py-14 pb-10 text-[0.88rem] text-panna/70">
      <div className="mx-auto flex w-[min(1180px,92vw)] flex-wrap items-center justify-between gap-8">
        <div className="flex items-center gap-3.5">
          <Image
            src={logo}
            alt="Logo Istituto Musicale Malipiero"
            width={56}
            height={56}
            className="h-14 w-14 rounded-full bg-panna"
          />
          <div>
            <div className="font-serif text-[1.02rem] font-semibold text-panna">
              Istituto Musicale G.F. Malipiero
            </div>
            <div>
              Via San Tomaso 3, 35141 Padova ·{" "}
              <a
                href="tel:+393343887656"
                className="border-b border-transparent text-panna no-underline hover:border-ottone"
              >
                334 388 7656
              </a>
            </div>
          </div>
        </div>
        <div>
          <a
            href="mailto:associazionemusicalemalipiero@gmail.com"
            className="border-b border-transparent text-panna no-underline hover:border-ottone"
          >
            associazionemusicalemalipiero@gmail.com
          </a>
          <br />
          <span className="opacity-60">P.IVA 05741080286 — Privacy — Cookie</span>
        </div>
      </div>
    </footer>
  );
}
