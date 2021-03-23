// The Temperature in Kelvin
const kelvin = prompt("How much degreei is it in Kelvin today?");

// Converting the above temperature to Celsius
const celsius = kelvin - 273;

// Converting it to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// Converting Celsius to Newton
const newton = Math.floor(celsius * (33/100));

// Math Flooring it so we do not have decimal numbers
fahrenheit = Math.floor(fahrenheit);


console.log(`${kelvin} Kelvin will be for: \n`)


console.log(`The temperature is ${celsius} degrees Celsius.\n`);

console.log(`The temperature will be ${newton} in newton.\n`);


console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);