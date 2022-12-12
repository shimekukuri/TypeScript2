import { User, UserProps } from '../models/User';
import { View } from './Views';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-name': this.setName,
      'click:.set-age': this.randomizeAge,
    };
  }

  randomizeAge = (): void => {
    this.model.setRandomAge();
  };

  setName = (): void => {
    const input = this.parent.querySelector('input');
    const name = input?.value;

    this.model.set({ name: name });
  };

  template(): string {
    return `
    <div>
      <input placeholder="${this.model.get('name')}"/>
      <button class="set-name">Change Name</button>
      <button class="set-age">Set Random Age</button>
      <button class="save-model"></button>
    </div>
    `;
  }
}
