const myinput = document.getElementById("myinput");
let current_value = 0;
function calc(x){
    current_value += Number(x);
    myinput.value = current_value;
}