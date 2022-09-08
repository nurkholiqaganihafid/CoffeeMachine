import _ from "lodash";
import { hewan, isFourLegs as berkakiEmpat } from './animal.js';
// const { coffeeStock, isCoffeeMachineReady } = require('./state')

console.log("Menyalakan mesin kopi");
console.log("Menggiling biji kopi");
console.log("Memanaskan air");
console.log("Mencampurkan air dan kopi");
console.log("Menuangkan kopi kedalam gelas");
console.log("Menuangkan susu kedalam gelas");
console.log("Kopi Anda sudah siap!")

// const makeCoffee = (type, miligrams) => {
//     if (coffeeStock[type] >= miligrams) {
//         console.log("Kopi berhasil dibuat");
//     } else {
//         console.log("Biji kopi habis!");
//     }
// }

// console.log();
// makeCoffee("arabica", 300)

// console.log();
// console.log(coffeeStock);

// console.log();
// console.log(isCoffeeMachineReady);

const animalName = name => {
    for (const type in name) {
        console.log(type);
    }
}

console.log();
animalName(hewan)

console.log();
console.log(hewan);

console.log(`Hewan berkaki empat ${berkakiEmpat}`);
console.log();

const myArray = [1, 2, 3, 4]
let sum = 0

// don't use lodash
for (let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}
console.log(`Tanpa lodash = ${sum}`);

// using lodash
const result = _.sum(myArray)
console.log(`Dengan menggunakan lodash = ${result}`);