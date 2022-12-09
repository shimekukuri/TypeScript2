import { User } from './User';
import { Eventing } from './Eventing';

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    fetch(`${this.rootUrl}`, {
      method: 'GET',
      headers: {
        'Content-type': 'Application/json',
      },
    })
      .then((response: Response) => response.json())
      .then((data: K[]) =>
        data.forEach((value: K) => {
          this.models.push(this.deserialize(value));
        })
      );
    this.trigger('change');
  }
}
