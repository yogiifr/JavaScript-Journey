const person1 = {
    name: "Spongebob",
    favFood: "Hamburgers",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}
// arrow function cant do `this` function

person1.sayHello();
person1.eat();