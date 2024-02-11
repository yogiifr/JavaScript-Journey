import {PI, getCircumference, getArea, getVolume} from `./moduleES6.js`;

console.log(PI);
const cirfumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${cirfumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm`);
console.log(`${volume.toFixed(2)}cm`);