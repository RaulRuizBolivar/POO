class Main{
  public static void main(String[] args) {
    System.out.println("HolaMundo");
    Car car = new Car();
    car.license = "qwe123";
    car.driver = "Andrés Herrera";
    car.id = 1;
    car.passenger = 4;
    System.out.println("Car Id: " + car.id);
    System.out.println("Car number of passengers: " + car.passenger);
    car.printDataCar();

    Car car2 = new Car();
    car2.license = "ñpy435";
    car2.driver = "Andrea Herrera";
    car2.printDataCar();

  }
}
