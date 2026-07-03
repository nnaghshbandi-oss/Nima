// NIMA SUPPORT CENTER v2.0 - Fake but convincing AI

const categories = {
  kollegen: ["Kollege erkannt. Konfliktpotenzial: hoch. Unterhaltungswert: auch. 😈","Das überrascht mich nicht. Mir wahrscheinlich auch.","Wer ist das Problem? Name reicht erstmal. Foto optional. 😏","Sag mir nur, wer unser nächstes Opfer ist. ☠️","Menschen sind schwierig. Kollegen sind die Premium-Version davon.","Ich empfehle: freundlich lächeln, innerlich kündigen, Kaffee holen."],
  kaffee: ["Kaffee? Wirklich?! Ich habe nur Whiskey da. 🥃😂","Kaffee ist leer. Prioritäten wurden anders gesetzt.","Ohne Kaffee beantworte ich gar nichts.","Kaffee hilft. Whiskey erklärt.","Bitte zuerst Koffein zuführen. Danach können wir über Probleme reden.","Kaffee ist keine Lösung. Aber ohne Kaffee gibt es auch keine Lösung."],
  vermissen: ["Das glaub ich dir aber nicht. 😏","Nürnberg ist weit weg, aber mein Sarkasmus arbeitet bundesweit.","Du vermisst mich? Interessant. Das protokolliere ich.","Ich wusste, dass dieser Tag kommen würde.","Keine Sorge. Ich bin nicht weg. Ich bin nur schwieriger erreichbar.","Emotionale Anfrage erkannt. Antwort: Aww. Aber mit Sicherheitsabstand."],
  it: ["Hast du es schon aus- und wieder eingeschaltet? 😏","IT-Problem erkannt. Wahrscheinlichkeit: 87% Benutzerfehler.","Bitte einmal neu starten. Nicht diskutieren. Einfach machen.","Das Problem sitzt vermutlich zwischen Tastatur und Stuhl. 😇","Wenn es blinkt: schlecht. Wenn es nicht blinkt: auch schlecht.","Ticket erstellen. Warten. Hoffen. Kaffee trinken."],
  krank: ["Gute Besserung! Aber denk bitte trotzdem an die Krankmeldung. 😎","Krankmeldung erkannt. Drama-Level wird geprüft.","Wenn du wirklich krank bist: Gute Besserung. Wenn nicht: Respekt für die Kreativität.","Gesundmeldung bitte erst, wenn du wirklich wieder auftauchst.","Ich wünsche Genesung. Und eine saubere Dokumentation.","Krank sein ist erlaubt. Chaos verursachen ist optional."],
  organisation: ["Denkst du wirklich, dass ich dir dabei helfen kann? Dann überschätzt du mich gewaltig. 😂","Organisatorisch bin ich ungefähr so zuverlässig wie ein Dienstplan am Montagmorgen.","Das klingt nach einer Frage für jemanden, der weiß, was los ist. Also nicht mich.","Bitte wenden Sie sich an die zuständige Stelle. Welche das ist? Gute Frage.","Organisation erkannt. Spontane Überforderung aktiviert.","Ich würde gerne helfen, aber mein Kalender hat gerade selbst gekündigt."],
  fachlich: ["Schon die FAQ gelesen? Ich bin nicht BAKIRA. 🤷🏻‍♂️","Das klingt fachlich. Also erstmal tief durchatmen, FAQ öffnen und so tun, als wäre alles unter Kontrolle.","SGB, Weisung oder Bauchgefühl? Bitte entscheiden. 😄","Fachliche Frage erkannt. Geduld nicht gefunden.","Ich gebe dir eine fachliche Antwort: Kommt drauf an.","Bitte erst prüfen, dann fragen. Oder direkt fragen und so tun, als hättest du geprüft."],
  emotion: ["Ich höre zu. Also theoretisch. Praktisch bin ich eine Webseite.","Das klingt nach Auskotzen. Bitte fahre fort.","Emotionale Lage erkannt. Empfehlung: Kaffee, kurze Pause, dann dramatisch weiterarbeiten.","Ich bin zwar nicht mehr da, aber zum innerlichen Augenrollen reicht es noch."],
  default: ["Ich analysiere das kurz... Ergebnis: fragwürdig, aber herzlich. 😄","Meine offizielle Antwort: kommt drauf an.","Das klingt nach Arbeit. Ich bin raus.","Interessante Frage. Falsche Anlaufstelle.","Ich würde helfen, aber mein Zuständigkeitsbereich endet genau hier.","BAKIRA hätte jetzt wahrscheinlich auch keine bessere Antwort.","Bitte präzisieren. Oder einfach Kaffee holen.","Ich habe deine Frage geprüft. Sie bleibt verdächtig.","Das ist eine Frage. Mehr kann ich dazu erstmal nicht sagen.","Technisch möglich. Menschlich schwierig."]
};

