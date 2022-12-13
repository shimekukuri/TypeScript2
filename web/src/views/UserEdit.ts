import { View } from './Views';
import { User, UserProps } from '../models/User';
import { UserForm } from './UserForm';
import { UserShow } from './UserShow';

export class UserEdit extends View<User, UserProps> {
  regionsMap(): { [key: string]: string } {
    return {
      userShows: '.user-show',
      userForm: '.user-form',
    };
  }

  onRender(): void {
    new UserShow(this.regions.userShows, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
  }

  template(): string {
    return `
    <div>
      <div class="user-show"></div>
      <div class="user-form"></div>
    </div>
    `;
  }
}
