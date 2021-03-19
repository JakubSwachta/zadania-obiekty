let book = {
  users: [],
  addUser(name, age, phone) {
    const user = {
      imię: name,
      wiek: age,
      telefon: phone,
    };
    this.users.push(user);
  },
  showUsers() {
    console.log(`Wszyscy użytkownicy w książce`);
    this.users.forEach((e) => {
      console.log(e);
    });
  },

  findByName(name) {
    return this.users.find((e) => e.imię === name);
  },
  findByPhone(phone) {
    return this.users.find((e) => e.telefon === phone);
  },
  getCount() {
    console.log(this.users.length);
  },
};

book.addUser("Marcin", 10, "500600700");
book.addUser("Mariola", 15, "700700700");
book.addUser("Ania", 20, "666700500");
book.addUser("Agnieszka", 32, "666777999");
console.log(book.findByName("Ania"));
console.log(book.findByPhone("666777999"));
book.getCount();
book.showUsers();
