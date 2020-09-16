interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name ${this.name}`;
  },
};

const printVehicle = (vehicle: Vehicle) => {
  console.log(vehicle.name);
  console.log(vehicle.year);
  console.log(vehicle.broken);
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
