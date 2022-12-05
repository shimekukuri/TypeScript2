import { User } from './models/User';

const user = new User({ name: 'yolo', age: 15 });

user.on('change', () => {
  console.log('Change 1');
});
user.on('change', () => {
  console.log('Change 2');
});
user.on('meep', () => {
  console.log('Save');
});

user.trigger('change');
