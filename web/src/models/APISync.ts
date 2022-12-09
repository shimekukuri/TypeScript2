import { AxiosResponse } from 'axios';
import { User, UserProps } from './User';

interface HasId {
  id?: number;
}

export class APISync<T extends HasId> {
  rootUrl: string;

  constructor(rootUrl: string) {
    this.rootUrl = rootUrl;
  }

  fetch(id: number): Promise<T> {
    return fetch(`${this.rootUrl}/${id}`, {
      method: 'GET',
      mode: 'cors',
    }).then((response: Response) => response.json());
  }

  save(data: T): Promise<T> {
    if (data.id) {
      //put
      return fetch(`${this.rootUrl}/${data.id}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .catch((e) => console.log(`error occured`, e));
    } else {
      //post
      return fetch(`${this.rootUrl}/`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .catch((e) => console.log(`error occured`, e));
    }
  }
}
