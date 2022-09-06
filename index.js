console.log("Menyalakan mesin kopi");
console.log("Menggiling biji kopi");
console.log("Memanaskan air");
console.log("Mencampurkan air dan kopi");
console.log("Menuangkan kopi kedalam gelas");
console.log("Menuangkan susu kedalam gelas");
console.log("Kopi Anda sudah siap!")

const {coffeeStock, isCoffeeMachineReady} = require('./state')

const makeCoffee = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams) {
        console.log("Kopi berhasil dibuat");
    } else {
        console.log("Biji kopi habis!");
    }
}

console.log();
makeCoffee("arabica", 300)

console.log();
console.log(coffeeStock);

console.log();
console.log(isCoffeeMachineReady);