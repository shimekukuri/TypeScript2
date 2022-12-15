import 'reflect-metadata';
import express from 'express';

const router = express.Router();

export function controller(routePrefix: string) {
  return function (target: Function) {
    for (let k in Object.getOwnPropertyNames(target.prototype)) {
      const routeHandler = target.prototype[k];

      const path = Reflect.getMetadata('path', target.prototype, k);

      if (path) {
        router.get(`${routePrefix}${path}`, routeHandler);
      }
    }
  };
}
