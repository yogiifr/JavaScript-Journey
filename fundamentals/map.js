const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);

const cubes = numbers.map(cube);

console.log(squares);
console.log(cubes);

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}

// Another

const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const studentsUpper = students.map(upperCase);

console.log(studentsUpper);

function upperCase(element){
    return element.toUpperCase();
}

// Another

const dates = ["2024-1-10", "2024-2-12", "2024-5-29"]
const formatedDates = dates.map(formatDates);

console.log(formatedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}