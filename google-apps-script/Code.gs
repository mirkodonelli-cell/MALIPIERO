// ============================================================================
// Istituto Musicale G.F. Malipiero — connettore Gmail per il modulo contatti
//
// Riceve i messaggi dal modulo "Scriveteci" del sito (via il nostro backend
// Next.js) e invia una email alla segreteria + una conferma al mittente.
// ============================================================================

var SHARED_SECRET = "IZk3rYzpkiGZHdNZkUtpZnY1a3kvwbJr";
var EMAIL_SEGRETERIA = "associazionemusicalemalipiero@gmail.com";

function doPost(e) {
  var body;
  try {
    body = JSON.parse(e.postData.contents);
  } catch (err) {
    return jsonResponse({ ok: false, error: "invalid_json" });
  }

  if (body.secret !== SHARED_SECRET) {
    return jsonResponse({ ok: false, error: "unauthorized" });
  }

  try {
    return handleContact(body);
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  }
}

function handleContact(body) {
  var subject = "Nuovo messaggio dal sito — " + (body.nome || "Anonimo");
  var text = [
    "Nome: " + (body.nome || "—"),
    "Telefono: " + (body.telefono || "—"),
    "Email: " + (body.email || "—"),
    "Età allievo: " + (body.etaAllievo || "—"),
    "Corso di interesse: " + (body.corsoInteresse || "—"),
    "",
    "Messaggio:",
    body.messaggio || "—",
  ].join("\n");

  GmailApp.sendEmail(EMAIL_SEGRETERIA, subject, text, {
    replyTo: body.email || EMAIL_SEGRETERIA,
  });

  if (body.email) {
    GmailApp.sendEmail(
      body.email,
      "Abbiamo ricevuto il tuo messaggio — Istituto Musicale G.F. Malipiero",
      "Ciao " + (body.nome || "") + ",\n\n" +
        "Abbiamo ricevuto il tuo messaggio e ti risponderemo entro un giorno.\n\n" +
        "A presto,\nIstituto Musicale G.F. Malipiero\nVia San Tomaso 3, 35141 Padova"
    );
  }

  return jsonResponse({ ok: true });
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
