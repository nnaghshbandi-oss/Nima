const categories = {
  fachlich: [
    "Schon die FAQ gelesen? Ich bin nicht BAKIRA. 🤷🏻‍♂️",
    "Das klingt fachlich. Also erstmal tief durchatmen, FAQ öffnen und so tun, als wäre alles unter Kontrolle.",
    "SGB, Weisung oder Bauchgefühl? Bitte entscheiden. 😄",
    "Fachliche Frage erkannt. Geduld nicht gefunden."
  ],
  organisation: [
    "Denkst du wirklich, dass ich dir dabei helfen kann? Dann überschätzt du mich gewaltig. 😂",
    "Organisatorisch bin ich ungefähr so zuverlässig wie ein Dienstplan am Montagmorgen.",
    "Das klingt nach einer Frage für jemanden, der weiß, was los ist. Also nicht mich.",
    "Bitte wenden Sie sich an die zuständige Stelle. Welche das ist? Gute Frage."
  ],
  it: [
    "Hast du es schon aus- und wieder eingeschaltet? 😏",
    "IT-Problem erkannt. Wahrscheinlichkeit: 87% Benutzerfehler.",
    "Bitte einmal neu starten. Nicht diskutieren. Einfach machen.",
    "Das Problem sitzt vermutlich zwischen Tastatur und Stuhl. 😇"
  ],
  kaffee: [
    "Kaffee? Wirklich?! Ich habe nur Whiskey da. 🥃😂",
    "Kaffee ist leer. Prioritäten wurden anders gesetzt.",
    "Ohne Kaffee beantworte ich gar nichts.",
    "Kaffee hilft. Whiskey erklärt."
  ],
  kollegen: [
    "Wer ist das Problem? Name reicht erstmal. Foto optional. 😈",
    "Das überrascht mich nicht. Mir wahrscheinlich auch.",
    "Kollege erkannt. Konfliktpotenzial: hoch. Unterhaltungswert: auch.",
    "Sag mir nur, wer unser nächstes Opfer ist. ☠️"
  ],
  vermissen: [
    "Das glaub ich dir aber nicht. 😏",
    "Nürnberg ist weit weg, aber mein Sarkasmus arbeitet bundesweit.",
    "Du vermisst mich? Interessant. Das protokolliere ich.",
    "Ich wusste, dass dieser Tag kommen würde."
  ],
  krank: [
    "Gute Besserung! Aber denk bitte trotzdem an die Krankmeldung. 😎",
    "Krankmeldung erkannt. Drama-Level wird geprüft.",
    "Wenn du wirklich krank bist: Gute Besserung. Wenn nicht: Respekt für die Kreativität.",
    "Gesundmeldung bitte erst, wenn du wirklich wieder auftauchst."
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

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function askNimaAI() {
  const input = document.getElementById("nima-ai-input").value.trim().toLowerCase();
  const output = document.getElementById("nima-ai-output");

  if (!input) {
    output.innerHTML = "Erst eine Frage stellen. Gedankenlesen ist noch nicht freigeschaltet. 😏";
    return;
  }

  let answer;

  if (input.match(/fach|sgb|gesetz|paragraph|weisung|bakira|faq|leist|anspruch|alg/)) {
    answer = pick(categories.fachlich);
  } else if (input.match(/dienstplan|urlaub|termin|besprechung|orga|organisatorisch|planung|team|einsatz/)) {
    answer = pick(categories.organisation);
  } else if (input.match(/passwort|drucker|computer|pc|login|wlan|it|technik|system|funktioniert nicht/)) {
    answer = pick(categories.it);
  } else if (input.match(/kaffee|coffee|müde|wach|espresso/)) {
    answer = pick(categories.kaffee);
  } else if (input.match(/kollege|kollegin|chef|chefin|teamleiter|nervt|opfer|ärgern/)) {
    answer = pick(categories.kollegen);
  } else if (input.match(/vermiss|traurig|nürnberg|weg|zurück|fehlen/)) {
    answer = pick(categories.vermissen);
  } else if (input.match(/krank|gesund|krankmeldung|gesundmeldung|arbeitsunfähig/)) {
    answer = pick(categories.krank);
  } else {
    answer = pick(categories.default);
  }

  output.innerHTML = answer;
}