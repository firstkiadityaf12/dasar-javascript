// https://sanbercode.com/dasbor/kelas_training/83/hari-9-javascript-class/a07bcfce-c362-4fef-b713-753122d683ac
// sumber : w3school.javascript.class

// deklarasi kelas
class Car {
    constructor(brand,factory) {
        this.brand = brand
        this.factory = factory
        this.sound = "honk! honk!vroomvroom"
    }
}

// Ekspresi Class => dengan cara embuat variabel

// Tidak diberi nama 
var Car = class {
    constructor(brand, factory) {
        this.brand = brand
        this.factory = factory
    }
}
console.log(Car.name) // Car
 
// Diberi nama
var Car = class Car2 {
    constructor(brand, factory) {
        this.brand = brand
        this.factory = factory
    }
}
console.log(Car.name) // Car2

class Car{} // BENAR
class car{} // SALAH
class SportsCar {} // BENAR
class sportscar {} // SALAH 

// nama sebuah Class biasanya menggunakan kapital pada huruf pertama nya. Jika terdapat dua kata atau lebih maka huruf pertama pada kata yang selanjutnya harus kapital.

// METHOD

