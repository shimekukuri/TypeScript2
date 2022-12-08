import { User } from './models/User';

const user = new User({ id: 2, name: 'new name', age: 123456 });

user.on('save', () => {
  console.log(user);
});

user.save();
