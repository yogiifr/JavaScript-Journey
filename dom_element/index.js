// DOM

const username = "Yogi";
const welcoming = document.getElementById("welcome-msg");

welcoming.textContent += username === "" ? 'Guest' : username;

console.dir(document);

// ELement Selector

// by Id
const myHeading = document.getElementById("my-heading");

myHeading.style.backgroundColor = "red";

// by Class
const fruits = document.getElementsByClassName("fruits");

// fruits[0].style.backgroundColor = "yellow";

// for(let fruit of fruits){
//     fruit.style.backgroundColor = "yellow";
// }

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
});

// by Tag

const h3Elements = document.getElementsByTagName("h3");
const liElements = document.getElementsByTagName("li");

// h3Elements[0].style.backgroundColor = "yellow";

// for(let h3Element of h3Elements){
//     h3Element.style.backgroundColor = "yellow";
// }

// for(let liElement of liElements){
//     liElement.style.backgroundColor = "blue";
// }

Array.from(h3Elements).forEach(h3Elements => {
    h3Elements.style.backgroundColor = "yellow";
})

Array.from(liElements).forEach(liElements => {
    liElements.style.backgroundColor = "blue";
})

// Query Selector
const element = document.querySelector(".fruits");

element.style.backgroundColor = "red";

// Query Selector All

const fruitss = document.querySelectorAll(".fruits");

fruitss.forEach(fruit => {
    fruitss.style.backgroundColor = "purple";
})

