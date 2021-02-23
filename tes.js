function myApp() {
    var total = 5;
    var output = "";
    for (let i = 0; i <= total; i++) {
        for(var j=1;j<=i;j++){
            output +=j + " "
        }
        console.log(output)
        output="";
    }
}

myApp()