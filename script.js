const answers = [
  "Ich analysiere das kurz... Ergebnis: fragwürdig, aber herzlich. 😄",
  "Schon die FAQ gelesen? Nein? Dachte ich mir. 🤷🏻‍♂️",
  "Das klingt nach Arbeit. Bitte an jemand anderen wenden.",
  "Kaffee holen, tief durchatmen, nochmal versuchen.",
  "Fachlich vielleicht. Organisatorisch eher nein. Menschlich immer. 😄",
  "Ich bin nicht mehr da und trotzdem muss ich das hier klären?",
  "BAKIRA hätte jetzt wahrscheinlich auch keine bessere Antwort.",
  "Das Problem sitzt vermutlich zwischen Tastatur und Stuhl. 😇",
  "Whiskey hilft nicht immer. Aber schadet der Analyse auch nicht. 🥃",
  "Meine offizielle Antwort: kommt drauf an."
];

function askNimaAI() {
  const input = document.getElementById("nima-ai-input").value.trim();
  const output = document.getElementById("nima-ai-output");

  if (!input) {
    output.innerHTML = "Erst eine Frage stellen. Gedankenlesen ist noch nicht freigeschaltet. 😏";
    return;
  }

  const answer = answers[Math.floor(Math.random() * answers.length)];
  output.innerHTML = answer;
}
