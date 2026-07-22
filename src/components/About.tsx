import Image from "next/image";
import Reveal from "./Reveal";
import CourseLinkButton from "./CourseLinkButton";
import saggio from "../../public/images/chi-siamo-saggio.jpg";
import marinaBartoli from "../../public/images/teachers/marina-bartoli.jpg";
import giacomoDallaLibera from "../../public/images/teachers/giacomo-dalla-libera.jpg";
import paoloFerraresi from "../../public/images/teachers/paolo-ferraresi.jpg";
import antonellaNicolini from "../../public/images/teachers/antonella-nicolini.jpg";
import davidJavakhishvili from "../../public/images/teachers/david-javakhishvili.jpg";
import riccardoLucadello from "../../public/images/teachers/riccardo-lucadello.jpg";
import enricoMattea from "../../public/images/teachers/enrico-mattea.jpg";
import enricoMastromatteo from "../../public/images/teachers/enrico-mastromatteo.jpg";
import chiaraFanzago from "../../public/images/teachers/chiara-fanzago.jpg";
import gianLucaZoccatelli from "../../public/images/teachers/gian-luca-zoccatelli.jpg";
import vanniVespani from "../../public/images/teachers/vanni-vespani.jpg";

const TEACHERS = [
  {
    name: "Marina Bartoli",
    gender: "f",
    role: "Canto",
    corso: "Canto",
    photo: marinaBartoli,
    alt: "La Maestra Marina Bartoli",
    position: "center 20%",
    bio: "Nata a Mantova e cresciuta ad Imperia, si è diplomata in Canto presso il Conservatorio di Padova per poi perfezionarsi alla prestigiosa Schola Cantorum di Basilea e alla Hochschule di Zurigo. La sua formazione unisce una solida competenza storico-musicale, culminata nella laurea in Lettere Moderne, a un profondo studio della recitazione e della presenza scenica. Dal 2003 svolge un'intensissima attività concertistica internazionale che l'ha portata a esibirsi nei festival e nei teatri più rinomati d'Europa, in Canada, Israele e Giappone, collaborando con i massimi direttori e orchestre specializzate. Parallelamente, si dedica da anni alla didattica nei Conservatori italiani e in masterclass internazionali. Oggi mette la sua straordinaria esperienza a disposizione degli allievi dell'Istituto Malipiero, guidandoli nello studio del canto.",
  },
  {
    name: "Giacomo Dalla Libera",
    gender: "m",
    role: "Pianoforte",
    corso: "Pianoforte",
    photo: giacomoDallaLibera,
    alt: "Il Maestro Giacomo Dalla Libera al pianoforte",
    position: "center 15%",
    bio: "Diplomato con il massimo dei voti e la lode al Conservatorio “C. Pollini” di Padova, è un pianista dalla ricca carriera concertistica che lo vede impegnato sia in veste di solista sia in diverse formazioni cameristiche. Accanto all'attività sui palcoscenici, ha sviluppato fin da giovanissimo una profonda passione per l'insegnamento, dedicandosi alla formazione di decine di bambini e ragazzi. Il suo metodo didattico si distingue per un approccio flessibile e dinamico, capace di adattarsi alle attitudini, alle inclinazioni e ai gusti personali di ogni singolo allievo. Nelle sue lezioni, la ricerca tecnica e il senso di disciplina si fondono costantemente con la gioia di suonare, offrendo un percorso formativo stimolante e incentrato sul piacere di condividere la musica.",
  },
  {
    name: "Paolo Ferraresi",
    gender: "m",
    role: "Pianoforte",
    corso: "Pianoforte",
    photo: paoloFerraresi,
    alt: "Il Maestro Paolo Ferraresi",
    position: "center 10%",
    bio: "Diplomato al Conservatorio di Padova, ha proseguito e perfezionato i suoi studi pianistici sotto la guida di maestri illustri del panorama musicale quali V. Pertile, Guido Agosti e Vincenzo Vitale. Nel corso degli anni successivi, ha ampliato notevolmente i propri orizzonti artistici affrontando lo studio del raffinato repertorio liederistico insieme a Erik Werba. Già vincitore del quinto premio al Concorso Pianistico Nazionale “Città di Genova”, ha sviluppato una intensa attività concertistica dedicata in particolar modo alla musica da camera e al ruolo di pianista accompagnatore. Negli ultimi anni ha scelto di canalizzare il suo solido bagaglio di competenze e la sua profonda sensibilità artistica principalmente nella didattica. All'Istituto Malipiero mette questa straordinaria esperienza a disposizione degli allievi, accompagnandoli nello studio del pianoforte con un percorso attento, completo e di alto profilo formativo.",
  },
  {
    name: "Antonella Nicolini",
    gender: "f",
    role: "Violino",
    corso: "Violino",
    photo: antonellaNicolini,
    alt: "La Maestra Antonella Nicolini con il violino",
    position: "center 15%",
    bio: "Violinista da sempre dedita alla formazione e docente presso l'Istituto “G.F. Malipiero” fin dal 1984, considera l'insegnamento la sua priorità professionale per valorizzare il talento e trasmettere la conoscenza della musica. Nella sua lunga carriera sul territorio ha fatto parte del progetto Violinolandia ed è co-ideatrice di Suonare Crescendo, percorsi nati in convenzione con il Conservatorio “C. Pollini” di Padova per favorire l'alfabetizzazione musicale in età precoce. Presso il medesimo Conservatorio patavino ha inoltre insegnato nei Corsi Musicali di Base e Propedeutici dal 2015 al 2021, dedicandosi profondamente alla propedeutica del violino. Grazie a un metodo attento a stimolare la motivazione, oltre ottanta dei suoi allievi hanno superato con successo esami di ammissione e di livello nei Conservatori del Veneto, qualificandosi talvolta ai primi posti in concorsi e rassegne musicali.",
  },
  {
    name: "David Javakhishvili",
    gender: "m",
    role: "Pianoforte",
    corso: "Pianoforte",
    photo: davidJavakhishvili,
    alt: "Il Maestro David Javakhishvili",
    position: "center 20%",
    bio: "Pianista di origine georgiana, ha iniziato la sua formazione musicale a Tbilisi sotto la guida di Teimuraz Matureli, erede della leggendaria scuola russa di Neuhaus e Zak, conseguendo la laurea con lode e menzione d'onore. Debuttando come solista a soli 14 anni con l'Orchestra Sinfonica Statale della Georgia, ha intrapreso una brillante carriera concertistica internazionale esibendosi in importanti città europee come Amsterdam, Utrecht e l'Aia, e in prestigiosi contesti italiani tra cui gli Amici della Musica di Padova, il Conservatorio “C. Pollini” e la Società del Quartetto di Vicenza. Giunto in Italia grazie a una borsa di studio artistica del Vaticano, è stato inoltre il primo pianista in assoluto a inaugurare l'attività concertistica nell'Aula Magna del Palazzo del Bo a Padova, suonando per storici convegni internazionali. Con oltre vent'anni di esperienza nella didattica, unisce all'Istituto Malipiero il suo immenso bagaglio interpretativo a una straordinaria dedizione all'insegnamento per allievi di ogni livello.",
  },
  {
    name: "Riccardo Lucadello",
    gender: "m",
    role: "Violoncello",
    corso: "Violoncello",
    photo: riccardoLucadello,
    alt: "Il Maestro Riccardo Lucadello dirige un'orchestra",
    position: "center 20%",
    bio: "Classe 1997, ha iniziato giovanissimo lo studio del violoncello per poi conseguire con il massimo dei voti e la lode la laurea quinquennale in Composizione al Conservatorio di Castelfranco Veneto e il diploma in Direzione d'Orchestra a Vicenza. Il suo straordinario percorso lo ha portato a perfezionarsi in masterclass internazionali e a dirigere prestigiose formazioni in Italia e all'estero, tra cui l'Orchestra del Teatro Olimpico di Vicenza, la Wiener Kaiserwalzer Orchester, l'Orchestra Filarmonia Veneta e l'Orchestra Filarmonia di Vilnius. Attivo anche come compositore e revisore, ha pubblicato il suo Concerto per Violoncello e Orchestra con la casa editrice Armelin Musica, curando inoltre edizioni critiche di rilievo storico. All'Istituto Malipiero mette la sua poliedrica competenza e la sua freschezza artistica a disposizione degli allievi, guidandoli in un percorso formativo stimolante e completo.",
  },
  {
    name: "Enrico Mattea",
    gender: "m",
    role: "Tromba",
    corso: "Tromba",
    photo: enricoMattea,
    alt: "Il Maestro Enrico Mattea mentre suona la tromba",
    position: "left center",
    bio: "Diplomato in Tromba al Conservatorio di Torino, ha conseguito con lode il Diploma Accademico di II livello al Conservatorio di Padova, perfezionandosi poi con trombettisti di fama internazionale e nel repertorio barocco su strumenti antichi. Vanta un'attività orchestrale ricca e versatile, che lo ha visto collaborare con importanti orchestre venete — anche come prima tromba — e calcare i palcoscenici di festival di rilievo in Italia e all'estero, esibendosi al fianco di celebri direttori e artisti della musica pop e d'autore. Abilitato all'insegnamento nei licei musicali e con una solida esperienza alle spalle come docente di tromba, unisce la sua grande competenza tecnica a una forte passione didattica. All'Istituto Malipiero mette la sua esperienza professionale a disposizione degli allievi, accompagnandoli nello studio dello strumento con un percorso completo e stimolante.",
  },
  {
    name: "Enrico Mastromatteo",
    gender: "m",
    role: "Percussioni",
    corso: "Percussioni",
    photo: enricoMastromatteo,
    alt: "Il Maestro Enrico Mastromatteo mentre suona la batteria",
    position: "center 35%",
    bio: "Enrico Mastromatteo si approccia allo strumento della batteria sin dalla tenera età formandosi in varie scuole di musica nel Padovano. È segnato dalle influenze del folclore latino-americano e del batterismo pop-rock apprese dal batterista e percussionista Ivan Trevisan. Per una costante voglia di ricerca personale è entrato al conservatorio dove studia tuttora con il Maestro Massimo Pastore. Inoltre ha anche intrapreso il percorso espressivo del jazz con il Maestro Ermanno Maria Signorelli. Queste esperienze gli hanno permesso di avviare una fiorente carriera concertistica che l'ha visto collaborare con molti gruppi come l'Art Percussion Ensemble, l'Orchestra del Conservatorio Pollini di Padova, la Filarmonica di Belluno e suonare in palchi importanti come l'Arena di Verona, il San Basilio Music Fest per l'Università Ca' Foscari di Venezia, il circolo Nadir. La sua carriera artistica è in continua evoluzione, come dimostra il suo ultimo progetto in collaborazione con il gruppo Path to Springs: Hell All After, un album di 10 inediti che traccia una curva descrittiva dell'eterno contrasto tra ciò che appartiene all'interiorità più profonda e la necessità fisiologica di liberarlo dalle sue catene.",
  },
  {
    name: "Chiara Fanzago",
    gender: "f",
    role: "Chitarra",
    corso: "Chitarra",
    photo: chiaraFanzago,
    alt: "La Maestra Chiara Fanzago con la chitarra",
    position: "center 20%",
    bio: "Chiara Fanzago è una musicista polistrumentista e insegnante di musica, diplomata in Chitarra Jazz presso il Conservatorio “F. Venezze” di Rovigo. Dopo il percorso al Liceo Musicale “Concetto Marchesi” di Padova, ha approfondito la propria formazione attraverso masterclass con musicisti di rilievo nazionale e internazionale, affiancando agli studi della chitarra quelli di altri strumenti e delle tecnologie musicali. Dal 2021 insegna chitarra e musica d'insieme presso l'Istituto Malipiero, affiancando all'attività didattica un'intensa carriera concertistica. Dal 2019 si esibisce come chitarrista, cantante e bassista in numerosi progetti musicali, partecipando a festival, rassegne ed eventi culturali in tutta Italia. Attualmente è chitarrista e cantante del progetto pop-soul AK Duo, con il quale propone un repertorio che spazia tra soul, pop, R&B e jazz.",
  },
  {
    name: "Gian-Luca Zoccatelli",
    gender: "m",
    role: "Flauto traverso e Canto",
    corso: "Flauto traverso",
    photo: gianLucaZoccatelli,
    alt: "Il Maestro Gian-Luca Zoccatelli",
    position: "center 15%",
    bio: "Nato a Verona, il Maestro Gian-Luca Zoccatelli è docente di flauto traverso e Canto presso l'Istituto Musicale “G.F. Malipiero”, dove mette a disposizione degli studenti un solido bagaglio artistico e metodologico. Nel corso della sua carriera ha consolidato una profonda competenza sia in ambito esecutivo che nell'insegnamento, sviluppando un approccio didattico che mette al centro la crescita individuale di ogni allievo. La sua attività si distingue per il rigore, la sensibilità e la capacità di stimolare costantemente la motivazione, guidando gli studenti nell'acquisizione delle abilità tecniche e interpretative. Attento a trasmettere l'amore per la musica e a valorizzare il talento espresso dai ragazzi, rappresenta una guida autorevole e appassionata nel panorama formativo dell'Istituto.",
  },
  {
    name: "Vanni Vespani",
    gender: "m",
    role: "Percussioni",
    corso: "Percussioni",
    photo: vanniVespani,
    alt: "Il Maestro Vanni Vespani alle percussioni",
    position: "center 55%",
    bio: "Vanni Vespani è docente di strumenti a percussione presso il Liceo Musicale “Marco Polo” di Venezia e il Conservatorio “Cesare Pollini” di Padova. Con passione, esperienza e attenzione alle esigenze di ogni allievo, accompagna bambini, ragazzi e adulti alla scoperta del mondo delle percussioni. Le sue lezioni uniscono tecnica, creatività e divertimento, con l'obiettivo di far crescere ogni studente non solo come musicista, ma anche come persona, in un ambiente accogliente e motivante.",
  },
];

