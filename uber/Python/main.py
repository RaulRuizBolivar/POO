from car import Car
from account import Account
if __name__ == "__main__":
    print("HolaMundo")

    car = Car("AMS234", Account("Andrés Herrera", "ANDA876"))
    print(vars(car))
    print(vars(car.driver))
