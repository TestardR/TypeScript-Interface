var user1;
user1 = {
    name: 'Romain',
    greet: function (phrase) {
        console.log(phrase + ' ' + user1.name);
    }
};
user1.greet('Hello');
console.log(user1);
var Person = /** @class */ (function () {
    function Person(name, age) {
        if (age === void 0) { age = 30; }
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log('Hello ' + this.name + ' ' + this.age);
    };
    return Person;
}());
var p1 = new Person('Romain', 32);
p1.greet();
console.log(p1);
// type AddFn = (a: number, b: number) => number;
var add = function (a, b) {
    return a + b;
};
