import { AxiosResponse } from 'axios';
import { UserProps } from './User';

export class Sync {
  rootUrl: string;

  constructor(rootUrl: string) {
    this.rootUrl = rootUrl;
  }

  ffetch(id: number): Promise<UserProps> {
    return fetch(`${this.rootUrl}/${id}`, {
      method: 'GET',
      mode: 'cors',
    }).then((response: Response) => response.json());
  }

  save(data: UserProps): void {
    if (data.id) {
      //put
      fetch(`${this.rootUrl}/${data.id}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: data.name, age: data.age }),
      })
        .then((response) => response.json())
        .then(() => console.log('Successfully updated'))
        .catch((e) => console.log(`error occured`, e));
    } else {
      //post
      fetch(`${this.rootUrl}/`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: data.name, age: data.age }),
      })
        .then((response) => response.json())
        .then((data) => console.log('Successfully created', data))
        .catch((e) => console.log(`error occured`, e));
    }
  }
}
