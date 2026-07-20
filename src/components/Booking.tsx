"use client";

import { useEffect, useMemo, useState } from "react";
import { useBooking, CORSI } from "@/context/BookingContext";

const MESI = [
  "gennaio",
  "febbraio",
  "marzo",
  "aprile",
  "maggio",
  "giugno",
  "luglio",
  "agosto",
  "settembre",
  "ottobre",
  "novembre",
  "dicembre",
];
const GG = ["dom", "lun", "mar", "mer", "gio", "ven", "sab"];
const ORARI = [
  "15:00",
  "15:45",
  "16:30",
  "17:15",
  "18:00",
  "18:45",
  "19:30",
];

const DURATE = [
  { value: "prova|0", label: "Lezione di prova (30 min)", suffix: "gratuita" },
  { value: "singola30|25", label: "Lezione singola 30 min", suffix: "25 €" },
  { value: "singola45|35", label: "Lezione singola 45 min", suffix: "35 €" },
  { value: "singola60|45", label: "Lezione singola 60 min", suffix: "45 €" },
  {
    value: "pacchetto4|90",
    label: "Pacchetto 4 lezioni da 30 min",
    suffix: "90 €",
  },
];

const PAYS = [
  "Carta di credito o debito",
  "Satispay",
  "Bonifico bancario",
  "Pago in segreteria alla prima lezione",
];

type DayInfo = { date: Date; disabled: boolean };

