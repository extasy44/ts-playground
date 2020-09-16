class Vehicle {
  constructor(public color: string) {}
  public dirve(): void {
    console.log(this.color);
  }

  public honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
vehicle.dirve();
vehicle.honk();

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  honk(): void {
    console.log('broom');
  }

  startDriving(): void {
    this.honk();
  }
}

const car = new Car(4, 'red');
car.dirve();
car.startDriving();
