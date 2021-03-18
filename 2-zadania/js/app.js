let spaceShip = {
  name: "Enterprise",
  currentLocatio: "Earth",
  flyDistance: 0,
  flyTo(place, distance) {
    this.currentLocatio = place;
    this.flyDistance += distance;
  },
  showInfo() {
    console.log(
      `Informacje o statku:
      --------------------
      Statek: ${this.name}
      doleciał do miejsca: ${this.currentLocatio}
      Statek przeleciał już całkowity dystans: ${this.flyDistance}
      `
    );
  },
  meetClingon() {
    let klingonDuel = 0;
    for (let i = 0; i < 100; i++) {
      if (Math.random() > 0.5) {
        klingonDuel++;
      }
    }
    console.log(klingonDuel);
    if (klingonDuel >= 50) {
      console.log(`Statek ${this.name} będący w okolicy ${this.currentLocatio} zwycięsko wyszedł ze spotkania z Klingonami`);
    } else console.log(`Statek ${this.name} będący w okolicy ${this.currentLocatio} został pokonany przez Klingonów`);
  },
};

spaceShip.flyTo("Mars", 100567);
spaceShip.showInfo();
spaceShip.meetClingon();
spaceShip.flyTo("jowisz", 300567);
spaceShip.showInfo();
spaceShip.meetClingon();
