// Javascript - Array
// --> kumpulan atau tumpukan berbagai data. Cara menuliskan array yaitu dengan kurung siku ([]) dan elemen-elemen nya dipisah menggunakan tanda koma (,). Setiap elemen dari array memiliki indeks yang dimulai dari 0, 1, 2, dst. Kita dapat memanipulasi array dengan berbagai cara seperti menambahkan dan mengeluarkan elemen dalam array, menggabungkan array, atau bahkan menghapus seluruh elemen Array nya. Kita bisa memasukkan beberapa tipe data yang berbeda ke dalam Array bahkan memasukkan Array ke dalam Array.

    // properti .length
        var hobbies = ["coding", "cycling", "climbing", "skateboarding"] 
        console.log(hobbies) // [ 'coding', 'cycling', 'climbing', 'skateboarding' ]
        console.log(hobbies.length) // 4 
        
        console.log(hobbies[0]) // coding
        console.log(hobbies[2]) // climbing
        // Mengakses elemen terakhir dari array
        console.log(hobbies[hobbies.length -1]) // skateboarding

// Cara menggunakan metode array adalah dengan menggunakan tanda dot (.) contohnya sbb:

var feeling = ["dag", "dig"]
feeling.push("dug") // menambahkan nilai "dug" ke index paling belakang
feeling.pop() // menghapus nilai pada elemen terakhir array

    // .push --> metode array untuk menambahkan nilai di belakang elemen terakhir di array. metode push menerima sebuah parameter yaitu nilai yang ingin kita tambahkan ke dalam array.
        var numbers = [0, 1, 2]
        numbers.push(3)
        console.log(numbers) // [0, 1, 2, 3]
        // Bisa juga memasukkan lebih dari satu nilai menggunakan metode push
        numbers.push(4, 5)
        console.log(numbers) // [0, 1, 2, 3, 4, 5] 

    // .pop() --> kebalikan dari push yaitu menghapus nilai elemen paling terakhir dari sebuah array. metode Pop tidak menerima parameter apapun sehingga metode pop hanya bisa mengeluarkan satu elemen saja yaitu yang paling terakhir dari sebuah array.
        var numbersq = [0, 1, 2, 3, 4, 5]
        numbersq.pop() 
        console.log(numbersq) // [0, 1, 2, 3, 4]

    // .unshift() --> Unshift yaitu menambahkan nilai pada index ke-0 sehingga elemen-elemen sebelumnya bergeser.
        var numbersw = [0, 1, 2, 3]
        numbersw.unshift(-1) 
        console.log(numbersw) // [-1, 0, 1, 2, 3]

    // .shift() --> Shift kebalikan dari unshift yaitu menghapus nilai pada elemen terdepan dari sebuah array. metode Shift tidak menerima parameter apapun.
        var numberse = [ 0, 1, 2, 3]
        numberse.shift()
        console.log(numberse) // [1, 2, 3] 

    // .sort() --> metode untuk mengurutkan nilai pada array. Secara otomatis, sort akan mengurutkan secara ascending (dari rendah ke tinggi) dan diurutkan berdasarkan unicode dari karakter. Urutan unicode artinya ada karakter yang secara nilai lebih besar dibandingkan dengan karakter yang lainnya. contohnya adalah karakter “b” akan lebih besar daripada “a”, karakter “c” lebih besar daripada karakter “b”, dst.
        var animalsr = ["kera", "gajah", "musang"] 
        animalsr.sort()
        console.log(animalsr) // ["gajah", "kera", "musang"]

        var numberst = [12, 1, 3]
        numberst.sort()
        console.log(numberst) // [1, 12, 3] 

        // ===array sort
        var numbersy = [12, 1, 3]
        // Mengurutkan secara Ascending
        numbersy.sort(function (value1, value2) { return value1 - value2 } ) ; 
        console.log(numbersy) // [1, 3, 12]
         
        // Mengurutkan secara Descending
        numbersy.sort(function (value1, value2) { return value2 - value1 } ) ;
        console.log(numbersy) // [12, 3, 1] 

    // .slice() --> metode untuk mengambil irisan dari sebuah array. Metode slice bisa menerima satu atau dua parameter. Parameter pertama adalah nomer index pertama yang akan kita ambil sebagai irisan, sedangkan parameter kedua adalah nomer index terakhir yang ingin kita ambil sebagai irisan.
        var angka = [0, 1, 2, 3]
        var irisan1 = angka.slice(1,3) 
        console.log(irisan1) //[1, 2, 3]
        var irisan2 = angka.slice(0,2)
        console.log(irisan2) //[0, 1, 2] 

        // if parameter kedua tidak diisi maka secara otomatis slice akan mengiris array dari indeks di paramer pertama sampai ke indeks terakhir array tersebut.
        var angkas = [0, 1, 2, 3]
        var irisan3 = angkas.slice(2)
        console.log(irisan3) // [2, 3]  

        /* Jika diperhatikan, metode slice tidak mengubah Array yang awal dan hasil irisan array dapat kita tampung kembali ke variable yang baru. Oleh karena itu metode Slice juga berfungsi untuk membuat salinan atau “shallow copy” dari sebuah array. Cara membuat shallow copy dengan metode slice yaitu dengan tanpa memberikan parameter apapun pada metode slice. */

        var angkak = [0, 1, 2, 3]
        var salinAngka = angkak.slice()
        console.log(salinAngka) // [0, 1, 2, 3]

    // .splice() --> metode untuk menghapus dan/atau menambahkan nilai elemen pada array.
    // struktur ==> array.splice([IndexMulai], [JumlahNilaiYangDihapus], [NilaiYangDitambahkan1], [NilaiYangDitambahkan2], ...);
        var fruits = [ "banana", "orange", "grape"]
        fruits.splice(1, 0, "watermelon") 
        console.log(fruits) // [ "banana", "watermelon", "orange", "grape"]

        //Contoh di atas berarti kita mulai mengubah array fruits dari indeks no 1, dan melakukan penghapusan nilai sebanyak 0 (yang berarti tidak menghapus apapun), dan menambahkan nilai “watermelon” pada indeks tersebut.

        var fruitss = [ "banana", "orange", "grape"]
        fruitss.splice(0, 2)
        console.log(fruitss) // ["grape"]

        //Contoh di atas berarti kita mulai mengubah array fruits dari indeks ke-0 dan melakukan penghapusan data sebanyak 2 elemen.

    // .split() dan .join() ==> Metode split yaitu memecah sebuah string sehingga menjadi sebuah array
        var biodata = "name:john,doe" 
        var name = biodata.split(":")
        console.log(name) // [ "name", "john,doe"] 

    // Metode join yaitu kebalikan dari split yaitu mengubah sebuah array menjadi string dengan cara menggabungkan (join) seluruh elemen array menjadi satu dengan sebuah karakter pemisah yang dikirim melalui parameter. contohnya sebagai berikut:

    var title = ["my", "first", "experience", "as", "programmer"] 
    var slug = title.join("-")
    console.log(slug) // "my-first-experience-as-programmer"

// Multidimensional Array
    // => adalah array yang berisi array di dalamnya. Jumlah dimensi bergantung seberapa dalam array tersebut memiliki array di dalamnya. Cara akses nilai dari array multidimensi sama seperti array satu dimensi seperti biasa namun jumlah indeksnya terdapat sebanyak dimensi nya.
    var arrayMulti = [ 
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    // Maka sebagai gambaran, indeks dari array tersebut adalah 
    /*
        [
            [(0,0), (0,1), (0,2)],
            [(1,0), (1,1), (1,2)],
            [(2,0), (2,1), (2,2)]
        ] 
    */
    console.log(arrayMulti[0][0]) // 1 
    console.log(arrayMulti[1][0]) // 4
    console.log(arrayMulti[2][1]) // 8



