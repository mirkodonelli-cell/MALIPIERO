import { NextResponse } from "next/server";

type ContactPayload = {
  nome: string;
  telefono: string;
  email: string;
  etaAllievo: string;
  corsoInteresse: string;
  messaggio: string;
};

export async function POST(request: Request) {
  const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
  const secret = process.env.BOOKING_SHARED_SECRET;

  if (!scriptUrl || !secret) {
    return NextResponse.json(
      { ok: false, error: "Integrazione non configurata." },
      { status: 500 },
    );
  }

  const body = (await request.json()) as ContactPayload;

  if (!body.nome || !body.email || !body.messaggio) {
    return NextResponse.json(
      { ok: false, error: "Dati mancanti." },
      { status: 400 },
    );
  }

  const upstream = await fetch(scriptUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...body, type: "contact", secret }),
  });

  const data = await upstream.json();

  return NextResponse.json(data, { status: data.ok ? 200 : 502 });
}
