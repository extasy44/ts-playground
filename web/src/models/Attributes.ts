//import { UserProps } from './User';

export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}

// const attrs = new Attributes<UserProps>({
//   id: 5,
//   name: 'adasd',
//   age: 20,
// });

// const id = attrs.get('id') as number;
// const name = attrs.get('name');
// const age = attrs.get('age');
