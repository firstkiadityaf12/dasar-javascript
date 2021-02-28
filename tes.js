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

// Tugas 
console.log("=====Tugas=====")
async function wait() {
    try {
        const result = await doSomething();
        console.log(result);
    } catch (error) {
        console.log('Error!');
    }
}
function wait(){ doSomething().then(result=>{try{console.log(result); }catch(error){console.log('error'); } }); }

