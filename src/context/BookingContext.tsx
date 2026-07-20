"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

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

type BookingContextValue = {
  corso: Corso;
  setCorso: (corso: Corso) => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [corso, setCorso] = useState<Corso>("Violino");
  return (
    <BookingContext.Provider value={{ corso, setCorso }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within a BookingProvider");
  return ctx;
}
