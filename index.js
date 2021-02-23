var sayHello = "Hello World!"
console.log(sayHello)

var name = "John" //tipe
var angka = 12
var todayisFriday = false

console.log(name) // "John"
console.log(angka) // "12"
console.log(todayisFriday) //false

//variabel tidak bernilai
var items
console.log(items) //undefined

//operator perbandingan
    //Equal Operator (==) sama dengan
    var angka1 = 100
    console.log( angka1 == 100) //true
    console.log( angka1 == 20 ) //false

    //Not Equal(!=) tidak sama
    var sifat = "rajin"
    console.log(sifat != "malas") // true
    console.log( sifat != "bandel") // false

    //Stric Equal(===) membandingkan tipe datanya
    var angka2 = 8 
    console.log(angka2 == "8") //true, padahal "8" adalah string
    console.log(angka2 === "8") //false, karena tipe data yang berbeda
    console.log(angka2 === 8) //true

    //Strict Not Equal(!==) kebalikan dari strict equal
    var angka3 = 11
    console.log(angka3 != "11") //false, padaha "11" adalah string
    console.log(angka3 !== "11") //true, karena tipe datanya berbeda
    console.log(angka3 !== 11) //false

    //Kurang dari dan Lebih dari
    var number = 18
    console.log( number < 20 ) // true
    console.log( number > 17 ) // false
    console.log( number >= 17 ) // true, karena terdapat sama dengan
    console.log( number <= 20 ) // true

//Operator Kondisional (operator AND(&&) dan OR(||))
    //OR(||)
    console.log(true || true); // true
    console.log(true || false); // true
    console.log(true || false || false); // true
    console.log(false || false); // false

    //AND(&&)
    console.log(true && true); // true
    console.log(true && false); // false
    console.log(false && false); // false
    console.log(false && true && true); // false
    console.log(true && true && true); // true 

