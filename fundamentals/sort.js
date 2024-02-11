// lexcographic sort (alphabet + number + symbol) as string

let fruits = ["apple", "orange", "banana", "coconut"]
let numbers = [5, 3, 2, 1, 4]

fruits.sort();
numbers.sort((a, b) => a - b);

console.log(fruits);
console.log(numbers);

// Another

const people = [{name: "Spongebob", age: 30, gpa: 3.4},
                {name: "Patrick", age: 20, gpa: 4.0},
                {name: "Squidword", age: 50, gpa: 2.5}]

people.sort((a,b) => b.gpa - a.gpa);

console.log(people);