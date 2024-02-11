
class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0 ){
            this._width = newWidth
        }
        else{
            console.error("Width must be positive number");
        }
    }

    set height(newHeight){
        if(newHeight > 0 ){
            this._height = newHeight
        }
        else{
            console.error("Height must be positive number");
        }
    }

    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }
}

const rectangle = new Rectangle(-1000000, "pizza");

rectangle.width = 5;
rectangle.height = 10;

console.log(rectangle.width);
console.log(rectangle.height);