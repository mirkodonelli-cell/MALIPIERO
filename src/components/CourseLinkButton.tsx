const WHATSAPP_NUMBER = "393342997656";

export default function CourseLinkButton({
  corso,
  label,
}: {
  corso: string;
  label: string;
}) {
  const message = `Ciao! Vorrei prenotare una lezione di prova di ${corso}.`;
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto px-6 pt-5 text-left font-sans text-[0.8rem] font-bold tracking-[0.12em] text-carta-scura uppercase hover:text-ottone"
    >
      {label}
    </a>
  );
}
