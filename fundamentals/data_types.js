// Undefined

let x
console.log(typeof(x));

// Numbers

let z = 10
console.log(typeof(z));

let postfix = 5;
console.log(postfix++);
/* output: 5 */
console.log(postfix++);
/* output: 6 */
console.log(postfix);
/* output: 7 */

let prefix = 5;
console.log(++prefix);
/* output: 6 */

// BigInt

const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

// Strings

let greet = "Hello";
console.log(typeof(greet))

/* output: string */

const myName = "Luke";
console.log(`Hello, my name is ${myName}.`);

/* output: Hello, my name is Luke. */

// Boolean

let o = true;
let y = false;

console.log(typeof(x))
console.log(typeof(y))

// Null

let someLaterData = null;
console.log(someLaterData);

/* output:
null
*/

// Symbol

const id = Symbol("id");

console.log(id);

/* output
Symbol(id)
*/