export default function Booking() {
  const { corso, setCorso } = useBooking();
  const [durata, setDurata] = useState(DURATE[0].value);
  const [days, setDays] = useState<DayInfo[]>([]);
  const [dayIndex, setDayIndex] = useState<number | null>(null);
  const [slot, setSlot] = useState<string | null>(null);
  const [pay, setPay] = useState(PAYS[0]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Sincronizza con la data reale del dispositivo: deve girare solo lato
    // client per evitare disallineamenti tra il render del server e l'oggi del browser.
    const today = new Date();
    const list: DayInfo[] = [];
    for (let i = 1; i <= 14; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      list.push({ date: d, disabled: d.getDay() === 0 });
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDays(list);
  }, []);

  const selectedDay = dayIndex !== null ? days[dayIndex] : null;

  const slots = useMemo(() => {
    if (!selectedDay) return [];
    return ORARI.map((o, i) => ({
      label: o,
      disabled: (selectedDay.date.getDate() + i) % 4 === 0,
    }));
  }, [selectedDay]);

  const durataInfo = DURATE.find((d) => d.value === durata) ?? DURATE[0];
  const [, prezzo] = durataInfo.value.split("|");
  const totale = Number(prezzo) === 0 ? "Gratuita" : `${prezzo} €`;

  function pickDay(i: number) {
    setDayIndex(i);
    setSlot(null);
  }

  function confirm() {
    if (!selectedDay || !slot) {
      alert("Scegliete prima un giorno e un orario.");
      return;
    }
    alert(
      "Anteprima: qui la prenotazione viene salvata e parte il pagamento sicuro.",
    );
  }

  return (
    <section
      id="prenota"
      className="scroll-mt-[90px] bg-notte py-16 text-panna [color-scheme:dark] sm:py-24 lg:py-[120px]"
    >
      <div className="relative z-10 mx-auto w-[min(1180px,92vw)]">
        <div className="mb-[1.1rem] flex items-center gap-3 font-mono text-xs font-bold tracking-[0.22em] text-carta uppercase before:h-0 before:w-[26px] before:border-t before:border-current before:opacity-60">
          Prenota e paga
        </div>
        <h2 className="font-serif text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.16] font-semibold tracking-tight text-panna">
          Scegliete il giorno. Al resto pensiamo noi.
        </h2>
        <p className="mt-6 max-w-[60ch] text-[1.18rem] text-panna/78">
          Prenotate la lezione di prova o il pacchetto di lezioni: ricevete
          conferma via email e potete pagare subito online, senza passare in
          segreteria.
        </p>

        <div className="mx-auto mt-12 flex max-w-[1040px] flex-wrap items-stretch gap-6">
          {/* Passo 1 */}
          <div className="min-w-0 flex-1 basis-[420px] bg-pannello p-6 sm:p-9">
            <div className="mb-2.5 font-sans text-[0.72rem] font-bold tracking-[0.2em] text-carta uppercase">
              Passo 1 — Prenotazione
            </div>
            <h3 className="mb-6 text-panna">Quando venite a trovarci?</h3>

            <div className="mb-5">
              <label
                htmlFor="corso"
                className="mb-2 block text-[0.72rem] font-bold tracking-[0.14em] text-panna/78 uppercase"
              >
                Corso
              </label>
              <select
                id="corso"
                value={corso}
                onChange={(e) => setCorso(e.target.value as (typeof CORSI)[number])}
                className="select-dark w-full appearance-none rounded border border-panna/28 bg-panna/8 px-4 py-3.5 font-sans text-[0.98rem] text-panna"
              >
                {CORSI.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-5">
              <label
                htmlFor="durata"
                className="mb-2 block text-[0.72rem] font-bold tracking-[0.14em] text-panna/78 uppercase"
              >
                Formula
              </label>
              <select
                id="durata"
                value={durata}
                onChange={(e) => setDurata(e.target.value)}
                className="select-dark w-full appearance-none rounded border border-panna/28 bg-panna/8 px-4 py-3.5 font-sans text-[0.98rem] text-panna"
              >
                {DURATE.map((d) => (
                  <option key={d.value} value={d.value}>
                    {d.label} — {d.suffix}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-5">
              <label className="mb-2 block text-[0.72rem] font-bold tracking-[0.14em] text-panna/78 uppercase">
                Giorno
              </label>
              <div className="days flex min-w-0 max-w-full gap-2 overflow-x-auto pb-2">
                {days.map((d, i) => (
                  <button
                    key={i}
                    type="button"
                    disabled={d.disabled}
                    aria-pressed={dayIndex === i}
                    title={d.disabled ? "Chiuso" : undefined}
                    onClick={() => pickDay(i)}
                    className="w-[66px] flex-none rounded border border-panna/25 bg-transparent px-1 py-3 text-center font-sans text-panna transition-colors hover:border-carta disabled:cursor-not-allowed disabled:opacity-25 aria-pressed:border-carta aria-pressed:bg-carta aria-pressed:text-notte"
                  >
                    <small className="block text-[0.62rem] tracking-[0.12em] text-current opacity-60 uppercase">
                      {GG[d.date.getDay()]}
                    </small>
                    <b className="my-0.5 block font-serif text-[1.3rem] font-semibold">
                      {d.date.getDate()}
                    </b>
                    <span className="text-[0.62rem] opacity-60 uppercase">
                      {MESI[d.date.getMonth()].slice(0, 3)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-[0.72rem] font-bold tracking-[0.14em] text-panna/78 uppercase">
                Orario disponibile
              </label>
              <div className="mt-1.5 grid min-w-0 grid-cols-[repeat(auto-fill,minmax(88px,1fr))] gap-2">
                {slots.map((s) => (
                  <button
                    key={s.label}
                    type="button"
                    disabled={s.disabled}
                    aria-pressed={slot === s.label}
                    title={s.disabled ? "Non disponibile" : undefined}
                    onClick={() => setSlot(s.label)}
                    className="rounded border border-panna/25 bg-transparent px-1.5 py-3 text-center font-sans text-[0.92rem] font-medium text-panna transition-colors hover:border-carta disabled:cursor-not-allowed disabled:opacity-[0.22] disabled:line-through aria-pressed:border-carta aria-pressed:bg-carta aria-pressed:text-notte"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Passo 2 */}
          <div className="min-w-0 flex-1 basis-[420px] bg-pannello p-6 sm:p-9">
            <div className="mb-2.5 font-sans text-[0.72rem] font-bold tracking-[0.2em] text-carta uppercase">
              Passo 2 — Pagamento
            </div>
            <h3 className="mb-6 text-panna">Riepilogo</h3>

            <div className="mb-5 rounded border border-dashed border-panna/30 px-5 py-5">
              <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-2 text-[0.95rem]">
                <dt className="self-center text-[0.75rem] tracking-[0.12em] text-panna/60 uppercase">
                  Corso
                </dt>
                <dd className="m-0 text-right font-medium break-words">
                  {corso}
                </dd>
                <dt className="self-center text-[0.75rem] tracking-[0.12em] text-panna/60 uppercase">
                  Formula
                </dt>
                <dd className="m-0 text-right font-medium break-words">
                  {durataInfo.label}
                </dd>
                <dt className="self-center text-[0.75rem] tracking-[0.12em] text-panna/60 uppercase">
                  Data
                </dt>
                <dd className="m-0 text-right font-medium break-words">
                  {selectedDay
                    ? `${selectedDay.date.getDate()} ${MESI[selectedDay.date.getMonth()]}`
                    : "—"}
                </dd>
                <dt className="self-center text-[0.75rem] tracking-[0.12em] text-panna/60 uppercase">
                  Ora
                </dt>
                <dd className="m-0 text-right font-medium break-words">
                  {slot ?? "—"}
                </dd>
                <dt className="self-center text-[0.75rem] tracking-[0.12em] text-panna/60 uppercase">
                  Sede
                </dt>
                <dd className="m-0 text-right font-medium break-words">
                  Via San Tomaso 3, Padova
                </dd>
                <dt className="col-span-2 mt-1.5 border-t border-panna/20 pt-2.5 text-[0.75rem] tracking-[0.12em] text-panna/60 uppercase">
                  Totale
                </dt>
                <dd className="col-span-2 -mt-2 text-right font-serif text-[1.45rem] font-semibold text-carta">
                  {totale}
                </dd>
              </dl>
            </div>

            <div className="mb-5 grid gap-2.5">
              {PAYS.map((p) => (
                <label
                  key={p}
                  className={`flex cursor-pointer items-center gap-3 rounded border px-4 py-3.5 text-[0.95rem] ${
                    pay === p
                      ? "border-carta bg-carta/16"
                      : "border-panna/25"
                  }`}
                >
                  <input
                    type="radio"
                    name="pay"
                    value={p}
                    checked={pay === p}
                    onChange={() => setPay(p)}
                    className="m-0 w-auto"
                  />
                  {p}
                </label>
              ))}
            </div>

            <div className="mb-5">
              <label
                htmlFor="p-nome"
                className="mb-2 block text-[0.72rem] font-bold tracking-[0.14em] text-panna/78 uppercase"
              >
                Intestatario / genitore
              </label>
              <input
                id="p-nome"
                type="text"
                placeholder="Nome e cognome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full rounded border border-panna/28 bg-panna/8 px-4 py-3.5 font-sans text-[0.98rem] text-panna placeholder:text-panna/50"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="p-mail"
                className="mb-2 block text-[0.72rem] font-bold tracking-[0.14em] text-panna/78 uppercase"
              >
                Email per la conferma
              </label>
              <input
                id="p-mail"
                type="email"
                placeholder="nome@email.it"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded border border-panna/28 bg-panna/8 px-4 py-3.5 font-sans text-[0.98rem] text-panna placeholder:text-panna/50"
              />
            </div>

            <button
              type="button"
              onClick={confirm}
              className="w-full rounded border border-ottone bg-ottone px-6 py-3.5 font-sans text-[0.88rem] font-bold tracking-[0.06em] text-white uppercase transition-colors hover:border-[#a9762f] hover:bg-[#a9762f]"
            >
              Conferma la prenotazione
            </button>
            <p className="mt-4 text-[0.78rem] text-panna/62">
              Pagamento gestito da un circuito sicuro. Le lezioni si possono
              spostare fino a 24 ore prima, senza costi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
