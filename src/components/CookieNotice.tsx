"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie-notice-dismissed";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // localStorage non esiste lato server: la lettura deve avvenire solo
    // dopo il mount, per evitare disallineamenti tra server e client.
    if (!window.localStorage.getItem(STORAGE_KEY)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
    }
  }, []);

  function dismiss() {
    window.localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] border-t border-linea bg-panna px-6 py-4 shadow-[0_-8px_24px_-12px_rgba(18,48,61,0.25)]">
      <div className="mx-auto flex w-[min(1180px,92vw)] flex-wrap items-center justify-between gap-4">
        <p className="max-w-[70ch] text-[0.85rem] text-notte-soft">
          Questo sito non utilizza cookie di profilazione o di analisi.
          Consulta la nostra{" "}
          <a
            href="/cookie-policy"
            className="border-b border-ottone text-notte no-underline"
          >
            Cookie Policy
          </a>{" "}
          per maggiori informazioni.
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="flex-none rounded border border-notte bg-notte px-5 py-2.5 font-sans text-[0.8rem] font-bold tracking-[0.06em] text-panna uppercase transition-colors hover:border-carta-scura hover:bg-carta-scura"
        >
          Ho capito
        </button>
      </div>
    </div>
  );
}
