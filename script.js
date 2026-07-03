const categories = {
  kollegen: [
    "Kollege erkannt. Konfliktpotenzial: hoch. Unterhaltungswert: auch. 😈",
    "Das überrascht mich nicht. Mir wahrscheinlich auch.",
    "Wer ist das Problem? Name reicht erstmal. Foto optional. 😏",
    "Sag mir nur, wer unser nächstes Opfer ist. ☠️"
  ],
  kaffee: [
    "Kaffee? Wirklich?! Ich habe nur Whiskey da. 🥃😂",
    "Kaffee ist leer. Prioritäten wurden anders gesetzt.",
    "Ohne Kaffee beantworte ich gar nichts.",
    "Kaffee hilft. Whiskey erklärt."
  ],
  vermissen: [
    "Das glaub ich dir aber nicht. 😏",
    "Nürnberg ist weit weg, aber mein Sarkasmus arbeitet bundesweit.",
    "Du vermisst mich? Interessant. Das protokolliere ich.",
    "Ich wusste, dass dieser Tag kommen würde."
  ],
  it: [
    "Hast du es schon aus- und wieder eingeschaltet? 😏",
    "IT-Problem erkannt. Wahrscheinlichkeit: 87% Benutzerfehler.",
    "Bitte einmal neu starten. Nicht diskutieren. Einfach machen.",
    "Das Problem sitzt vermutlich zwischen Tastatur und Stuhl. 😇"
  ],
  krank: [
    "Gute Besserung! Aber denk bitte trotzdem an die Krankmeldung. 😎",
    "Krankmeldung erkannt. Drama-Level wird geprüft.",
    "Wenn du wirklich krank bist: Gute Besserung. Wenn nicht: Respekt für die Kreativität.",
    "Gesundmeldung bitte erst, wenn du wirklich wieder auftauchst."
  ],
  organisation: [
    "Denkst du wirklich, dass ich dir dabei helfen kann? Dann überschätzt du mich gewaltig. 😂",
    "Organisatorisch bin ich ungefähr so zuverlässig wie ein Dienstplan am Montagmorgen.",
    "Das klingt nach einer Frage für jemanden, der weiß, was los ist. Also nicht mich.",
    "Bitte wenden Sie sich an die zuständige Stelle. Welche das ist? Gute Frage."
  ],
  fachlich: [
    "Schon die FAQ gelesen? Ich bin nicht BAKIRA. 🤷🏻‍♂️",
    "Das klingt fachlich. Also erstmal tief durchatmen, FAQ öffnen und so tun, als wäre alles unter Kontrolle.",
    "SGB, Weisung oder Bauchgefühl? Bitte entscheiden. 😄",
    "Fachliche Frage erkannt. Geduld nicht gefunden."
  ],
  default: [
    "Ich analysiere das kurz... Ergebnis: fragwürdig, aber herzlich. 😄",
    "Meine offizielle Antwort: kommt drauf an.",
    "Das klingt nach Arbeit. Ich bin raus.",
    "Interessante Frage. Falsche Anlaufstelle.",
    "Ich würde helfen, aber mein Zuständigkeitsbereich endet genau hier.",
    "BAKIRA hätte jetzt wahrscheinlich auch keine bessere Antwort.",
    "Bitte präzisieren. Oder einfach Kaffee holen."
  ]
};

const keywords = {
  kollegen: ["kollege", "kollegin", "kollegen", "domi", "chef", "chefin", "teamleiter", "ela", "nervt", "nerven", "opfer", "ärgern", "aergern", "person"],
  kaffee: ["kaffee", "coffee", "müde", "muede", "wach", "espresso", "koffein", "cappuccino"],
  vermissen: ["vermiss", "traurig", "nürnberg", "nuernberg", "weg", "zurück", "zurueck", "fehlen", "Herne"],
  it: ["passwort", "drucker", "computer", "pc", "login", "wlan", "it", "technik", "system", "ticket", "neustart", "funktioniert"],
  krank: ["krank", "gesund", "krankmeldung", "gesundmeldung", "arbeitsunfähig", "arbeitsunfaehig", "au", "fieber"],
  organisation: ["dienstplan", "urlaub", "termin", "besprechung", "orga", "organisatorisch", "planung", "team", "einsatz", "vertretung"],
  fachlich: ["fachlich", "sgb", "gesetz", "paragraph", "weisung", "bakira", "faq", "leistung", "anspruch", "alg"]
};

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function scoreCategory(input, words) {
  let score = 0;
  for (const word of words) {
    if (input.includes(word)) score++;
  }
  return score;
}

function detectCategory(input) {
  let bestCategory = "default";
  let bestScore = 0;

  for (const category in keywords) {
    const score = scoreCategory(input, keywords[category]);
    if (score > bestScore) {
      bestScore = score;
      bestCategory = category;
    }
  }

  return bestCategory;
}

function askNimaAI() {
  const input = document.getElementById("nima-ai-input").value.trim().toLowerCase();
  const output = document.getElementById("nima-ai-output");

  if (!input) {
    output.innerHTML = "Erst eine Frage stellen. Gedankenlesen ist noch nicht freigeschaltet. 😏";
    return;
  }

  const category = detectCategory(input);
  const answer = pick(categories[category]);

  output.innerHTML = answer;
}
