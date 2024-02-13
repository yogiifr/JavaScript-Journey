
const myButton = document.getElementById("myButton");

console.log(myButton);
myButton.classList.add("enabled");
myButton.classList.remove("enabled");

myButton.addEventListener("mouseover", event => {
    event.target.classList.add("hover");
});

myButton.addEventListener("mouseout", event => {
    event.target.classList.remove("hover");
});

myButton.addEventListener("click", event => {
    
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "😤"
    }
    else{
        event.target.classList.replace("enabled", "disabled");
    }
    
});