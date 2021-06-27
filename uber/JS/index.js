var car = new Car("AW456", new Account("Andrés Herrera", "09067580-Z"));
car.printDataCar();

var uberX = new UberX("AW456", new Driver("Raúl Ruiz", "09067580Z"), "Seat", "León");
uberX.printDataCar();

var tarjeta = new Card("Raul Ruiz Bolivar", 45584409871234, 488);
console.table(tarjeta);

var uberVan = new UberVan("TME123",  new Driver("Carmen Lopez", "123456789N"), ["limusina","furgoneta"],["Polipiel","Algodón"]);
