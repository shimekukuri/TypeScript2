import { User } from './models/User';

const user = new User({ name: 'tyoeo', age: 44, id: 2 });

user.events.on('change', () => {
  console.log('change event');
});

user.events.trigger('change');
