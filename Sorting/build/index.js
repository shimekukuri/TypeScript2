"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const LinkedListCollection_1 = require("./LinkedListCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const numberCollection = new NumbersCollection_1.NumbersCollection([-1, -3, -4, 3, 2, 1, 4, 8]);
numberCollection.sort();
console.log(numberCollection.data);
const characters = new CharactersCollection_1.CharactersCollection('letqepxX');
characters.sort();
console.log(characters.data);
const linked = new LinkedListCollection_1.LinkedList();
linked.add(1);
linked.add(-1);
linked.add(10);
linked.add(12);
linked.add(-11);
linked.sort();
linked.print();