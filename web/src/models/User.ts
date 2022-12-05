interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

export class User {
  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  ffetch() {
    fetch(`http://localhost:3000/users/${this.get('id')}`, {
      method: 'GET',
      mode: 'cors',
    })
      .then((response: Response) => response.json())
      .then((data): void => this.set(data));
  }

  save(): void {
    if (this.get('id')) {
      //put
      fetch(`http://localhost:3000/users/${this.get('id')}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: this.get('name'), age: this.get('age') }),
      })
        .then((response) => response.json())
        .then(() => console.log('Successfully updated'))
        .catch((e) => console.log(`error occured`, e));
    } else {
      //post
      fetch(`http://localhost:3000/users/`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: this.get('name'), age: this.get('age') }),
      })
        .then((response) => response.json())
        .then((data) => console.log('Successfully created', data))
        .catch((e) => console.log(`error occured`, e));
    }
  }
}
