function outer(){

    let massage = "Hello";

    function inner(){
        console.log(massage);
    }

    inner();
}

outer();