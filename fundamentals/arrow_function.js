const hello = (name, age) => {console.log(`Hello ${name}`)
                                console.log(`You are ${age} years old`)};

hello("Bro", 25);

// Another

setTimeout(() => console.log("Hello"), 3000);

// Another 

const number = [1, 2, 3, 4, 5];

const squares = number.map((number) => Math.pow(number, 2));

console.log(squares);