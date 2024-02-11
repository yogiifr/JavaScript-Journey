const prices = [5, 30, 50, 20, 15, 70]

const total = prices.reduce(sum);

console.log(`$${total}`);

function sum(accumulator, element){
    return accumulator + element;
}

// Another

const grades = [75, 45, 25, 35, 65];

const maximum = grades.reduce(getMax);

console.log(maximum);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}