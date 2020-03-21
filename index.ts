interface Greetable {
  name: string;
  greet: (phrase: string) => void;
}

let user1: Greetable;

user1 = {
  name: 'Romain',
  greet: (phrase: string) => {
    console.log(phrase + ' ' + user1.name);
  }
};
user1.greet('Hello');
console.log(user1);

class Person implements Greetable {
  name: string;
  age: number;
  constructor(name: string, age: number = 30) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log('Hello ' + this.name + ' ' + this.age);
  }
}

const p1 = new Person('Romain', 32);
p1.greet();
console.log(p1);

interface AddFn {
  (a: number, b: number): number;
}
// type AddFn = (a: number, b: number) => number;

const add: AddFn = (a: number, b: number) => {
  return a + b;
};

