hello(goodbye);
hello(leave);

function hello(callback){
    console.log("Hello");
    callback();
}

function leave(){
    console.log("leave");
}

function goodbye(){
    console.log("goodbye");
}

// Case

sum(displayConsole, 1, 2);

function sum(callback, x,y){
    let result = x+ y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}