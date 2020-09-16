import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: String;
  catchPhrase: String;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<h1>Company Name: ${this.companyName}</h1>
        <h2>Catchphrase: ${this.catchPhrase}</h2>
    `;
  }
}
