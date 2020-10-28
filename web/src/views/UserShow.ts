import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
    <div>
      <h1>User Detail</h1>
      <div class='user-show'>User Name: ${this.model.get('name')} </div>
      <div class='user-form'>User Age: ${this.model.get('age')} </div>
    <div>
    `;
  }
}
