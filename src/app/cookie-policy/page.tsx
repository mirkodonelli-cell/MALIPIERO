import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy — Istituto Musicale G.F. Malipiero",
  description:
    "Informazioni sull'uso dei cookie su questo sito, ai sensi della normativa vigente e delle Linee guida del Garante Privacy.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy" updated="22 luglio 2026">
      <div className="legal-content">
        <p>
          Questo sito <strong>non utilizza cookie di profilazione</strong>,
          né cookie di terze parti a scopo statistico, pubblicitario o di
          marketing. Non installiamo alcun cookie di analisi (es. Google
          Analytics) né pixel di tracciamento.
        </p>

        <h2>Cookie tecnici</h2>
        <p>
          Il sito, nella sua configurazione attuale, non installa cookie
          tecnici propri per il suo funzionamento. Non è quindi necessario
          richiedere il consenso preventivo dell&apos;utente, poiché non
          vengono utilizzati cookie che lo richiedano ai sensi delle Linee
          guida del Garante Privacy sui cookie e altri strumenti di
          tracciamento (2021).
        </p>

        <h2>Link e servizi esterni</h2>
        <p>
          Il sito contiene collegamenti a servizi esterni (WhatsApp,
          indirizzi email) che, una volta seguiti, sono regolati dalle
          rispettive informative privacy e cookie, non sotto il controllo
          dell&apos;Associazione Musicale G.F. Malipiero:
        </p>
        <ul>
          <li>
            WhatsApp (Meta Platforms, Inc.):{" "}
            <a
              href="https://www.whatsapp.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              whatsapp.com/legal/privacy-policy
            </a>
          </li>
          <li>
            Hosting del sito (Vercel Inc.):{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              vercel.com/legal/privacy-policy
            </a>
          </li>
        </ul>

        <h2>Modifiche future</h2>
        <p>
          Qualora in futuro venissero introdotti strumenti di analisi
          statistica o marketing che richiedano l&apos;installazione di
          cookie non essenziali, questa pagina sarà aggiornata e verrà
          presentato un apposito banner di consenso preventivo, conforme
          alla normativa vigente, prima dell&apos;installazione di tali
          cookie.
        </p>

        <h2>Ulteriori informazioni</h2>
        <p>
          Per informazioni sul trattamento dei dati personali consultate la
          nostra <a href="/privacy">Informativa Privacy</a>.
        </p>
      </div>
    </LegalPage>
  );
}
