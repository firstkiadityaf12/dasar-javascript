var personArr = ["John","Doe","male", 27]
var personObj = {
    firstname : "Park Joo",
    lastname : "Hyun",
    gender : "female",
    age : 26
}

console.log(personArr[0])
console.log(personObj.firstname + personObj.lastname)


//Deklarasi objek
    //cara 1
    var object = {
        [key]: [value]
    }

    var car = {
        brand: "Ferrari",
        type: "Sports Car",
        price: 50000000,
        "horse power": 986
    }

    //cara 2
    var car2 = {}
    // meng-assign key:value dari object car2
    car2.brand = "Lamborghini"
    car2.brand = "Sports Car"
    car2.price = 100000000 

    car2["horse power"] = 730 

// mengakses Nilai pada objek
var motorcycle1 = {    
    brand: "Handa",
    type: "CUB",
    price: 1000
}
console.log(motorcycle1.brand) // "Handa"
console.log(motorcycle1.type) // "CUB"

console.log(motorcycle1["price"])
var array = [ 1, 2, 3 ] 
console.log(typeof array) // object


