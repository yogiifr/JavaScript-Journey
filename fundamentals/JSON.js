const names = ["Spongebob", "Patrick"];

const jsonString = JSON.stringify(names);

console.log(jsonString);

const jsonNames = `["Spongebob", "Patrick"]`;

const parsedData = JSON.parse(jsonNames);

console.log(parsedData);

// Fetch

fetch("person.json")
    .then(response => response.json())
    .then(value => console.log(value))