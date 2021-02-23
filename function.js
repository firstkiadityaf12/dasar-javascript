// Function --> sebuah blok kode yang disusun sedemikian rupa untuk menjalankan sebuah tindakan. Blok kode ini dibuat untuk dapat bisa digunakan kembali. Cara atau bentuk penulisan function adalah sebagai berikut:
    /** function nama_function(parameter 1, parameter 2, ...) {
        [Isi dari function berupa tindakan]
        return [expression];
    } */

    // Function Contoh 1 --> Function sederhana tanpa return
    function tampilkan() {
        console.log("halo!");
      }
       
      tampilkan(); 

    // Function 2 --> Function sederhana dengan return
    function munculkanAngkaDua() {
        return 2
      }
       
      var tampung = munculkanAngkaDua();
      console.log(tampung)

    // Function 3 --> Function dengan parameter
    function kalikanDua(angka) {
        return angka * 2
      }
       
      var tampung = kalikanDua(2);
      console.log(tampung)  

    // Function 4 --> Pengiriman parameter lebih dari satu
    function tampilkanAngka(angkaPertama, angkaKedua) {
        return angkaPertama + angkaKedua
      }
       
      console.log(tampilkanAngka(5, 3))

    // Function 5 --> Inisialisasi parameter dengan nilai default
    function tampilkanAngka(angka = 1) {
        return angka
      }
       
      console.log(tampilkanAngka(5)) // 5, sesuai dengan nilai parameter yang dikirim
      console.log(tampilkanAngka()) // 1, karena default dari parameter adalah 1

    // Function UNDEFINED
    var fungsiPerkalian = function(angkaPertama, angkaKedua) {
        return angkaPertama * angkaKedua
      }
       
      console.log(fungsiPerkalian(2, 4))