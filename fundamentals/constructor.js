function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
}

const car1 = new Car("Ford", "Mustang", 2024, "Red");
const car2 = new Car("Toyota", "Supra", 2024, "Silver");

console.log(car1);
console.log(car2);