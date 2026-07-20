export const CORSI = [
  "Violino",
  "Violino — metodo Suzuki",
  "Violoncello",
  "Pianoforte",
  "Chitarra",
  "Tromba",
  "Corno",
  "Percussioni",
  "Canto",
  "Propedeutica musicale",
  "Composizione",
  "Guida all'ascolto",
] as const;

export type Corso = (typeof CORSI)[number];
