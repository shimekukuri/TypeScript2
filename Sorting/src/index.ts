import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { LinkedList } from './LinkedListCollection';
import { CharactersCollection } from './CharactersCollection';

const numberCollection = new NumbersCollection([-1, -3, -4, 3, 2, 1, 4, 8]);
numberCollection.sort();
console.log(numberCollection.data);

const characters = new CharactersCollection('letqepxX');
characters.sort();
console.log(characters.data);

const linked = new LinkedList();
linked.add(1);
linked.add(-1);
linked.add(10);
linked.add(12);
linked.add(-11);
linked.sort();

linked.print();
