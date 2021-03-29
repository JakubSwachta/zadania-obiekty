const tableGenerator = {
  /* ----     zwraca losową liczbę z przedziału `min`-`max` --------- */
  randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  /* ---- zwraca nową tablicę o długości `lng` z liczbami od 0 do lng --------- */
  generateIncTable(lng) {
    let newTab = [];
    let i = 0;
    while (newTab.length <= lng) {
      newTab.push(i);
      i++;
    }
    return newTab;
  },
  /* ---- zwraca nową tablice o długości `lng` z losowymi liczbami z przedziału `min`-`max`--------- */
  generateRandomTable(lng, min, max) {
    let newTab = [];
    while (newTab.length <= lng) {
      newTab.push(this.randomNumber(min, max));
    }
    return newTab;
  },
  /*-------- generuje nową tablicę ze słowami z tekstu `str`------ */
  generateTableFromText(str) {
    let Tabs = [];
    return typeof str === "string" ? str.split(" ") : Tabs;
  },
  /*------- zwraca największą liczbę z tablicy `arr` -------*/
  getMaxFromTable(arr) {
    /* ----metoda (I)---- */
    // return Math.max(...arr);
    /* ----metoda (II)---- */
    let Biggest = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (Biggest <= arr[i]) {
        Biggest = arr[i];
      }
    }
    return Biggest;
  },
  getMinFromTable(arr) {
    let Smallest = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (Smallest >= arr[i]) {
        Smallest = arr[i];
      }
    }
    return Smallest;
  },
  /* usuwa z tablicy `arr` element o indexie `index` */
  delete(arr, index) {
    arr.splice(index, 1);
    return arr;
  },
  /* ---- uzupełnienie zadania, własna metoda największa i najmniejsza liczba z tablicy ------ */
  getMinAndMaxFromTable(arr) {
    return arr.reduce(
      (acc, e) => {
        return [Math.min(acc[0], e), Math.max(acc[1], e)];
      },
      [arr[0], arr[0]]
    );
  },
};

console.log(tableGenerator.generateIncTable(15));
console.log(tableGenerator.randomNumber(250, 150));
console.log(tableGenerator.generateRandomTable(100, 0, 10));
console.log(tableGenerator.generateTableFromText("my name is Kuba"));
console.log(tableGenerator.getMaxFromTable([1, 2, 3, 6, 8, 34, 1, 223, 3, 4, 55, 6]));
console.log(tableGenerator.getMinFromTable([1, 2, 3, 6, 8, 34, 1, 223, 3, 4, -55, 6, -5]));
console.log(tableGenerator.getMinAndMaxFromTable([1, 2, 3, 6, 8, 34, 1, 223, 3, 4, -55, 6, -5]));
console.log(tableGenerator.delete([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));
