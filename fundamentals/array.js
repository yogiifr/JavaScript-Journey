let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);

// Ngambil data ke-1, setelah 0

console.log(myArray[1]);

// Nambahin Data

myArray.push('JavaScript');
console.log(myArray);

// Ngilangin data terakhir

myArray.pop();
console.log(myArray);

// Ngilangin data akhir (shift), nambahin data diawal(unshift)

myArray.shift();
myArray.unshift("Apple");

console.log(myArray);

// Ngapus data array

delete myArray[1];
console.log(myArray);

// Motong value

myArray.splice(2, 1);   // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray);

