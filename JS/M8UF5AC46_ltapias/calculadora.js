function numero(num) {
    let inputDP = document.getElementById("display");
    inputDP.value = inputDP.value + num;
}
function calcular() {
    let inputDP = document.getElementById("display");
    inputDP.value = eval (inputDP.value);
}
function borrar() {
    document.getElementById("calcular").innerHTML = "";
}