// ARRAY
let a = 1;
let b = 2;

[a, b] = [b, a]

console.log(a);
console.log(b);

const color = ["red", "green", "blue", "black", "white"];

[color[0], color[3]] = [color[1], color[-1]]

console.log(color);

const [firstColor, secondColor, thirdColor, ...extraColor] = color;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColor);



// OBJECT

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry Cook"
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

const{firstName, lastName, age, job="Unemployed"} = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// FUNCTION

function displayPerson({firstName, lastName, age, job}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person1);