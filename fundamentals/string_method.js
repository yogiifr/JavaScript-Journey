let userName = "Bro Code";

console.log(userName.charAt(0));
console.log(userName.indexOf("o"));
console.log(userName.lastIndexOf("o"));
console.log(userName.length);

userName = userName.trim();
userName = userName.toLowerCase();
userName = userName.toUpperCase();
userName = userName.repeat(3);
console.log(userName)

// let result = userName.startsWith(" ");

let space_result = userName.includes(" ")
if(space_result){
    console.log("Your username can't include ' '");
}
else{
    console.log(userName);
}

let phoneNumber = "123-456-7890"

console.log(phoneNumber)

// phoneNumber = phoneNumber.replaceAll("-","/");
// phoneNumber = phoneNumber.padStart(15, "0");
phoneNumber = phoneNumber.padEnd(15, "0");

console.log(phoneNumber)