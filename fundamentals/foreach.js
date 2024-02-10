let numbers = [1, 2, 3, 4, 5]

numbers.forEach(double);
numbers.forEach(display);

function double(element, index, array){
    array[index] = element * 2;
}

function display(element){
    console.log(element);
}

// Another

let fruits = ["Apple", "Orange", "Banana", "Coconut"];

fruits.forEach(capitalize);
fruits.forEach(display);

function lowerCase(element, index, array){
    array[index] = element.toUpperCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
function displayf(element){
    console.log(element);
}