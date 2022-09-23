
console.log("I'm ready")


// Iteration 1: Names and Input
//
const hacker1 = 'John'; 
console.log(`The drive's name is ${hacker1}`);

const hacker2 = 'Marcus';
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length<hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)  
} else if (hacker1.length>hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length==hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length}  characters!`)
}

// Iteration 3: Loops
/*3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?*/

console.log(hacker1.toUpperCase().split(''))

console.log(hacker2.split('').reverse().join(''))

