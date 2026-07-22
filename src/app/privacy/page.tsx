import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Informativa Privacy — Istituto Musicale G.F. Malipiero",
  description:
    "Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Informativa sulla Privacy" updated="22 luglio 2026">
      <div className="legal-content">
        <p>
          La presente informativa descrive le modalità di trattamento dei
          dati personali degli utenti che consultano questo sito web e/o
          contattano l&apos;Associazione Musicale G.F. Malipiero, ai sensi
          degli artt. 13 e 14 del Regolamento UE 2016/679 (&quot;GDPR&quot;).
        </p>

        <h2>Titolare del trattamento</h2>
        <p>
          <strong>Associazione Musicale G.F. Malipiero</strong>
          <br />
          Via San Tomaso 3, 35141 Padova (PD)
          <br />
          P.IVA 05741080286
          <br />
          Email:{" "}
          <a href="mailto:associazionemusicalemalipiero@gmail.com">
            associazionemusicalemalipiero@gmail.com
          </a>
          <br />
          Telefono: <a href="tel:+393343887656">334 388 7656</a>
        </p>

        <h2>Come vengono raccolti i dati</h2>
        <p>
          Questo sito non trasmette i dati inseriti nei moduli a un server
          proprio. In particolare:
        </p>
        <ul>
          <li>
            il modulo &quot;Scriveteci&quot; apre il programma di posta
            elettronica del visitatore (link <code>mailto:</code>) con
            oggetto e testo precompilati: i dati personali (nome, telefono,
            email, età dell&apos;allievo, corso di interesse, messaggio)
            vengono trasmessi solo se e quando l&apos;utente invia
            autonomamente l&apos;email dal proprio client di posta;
          </li>
          <li>
            i pulsanti &quot;Prenota&quot; aprono una conversazione su
            WhatsApp: i dati vengono trasmessi solo se e quando l&apos;utente
            invia autonomamente il messaggio tramite l&apos;app WhatsApp.
          </li>
        </ul>
        <p>
          In entrambi i casi il Titolare riceve e tratta i dati personali
          solo a seguito di un&apos;azione volontaria dell&apos;utente,
          tramite il proprio servizio di posta elettronica o tramite
          WhatsApp.
        </p>

        <h2>Finalità e base giuridica del trattamento</h2>
        <p>I dati personali eventualmente ricevuti sono trattati per:</p>
        <ul>
          <li>rispondere a richieste di informazioni sui corsi;</li>
          <li>
            organizzare lezioni di prova, iscrizioni e prenotazioni di
            lezioni;
          </li>
          <li>
            adempiere a obblighi contrattuali, contabili e fiscali connessi
            all&apos;erogazione dei corsi.
          </li>
        </ul>
        <p>
          La base giuridica è il consenso dell&apos;interessato (art. 6.1.a
          GDPR), l&apos;esecuzione di misure precontrattuali richieste
          dall&apos;interessato (art. 6.1.b) e, ove applicabile,
          l&apos;adempimento di obblighi di legge (art. 6.1.c).
        </p>

        <h2>Dati relativi a minori</h2>
        <p>
          Quando la richiesta riguarda un allievo minorenne, il trattamento
          si fonda sulla richiesta e sul consenso espresso da chi esercita
          la responsabilità genitoriale, che invia personalmente il modulo
          di contatto o il messaggio di prenotazione.
        </p>

        <h2>Dati di navigazione</h2>
        <p>
          I sistemi informatici e le procedure software preposte al
          funzionamento di questo sito acquisiscono, nel normale esercizio,
          alcuni dati la cui trasmissione è implicita nei protocolli di
          comunicazione di Internet (es. indirizzo IP, tipo di browser,
          pagine visitate). Questi dati sono trattati dal fornitore del
          servizio di hosting (Vercel Inc.) al solo fine tecnico di
          erogare il sito e di garantirne la sicurezza, e non sono
          associati a persone identificate. Non vengono utilizzati a scopo
          di profilazione.
        </p>

        <h2>Destinatari dei dati</h2>
        <p>
          I dati non vengono comunicati a terzi né diffusi, salvo quanto
          strettamente necessario per adempiere a obblighi di legge. Poiché
          l&apos;invio avviene tramite il servizio di posta elettronica
          dell&apos;utente e tramite WhatsApp, questi servizi trattano i
          dati secondo le rispettive informative privacy:
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

        <h2>Periodo di conservazione</h2>
        <p>
          I dati sono conservati per il tempo necessario a rispondere alla
          richiesta e, in caso di iscrizione ai corsi, per la durata del
          rapporto e per il periodo previsto dagli obblighi di legge in
          materia fiscale e contabile.
        </p>

        <h2>Diritti dell&apos;interessato</h2>
        <p>
          In qualità di interessato potete esercitare in qualsiasi momento i
          diritti previsti dagli artt. 15-22 del GDPR: accesso ai dati,
          rettifica, cancellazione, limitazione del trattamento, portabilità
          dei dati, opposizione. Per esercitare questi diritti scrivete a{" "}
          <a href="mailto:associazionemusicalemalipiero@gmail.com">
            associazionemusicalemalipiero@gmail.com
          </a>
          .
        </p>

        <h2>Reclamo</h2>
        <p>
          Avete diritto di proporre reclamo al Garante per la Protezione dei
          Dati Personali (
          <a
            href="https://www.garanteprivacy.it"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.garanteprivacy.it
          </a>
          ) qualora riteniate che il trattamento dei vostri dati violi la
          normativa vigente.
        </p>

        <h2>Modifiche a questa informativa</h2>
        <p>
          Questa informativa può essere aggiornata nel tempo; vi invitiamo a
          consultarla periodicamente. Per la sezione relativa ai cookie
          consultate la nostra{" "}
          <a href="/cookie-policy">Cookie Policy</a>.
        </p>
      </div>
    </LegalPage>
  );
}
