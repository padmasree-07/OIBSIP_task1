//store data in outputscreen
const outputscreen = document.getElementById("output-screen");

//displayydata in putpuut screen
function display(num){
    outputscreen.value += num;
}

//function to calculate a eval
function calc(){
    document.getElementById("output-screen").value = eval(outputscreen.value);
}

//for cancel button
function cut(){
    let val =  outputscreen.value ;
    console.log(val);
    console.log(typeof(val));
    console.log(val.length);
    let ans = val.slice(0,val.length -1);
    console.log(ans);
    document.getElementById("output-screen") .value = ans;
}
// for clear function
function clear(){
    console.log(document.getElementById("output-screen").value);
    let val =  outputscreen.value;
    let ans = val.slice(0,0);
    console.log(ans);
    document.getElementById("output-screen").value = ' ';
}