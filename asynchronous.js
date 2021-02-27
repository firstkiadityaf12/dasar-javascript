// link : https://sanbercode.com/dasbor/kelas_training/83/hari-8-javascript-asynchronous/38fba234-8816-4e76-adf8-62fd1065650e

//asynchronus
setTimeout(function(){
    console.log("saya dijalankan belakangan")
}, 3000)
console.log("saya dijalankan pertama")

// callback
// => function yang dipanggil ketika function lain selesai menjalankan programnya.

// Deklarasi function yang memilik callback sebagai parameter
function periksaDokter(nomerAntri, callback) {
    if(nomerAntri > 50 ) {
        callback(false)
    } else if(nomerAntri < 10) {
        callback(true)
    }    
} 
// Function di atas menerima parameter nomer antri dan sebuah callback. Dilakukan pengecekan kondisi jika nomor antriannya lebih dari 50 maka lebih baik jalan-jalan dulu daripada menunggu, tapi jika nomor antriannya kurang dari 10 tentunya kita harus standby lagi di klinik untuk dipanggil.

// Menjalankan function periksaDokter yang sebelumnya sudah dideklarasi
periksaDokter(65, function(check) {
    if(check) {
        console.log("sebentar lagi giliran saya")
    } else {
        console.log("saya jalan-jalan dulu")
    }
}) 

// PROMISE => 

