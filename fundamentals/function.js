function happyBirthday(username, age){
    console.log("Happy birthday to you!")
    console.log("Happy birthday to you!")
    console.log(`Happy birthday dear ${username}`)
    console.log("Happy birthday to you!")
    console.log(`You are ${age} years old`)
}

happyBirthday("BroCode", 25);
happyBirthday("Asep", 40);

// Using result

function add(x,y){
    let result = x + y;
    return result;
}

console.log(add(4, 2));

function numberCheck(number){
    return number % 2 === 0 ? "Its Even" : "Its Odd"
}

console.log(numberCheck(20))

function isValidEmail(email){
    return email.includes("@") ? "It is email" : "its not broo"
}

console.log(isValidEmail("asep@gmail.com"))