const keywords = {
  kollegen: ["kollege","kollegin","kollegen","kolleginnen","chef","chefin","teamleiter","teamleiterin","ela","nervt","nerven","opfer","ärgern","aergern","person","mitarbeiter","mitarbeiterin","team"],
  kaffee: ["kaffee","coffee","müde","muede","wach","espresso","koffein","cappuccino","latte","kaffeemaschine"],
  vermissen: ["vermiss","traurig","nürnberg","nuernberg","weg","zurück","zurueck","fehlen","sehnsucht","abschied"],
  it: ["passwort","drucker","scanner","computer","pc","login","wlan","it","technik","system","ticket","neustart","funktioniert","kaputt","fehler","colibri","software"],
  krank: ["krank","gesund","krankmeldung","gesundmeldung","arbeitsunfähig","arbeitsunfaehig","au","fieber","arzt","gelber schein"],
  organisation: ["dienstplan","urlaub","termin","besprechung","orga","organisatorisch","planung","einsatz","vertretung","kalender","schicht","meeting"],
  fachlich: ["fachlich","sgb","gesetz","paragraph","weisung","bakira","faq","leistung","anspruch","alg","alo","arbeitslos","antrag","bescheid","widerspruch"],
  emotion: ["auskotzen","stress","genervt","wütend","wuetend","heulen","drama","schlimm","hilfe","verzweifelt"]
};

let lastCategory = null;

function normalize(text) {
  return text.toLowerCase().replace(/[ä]/g,"ae").replace(/[ö]/g,"oe").replace(/[ü]/g,"ue").replace(/[ß]/g,"ss");
}

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function scoreCategory(input, words) {
  let score = 0;
  for (const word of words) {
    const w = normalize(word);
    if (input.includes(w)) score += 3;
    const parts = w.split(" ");
    for (const part of parts) {
      if (part.length > 4 && input.includes(part)) score += 1;
    }
  }
  return score;
}

function detectCategory(input) {
  const scores = {};
  for (const category in keywords) scores[category] = scoreCategory(input, keywords[category]);

  if (input.length < 18 && lastCategory && /was|warum|wie|und|jetzt|machen|tun|weiter|hilfe/.test(input)) {
    scores[lastCategory] = (scores[lastCategory] || 0) + 2;
  }

  let bestCategory = "default";
  let bestScore = 0;
  for (const category in scores) {
    if (scores[category] > bestScore) {
      bestScore = scores[category];
      bestCategory = category;
    }
  }
  return bestScore > 0 ? bestCategory : "default";
}

function typeText(element, text, speed = 18) {
  element.innerHTML = "";
  let i = 0;
  const timer = setInterval(() => {
    element.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(timer);
  }, speed);
}

function askNimaAI() {
  const inputElement = document.getElementById("nima-ai-input");
  const output = document.getElementById("nima-ai-output");
  const thinking = document.getElementById("nima-ai-thinking");
  const input = normalize(inputElement.value.trim());

  if (!input) {
    output.innerHTML = "Erst eine Frage stellen. Gedankenlesen ist noch nicht freigeschaltet. 😏";
    return;
  }

  const category = detectCategory(input);
  lastCategory = category;

  thinking.style.display = "block";
  output.innerHTML = "";

  setTimeout(() => {
    thinking.style.display = "none";
    typeText(output, pick(categories[category]));
  }, 950);
}

function clearNimaAI() {
  document.getElementById("nima-ai-input").value = "";
  document.getElementById("nima-ai-output").innerHTML = "Zurückgesetzt. Als wäre nichts passiert. Verdächtig.";
  document.getElementById("nima-ai-thinking").style.display = "none";
  lastCategory = null;
}
