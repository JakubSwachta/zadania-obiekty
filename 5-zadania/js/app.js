const text = {
  /* ----- zwraca true/false jeżeli w tekście `txt` znajduje się szukane słowo `word`----- */
  check(txt, word) {
    return txt.split(" ").some((e) => e === word);
  },
  /* ----- Zwraca liczbę liter w tekście `txt`. Uwaga znaki interpunkcyjne też traktujmy jako litery ----- */
  getCount(txt) {
    return [...txt].length;
  },
  /* ---- dziwna metoda ale dzia(liczy spacje) :D ------- */
  getWordsCount(txt) {
    let abc = [];
    let i = 0;
    while (i < txt.length) {
      if (txt[i] === " ") {
        abc.push(txt[i]);
      }
      i++;
    }
    return abc.length + 1;
  },
  /*------ zwraca nowy tekst tak zamieniony, że każde słowo zaczyna się z dużej litery ----- */
  setCapitalize(txt) {
    return txt
      .split(" ")
      .map((e) => e[0].toUpperCase() + e.substring(1))
      .join(" ");
  },
  /*-------  zwraca nowy tekst z naprzemiennie dużymi/małymi literami -------*/
  setMix(txt) {
    return [...txt]
      .map((e, indx) => {
        return indx % 2 === 0 ? e.toUpperCase() : e.toLowerCase();
      })
      .join("");
  },
  /*------Generuje tekst o długości lng który składa się z losowych liter-------*/
  generateRandom(lng) {
    let text = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (i = 0; i < lng; i++) {
      text += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return text;
  },
};

console.log(text.check("kasia posza do szkoy", "do"));
console.log(text.getCount("kasia posza do szkoy"));
console.log(text.getWordsCount("kasia  posza do szkoy i zdjad kabanos"));
console.log(text.setCapitalize("kasia posza do szkoy i zdjad kabanos"));
console.log(text.setMix("kasia posza do szkoy i zdjad kabanos"));
console.log(text.generateRandom(58));