export default function About() {
  return (
    <section
      id="chi-siamo"
      className="border-t border-b border-linea bg-panna py-16 sm:py-24 lg:py-[120px]"
    >
      <div className="mx-auto w-[min(1180px,92vw)]">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-18">
          <Reveal>
            <div className="mb-[1.1rem] flex items-center gap-3 font-mono text-xs font-bold tracking-[0.22em] text-carta-scura uppercase before:h-0 before:w-[26px] before:border-t before:border-current before:opacity-60">
              Chi siamo
            </div>
            <h2 className="font-serif text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.16] font-semibold tracking-tight">
              Una scuola dove il maestro conosce il nome di ogni bambino.
            </h2>
            <p className="mt-6 max-w-[60ch] text-[1.18rem] text-notte-soft">
              L&apos;Istituto Musicale G.F. Malipiero nasce a Padova con
              un&apos;idea semplice: la musica si impara suonandola, fin dal
              primo giorno. Le lezioni sono individuali o in piccolo gruppo,
              calibrate sull&apos;età e sul carattere di ogni allievo — chi è
              timido, chi non sta fermo un attimo, chi arriva già con una
              canzone in testa.
            </p>
            <p className="mt-4 max-w-[60ch] text-[1.18rem] text-notte-soft">
              Accompagniamo i bambini dai 2 anni con la propedeutica musicale
              fino al diploma, e accogliamo anche gli adulti che hanno sempre
              rimandato. Nessuna selezione all&apos;ingresso: solo la voglia
              di provare.
            </p>
          </Reveal>

          <Reveal as="figure" className="m-0">
            <Image
              src={saggio}
              alt="Saggio degli allievi nella sala concerti dell'Istituto"
              className="rounded shadow-[0_24px_50px_-30px_rgba(18,48,61,0.55)]"
            />
            <figcaption className="mt-3 text-[0.8rem] text-notte-soft italic">
              Saggio di fine corso nella nostra sala: ogni allievo suona
              almeno due volte l&apos;anno.
            </figcaption>
          </Reveal>
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24">
          <Reveal>
            <div className="mb-[1.1rem] flex items-center gap-3 font-mono text-xs font-bold tracking-[0.22em] text-carta-scura uppercase before:h-0 before:w-[26px] before:border-t before:border-current before:opacity-60">
              I maestri
            </div>
          </Reveal>
          <Reveal>
            <p className="mb-9 max-w-[60ch] text-[1.18rem] text-notte-soft">
              Concertisti che insegnano. Ogni maestro segue i propri allievi
              dalla prima lezione al saggio, e sceglie con loro il
              repertorio.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-px border border-linea bg-linea sm:grid-cols-2 lg:grid-cols-3">
            {TEACHERS.map((t) => (
              <Reveal
                key={t.name}
                as="article"
                className="flex flex-col bg-panna pb-7"
              >
                <div className="aspect-4/5 overflow-hidden bg-carta-chiara">
                  <Image
                    src={t.photo}
                    alt={t.alt}
                    style={{ objectPosition: t.position }}
                    className="h-full w-full object-cover grayscale contrast-[1.03] transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>
                <div className="px-6 pt-6">
                  <h3 className="text-[1.12rem] font-semibold">
                    Maestr{t.gender === "f" ? "a" : "o"} {t.name}
                  </h3>
                  <div className="mt-1.5 mb-2.5 text-[0.72rem] font-bold tracking-[0.14em] text-ottone uppercase">
                    {t.role}
                  </div>
                  <p className="text-[0.92rem] text-notte-soft">{t.bio}</p>
                </div>
                <CourseLinkButton
                  corso={t.corso}
                  label={`Prenota una lezione di ${t.role.toLowerCase()} →`}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
