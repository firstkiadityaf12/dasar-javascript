// link belajar https://sanbercode.com/dasbor/kelas_training/83/hari-7-javascript-es6/be5d3888-1ccb-49e3-88eb-0490ca36f61c

// let + cons
    // Normal javascript
    var x = 1;

    if ( x === 1) {
        var x = 2;
        console.log(x); //expected output: 2
    }
    console.log(x); //2

    // ES6
    let y = 1;

    if (y === 1) {
        let y = 2;

        console.log(y)
    }

    console.log(y)
    const number = 42;
    number = 100;


// Arrow Function
    //Normal javascript
    function appFunction (){
        // isi Function
        console.log("saya pertama")
    }
     
    appFunction();

    // ES6
    appFunction = () => {
        //isi function
    } 
    
    appFunction();


