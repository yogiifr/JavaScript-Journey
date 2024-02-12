// STOPWATCH PROGRAM

const username = "Yogi";
const welcoming = document.getElementById("welcome-msg");

welcoming.textContent += username === "" ? 'Guest' : username;

console.dir(document);