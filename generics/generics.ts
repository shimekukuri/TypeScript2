class ArrayOfNumber {
  collection: number[];

  constructor(collection: number[]) {
    this.collection = collection;
  }

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  collection: string[];

  constructor(collection: string[]) {
    this.collection = collection;
  }

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<TypeOfGeneric> {
  collection: TypeOfGeneric[];

  constructor(collection: TypeOfGeneric[]) {
    this.collection = collection;
  }

  get(index: number): TypeOfGeneric {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(['a', 'ab', 'c']);

//Example of Generics with functions

function printString(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumber(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['1', '2', 'd']);

//generics constraints

class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<Car>([new Car(), new Car()]);
