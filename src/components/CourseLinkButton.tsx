"use client";

import { useBooking, CORSI, type Corso } from "@/context/BookingContext";

export default function CourseLinkButton({
  corso,
  label,
}: {
  corso: string;
  label: string;
}) {
  const { setCorso } = useBooking();

  return (
    <button
      type="button"
      className="mt-auto px-6 pt-5 text-left font-sans text-[0.8rem] font-bold tracking-[0.12em] text-carta-scura uppercase hover:text-ottone"
      onClick={() => {
        if ((CORSI as readonly string[]).includes(corso)) {
          setCorso(corso as Corso);
        }
        document.getElementById("prenota")?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {label}
    </button>
  );
}
