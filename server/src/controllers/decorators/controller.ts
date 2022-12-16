import 'reflect-metadata';
import { AppRouter } from '../../appRouter';
import { Methods } from './Methods';

export function controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();
    for (let key of Object.getOwnPropertyNames(target.prototype)) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata('path', target.prototype, key);
      const method: Methods = Reflect.getMetadata(
        'method',
        target.prototype,
        key
      );

      if (path) {
        router[method](`${routePrefix}${path}`, routeHandler);
      }
    }
  };
}
//
