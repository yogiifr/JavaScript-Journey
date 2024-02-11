// function declaration is like this

function hello(){
    console.log("Hello");
}

// Function expressions

const bye = function (){
    console.log("Goodbye");
}

hello();
bye();

// Another

const number = [1, 2, 3, 4, 5]
// From This
// const squares = numbers.map(square);
// function square(element){
//     return Math.pow(element, 2);
// }

// To this
const squares = number.map(function(element){
    return Math.pow(element, 2);
})

console.log(squares);
