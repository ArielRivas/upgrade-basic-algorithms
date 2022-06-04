/**

* 1. Crea una clase Coche con al menos 3 atributos.

* 2. Crea un método que cierre el coche y otro que lo abra. (por console.log)

* 3. Crea varias instancias, un bmwM5 y un seatPanda por ejemplo.

*

* ----------------

* SEGUNDA PARTE ejercicio

* 1. Crea una clase vehículo

* 2. Modifica tu clase Coche para que extienda de vehículo.

* 3. Envíale a la clase Vehículo alguna propiedad del constructor que recibe Coche.

* 4. Crea la clase Moto y extiende de vehículo también.

*

* SE RECOMIENDA: Que seais creativos y os inventéis propiedades con el fin

* de practicar.

*

*/
//esta en spanish cuz de momento no me se bien las partes de un coche
class Coche {
  constructor(clase, luces, color) {
    this.clase = clase;
    this.luces = luces;
    this.color = color;
  }
  característicasDeMiCoche() {
    console.log(
      `Mi coche es de clase ${this.clase}, con luces ${this.luces} y de color ${this.color}`
    );
  }
}

class miCoche extends Coche {
  constructor(ruedas) {
    super("ruedas Michelin");
    this.ruedas = ruedas;
  }
  close() {
    this.close = this.close;
    console.log(`Has cerrado el coche ${this.close}`);
  }
}

const citroen = new Coche("SUV", "Xenon", "Azul");
citroen.característicasDeMiCoche();

class Vehicle {
  constructor(type, environment) {
    this.type = type;
    this.environment = environment;
    this.isOpen = true;
  }
  open() {
    this.open = true;
    console.log("Has abierto tu vehículo");
  }
  close() {
    this.open = false;
    console.log("Has cerrado tu vehículo");
  }
}

class Car extends Vehicle {
  constructor(wheels, color, fuel) {
    super("Car", "ground");
    this.wheels = wheels;
    this.color = color;
    this.fuel = fuel;
  }
  open() {
    console.log("Acabo de abrir mi cochazo");
  }
  close() {
    console.log("He cerrado mi cochazo");
  }
}

class Plane extends Vehicle {
  constructor(passenger, lenght) {
    super("Plane", "Air");
    this.passengerNumber = passenger;
    this.lenght = lenght;
  }
  get passenger() {
    return this.passengerNumber;
  }
  set passenger(number) {
    this.passengerNumber = number;
  }
}

class Train {}

const myCar = new Car(4, "Yellow", "Gasoil");
//console.log(myCar);
myCar.open();
const myPlaneCool = new Plane(123, 32);
myPlaneCool.close();
myPlaneCool.passenger = 600;
console.log(myPlaneCool.passenger);
