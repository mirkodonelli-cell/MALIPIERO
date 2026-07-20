"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { CORSI } from "@/context/BookingContext";

export default function Contact() {
  const [msg, setMsg] = useState("");

  function send() {
    alert("Anteprima: qui il messaggio arriva alla segreteria.");
  }

  return (
    <section id="contatti" className="py-16 sm:py-24 lg:py-[120px]">
      <div className="mx-auto grid w-[min(1180px,92vw)] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-18">
        <Reveal
          as="div"
          className="rounded border border-linea bg-panna p-6 sm:p-9"
        >
          <div className="mb-[1.1rem] flex items-center gap-3 font-mono text-xs font-bold tracking-[0.22em] text-carta-scura uppercase before:h-0 before:w-[26px] before:border-t before:border-current before:opacity-60">
            Scriveteci
          </div>
          <h3 className="mb-6 text-[1.3rem] font-semibold">
            Vi richiamiamo entro un giorno.
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="mb-5">
              <label
                htmlFor="c-nome"
                className="mb-2 block text-[0.72rem] font-bold tracking-[0.14em] text-notte-soft uppercase"
              >
                Nome del genitore
              </label>
              <input
                id="c-nome"
                type="text"
                placeholder="Nome e cognome"
                className="w-full rounded border border-linea bg-white px-4 py-3.5 text-[0.98rem] text-notte focus:outline-2 focus:outline-offset-1 focus:outline-carta-scura"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="c-tel"
                className="mb-2 block text-[0.72rem] font-bold tracking-[0.14em] text-notte-soft uppercase"
              >
                Telefono
              </label>
              <input
                id="c-tel"
                type="tel"
                placeholder="333 000 0000"
                className="w-full rounded border border-linea bg-white px-4 py-3.5 text-[0.98rem] text-notte focus:outline-2 focus:outline-offset-1 focus:outline-carta-scura"
              />
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="c-mail"
              className="mb-2 block text-[0.72rem] font-bold tracking-[0.14em] text-notte-soft uppercase"
            >
              Email
            </label>
            <input
              id="c-mail"
              type="email"
              placeholder="nome@email.it"
              className="w-full rounded border border-linea bg-white px-4 py-3.5 text-[0.98rem] text-notte focus:outline-2 focus:outline-offset-1 focus:outline-carta-scura"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="mb-5">
              <label
                htmlFor="c-eta"
                className="mb-2 block text-[0.72rem] font-bold tracking-[0.14em] text-notte-soft uppercase"
              >
                Età dell&apos;allievo
              </label>
              <input
                id="c-eta"
                type="text"
                placeholder="Es. 6 anni"
                className="w-full rounded border border-linea bg-white px-4 py-3.5 text-[0.98rem] text-notte focus:outline-2 focus:outline-offset-1 focus:outline-carta-scura"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="c-int"
                className="mb-2 block text-[0.72rem] font-bold tracking-[0.14em] text-notte-soft uppercase"
              >
                Corso di interesse
              </label>
              <select
                id="c-int"
                defaultValue=""
                className="w-full appearance-none rounded border border-linea bg-white px-4 py-3.5 text-[0.98rem] text-notte focus:outline-2 focus:outline-offset-1 focus:outline-carta-scura"
              >
                <option value="">Non lo so ancora, consigliatemi</option>
                {CORSI.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="c-msg"
              className="mb-2 block text-[0.72rem] font-bold tracking-[0.14em] text-notte-soft uppercase"
            >
              Messaggio
            </label>
            <textarea
              id="c-msg"
              rows={4}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Raccontateci qualcosa di vostro figlio o della vostra curiosità musicale."
              className="w-full rounded border border-linea bg-white px-4 py-3.5 text-[0.98rem] text-notte focus:outline-2 focus:outline-offset-1 focus:outline-carta-scura"
            />
          </div>

          <button
            type="button"
            onClick={send}
            className="w-full rounded border border-notte bg-notte px-6 py-3.5 font-sans text-[0.88rem] font-bold tracking-[0.06em] text-panna uppercase transition-colors hover:border-carta-scura hover:bg-carta-scura"
          >
            Invia il messaggio
          </button>
        </Reveal>

        <Reveal as="div">
          <div className="mb-[1.1rem] flex items-center gap-3 font-mono text-xs font-bold tracking-[0.22em] text-carta-scura uppercase before:h-0 before:w-[26px] before:border-t before:border-current before:opacity-60">
            Dove siamo
          </div>
          <h2 className="font-serif text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.16] font-semibold tracking-tight">
            Nel cuore di Padova.
          </h2>
          <dl className="mt-8 grid grid-cols-1 gap-6">
            <div>
              <dt className="mb-1 text-[0.72rem] font-bold tracking-[0.18em] text-carta-scura uppercase">
                Indirizzo
              </dt>
              <dd className="font-serif text-[1.25rem] leading-[1.45] font-medium">
                Via San Tomaso 3
                <br />
                35141 Padova
              </dd>
            </div>
            <div>
              <dt className="mb-1 text-[0.72rem] font-bold tracking-[0.18em] text-carta-scura uppercase">
                Telefono
              </dt>
              <dd className="font-serif text-[1.25rem] leading-[1.45] font-medium">
                <a
                  href="tel:+393342997656"
                  className="border-b border-ottone no-underline"
                >
                  334 299 7656
                </a>
              </dd>
            </div>
            <div>
              <dt className="mb-1 text-[0.72rem] font-bold tracking-[0.18em] text-carta-scura uppercase">
                WhatsApp
              </dt>
              <dd className="font-serif text-[1.25rem] leading-[1.45] font-medium">
                <a
                  href="https://wa.me/393342997656"
                  className="border-b border-ottone no-underline"
                >
                  334 299 7656
                </a>
              </dd>
            </div>
            <div>
              <dt className="mb-1 text-[0.72rem] font-bold tracking-[0.18em] text-carta-scura uppercase">
                Email
              </dt>
              <dd className="font-serif text-[1.05rem] leading-[1.45] font-medium">
                <a
                  href="mailto:associazionemusicalemalipiero@gmail.com"
                  className="border-b border-ottone no-underline"
                >
                  associazionemusicalemalipiero@gmail.com
                </a>
              </dd>
            </div>
          </dl>
          <div
            className="mt-8 grid h-[220px] place-items-center rounded border border-linea text-[0.8rem] tracking-[0.18em] text-carta-scura uppercase"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--color-carta-chiara) 0 12px, #e6eff3 12px 24px)",
            }}
          >
            Mappa — Via San Tomaso 3, Padova
          </div>
        </Reveal>
      </div>
    </section>
  );
}
