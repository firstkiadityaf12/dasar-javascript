//while loop
    // --> adalah iterasi yang akan mengulang sebuah proses dengan sebuah kondisi tertentu.
    
    // While Looping 1
    console.log("-----While Loop 1-----");
    var flag = 1;
    while (flag < 10) { //loop akan berjalan selama nilai flag dibawah 10
        console.log('Iterasi ke-' + flag);
        flag++;
    }

    // Whie Looping 2 --> mengembalikan angka total
    console.log("-----While Loop 2-----");
    var deret = 5;
    var jumlah = 0;
    while (deret > 0) { // loop akan terus berjalan selama nilai deret masiih diatas 0
        jumlah += deret; // menambah nilai variabel jumlah dengan angka deret
        deret --; // mengubah nilai deret dan mengurangi 1
        console.log('Jumlah saat ini: ' + jumlah)
    }
    console.log(jumlah);

// For Loop -->  bentuk lain dari iterasi, dimana statement for menjadi kontrol atas loop yang dilakukan. Hal ini yang menjadi pembeda antara for-loop dengan while-loop.
    // For Loop 1
    console.log("-----For Loop 1-----");
    for (let angka = 0; angka < 10; angka++) {
        console.log('Iterasi ke-' + angka);
        
    }

    //For Loop 2
    console.log("-----For Loop 2-----");
    var jumlah = 0;
    for (var deret = 5; deret > 0; deret--) {
        jumlah += deret;
        console.log('Jumlah saat ini: ' + jumlah);  
    }
    console.log('Jumlah saat ini: ' + jumlah)

    // For Loop 3
    console.log("-----For Loop 3-----");
    for(var derett = 0; derett < 10; derett += 2) {
        console.log('Iterasi dengan Increment counter 2: ' + derett);
      }
      
      console.log('-------------------------------');
      
      for(var derett = 15; derett > 0; derett -= 3) {
        console.log('Iterasi dengan Decrement counter : ' + derett);
      }


