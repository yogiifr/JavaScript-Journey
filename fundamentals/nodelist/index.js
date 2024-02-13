
let buttons = document.querySelectorAll(".myButton");

buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "🤓";

    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
    });

    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "blue";
    });

    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "red";
    });

    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    })
})

const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myButton";
document.body.appendChild(newButton);

buttons = document.querySelectorAll(".myButton");

console.log(buttons);
