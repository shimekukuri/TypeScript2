import { User } from './models/User';

const user = new User({ name: 'tyoeo', age: 44, id: 2 });

user.on('change', () => {
  console.log('User was changed');
});

console.log(user.get('name'));

console.log(user.get);
