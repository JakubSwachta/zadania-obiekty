// Zadanie 1
let prod1 = {
  name: "ser",
  price: 4.2,
  weight: 2.5,
};
let prod2 = {
  name: "szynka",
  price: 5,
  weight: 2.8,
};

console.log(`Produkt numer jeden to ${prod1.name} a produkt numer dwa to ${prod2.name}`);

console.log(`produkty kosztują razem ${prod1.price + prod2.price}`);
console.log(`produkty ważą razem ${prod1.weight + prod2.weight}`);

//zadanie 2
let currentUser = {
  name: "Kuba",
  surname: "Swachta",
  email: "dupa@SpeechGrammarList.com",
  www: "dupa.pl",
  userType: "men",
  show() {
    console.log(`
       Imię:${this.name} 
       Nazwisko:${this.surname}
       aderess emial: ${this.email}
       strona www:${this.www}
       płeć:${this.userType}`);
  },
};

currentUser.show();
//zadanie 3
let book = {
  title: "harryPotter",
  author: "jKRowling",
  pageCount: 500,
  publisher: "nowaEra",
  showDetails() {
    for (let prop in book) {
      propValue = book[prop];
      console.log(prop + ": " + propValue);
    }
  },
};

Object.defineProperty(book, "showDetails", { enumerable: false });
book.showDetails();
