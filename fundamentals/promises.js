function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You walk the dog")
        }, 2000);
    })
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Clean Kitchen")
        }, 2000);
    })
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Trash")
        }, 2000);
    })
}

walkDog().then(value => {console.log(value); return cleankitchen()}).then(value => {console.log(value); return takeOutTrash()})
.then(value => {console.log})