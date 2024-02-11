function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`You drive this ${this.model}`)}
}

const car1 = new Car("Ford", "Mustang", 2024, "Red");
const car2 = new Car("Toyota", "Supra", 2024, "Silver");

console.log(car1);
console.log(car2);

car1.drive()
car2.drive()