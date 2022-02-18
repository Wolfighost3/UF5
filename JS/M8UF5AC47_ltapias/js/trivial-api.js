function Pasa(){
    window.location.replace("web/Trivial.htm")
        localStorage.setItem("nombre",document.querySelector('#nombre').value );
        localStorage.setItem("apellido",document.querySelector('#apellido').value );
}
function Nopasa(){
    window.location.replace("https://www.youtube.com/watch?v=UXujYNnPEsM")
}