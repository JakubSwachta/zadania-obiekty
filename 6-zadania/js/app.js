const users = [
  //id, name, surname, email, age, value
  [1, "Shauna", "Bradnocke", "sbradnocke0@altervista.org", 20, 108.28],
  [2, "Mela", "Redman", "mredman1@nps.gov", 24, 267.37],
  [3, "Othelia", "Lemon", "olemon2@slashdot.org", 15, 748.06],
  [4, "Meier", "Cockell", "mcockell3@icio.us", 32, 1951.64],
  [5, "Shellysheldon", "Gronowe", "sgronowe4@cnbc.com", 16, 1040.54],
  [6, "Francisca", "Tofanini", "ftofanini5@gnu.org", 21, 1544.08],
  [7, "Cliff", "Underwood", "cunderwood6@addtoany.com", 10, 451.21],
  [8, "Caron", "Falshaw", "cfalshaw7@hugedomains.com", 27, 1968.72],
  [9, "Anitra", "Warters", "awarters8@intel.com", 12, 380.68],
  [10, "Caitrin", "Baudrey", "cbaudrey9@ihg.com", 13, 1385.44],
  [11, "Reginald", "Beavers", "rbeaversa@elegantthemes.com", 15, 1205.52],
  [12, "Marleen", "Aickin", "maickinb@purevolume.com", 20, 1434.1],
  [13, "Lisa", "MacSorley", "lmacsorleyc@ocn.ne.jp", 17, 1567.07],
  [14, "Kimberli", "Berkeley", "kberkeleyd@merriam-webster.com", 19, 1994.97],
  [15, "Tawnya", "Illingworth", "tillingworthe@quantcast.com", 23, 1742.64],
];

let fixData = (array) => {
  //  ------------pierwszy pomysł///
  /* let newArray = [];
  for (let e of array) {
    const [id, name, surname, email, age, cash] = e;
    newArray.push({ id, name, surname, email, age, cash });
  }*/

  // ------------drugi pomysł///
  /*  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push({
      id: array[i][0],
      name: array[i][1],
      surname: array[i][2],
      email: array[i][3],
      age: array[i][4],
      cash: array[i][5],
    });
  }
  return newArray; */
  // ----------- trzeci pomysł///
  let newObject = array.map((e) => {
    return {
      id: e[0],
      name: e[1],
      surname: e[2],
      email: e[3],
      age: e[4],
      cash: e[5],
    };
  });
  return newObject;
};

/* ------Wygeneruj nową tablice z obiektami wykorzystując funkcję z 1 zadania------- */
let newUsers = fixData(users);
console.log(newUsers);
console.log(newUsers[0].cash);

/* ----- wylicz ile pieniędzy mają wszyscy użytkownicy razem.------ */

// -------- pierwszy sposób///
/* let cashSum = (array) => {
  let Array2 = [];
  for (let e of array) {
    Array2.push(e.cash);
  }
  let sum = 0;
  let i = 0;
  while (i < Array2.length) {
    sum += Array2[i];
    i++;
  }
  return sum;
};
console.log(cashSum(newUsers)); */

// ------- drugi sposób///
/* let cashSum = (array) => {
  return array.reduce((acc, e) => {
    return acc + e.cash;
  }, 0);
};

console.log(cashSum(newUsers)); */
//--------trzeci sposób///
let cashSum = (array) => {
  let sum = 0;
  array.forEach((e, indx) => {
    sum += e.cash;
  });
  return sum;
};
console.log(cashSum(newUsers));

/* -------- wylicz średni wiek wszystkich użytkowników ------- */
//----pierwszy sposób///
/* let avregAge = (array) => {
  return (
    array.reduce((acc, e) => {
      return acc + e.age;
    }, 0) / array.length
  );
};
console.log(avregAge(newUsers)); */

//drugi sposób///
let avregAge = (array) => {
  let sumage = 0;
  array.forEach((e, indx) => {
    sumage += e.age;
  });
  return sumage / array.length;
};
console.log(avregAge(newUsers));

/*------ stwórz nową tablicę tylko z mailami. Wypisz ją w konsoli ------*/
// -----pierwszy sposób///
/* let onlyEmail = (array) => {
  emailArray = [];
  for (let e of array) {
    const { email: userEmail } = e;
    emailArray.push(userEmail);
  }
  return emailArray;
};
console.log(onlyEmail(newUsers)); */

// -----drugi sposób///
/* let onlyEmail = (array) => {
  return array.map((e) => {
    return e.email;
  });
};
console.log(onlyEmail(newUsers)); */

// -----trzeci sposób///
let onlyEmail = (array) => {
  let emailArray = [];
  array.forEach((e) => {
    emailArray.push(e.email);
  });
  return emailArray;
};
console.log(onlyEmail(newUsers));
